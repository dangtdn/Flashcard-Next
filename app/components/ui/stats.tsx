"use client";

import { Card } from "./card";

interface StatsProps {
  totalCards: number;
  currentCard: number;
  correctAnswers: number;
  wrongAnswers: number;
}

export function Stats({
  totalCards,
  currentCard,
  correctAnswers,
  wrongAnswers,
}: StatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <Card className="p-4">
        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Progress
        </div>
        <div className="text-2xl font-bold">
          {currentCard} / {totalCards}
        </div>
      </Card>
      <Card className="p-4">
        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Correct
        </div>
        <div className="text-2xl font-bold text-green-600">
          {correctAnswers}
        </div>
      </Card>
      <Card className="p-4">
        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Wrong
        </div>
        <div className="text-2xl font-bold text-red-600">{wrongAnswers}</div>
      </Card>
      <Card className="p-4">
        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Accuracy
        </div>
        <div className="text-2xl font-bold">
          {totalCards > 0
            ? Math.round(
                (correctAnswers / (correctAnswers + wrongAnswers)) * 100
              ) || 0
            : 0}
          %
        </div>
      </Card>
    </div>
  );
}
