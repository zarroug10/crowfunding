import { Component } from '@angular/core';

interface Question {
  question: string;
  answer: string;
  showAnswer: boolean;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  basicQuestions: Question[] = [
    { question: 'What is our service?', answer: 'Our service provides...', showAnswer: false },
    { question: 'How to get started?', answer: 'To get started, follow these steps...', showAnswer: false },
   
  ];

  backerQuestions: Question[] = [
    { question: 'How to support a project?', answer: 'To support a project, you can...', showAnswer: false },
    { question: 'What happens if a project doesn\'t reach its goal?', answer: 'If a project doesn\'t reach its goal...', showAnswer: false },
  
  ];

  creatorQuestions: Question[] = [
    { question: 'How to create a project?', answer: 'To create a project, follow these steps...', showAnswer: false },
    { question: 'What fees apply to creators?', answer: 'Creators may be subject to fees such as...', showAnswer: false },
    
  
 
    { question: 'How to create a project?', answer: 'To create a project, follow these steps...', showAnswer: false },
    { question: 'What fees apply to creators?', answer: 'Creators may be subject to fees such as...', showAnswer: false },
    
 
    { question: 'How to create a project?', answer: 'To create a project, follow these steps...', showAnswer: false },
    { question: 'What fees apply to creators?', answer: 'Creators may be subject to fees such as...', showAnswer: false },
    
  ];

  currentQuestions: Question[] = this.basicQuestions;

  showBackerQuestions(): void {
    this.currentQuestions = this.backerQuestions;
  }

  showCreatorQuestions(): void {
    this.currentQuestions = this.creatorQuestions;
  }

  toggleAnswer(question: Question): void {
    question.showAnswer = !question.showAnswer;
  }
}
