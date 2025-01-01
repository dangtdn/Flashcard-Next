"use client";

import { Button } from "./button";
import { CheckCircle, XCircle } from "lucide-react";

interface ScoreButtonsProps {
  onCorrect: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onWrong: () => void;
}

export function ScoreButtons({ onCorrect, onWrong }: ScoreButtonsProps) {
  return (
    <div className="flex gap-4">
      <Button
        onClick={onCorrect}
        className="bg-green-500 hover:bg-green-600 text-white"
      >
        Correct
      </Button>
      <Button
        onClick={onWrong}
        className="bg-red-500 hover:bg-red-600 text-white"
      >
        Wrong
      </Button>
    </div>
  );
}
