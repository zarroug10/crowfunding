package com.example.Crowdfunding.Members;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MemberService {

    private final MemberRepository memberRepository;
  //  private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public MemberService(MemberRepository memberRepository, BCryptPasswordEncoder passwordEncoder) {
        this.memberRepository = memberRepository;
      //  this.passwordEncoder = passwordEncoder;
    }

    public Member createMember(Member member) {
        // Hash the password before saving
       // member.setPassword(passwordEncoder.encode(member.getPassword()));
        return memberRepository.save(member);
    }


    public List<Member> getAllMembers() {
        return memberRepository.findAll();
    }

    public Optional<Member> getMemberById(Long id) {
        if (id == null) {
            // Handle unauthenticated access, maybe throw an exception or return an appropriate response
            return Optional.empty();
        }
        return memberRepository.findById(id);
    }

    public Member findByEmail(String email) {
        return memberRepository.findByEmail(email);
    }

    public void deleteMember(Long id) {
        memberRepository.deleteById(id);
    }

    public void updateMember(Long id, Member member) {
        Member existingMember = memberRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException("Member not found"));
        // Update fields as needed
        existingMember.setEmail(member.getEmail());
        // ... update other fields
        memberRepository.save(existingMember);
    }

    //public Member loginMember(String email, String password) {
        // Find the member by email
      //  Member member = memberRepository.findByEmail(email);

        // Check if member exists and password matches
        //if (member != null && passwordEncoder.matches(password, member.getPassword())) {
            // Password matches, return the authenticated member
          //  return member;
        //}

        // Authentication failed
        //return null;
    //}
        public Member loginMember(String email, String password) {
            // In a real-world scenario, you would hash the password before querying the database
            return memberRepository.findByEmailAndPassword(email, password);
        }
}

