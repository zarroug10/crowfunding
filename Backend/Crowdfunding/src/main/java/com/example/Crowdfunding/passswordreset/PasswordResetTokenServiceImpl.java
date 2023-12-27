package com.example.Crowdfunding.passswordreset;

import com.example.Crowdfunding.Members.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.Date;
import java.util.UUID;

@Service
public class PasswordResetTokenServiceImpl implements PasswordResetTokenService {

    private static final int EXPIRATION = 60 * 24; // 24 hours
    private final PasswordResetTokenRepository passwordResetTokenRepository;
    private final JavaMailSender mailSender;

    @Autowired
    public PasswordResetTokenServiceImpl(
            PasswordResetTokenRepository passwordResetTokenRepository,
            JavaMailSender mailSender
    ) {
        this.passwordResetTokenRepository = passwordResetTokenRepository;
        this.mailSender = mailSender;
    }

    @Override
    public PasswordResetToken createToken(Member member) {
        String token = generateToken();
        PasswordResetToken resetToken = new PasswordResetToken();
        resetToken.setToken(token);
        resetToken.setMember(member);
        resetToken.setExpiryDate(calculateExpiryDate());
        passwordResetTokenRepository.save(resetToken);

        // Send email with reset token to the member's email address
        sendResetTokenEmail(member.getEmail(), token);

        return resetToken;
    }


    @Override
    public boolean validateToken(String token) {
        PasswordResetToken resetToken = passwordResetTokenRepository.findByToken(token);
        return resetToken != null && !isTokenExpired(resetToken);
    }

    @Override
    public void resetPassword(String token, String newPassword) {
        PasswordResetToken resetToken = passwordResetTokenRepository.findByToken(token);

        if (resetToken != null && !isTokenExpired(resetToken)) {
            // Update the member's password with the new password
            Member member = resetToken.getMember();
            member.setPassword(newPassword);

            // Save the updated member
            // memberRepository.save(member);

            // Optionally, you can invalidate the reset token after using it
            passwordResetTokenRepository.delete(resetToken);
        } else {
            // Handle invalid or expired token
            throw new RuntimeException("Invalid or expired token");
        }
    }

    private String generateToken() {
        // Implement your token generation logic here
        // For example, you can use UUID.randomUUID().toString()
        return UUID.randomUUID().toString();
    }

    private Date calculateExpiryDate() {
        Calendar cal = Calendar.getInstance();
        cal.setTime(new Date());
        cal.add(Calendar.MINUTE, EXPIRATION);
        return new Date(cal.getTime().getTime());
    }

    private boolean isTokenExpired(PasswordResetToken token) {
        return token.getExpiryDate().before(new Date());
    }

    private void sendResetTokenEmail(String recipientEmail, String token) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(recipientEmail); // Set the member's email address as the recipient
        message.setSubject("Password Reset Request");
        message.setText("To reset your password, click the link below:\n"
                + "http://your-app-url/reset-password?token=" + token);

        mailSender.send(message);
    }
}
