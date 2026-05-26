import { createHmac } from "crypto";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const DURATIONS = [
  { label: "1 hour",  ms: 1 * 60 * 60 * 1000 },
  { label: "4 hours", ms: 4 * 60 * 60 * 1000 },
  { label: "24 hours", ms: 24 * 60 * 60 * 1000 },
  { label: "7 days",  ms: 7 * 24 * 60 * 60 * 1000 },
];

async function generateLink(formData: FormData) {
  "use server";
  const durationMs = parseInt(formData.get("duration") as string, 10);
  const exp = Date.now() + durationMs;
  const payload = Buffer.from(JSON.stringify({ exp })).toString("base64url");
  const secret =
    process.env.CATALOGUE_TOKEN_SECRET ?? "dev-secret-change-in-production";
  const sig = createHmac("sha256", secret).update(payload).digest("hex");
  redirect(`/debgohere?t=${payload}.${sig}`);
}

type Props = { searchParams: Promise<{ t?: string }> };

export default async function DebGoHerePage({ searchParams }: Props) {
  const { t: rawToken } = await searchParams;

  let bookUrl: string | null = null;
  let expiresAt: string | null = null;

  if (rawToken) {
    try {
      const dot = rawToken.lastIndexOf(".");
      const encoded = rawToken.slice(0, dot);
      const { exp } = JSON.parse(
        Buffer.from(encoded, "base64url").toString("utf8")
      );
      const headersList = await headers();
      const host = headersList.get("host") ?? "localhost:3000";
      const proto = host.startsWith("localhost") ? "http" : "https";
      bookUrl = `${proto}://${host}/book?token=${rawToken}`;
      expiresAt = new Date(exp).toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
      });
    } catch {
      // malformed token in URL — ignore
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-8"
      style={{
        background:
          "radial-gradient(ellipse at 50% 25%, #1e1510 0%, #0a0806 100%)",
      }}
    >
      <div className="w-full max-w-lg space-y-8">
        {/* Header */}
        <div>
          <p className="text-white/30 text-[0.52rem] uppercase tracking-[0.4em]">
            Euro International
          </p>
          <h1 className="mt-2 text-white/75 text-[1rem] uppercase tracking-[0.22em]">
            Generate Catalogue Link
          </h1>
          <p className="mt-2 text-white/28 text-[0.62rem] leading-relaxed">
            Creates a time-limited signed URL for the flip-book catalogue.
          </p>
        </div>

        {/* Form */}
        <form action={generateLink} className="space-y-4">
          <div>
            <label className="block text-white/38 text-[0.54rem] uppercase tracking-[0.32em] mb-2">
              Link validity
            </label>
            <select
              name="duration"
              defaultValue={DURATIONS[2].ms}
              className="w-full bg-white/[0.06] border border-white/10 text-white/65 text-[0.7rem] uppercase tracking-[0.18em] px-4 py-3 outline-none focus:border-white/22 appearance-none"
            >
              {DURATIONS.map((d) => (
                <option key={d.ms} value={d.ms} className="bg-[#1a1008] text-white">
                  {d.label}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-white/8 hover:bg-white/14 border border-white/10 text-white/65 text-[0.64rem] uppercase tracking-[0.28em] px-5 py-3 transition-colors"
          >
            Generate Link
          </button>
        </form>

        {/* Result */}
        {bookUrl && (
          <div className="border border-white/10 bg-white/[0.04] p-5 space-y-4">
            <div className="flex items-start justify-between gap-4">
              <p className="text-white/38 text-[0.52rem] uppercase tracking-[0.32em]">
                Generated Link
              </p>
              {expiresAt && (
                <p className="text-white/24 text-[0.5rem] uppercase tracking-[0.2em] shrink-0">
                  Expires&nbsp;{expiresAt}
                </p>
              )}
            </div>
            <p className="text-white/50 text-[0.6rem] break-all leading-relaxed font-mono">
              {bookUrl}
            </p>
            <a
              href={bookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white/32 hover:text-white/55 text-[0.54rem] uppercase tracking-[0.28em] underline underline-offset-2 transition-colors"
            >
              Open catalogue →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
