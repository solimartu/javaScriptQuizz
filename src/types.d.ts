export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  code: string;
  userSelectedAnswer?: number;
  isCorrectUserAnswer?: boolean;
}
