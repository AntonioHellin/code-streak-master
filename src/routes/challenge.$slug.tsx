import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { challenges } from "@/data/challenges";
import { ArrowLeft, CheckCircle2, Play, RotateCcw, Star, Sparkles } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/challenge/$slug")({
  loader: ({ params }) => {
    const challenge = challenges.find((c) => c.slug === params.slug);
    if (!challenge) throw notFound();
    return { challenge };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.challenge.title} — AstroCode` },
          { name: "description", content: loaderData.challenge.description },
          { property: "og:title", content: `${loaderData.challenge.title} — AstroCode` },
          { property: "og:description", content: loaderData.challenge.description },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <AppShell>
      <div className="px-10 py-20 text-center">
        <h1 className="text-3xl font-display font-bold mb-3">Challenge not found</h1>
        <Link to="/" className="text-highlight hover:underline">
          ← Back to home
        </Link>
      </div>
    </AppShell>
  ),
  errorComponent: ({ error }) => (
    <AppShell>
      <div className="px-10 py-20 text-center">
        <h1 className="text-2xl font-display font-bold mb-2">Something went wrong</h1>
        <p className="text-muted-foreground">{error.message}</p>
      </div>
    </AppShell>
  ),
  component: ChallengeDetail,
});

const difficultyStyles = {
  Easy: "bg-success/15 text-success border-success/30",
  Medium: "bg-warning/15 text-warning border-warning/30",
  Hard: "bg-danger/15 text-danger border-danger/30",
} as const;

function ChallengeDetail() {
  const { challenge } = Route.useLoaderData();
  const [code, setCode] = useState(challenge.starterCode);
  const [output, setOutput] = useState<string | null>(null);

  const handleRun = () => {
    setOutput(
      `▶ Running tests...\n\n✓ Test 1 passed (input: ${challenge.examples[0].input})\n✓ Test 2 passed\n\nAll tests passed! +${challenge.points} pts`,
    );
  };

  return (
    <AppShell>
      <div className="px-6 md:px-10 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to challenges
        </Link>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left: problem */}
          <section className="rounded-2xl border border-border bg-card/60 p-6 md:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-4">
              <span
                className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${difficultyStyles[challenge.difficulty]}`}
              >
                {challenge.difficulty}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-highlight font-semibold">
                {challenge.category}
              </span>
              <span className="ml-auto flex items-center gap-1 text-xs font-mono text-highlight">
                <Star className="w-3.5 h-3.5 fill-highlight/40" />
                {challenge.points} pts
              </span>
            </div>

            <h1 className="text-3xl font-display font-bold mb-3">{challenge.title}</h1>
            <p className="text-foreground/80 leading-relaxed mb-6">{challenge.problem}</p>

            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-highlight" />
                Examples
              </h3>
              {challenge.examples.map((ex, i) => (
                <div
                  key={i}
                  className="rounded-lg bg-background/60 border border-border p-4 font-mono text-xs space-y-2"
                >
                  <div>
                    <span className="text-muted-foreground">Input: </span>
                    <span className="text-foreground">{ex.input}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Output: </span>
                    <span className="text-success">{ex.output}</span>
                  </div>
                  {ex.explanation && (
                    <div className="pt-2 border-t border-border">
                      <span className="text-muted-foreground">Explanation: </span>
                      <span className="text-foreground/80 font-sans text-xs">{ex.explanation}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-3">
                Constraints
              </h3>
              <ul className="space-y-1.5">
                {challenge.constraints.map((c, i) => (
                  <li key={i} className="text-sm text-foreground/80 flex gap-2">
                    <span className="text-highlight">•</span>
                    <code className="font-mono text-xs">{c}</code>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Right: editor */}
          <section className="flex flex-col gap-4">
            <div className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm overflow-hidden flex flex-col flex-1">
              <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-background/40">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-danger/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-warning/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-success/70" />
                  </div>
                  <span className="ml-2 text-xs font-mono text-muted-foreground">solution.js</span>
                </div>
                <button
                  onClick={() => setCode(challenge.starterCode)}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition"
                >
                  <RotateCcw className="w-3 h-3" />
                  Reset
                </button>
              </div>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                spellCheck={false}
                className="flex-1 min-h-[300px] w-full bg-transparent p-4 font-mono text-sm text-foreground outline-none resize-none"
              />
              <div className="flex items-center gap-3 px-4 py-3 border-t border-border bg-background/40">
                <button
                  onClick={handleRun}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-aurora text-primary-foreground text-sm font-semibold shadow-glow-primary hover:opacity-90 transition"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Run & Submit
                </button>
                <span className="text-xs text-muted-foreground">
                  Solving keeps your streak alive 🔥
                </span>
              </div>
            </div>

            {/* Output */}
            <div className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-4">
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-success" />
                Console
              </h3>
              <pre className="font-mono text-xs text-foreground/80 whitespace-pre-wrap min-h-[80px]">
                {output ?? "// Output will appear here after you run your code."}
              </pre>
            </div>
          </section>
        </div>
      </div>
    </AppShell>
  );
}
