"use client";

interface ScoreTrackerProps {
  correct: number;
  wrong: number;
}

export function ScoreTracker({ correct, wrong }: ScoreTrackerProps) {
  const total = correct + wrong;
  const correctPercentage = total > 0 ? Math.round((correct / total) * 100) : 0;

  return (
    <div className="flex items-center gap-4 text-sm">
      <div className="flex items-center gap-2">
        <span className="font-medium text-green-600">{correct}</span>
        <span className="text-muted-foreground">correct</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-medium text-red-600">{wrong}</span>
        <span className="text-muted-foreground">wrong</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-medium">{correctPercentage}%</span>
        <span className="text-muted-foreground">accuracy</span>
      </div>
    </div>
  );
}
