import Link from "next/link";
import { BookOpen, Sparkles, GraduationCap } from "lucide-react";

export default function Home() {
  return (
    <main className="md:pl-56 min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-blue-50 to-white dark:from-indigo-950 dark:via-purple-900 dark:to-slate-900">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-violet-600 text-transparent bg-clip-text animate-fade-in text-shadow text-glow">
            Japanese Flashcards
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in max-w-2xl mx-auto">
            Master Japanese characters through interactive learning. Choose your
            path and start your journey to fluency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Link
            href="/hiragana"
            className="group relative overflow-hidden rounded-xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl glass-card"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
                  Hiragana
                </h2>
              </div>
              <p className="text-muted-foreground">
                Basic Japanese phonetic alphabet used for native Japanese words.
                Perfect for beginners.
              </p>
              <Sparkles className="absolute top-4 right-4 w-4 h-4 text-blue-400 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>

          <Link
            href="/katakana"
            className="group relative overflow-hidden rounded-xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl glass-card"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 text-transparent bg-clip-text">
                  Katakana
                </h2>
              </div>
              <p className="text-muted-foreground">
                Phonetic alphabet used primarily for foreign words and names.
                Essential for modern Japanese.
              </p>
              <Sparkles className="absolute top-4 right-4 w-4 h-4 text-purple-400 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>

          <Link
            href="/kanji"
            className="group relative overflow-hidden rounded-xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl glass-card"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                <h2 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">
                  Kanji
                </h2>
              </div>
              <p className="text-muted-foreground">
                Chinese characters used in Japanese writing system. Advance your
                Japanese proficiency.
              </p>
              <Sparkles className="absolute top-4 right-4 w-4 h-4 text-violet-400 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>
        </div>

        <div className="max-w-3xl mx-auto glass-effect rounded-xl p-8 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-violet-600 text-transparent bg-clip-text">
              How to Use
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                  1
                </div>
                <p className="text-muted-foreground">
                  Select a category (Hiragana, Katakana, or Kanji) to begin your
                  learning journey
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold">
                  2
                </div>
                <p className="text-muted-foreground">
                  Click on the cards to flip them and reveal the pronunciation
                  and meaning
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-violet-100 dark:bg-violet-900 flex items-center justify-center text-violet-600 dark:text-violet-400 font-bold">
                  3
                </div>
                <p className="text-muted-foreground">
                  Use the arrow buttons to navigate between cards and track your
                  progress
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold">
                  4
                </div>
                <p className="text-muted-foreground">
                  Click the Shuffle button to randomize the cards and test your
                  knowledge
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
