import { Link } from "@tanstack/react-router";
import { Check, Lock, Play, Star } from "lucide-react";
import type { Challenge } from "@/data/challenges";

const difficultyStyles: Record<Challenge["difficulty"], string> = {
  Easy: "bg-success/15 text-success border-success/30",
  Medium: "bg-warning/15 text-warning border-warning/30",
  Hard: "bg-danger/15 text-danger border-danger/30",
};

interface Props {
  challenge: Challenge;
}

export function ChallengeCard({ challenge }: Props) {
  const { completed, difficulty, points, title, description, slug, category } = challenge;

  if (completed) {
    return (
      <div className="relative group rounded-2xl border border-border bg-card/40 p-6 opacity-60 overflow-hidden">
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <span
            className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full border ${difficultyStyles[difficulty]} opacity-60`}
          >
            {difficulty}
          </span>
          <div className="w-7 h-7 rounded-full bg-success/20 flex items-center justify-center">
            <Check className="w-4 h-4 text-success" strokeWidth={3} />
          </div>
        </div>
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">
          {category}
        </p>
        <h3 className="text-lg font-display font-semibold mb-2 line-through decoration-muted-foreground/40">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-6 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
            <Star className="w-3.5 h-3.5" />
            {points} pts earned
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Lock className="w-3 h-3" /> Solved
          </span>
        </div>
      </div>
    );
  }

  return (
    <Link
      to="/challenge/$slug"
      params={{ slug }}
      className="relative group rounded-2xl border border-border hover:border-highlight/60 bg-card p-6 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-glow"
    >
      {/* glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-highlight/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="absolute top-4 right-4">
        <span
          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full border ${difficultyStyles[difficulty]}`}
        >
          {difficulty}
        </span>
      </div>

      <p className="text-[10px] uppercase tracking-wider text-highlight/80 mb-2 font-semibold">
        {category}
      </p>
      <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-gradient-aurora transition-all">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground mb-6 line-clamp-2">{description}</p>

      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-xs font-mono text-highlight font-semibold">
          <Star className="w-3.5 h-3.5 fill-highlight/40" />
          {points} pts
        </span>
        <div className="flex items-center gap-1.5 text-sm font-medium text-foreground/90 group-hover:text-highlight transition-colors">
          Solve
          <Play className="w-3.5 h-3.5 fill-current" />
        </div>
      </div>
    </Link>
  );
}
