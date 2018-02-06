import { Injectable } from '@angular/core';
import { Question } from "../modules/Question"

@Injectable()
export class DataService {
  questions:Question[];

  constructor() {
 /*
    this.questions = [
      {
        text:"what is your favorite color?",
        answer:'My favorite color is red',
        hide:true
      },
      {
        text:"what is your favorite number?",
        answer:'My favorite number is 770',
        hide:true
      },
      {
        text:"what is your favorite city?",
        answer:'My favorite city is tel-aviv',
        hide:true
      }
    ]
    */
   }
   getQuestion(){
     if(localStorage.getItem('questions') === null){
       this.questions = [];
     }else{
       this.questions = JSON.parse( localStorage.getItem('questions'));
     }
     return this.questions;
   }
   addQuestion(question:Question){
     this.questions.unshift(question);
    let questions;
      if(localStorage.getItem('questions') === null){
        questions = [];
        questions.unshift(question);
        localStorage.setItem('questions', JSON.stringify(questions));
      }else{
        questions = JSON.parse( localStorage.getItem('questions'));
        questions.unshift(question);
        localStorage.setItem('questions', JSON.stringify(questions));
      }
    
   }
   removeQuestion(question:Question){
     console.log(question);
    for(let i = 0 ; i< this.questions.length; i++){
      if (question === this.questions[i] ){
        this.questions = this.questions.splice(i,1);
        localStorage.setItem('questions', JSON.stringify(this.questions)) 
      }
    }
   }
}
