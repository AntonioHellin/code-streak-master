import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Home, Sparkles, Trophy, Settings, Flame, Bell } from "lucide-react";
import { currentUser, leaderboard } from "@/data/challenges";

const navItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/challenges", label: "Challenges", icon: Sparkles },
  { to: "/leaderboard", label: "Leaderboard", icon: Trophy },
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="flex min-h-dvh w-full text-foreground">
      {/* Left sidebar */}
      <aside className="hidden md:flex w-64 shrink-0 flex-col border-r border-border bg-sidebar/60 backdrop-blur-xl p-6">
        <Link to="/" className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-xl bg-gradient-aurora flex items-center justify-center text-lg font-bold text-primary-foreground shadow-glow-primary">
            A
          </div>
          <span className="font-display font-semibold text-lg tracking-tight">AstroCode</span>
        </Link>

        <nav className="flex-1">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              const Icon = item.icon;
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                      active
                        ? "bg-sidebar-accent text-foreground shadow-card"
                        : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Streak card */}
        <div className="mt-8 p-4 rounded-xl border border-border bg-surface-elevated/50">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Win Streak</span>
            <div className="flex items-center gap-1.5 text-streak font-mono font-bold">
              <Flame className="w-4 h-4 fill-streak/30" />
              <span>{currentUser.streak}</span>
            </div>
          </div>
          <div className="w-full bg-secondary rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-gradient-streak h-full rounded-full transition-all"
              style={{ width: `${Math.min((currentUser.streak / 30) * 100, 100)}%` }}
            />
          </div>
          <p className="mt-2 text-[11px] text-muted-foreground">
            {30 - currentUser.streak} days to your next badge
          </p>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-40 flex items-center justify-between px-6 md:px-10 py-5 border-b border-border bg-background/70 backdrop-blur-xl">
          <Link to="/" className="md:hidden flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-aurora flex items-center justify-center text-sm font-bold text-primary-foreground">
              A
            </div>
            <span className="font-display font-semibold">AstroCode</span>
          </Link>
          <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="w-4 h-4 text-highlight" />
            <span>Keep your streak alive — solve one challenge today.</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="md:hidden flex items-center gap-1.5 text-streak font-mono font-bold text-sm">
              <Flame className="w-4 h-4" />
              {currentUser.streak}
            </div>
            <button className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition">
              <Bell className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition hidden md:block">
              <Settings className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-3 pl-3 border-l border-border">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium leading-tight">{currentUser.name}</p>
                <p className="text-xs text-muted-foreground font-mono">{currentUser.points} pts</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-cosmic flex items-center justify-center text-sm font-bold text-primary-foreground shadow-glow-primary ring-2 ring-highlight/30">
                {currentUser.avatar}
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 min-w-0">{children}</main>
      </div>

      {/* Right leaderboard */}
      <aside className="hidden xl:flex w-80 shrink-0 flex-col border-l border-border bg-sidebar/60 backdrop-blur-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-display font-bold text-gradient-aurora">Celestial Ranks</h2>
          <Trophy className="w-5 h-5 text-highlight" />
        </div>
        <div className="space-y-1">
          {leaderboard.slice(0, 5).map((u) => (
            <div
              key={u.name}
              className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-sidebar-accent/60 transition"
            >
              <span
                className={`w-6 text-center font-mono text-sm ${
                  u.rank === 1
                    ? "text-streak font-bold"
                    : u.rank <= 3
                      ? "text-highlight"
                      : "text-muted-foreground"
                }`}
              >
                {u.rank.toString().padStart(2, "0")}
              </span>
              <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-sm font-semibold">
                {u.avatar}
              </div>
              <span className="flex-1 text-sm font-medium truncate">{u.name}</span>
              <span className="text-xs font-mono text-muted-foreground">
                {u.points.toLocaleString()}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 rounded-xl border border-highlight/30 bg-highlight/5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-full bg-gradient-cosmic flex items-center justify-center text-sm font-bold text-primary-foreground">
              {currentUser.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{currentUser.name}</p>
              <p className="text-xs text-muted-foreground font-mono">Rank #12</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            <span className="text-highlight font-semibold">+340 pts</span> to climb to top 10
          </p>
        </div>

        <div className="mt-auto pt-6">
          <Link
            to="/leaderboard"
            className="block text-center text-sm text-highlight hover:underline font-medium"
          >
            View full leaderboard →
          </Link>
        </div>
      </aside>
    </div>
  );
}
