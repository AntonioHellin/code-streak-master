import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { ChallengeCard } from "@/components/ChallengeCard";
import { challenges, currentUser } from "@/data/challenges";
import { Flame, Target, Trophy, Zap } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AstroCode — Learn to code by solving algorithm challenges" },
      {
        name: "description",
        content:
          "Build a daily coding habit. Solve real algorithm challenges, keep your win streak alive, and climb the celestial leaderboard.",
      },
      { property: "og:title", content: "AstroCode — Learn to code daily" },
      {
        property: "og:description",
        content: "Daily algorithm challenges, win streaks, and a global leaderboard.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const completedCount = challenges.filter((c) => c.completed).length;
  const availableCount = challenges.length - completedCount;

  return (
    <AppShell>
      <div className="px-6 md:px-10 py-10">
        {/* Hero */}
        <section className="mb-10">
          <p className="text-sm uppercase tracking-widest text-highlight font-semibold mb-3">
            Welcome back, {currentUser.name.split(" ")[0]}
          </p>
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-3">
            Discover your next <span className="text-gradient-aurora">algorithm</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Sharpen your skills one challenge at a time. Each solve adds to your streak and pushes
            you up the constellations.
          </p>

          {/* Stat row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <StatCard
              icon={<Flame className="w-5 h-5" />}
              label="Win Streak"
              value={`${currentUser.streak} days`}
              accent="streak"
            />
            <StatCard
              icon={<Target className="w-5 h-5" />}
              label="Solved"
              value={`${completedCount}/${challenges.length}`}
              accent="success"
            />
            <StatCard
              icon={<Zap className="w-5 h-5" />}
              label="Available"
              value={`${availableCount}`}
              accent="highlight"
            />
            <StatCard
              icon={<Trophy className="w-5 h-5" />}
              label="Total Points"
              value={currentUser.points.toLocaleString()}
              accent="primary"
            />
          </div>
        </section>

        {/* Grid */}
        <section>
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-2xl font-display font-bold">Programming Challenges</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Completed challenges are locked. Tap any open card to start solving.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-success" /> Easy
              <span className="w-2 h-2 rounded-full bg-warning ml-3" /> Medium
              <span className="w-2 h-2 rounded-full bg-danger ml-3" /> Hard
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {challenges.map((c) => (
              <ChallengeCard key={c.slug} challenge={c} />
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}

function StatCard({
  icon,
  label,
  value,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  accent: "streak" | "success" | "highlight" | "primary";
}) {
  const accentMap = {
    streak: "text-streak bg-streak/10",
    success: "text-success bg-success/10",
    highlight: "text-highlight bg-highlight/10",
    primary: "text-primary bg-primary/10",
  };
  return (
    <div className="rounded-xl border border-border bg-card/60 p-4 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center ${accentMap[accent]}`}
        >
          {icon}
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</p>
          <p className="text-lg font-display font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
}
