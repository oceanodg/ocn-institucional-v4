"use client";

import { useState } from "react";
import type { Quiz, QuizResultRange } from "~/server/types";
import { Check, X, ArrowRight, Play } from "lucide-react";

export interface QuizzesProps {
  quiz: Quiz;
}

type QuizState = "intro" | "questions" | "result";

export function Quizzes(props: QuizzesProps) {
  const { quiz } = props;

  const [state, setState] = useState<QuizState>("intro");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const totalQuestions = quiz.questions.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  const currentQuestion = quiz.questions[currentQuestionIndex];

  const handleStart = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setState("questions");
  };

  const handleAnswer = (optionIndex: number) => {
    if (showExplanation) return;

    setSelectedOption(optionIndex);
    setShowExplanation(true);
    setAnswers([...answers, optionIndex]);
  };

  const handleNext = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setState("result");
    }
  };

  const calculateScore = () => {
    const correctCount = answers.filter((answer, index) => {
      const question = quiz.questions[index];
      return answer === question.correctIndex;
    }).length;
    return correctCount;
  };

  const getResultRange = (score: number): QuizResultRange | undefined => {
    return quiz.resultRanges.find(
      (range) => score >= range.min && score <= range.max
    );
  };

  const getMaxScore = () => {
    return quiz.questions.reduce((max, q) => max + q.weight, 0);
  };

  if (state === "intro") {
    return (
      <div className="min-h-screen lg:mt-20">
        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video relative">
              <img
                src={`/images/quizzes/${quiz.id}-1.png`}
                alt={quiz.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h1 className="text-3xl font-semibold text-white mb-2 leading-7">
                  {quiz.title}
                </h1>
              </div>
            </div>

            <div className="p-8">
              <p className="text-gray-600 text-lg mb-8 leading-5">
                {quiz.description}
              </p>

              <button
                onClick={handleStart}
                className="w-full bg-black hover:bg-black/80 text-white font-normal sm:font-medium py-4 px-6 rounded-sm transition-colors flex items-center justify-center gap-2 hover:cursor-pointer"
              >
                <Play className="w-5 h-5" />
                Começar Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (state === "questions") {
    const isCorrect = selectedOption === currentQuestion.correctIndex;

    return (
      <div className="min-h-screen">
        {/* Progress Bar */}
        <div className="fixed top-0 left-0 right-0 h-2 bg-gray-200">
          <div
            className="h-full bg-black transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="max-w-2xl mx-auto px-4 py-12">
          {/* Question Header */}
          <div className="mb-8">
            <p className="text-sm text-gray-500 mb-2">
              Pergunta {currentQuestionIndex + 1} de {totalQuestions}
            </p>
            <h2 className="text-2xl font-bold text-gray-900">
              {currentQuestion.question}
            </h2>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-8">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedOption === index;
              const isCorrectOption = index === currentQuestion.correctIndex;
              const showCorrect = showExplanation && isCorrectOption;
              const showWrong =
                showExplanation && isSelected && !isCorrectOption;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={showExplanation}
                  className={`w-full text-left p-4 rounded-sm border-2 transition-all flex items-center gap-3 ${
                    showCorrect
                      ? "border-green-500 bg-green-50"
                      : showWrong
                        ? "border-red-500 bg-red-50"
                        : isSelected
                          ? "border-blue-500 bg-blue-50"
                          : showExplanation
                            ? "border-gray-200"
                            : "border-gray-200 hover:border-gray-300 hover:bg-gray-50 hover:cursor-pointer"
                  }`}
                >
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      showCorrect
                        ? "bg-green-500 text-white"
                        : showWrong
                          ? "bg-red-500 text-white"
                          : isSelected
                            ? "bg-blue-500 text-white"
                            : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {showCorrect ? (
                      <Check className="w-4 h-4" />
                    ) : showWrong ? (
                      <X className="w-4 h-4" />
                    ) : (
                      String.fromCharCode(65 + index)
                    )}
                  </span>
                  <span className="flex-1">{option}</span>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div
              className={`p-4 rounded-sm mb-6 ${
                isCorrect
                  ? "bg-green-50 border border-green-200"
                  : "bg-amber-50 border border-amber-200"
              }`}
            >
              <p
                className={`font-medium mb-1 ${isCorrect ? "text-green-700" : "text-amber-700"}`}
              >
                {isCorrect ? "Correto!" : "Não exatamente..."}
              </p>
              <p className="text-gray-700">{currentQuestion.explanation}</p>
            </div>
          )}

          {/* Next Button */}
          {showExplanation && (
            <button
              onClick={handleNext}
              className="w-full bg-black hover:bg-black/80 text-white font-semibold py-4 px-6 rounded-sm transition-colors flex items-center justify-center gap-2 hover:cursor-pointer"
            >
              {currentQuestionIndex < totalQuestions - 1
                ? "Próxima Pergunta"
                : "Ver Resultado"}
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    );
  }

  // Result State
  const score = calculateScore();
  const resultRange = getResultRange(score);

  return (
    <div className="min-h-screen">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Result Header */}
          <div className="bg-black p-8 text-center">
            <h2 className="text-2xl font-medium text-white mb-2 leading-7">
              Resultado: {resultRange?.title ?? "Resultado"}
            </h2>
            <p className="text-blue-100">
              Você acertou {score} de {totalQuestions} perguntas.
            </p>
          </div>

          {/* Message */}
          <div className="p-8">
            {/* Video */}
            {quiz.videoUrl && (
              <div className="mb-8">
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full rounded-lg"
                    src={`https://www.youtube.com/embed/${quiz.videoUrl}`}
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            {/* CTA */}
            {resultRange?.cta && (
              <div className="mt-10">
                <p className="text-gray-600 text-lg mb-6 italic">
                  {resultRange?.message}
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {resultRange.cta.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {resultRange.cta.description}
                </p>

                <div className="border-t mt-5 pt-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Escola Bíblica
                  </h3>
                  <p className="text-gray-600">
                    Igreja Oceano da Graça – Águas Claras
                  </p>
                  <p className="text-gray-600">Domingo, 09:00</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
