import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { leaderboard } from "@/data/challenges";
import { Trophy } from "lucide-react";

export const Route = createFileRoute("/leaderboard")({
  head: () => ({
    meta: [
      { title: "Leaderboard — AstroCode" },
      { name: "description", content: "See the top coders climbing the AstroCode constellations." },
    ],
  }),
  component: LeaderboardPage,
});

function LeaderboardPage() {
  return (
    <AppShell>
      <div className="px-6 md:px-10 py-10">
        <div className="flex items-center gap-3 mb-2">
          <Trophy className="w-6 h-6 text-highlight" />
          <h1 className="text-3xl font-display font-bold text-gradient-aurora">Celestial Ranks</h1>
        </div>
        <p className="text-muted-foreground mb-8">
          Top coders this season — keep solving to climb.
        </p>

        <div className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm overflow-hidden">
          <div className="grid grid-cols-[60px_1fr_120px] md:grid-cols-[80px_1fr_160px_120px] px-6 py-3 text-[11px] uppercase tracking-wider text-muted-foreground border-b border-border bg-background/40 font-semibold">
            <span>Rank</span>
            <span>Coder</span>
            <span className="hidden md:block">Streak</span>
            <span className="text-right">Points</span>
          </div>
          {leaderboard.map((u) => (
            <div
              key={u.name}
              className={`grid grid-cols-[60px_1fr_120px] md:grid-cols-[80px_1fr_160px_120px] items-center px-6 py-4 border-b border-border last:border-0 transition ${
                u.isYou ? "bg-highlight/5" : "hover:bg-secondary/30"
              }`}
            >
              <span
                className={`font-mono font-bold ${
                  u.rank === 1 ? "text-streak" : u.rank <= 3 ? "text-highlight" : "text-muted-foreground"
                }`}
              >
                #{u.rank}
              </span>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-cosmic flex items-center justify-center text-sm font-bold text-primary-foreground">
                  {u.avatar}
                </div>
                <span className="font-medium">{u.name}</span>
                {u.isYou && (
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-highlight/20 text-highlight">
                    You
                  </span>
                )}
              </div>
              <span className="hidden md:block text-sm text-muted-foreground font-mono">
                🔥 {Math.floor(u.points / 1000)}d
              </span>
              <span className="text-right font-mono font-semibold text-highlight">
                {u.points.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
