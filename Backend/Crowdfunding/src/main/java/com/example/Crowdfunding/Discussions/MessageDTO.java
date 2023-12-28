package com.example.Crowdfunding.Discussions;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class MessageDTO {
    private Long memberId;
    private String messageText;
}