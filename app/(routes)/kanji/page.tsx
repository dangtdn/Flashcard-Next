"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScoreButtons } from "@/components/ui/score-buttons";
import { ScoreTracker } from "@/components/ui/score-tracker";
import { kanji } from "@/lib/kanji";
import { Shuffle, Sparkles } from "lucide-react";
import { KanjiCard } from "@/lib/kanji";
import type { CarouselApi } from "@/components/ui/carousel";

const CONFETTI_COLORS = [
  "#FF6B6B", // Coral
  "#4ECDC4", // Turquoise
  "#45B7D1", // Sky Blue
  "#96CEB4", // Mint
  "#FFEEAD", // Cream
  "#FFD93D", // Yellow
  "#FF9999", // Pink
  "#95E1D3", // Seafoam
];

const PARTICLE_COLORS = [
  "rgba(255, 107, 107, 0.4)", // Coral
  "rgba(78, 205, 196, 0.4)", // Turquoise
  "rgba(69, 183, 209, 0.4)", // Sky Blue
  "rgba(150, 206, 180, 0.4)", // Mint
];

export default function KanjiPage() {
  const [cards, setCards] = useState<KanjiCard[]>(kanji);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [flipped, setFlipped] = useState<{ [key: number]: boolean }>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [confetti, setConfetti] = useState<
    Array<{
      id: number;
      color: string;
      left: number;
      size: number;
      rotation: number;
    }>
  >([]);
  const [cardRotation, setCardRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const flipSoundRef = useRef<HTMLAudioElement | null>(null);
  const correctSoundRef = useRef<HTMLAudioElement | null>(null);
  const wrongSoundRef = useRef<HTMLAudioElement | null>(null);
  const [burstParticles, setBurstParticles] = useState<
    Array<{ id: number; x: number; y: number }>
  >([]);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    flipSoundRef.current = new Audio("/sounds/flip.mp3");
    correctSoundRef.current = new Audio("/sounds/correct.mp3");
    wrongSoundRef.current = new Audio("/sounds/wrong.mp3");
  }, []);

  // Particle effect with more variety
  useEffect(() => {
    const particles = Array.from({ length: 30 }).map((_, i) => {
      const particle = document.createElement("div");
      particle.className = "particle";
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.color = PARTICLE_COLORS[i % PARTICLE_COLORS.length];
      particle.style.setProperty("--tx", `${Math.random() * 300 - 150}px`);
      particle.style.setProperty("--ty", `${Math.random() * 300 - 150}px`);
      particle.style.setProperty("--rotation", `${Math.random() * 360}deg`);
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      document.querySelector(".particles-container")?.appendChild(particle);
      return particle;
    });

    return () => {
      particles.forEach((particle) => particle.remove());
    };
  }, []);

  const createConfetti = () => {
    const newConfetti = Array.from({ length: 60 }).map((_, i) => ({
      id: Date.now() + i,
      color:
        CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      left: Math.random() * 100,
      size: Math.random() * 8 + 4,
      rotation: Math.random() * 360,
    }));
    setConfetti(newConfetti);
    setTimeout(() => setConfetti([]), 2000);
  };

  const playSound = (ref: React.RefObject<HTMLAudioElement | null>) => {
    if (ref.current) {
      ref.current.currentTime = 0;
      ref.current.play().catch(() => {});
    }
  };

  const shuffleCards = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setFlipped({});
  };

  const createParticleBurst = (x: number, y: number) => {
    const particles = Array.from({ length: 12 }).map((_, i) => ({
      id: Date.now() + i,
      x,
      y,
    }));
    setBurstParticles(particles);
    setTimeout(() => setBurstParticles([]), 1000);
  };

  const handleCorrect = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCorrect((prev) => prev + 1);
    createConfetti();
    createParticleBurst(e.clientX, e.clientY);
    playSound(correctSoundRef);
  };

  const handleWrong = () => {
    setWrong((prev) => prev + 1);
    playSound(wrongSoundRef);
    const cardElement = cardRef.current;
    if (cardElement) {
      cardElement.classList.add("shake");
      setTimeout(() => cardElement.classList.remove("shake"), 500);
    }
  };

  const toggleFlip = (id: number) => {
    playSound(flipSoundRef);
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((centerX - x) / centerX) * 10;
    setCardRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setCardRotation({ x: 0, y: 0 });
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-blue-50 to-white dark:from-indigo-950 dark:via-purple-900 dark:to-slate-900">
      <div className="absolute inset-0 overflow-hidden pointer-events-none particles-container">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 animate-spin-slow" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-violet-500/20 to-blue-500/20 animate-spin-slow" />
      </div>

      {confetti.map(({ id, color, left, size, rotation }) => (
        <div
          key={id}
          className="fixed top-0 animate-confetti"
          style={{
            left: `${left}%`,
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: color,
            borderRadius: "50%",
            transform: `rotate(${rotation}deg)`,
          }}
        />
      ))}

      {burstParticles.map(({ id, x, y }) => (
        <div
          key={id}
          className="particle-burst"
          style={{
            left: x,
            top: y,
            width: "4px",
            height: "4px",
            background:
              PARTICLE_COLORS[
                Math.floor(Math.random() * PARTICLE_COLORS.length)
              ],
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}

      <div className="container relative py-10 px-4">
        <div className="flex flex-col items-center gap-8">
          <div className="space-y-2 text-center">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-violet-600 text-transparent bg-clip-text animate-fade-in text-shadow text-glow">
              Kanji Flashcards
            </h1>
            <p className="text-muted-foreground animate-fade-in">
              Master Japanese characters with interactive flashcards
            </p>
          </div>

          <div className="w-full max-w-lg p-4 glass-effect rounded-lg animate-fade-in">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <ScoreTracker correct={correct} wrong={wrong} />
              <Button
                onClick={shuffleCards}
                variant="outline"
                className="flex items-center gap-2 hover:scale-105 transition-all duration-300 hover:shadow-lg glass-effect animate-pulse-glow group"
              >
                <Shuffle className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                <span className="relative">
                  Shuffle Cards
                  <Sparkles className="w-3 h-3 absolute -top-1 -right-2 text-blue-400 animate-pulse" />
                </span>
              </Button>
            </div>
            <div className="mt-4 h-1 rounded-full overflow-hidden">
              <div
                className="h-full progress-bar animate-progress"
                style={{
                  width: `${((currentIndex + 1) / cards.length) * 100}%`,
                }}
              />
            </div>
          </div>

          <Carousel setApi={setApi} className="w-full max-w-lg">
            <CarouselContent>
              {cards.map((card, index) => (
                <CarouselItem key={card.id}>
                  <div
                    ref={cardRef}
                    className="cursor-pointer p-4 animate-scale"
                    onClick={() => toggleFlip(card.id)}
                  >
                    <div className="relative w-full h-[400px]">
                      {/* Front of card */}
                      <div
                        className={`absolute inset-0 w-full h-full transition-all duration-500 ${
                          flipped[card.id]
                            ? "opacity-0 rotate-y-180"
                            : "opacity-100 rotate-y-0"
                        }`}
                      >
                        <Card className="p-8 glass-card h-full">
                          <div className="flex flex-col items-center gap-6">
                            <div className="text-9xl font-bold bg-gradient-to-br from-blue-600 via-purple-500 to-violet-600 text-transparent bg-clip-text animate-float-shadow text-glow">
                              {card.character}
                            </div>
                            <div className="text-sm text-muted-foreground animate-pulse flex items-center gap-2">
                              <Sparkles className="w-4 h-4" />
                              Click to reveal
                              <Sparkles className="w-4 h-4" />
                            </div>
                          </div>
                        </Card>
                      </div>

                      {/* Back of card */}
                      <div
                        className={`absolute inset-0 w-full h-full transition-all duration-500 ${
                          flipped[card.id]
                            ? "opacity-100 rotate-y-0"
                            : "opacity-0 rotate-y-180"
                        }`}
                        style={{
                          transform: flipped[card.id]
                            ? "perspective(1000px) rotateY(0deg)"
                            : "perspective(1000px) rotateY(180deg)",
                          transformStyle: "preserve-3d",
                          backfaceVisibility: "hidden",
                        }}
                      >
                        <Card className="p-8 glass-card h-full">
                          <div className="flex flex-col items-center gap-6">
                            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-violet-600 text-transparent bg-clip-text text-glow">
                              {card.vietnamese}
                            </div>
                            <div className="text-lg text-center space-y-2">
                              <div className="font-medium bg-gradient-to-r from-blue-600 via-purple-500 to-violet-600 text-transparent bg-clip-text animate-shine">
                                {card.example}
                              </div>
                              <div className="text-muted-foreground">
                                {card.meaning}
                              </div>
                            </div>
                            <ScoreButtons
                              onCorrect={handleCorrect}
                              onWrong={handleWrong}
                            />
                          </div>
                        </Card>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hover:scale-110 transition-transform glass-effect -translate-x-4" />
            <CarouselNext className="hover:scale-110 transition-transform glass-effect translate-x-4" />
          </Carousel>

          <div className="text-sm text-muted-foreground animate-fade-in glass-effect px-4 py-2 rounded-full">
            Card {currentIndex + 1} of {cards.length}
          </div>
        </div>
      </div>
    </div>
  );
}
