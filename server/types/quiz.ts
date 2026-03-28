export type QuizOption = {
  id: number;
  difficulty: string;
  weight: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export type QuizCTA = {
  title: string;
  description: string;
  buttonText: string;
  link: string;
};

export type QuizResultRange = {
  min: number;
  max: number;
  title: string;
  message: string;
  cta: QuizCTA;
};

export type Quiz = {
  id: string;
  title: string;
  description: string;
  questions: QuizOption[];
  resultRanges: QuizResultRange[];
  videoUrl: string;
};