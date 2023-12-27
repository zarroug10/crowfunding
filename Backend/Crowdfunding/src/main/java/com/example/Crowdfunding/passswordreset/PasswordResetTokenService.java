package com.example.Crowdfunding.passswordreset;

import com.example.Crowdfunding.Members.Member;


public interface PasswordResetTokenService {
    PasswordResetToken createToken(Member member);

    boolean validateToken(String token);

    void resetPassword(String token, String newPassword);
}
