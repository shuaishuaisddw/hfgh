// quiz.js - 题库控制模块
import { choiceQuestions } from './quiz_questions.js';

export class QuizManager {
  constructor() {
    this.questions = [...choiceQuestions];
    this.currentIndex = 0;
    this.mistakes = [];
    this.shuffle();
  }

  shuffle() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
    }
  }

  getCurrentQuestion() {
    return this.questions[this.currentIndex];
  }

  submitAnswer(answer) {
    const current = this.getCurrentQuestion();
    const correct = current.answer;
    const isCorrect = answer === correct;
    if (!isCorrect) this.mistakes.push(current);
    this.currentIndex++;
    return isCorrect;
  }

  isFinished() {
    return this.currentIndex >= this.questions.length;
  }

  reset() {
    this.currentIndex = 0;
    this.mistakes = [];
    this.shuffle();
  }

  getMistakes() {
    return this.mistakes;
  }
}
