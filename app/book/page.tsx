import type { Metadata } from "next";
import { createHmac } from "crypto";
import FlipBookViewer from "./FlipBook";

export const metadata: Metadata = {
  title: "Catalogue Book — Euro International",
  description:
    "Browse the Euro International leather goods catalogue as a magazine flip book.",
};

type TokenStatus = "valid" | "expired" | "invalid";

function verifyToken(token: string): TokenStatus {
  try {
    const dot = token.lastIndexOf(".");
    if (dot === -1) return "invalid";
    const encoded = token.slice(0, dot);
    const sig = token.slice(dot + 1);
    const secret =
      process.env.CATALOGUE_TOKEN_SECRET ?? "dev-secret-change-in-production";
    const expected = createHmac("sha256", secret).update(encoded).digest("hex");
    if (sig !== expected) return "invalid";
    const { exp } = JSON.parse(
      Buffer.from(encoded, "base64url").toString("utf8")
    );
    if (typeof exp !== "number" || Date.now() > exp) return "expired";
    return "valid";
  } catch {
    return "invalid";
  }
}

type Props = { searchParams: Promise<{ token?: string }> };

export default async function BookPage({ searchParams }: Props) {
  const { token } = await searchParams;
  const status = token ? verifyToken(token) : "invalid";

  if (status === "valid") {
    return (
      <div className="w-screen h-screen overflow-hidden">
        <FlipBookViewer />
      </div>
    );
  }

  return (
    <div
      className="w-screen h-screen flex items-center justify-center"
      style={{
        background:
          "radial-gradient(ellipse at 50% 25%, #1e1510 0%, #0a0806 100%)",
      }}
    >
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <p className="text-white/25 text-[0.5rem] uppercase tracking-[0.4em]">
            Euro International
          </p>
          <p className="text-white/60 text-[0.72rem] uppercase tracking-[0.28em]">
            {status === "expired" ? "Access Link Expired" : "Invalid Access Link"}
          </p>
        </div>
        <div className="h-px w-24 mx-auto bg-white/10" />
        <p className="text-white/28 text-[0.58rem] uppercase tracking-[0.24em] leading-loose">
          {status === "expired"
            ? "This catalogue link has expired."
            : "This catalogue link is not valid."}
          <br />
          Please request a new link.
        </p>
      </div>
    </div>
  );
}
