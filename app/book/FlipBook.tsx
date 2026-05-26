"use client";

import { useRef, useState, useEffect, forwardRef, useCallback, createContext, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bodoni_Moda } from "next/font/google";
import dynamic from "next/dynamic";
import {
  images,
  aboutPage,
  summarySections,
  productCollections,
  type ProductPage,
  type ProductCategory,
} from "./data";

const HTMLFlipBook = dynamic(() => import("react-pageflip"), { ssr: false });

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

// Full A4 at 96 dpi — content always renders at this size, then scales to fit
const A4_W = 794;
const A4_H = 1123;

// Scale provided by FlipBookViewer so Page wrappers can apply transform
const ScaleCtx = createContext(1);

// ─── Utility ────────────────────────────────────────────────────────────────

function TinySquares() {
  return (
    <div className="flex items-center gap-1">
      <span className="h-1.5 w-1.5 bg-black" />
      <span className="h-1.5 w-1.5 bg-black/35" />
      <span className="h-1.5 w-1.5 bg-black/15" />
    </div>
  );
}

// ─── Page shell (fills 100% of flip book page container) ────────────────────

function BookPageShell({
  page,
  bg = "#ffffff",
  children,
}: {
  page: number;
  bg?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className="relative overflow-hidden px-[1.6rem] py-[1.2rem] text-[#111]"
      style={{ backgroundColor: bg, width: A4_W, height: A4_H, flexShrink: 0 }}
    >
      <div className="flex items-center justify-between text-[0.72rem] uppercase tracking-[0.28em] text-black/55">
        <span>EURO INTERNATIONAL</span>
        <span>catalogue</span>
      </div>
      <div className="mt-3 h-px bg-black/10" />
      <div className="relative h-[calc(100%-3.5rem)]">{children}</div>
      <div className="absolute inset-x-[1.6rem] bottom-[1rem] flex items-center justify-between text-[0.72rem] uppercase tracking-[0.28em] text-black/50">
        <span>2025 / 2026</span>
        <span>{String(page).padStart(2, "0")}</span>
      </div>
    </section>
  );
}

function EditorialImage({
  src,
  alt,
  label,
  position = "center center",
  ratio = "square",
}: {
  src: string;
  alt: string;
  label: string;
  position?: string;
  ratio?: "square" | "portrait" | "wide";
}) {
  const frameRatio =
    ratio === "portrait"
      ? "aspect-[4/5]"
      : ratio === "wide"
        ? "aspect-[16/10]"
        : "aspect-square";

  return (
    <div className="relative">
      <div className={`relative overflow-hidden bg-[#f1f1f1] ${frameRatio}`}>
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized
          sizes="(max-width: 900px) 100vw, 50vw"
          className="object-cover"
          style={{ objectPosition: position }}
        />
        <div className="pointer-events-none absolute inset-0 border border-black/5" />
        <div className="absolute bottom-3 left-3 flex items-center gap-3">
          <div className="h-1 bg-white/90 w-12" />
          <TinySquares />
        </div>
        <p
          className="absolute bottom-3 right-3 text-[0.58rem] uppercase tracking-[0.24em] text-black/55"
          style={{ writingMode: "vertical-rl" }}
        >
          {label}
        </p>
      </div>
    </div>
  );
}

// ─── Catalogue page components ───────────────────────────────────────────────

function CoverPage() {
  return (
    <BookPageShell page={1}>
      <div className="grid h-full grid-cols-[58%_1fr] gap-5 px-[8%] pb-8 pt-4">
        <div className="relative overflow-hidden bg-[#f2f2f0]">
          <Image
            src={images.cover}
            alt="EURO INTERNATIONAL"
            fill
            unoptimized
            sizes="210mm"
            className="object-cover"
            style={{ objectPosition: "center 30%" }}
          />
        </div>
        <div className="flex flex-col justify-between py-2">
          <div>
            <p className="text-[0.64rem] uppercase tracking-[0.34em] text-black/38">
              Leather Goods
            </p>
            <h1
              className="mt-3 uppercase leading-[0.85] text-black/88"
              style={{ fontFamily: bodoniModa.style.fontFamily, fontSize: "4.8rem" }}
            >
              cata
              <br />
              logue
            </h1>
          </div>
          <div className="space-y-3">
            <div className="h-px bg-black/12" />
            <p
              className="uppercase tracking-[0.16em] text-black/68 leading-[1.6]"
              style={{ fontFamily: bodoniModa.style.fontFamily, fontSize: "0.82rem" }}
            >
              Euro
              <br />
              International
            </p>
            <div className="h-px bg-black/8" />
            <div className="space-y-1">
              <p className="text-[0.58rem] uppercase tracking-[0.3em] text-black/36">
                Volume 01 · 2025 / 2026
              </p>
              <p className="text-[0.58rem] uppercase tracking-[0.3em] text-black/28">
                www.euro-intl.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </BookPageShell>
  );
}

function SummaryPage() {
  const allEntries = summarySections.flatMap((s) => s.items);
  const collectionCount = allEntries.filter((i) => i.title.includes("Collection")).length;

  return (
    <BookPageShell page={2}>
      <div className="grid h-full grid-cols-[0.92fr_1.08fr] gap-6 pb-8 pt-5">
        <div className="flex h-full flex-col">
          <div className="relative overflow-hidden bg-[#f2f1ed] px-5 py-5">
            <div className="absolute inset-y-0 right-0 w-[32%] bg-linear-to-l from-black/[0.04] to-transparent" />
            <div className="relative">
              <p className="text-[0.64rem] uppercase tracking-[0.34em] text-black/38">Table of Contents</p>
              <h2
                className="mt-3 uppercase leading-[0.88] text-black/88"
                style={{ fontFamily: bodoniModa.style.fontFamily, fontSize: "4rem" }}
              >
                Contents
              </h2>
              <div className="mt-5 h-px bg-black/10" />
              <p className="mt-4 max-w-[92%] text-[0.7rem] leading-[1.85] text-black/46">
                A quick guide through the brand story, leather categories, and contact details.
              </p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="bg-[#f7f6f2] px-4 py-4">
              <p className="text-[0.52rem] uppercase tracking-[0.28em] text-black/34">Sections</p>
              <p className="mt-2 text-black/88" style={{ fontFamily: bodoniModa.style.fontFamily, fontSize: "1.9rem" }}>
                {String(allEntries.length).padStart(2, "0")}
              </p>
            </div>
            <div className="bg-[#ece9e2] px-4 py-4">
              <p className="text-[0.52rem] uppercase tracking-[0.28em] text-black/34">Collections</p>
              <p className="mt-2 text-black/88" style={{ fontFamily: bodoniModa.style.fontFamily, fontSize: "1.9rem" }}>
                {String(collectionCount).padStart(2, "0")}
              </p>
            </div>
          </div>
          <div className="mt-4 min-h-0 flex-1">
            <div className="relative h-full overflow-hidden bg-[#f0efec]">
              <Image src={images.aboutus} alt="Leather goods" fill unoptimized sizes="34vw" className="object-cover" style={{ objectPosition: "center center" }} />
              <div className="pointer-events-none absolute inset-0 border border-black/5" />
              <div className="absolute bottom-3 left-3 flex items-center gap-3">
                <div className="h-1 w-12 bg-white/90" />
                <TinySquares />
              </div>
              <p className="absolute bottom-3 right-3 text-[0.58rem] uppercase tracking-[0.24em] text-black/55" style={{ writingMode: "vertical-rl" }}>
                Catalogue / Edit
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div>
              <p className="text-[0.62rem] uppercase tracking-[0.3em] text-black/36">Euro International</p>
              <p className="mt-1 text-[0.66rem] text-black/42">Leather Goods Catalogue · Volume 01 · 2025 / 2026</p>
            </div>
            <TinySquares />
          </div>
        </div>
        <div className="flex h-full min-h-0 flex-col">
          <div className="grid flex-1 min-h-0 gap-3" style={{ gridTemplateRows: "minmax(0,1fr) minmax(0,1fr) auto" }}>
            {summarySections.map((section, index) => (
              <section
                key={section.title}
                className={`flex min-h-0 flex-col justify-between border border-black/8 px-4 py-4 ${index === 1 ? "bg-[#f1efea]" : "bg-[#f8f7f4]"}`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[0.5rem] uppercase tracking-[0.3em] text-black/34">{section.eyebrow}</p>
                      <h3 className="mt-2 uppercase leading-[0.95] text-black/86" style={{ fontFamily: bodoniModa.style.fontFamily, fontSize: "1.22rem" }}>
                        {section.title}
                      </h3>
                    </div>
                    <span className="text-[0.5rem] uppercase tracking-[0.28em] text-black/36">
                      {String(section.items.length).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-3 max-w-[96%] text-[0.62rem] leading-[1.65] text-black/44">{section.description}</p>
                </div>
                <div className="mt-4 divide-y divide-black/8">
                  {section.items.map((item) => (
                    <div key={item.title} className="flex items-baseline justify-between gap-3 py-2.5">
                      <p className="text-[0.72rem] uppercase tracking-[0.12em] text-black/70">{item.title}</p>
                      <span className="shrink-0 text-[0.58rem] uppercase tracking-[0.24em] text-black/36">{item.page}</span>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <div className="mt-3 flex items-end justify-between px-1">
            <p className="text-[0.58rem] uppercase tracking-[0.3em] text-black/30">www.euro-intl.com</p>
            <p className="text-[0.58rem] uppercase tracking-[0.3em] text-black/30">Leather Goods</p>
          </div>
        </div>
      </div>
    </BookPageShell>
  );
}

function AboutPage() {
  return (
    <BookPageShell page={aboutPage.page}>
      <div className="grid h-full grid-cols-[1.02fr_0.98fr] gap-6 pb-8 pt-5">
        <div className="flex h-full flex-col">
          <div className="relative min-h-0 flex-1 overflow-hidden bg-[#f1efea]">
            <Image src={aboutPage.image} alt="EURO INTERNATIONAL" fill unoptimized sizes="36vw" className="object-cover" style={{ objectPosition: "center center" }} />
            <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/12 to-transparent" />
            <div className="absolute inset-[5%] border border-white/30" />
            <div className="absolute left-[8%] right-[8%] top-[8%] flex items-start justify-between text-[0.6rem] uppercase tracking-[0.3em] text-white/70">
              <span>The Company</span>
              <span>Since 1999</span>
            </div>
            <div className="absolute bottom-[9%] left-[8%] right-[8%]">
              <p className="text-[0.6rem] uppercase tracking-[0.32em] text-white/55">Leather Goods Export House</p>
              <h2 className="mt-3 max-w-[88%] uppercase leading-[0.92] tracking-[-0.03em] text-white/92" style={{ fontFamily: bodoniModa.style.fontFamily, fontSize: "2.25rem" }}>
                Euro<br />International
              </h2>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-white/80" />
                  <TinySquares />
                </div>
                <p className="text-[0.62rem] uppercase tracking-[0.28em] text-white/64">Kolkata, India</p>
              </div>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between bg-[#f5f3ef] px-4 py-3">
            <p className="text-[0.6rem] uppercase tracking-[0.3em] text-black/36">www.euro-intl.com</p>
            <p className="text-[0.6rem] uppercase tracking-[0.3em] text-black/36">Export House Since 1999</p>
          </div>
        </div>
        <div className="flex h-full flex-col justify-between">
          <div className="bg-[#f7f6f2] px-5 py-5">
            <p className="text-[0.64rem] uppercase tracking-[0.34em] text-black/38">About Us</p>
            <h3 className="mt-3 uppercase leading-[0.94] text-black/86" style={{ fontFamily: bodoniModa.style.fontFamily, fontSize: "1.9rem" }}>
              Clean Presentation.<br />Dependable Production.
            </h3>
            <div className="mt-5 h-px bg-black/10" />
            <div className="mt-5 space-y-4 text-[0.78rem] leading-[1.8] text-black/50">
              {aboutPage.body.map((p) => <p key={p}>{p}</p>)}
            </div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="bg-[#efebe4] px-4 py-4">
              <p className="text-[0.5rem] uppercase tracking-[0.28em] text-black/34">Base</p>
              <p className="mt-2 uppercase leading-[1.1] text-black/84" style={{ fontFamily: bodoniModa.style.fontFamily, fontSize: "1.1rem" }}>
                Kolkata<br />India
              </p>
            </div>
            <div className="bg-[#f2f0eb] px-4 py-4">
              <p className="text-[0.5rem] uppercase tracking-[0.28em] text-black/34">Focus</p>
              <p className="mt-2 uppercase leading-[1.1] text-black/84" style={{ fontFamily: bodoniModa.style.fontFamily, fontSize: "1.1rem" }}>
                Leather<br />Collections
              </p>
            </div>
          </div>
          <div className="mt-3 border border-black/8 bg-[#fbfaf7] px-5 py-4">
            <div className="flex items-center justify-between">
              <p className="text-[0.5rem] uppercase tracking-[0.3em] text-black/36">Brand Note</p>
              <TinySquares />
            </div>
            <p className="mt-3 text-[0.7rem] leading-[1.75] text-black/48">
              We build commercially strong leather goods with a visual language that feels modern, minimal, and presentation-ready for buyers.
            </p>
          </div>
          <div className="mt-3 flex items-center justify-between px-1">
            <p className="text-[0.58rem] uppercase tracking-[0.3em] text-black/30">The Company</p>
            <p className="text-[0.58rem] uppercase tracking-[0.3em] text-black/30">Leather Goods Catalogue</p>
          </div>
        </div>
      </div>
    </BookPageShell>
  );
}

function ProductHeroPage({ page, items, imgs }: { page: number; items: ProductPage[]; imgs?: string[] }) {
  const hero = items[0];
  const heroImg = imgs?.[0] ?? hero.image;
  return (
    <BookPageShell page={page}>
      <div className="relative h-full overflow-hidden">
        <Image src={heroImg} alt={hero.name} fill unoptimized sizes="210mm" className="object-cover" style={{ objectPosition: hero.imagePosition ?? "center center" }} />
        <div className="absolute inset-0 bg-linear-to-b from-white/90 via-white/50 to-transparent" />
        <div className="absolute inset-[4%] z-10 border border-black/10" />
        <div className="absolute left-[8%] right-[8%] top-[8%] z-20">
          <div className="flex items-center justify-between">
            <p className="text-[0.64rem] uppercase tracking-[0.34em] text-black/42">{hero.category}</p>
            <p className="text-[0.64rem] uppercase tracking-[0.34em] text-black/42">{hero.artNo}</p>
          </div>
          <h3 className="mt-3 uppercase leading-[0.88] text-black/88" style={{ fontFamily: bodoniModa.style.fontFamily, fontSize: "4rem" }}>
            {hero.name}
          </h3>
          <p className="mt-3 max-w-[62%] text-[0.7rem] leading-[1.75] text-black/50">{hero.description}</p>
          <div className="mt-5 flex gap-8 text-[0.62rem] uppercase tracking-[0.26em]">
            {[{ label: "Leather", value: hero.leatherType }, { label: "Colour", value: hero.color }, { label: "Finish", value: hero.finish }].map(({ label, value }) => (
              <div key={label}>
                <p className="text-black/32">{label}</p>
                <p className="mt-0.5 text-black/62">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BookPageShell>
  );
}

function ProductThreeUpPage({ page, items }: { page: number; items: ProductPage[] }) {
  return (
    <BookPageShell page={page}>
      <div className="flex h-full flex-col px-[8%] pb-6 pt-6 bg-[#ededed]">
        <div className="flex shrink-0 items-center justify-between text-[0.66rem] uppercase tracking-[0.3em] text-black/40">
          <span>www.euro-intl.com</span>
          <span>catalogue</span>
        </div>
        <div className="mt-3 flex flex-1 flex-col divide-y divide-black/8">
          {items.map((item) => (
            <article key={item.artNo} className="grid flex-1 grid-cols-[36%_1fr] gap-5 py-3">
              <div className="relative overflow-hidden bg-[#f2f2f0]">
                <Image src={item.image} alt={item.name} fill unoptimized sizes="12vw" className="object-cover" style={{ objectPosition: item.imagePosition ?? "center center" }} />
              </div>
              <div className="flex flex-col justify-center gap-[0.45rem]">
                <p className="text-[0.56rem] uppercase tracking-[0.3em] text-black/36">{item.artNo}</p>
                <h3 className="uppercase leading-[0.9] text-black/86" style={{ fontFamily: bodoniModa.style.fontFamily, fontSize: "1.8rem" }}>
                  {item.name}
                </h3>
                <div>
                  <p className="text-[0.44rem] uppercase tracking-[0.28em] text-black/34">Description</p>
                  <p className="mt-[0.2rem] text-[0.62rem] leading-[1.6] text-black/50">{item.description}</p>
                </div>
                <div className="mt-[0.6rem] space-y-[0.14rem]">
                  {[{ label: "Art No.", value: item.artNo }, { label: "Leather", value: item.leatherType }, { label: "Colour", value: item.color }].map(({ label, value }) => (
                    <p key={label} className="text-[0.6rem] uppercase tracking-[0.18em] leading-normal">
                      <span className="text-black/32">{label}</span>{"  "}
                      <span className="text-black/62">{value}</span>
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </BookPageShell>
  );
}

function ProductFourUpPage({ page, items }: { page: number; items: ProductPage[] }) {
  return (
    <BookPageShell page={page}>
      <div className="flex h-full flex-col px-[8%] pb-5 pt-5 bg-[#ededed]">
        <div className="flex shrink-0 items-center justify-between text-[0.66rem] uppercase tracking-[0.3em] text-black/40">
          <span>www.euro-intl.com</span>
          <span>catalogue</span>
        </div>
        <div className="mt-3 grid flex-1 min-h-0 grid-cols-2 grid-rows-2 gap-x-5 gap-y-4">
          {items.map((item) => (
            <article key={item.artNo} className="flex min-h-0 flex-col gap-[0.4rem]">
              <div className="relative w-full overflow-hidden aspect-square bg-[#f0efec]">
                <Image src={item.image} alt={item.name} fill unoptimized sizes="13vw" className="object-cover" style={{ objectPosition: item.imagePosition ?? "center center" }} />
              </div>
              <div>
                <h3 className="uppercase leading-[1.2] text-black/80" style={{ fontFamily: bodoniModa.style.fontFamily, fontSize: "0.78rem" }}>
                  {item.artNo} | {item.name}
                </h3>
                <div className="mt-[0.6rem] space-y-[0.14rem]">
                  {[{ label: "Art No.", value: item.artNo }, { label: "Leather", value: item.leatherType }, { label: "Colour", value: item.color }].map(({ label, value }) => (
                    <p key={label} className="text-[0.6rem] uppercase tracking-[0.18em] leading-normal">
                      <span className="text-black/32">{label}</span>{"  "}
                      <span className="text-black/62">{value}</span>
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </BookPageShell>
  );
}

function ContactPage() {
  const contactBlocks = [
    { label: "Direct", lines: ["Proprietor: Mr. Kamal Aktar", "Phone: +91 9564117600", "Mail: info@euro-intl.com"] },
    { label: "Tannery", lines: ["PLOT : 98, ZONE - 10A,", "KOLKATA LEATHER COMPLEX, South 24 Pargana,", "West Bengal, India"] },
    { label: "Workshop", lines: ["Plot 1603, Zone-9, K.L.C", "South 24 Pargana-743502", "West Bengal, India"] },
  ];
  return (
    <BookPageShell page={22}>
      <div className="h-full px-[8%] pb-12 pt-8">
        <div className="flex items-center justify-between text-[0.68rem] uppercase tracking-[0.3em] text-black/48">
          <span>www.euro-intl.com</span>
          <span>catalogue</span>
        </div>
        <div className="mt-8 grid h-[83%] grid-cols-[0.95fr_1.05fr] gap-10">
          <div className="relative">
            <div className="relative overflow-hidden bg-[#f2f2f0]">
              <div className="relative aspect-[4/5]">
                <Image src={images.production} alt="EURO INTERNATIONAL workshop" fill unoptimized sizes="34vw" className="object-cover" style={{ objectPosition: "center center" }} />
              </div>
            </div>
            <div className="absolute -bottom-6 right-0 w-[34%] bg-white p-3 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
              <div className="relative aspect-square overflow-hidden bg-[#f4f4f2]">
                <Image src={images.building} alt="EURO INTERNATIONAL building" fill unoptimized sizes="14vw" className="object-cover" style={{ objectPosition: "center center" }} />
              </div>
            </div>
            <div className="absolute left-[-1.6rem] top-[12%] h-[42%] w-[1.1rem] bg-[#f1f1f1]" />
            <div className="absolute right-[-1.3rem] top-[22%] flex items-center gap-4">
              <TinySquares />
              <p className="text-[0.84rem] uppercase tracking-[0.28em] text-black/54" style={{ writingMode: "vertical-rl" }}>
                Keep In Touch
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-[0.68rem] uppercase tracking-[0.32em] text-black/42">Contact Page</p>
            <h2 className="mt-3 text-[3.6rem] leading-[0.92] tracking-[-0.05em] text-black/88 font-medium">
              CONTACT<br />EURO INTERNATIONAL
            </h2>
            <p className="mt-4 max-w-[92%] text-[0.82rem] leading-[1.75] text-black/48">
              For product development, sampling, pricing, and export enquiries, connect with us directly.
            </p>
            <div className="mt-6 space-y-4">
              {contactBlocks.map((block) => (
                <div key={block.label} className="bg-[#f4f4f4] p-4">
                  <p className="text-[0.6rem] uppercase tracking-[0.28em] text-black/46">{block.label}</p>
                  <div className="mt-3 space-y-1.5 text-[0.8rem] leading-[1.65] text-black/68">
                    {block.lines.map((line) => <p key={line}>{line}</p>)}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-5">
              <div className="flex items-center justify-between border-t border-black/12 pt-4 text-[0.68rem] uppercase tracking-[0.28em] text-black/46">
                <span>India</span>
                <span>Leather Goods Export</span>
              </div>
              <div className="mt-3 flex items-center justify-between bg-[#f4f4f4] px-4 py-3 text-[0.78rem] uppercase tracking-[0.24em] text-black/60">
                <span>www.euro-intl.com</span>
                <span>+91 9564117600</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BookPageShell>
  );
}

// ─── react-pageflip page wrapper (forwardRef required) ───────────────────────
// Renders content at full A4 size then scales it to match the flip book page.

const Page = forwardRef<HTMLDivElement, { children: React.ReactNode }>(
  ({ children }, ref) => {
    const scale = useContext(ScaleCtx);
    return (
      <div ref={ref} style={{ overflow: "hidden", width: "100%", height: "100%" }}>
        <div
          style={{
            width: A4_W,
            height: A4_H,
            transformOrigin: "top left",
            transform: `scale(${scale})`,
          }}
        >
          {children}
        </div>
      </div>
    );
  }
);
Page.displayName = "Page";

// ─── Main viewer ─────────────────────────────────────────────────────────────

export default function FlipBookViewer() {
  const bookRef = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [flipState, setFlipState] = useState<string>("read");
  const [totalPages, setTotalPages] = useState(23);
  const [pageSize, setPageSize] = useState({ width: 420, height: 594 });
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Slight delay lets the flip book render at correct size before fading in
    const t = setTimeout(() => setVisible(true), 80);
    const calculate = () => {
      const availH = window.innerHeight - 100; // header + bottom nav
      const maxW = Math.floor(availH * (210 / 297));
      const pageWidth = Math.min(maxW, Math.floor((window.innerWidth - 60) / 2));
      const pageHeight = Math.floor(pageWidth * (297 / 210));
      setPageSize({ width: Math.max(pageWidth, 260), height: Math.max(pageHeight, 368) });
    };
    calculate();
    window.addEventListener("resize", calculate);
    return () => { clearTimeout(t); window.removeEventListener("resize", calculate); };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setShowJumper(false); return; }
      if (e.key === "ArrowRight" || e.key === "ArrowDown") bookRef.current?.pageFlip().flipNext();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") bookRef.current?.pageFlip().flipPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const goNext = useCallback(() => bookRef.current?.pageFlip().flipNext(), []);
  const goPrev = useCallback(() => bookRef.current?.pageFlip().flipPrev(), []);

  const [showJumper, setShowJumper] = useState(false);
  const [jumpInput, setJumpInput] = useState("");

  const jumpTo = useCallback((index: number) => {
    bookRef.current?.pageFlip().flip(index);
    setShowJumper(false);
    setJumpInput("");
  }, []);

  // Always jump to the LEFT page of a spread so flip() works reliably.
  // Cover (0) is alone; all other left pages are at odd indices.
  const toLeftPage = (index: number) =>
    index === 0 ? 0 : index % 2 === 1 ? index : index - 1;

  const handleJumpSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const n = parseInt(jumpInput, 10);
    if (!isNaN(n) && n >= 1 && n <= totalPages) jumpTo(toLeftPage(n - 1));
  };

  // Section quick-jump — all indices normalised to the LEFT page of the spread.
  // Wallet Hero (8) and Belt Hero (16) fall on right pages; jump to index-1.
  const sections = [
    { label: "Cover",       index: 0  },
    { label: "Intro",       index: 1  }, // Summary (left) + About (right)
    { label: "Bags",        index: 3  }, // Bag Hero on left ✓
    { label: "Wallets",     index: 7  }, // Wallet Hero on right (spread 7-8)
    { label: "Accessories", index: 13 }, // Acc Hero on left ✓
    { label: "Belts",       index: 15 }, // Belt Hero on right (spread 15-16)
    { label: "Contact",     index: 21 }, // Contact on left ✓
  ];

  const scale = pageSize.width / A4_W;

  const by = (cat: ProductCategory) => productCollections[cat];

  // Show the range of both visible pages (e.g. "4 – 5 / 35")
  const pageLabel =
    currentPage === 0
      ? "Cover"
      : `${currentPage + 1} – ${Math.min(currentPage + 2, totalPages)} / ${totalPages}`;

  if (!mounted) {
    return (
      <div className="w-screen h-screen flex items-center justify-center" style={{ background: "#0a0806" }}>
        <p className="text-white/40 text-[0.65rem] uppercase tracking-[0.36em]">Opening catalogue…</p>
      </div>
    );
  }

  return (
    <div
      className="w-screen h-screen flex flex-col overflow-hidden select-none"
      style={{ background: "radial-gradient(ellipse at 50% 25%, #1e1510 0%, #0a0806 100%)" }}
    >
      {/* Floating header */}
      <header className="shrink-0 flex items-center justify-between px-8 py-3">
        <Link
          href="/"
          className="flex items-center gap-2 text-white/35 hover:text-white/70 text-[0.62rem] uppercase tracking-[0.28em] transition-colors"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Catalogue
        </Link>
        <p className="text-white text-[0.58rem] uppercase tracking-[0.42em]">
          EURO INTERNATIONAL
        </p>
        <p className="text-white text-[0.58rem] uppercase tracking-[0.28em]">{pageLabel}</p>
      </header>

      {/* Book stage */}
      <main className="flex-1 flex items-center justify-center min-h-0">
        <div
          className="relative"
          style={{
            isolation: "isolate",
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1) translateY(0)" : "scale(0.96) translateY(16px)",
            transition: "opacity 0.6s ease, transform 0.6s cubic-bezier(0.22,1,0.36,1)",
          }}
        >

          {/* Stacked page edges — hidden when cover is idle */}
          {(currentPage > 1 ) && <>
            <div style={{
              position: "absolute", left: 0, top: "1%", bottom: "1%", width: 14,
              transform: "translateX(-100%)",
              borderRadius: "2px 0 0 2px",
              background: "repeating-linear-gradient(90deg,#ede5d8 0,#ede5d8 2px,#e0d6c6 2px,#e0d6c6 4px,#d3c9b8 4px,#d3c9b8 6px,#c7bcab 6px,#c7bcab 8px,#bbb09e 8px,#bbb09e 10px,#b0a493 10px,#b0a493 12px,#a49889 12px,#a49889 14px)",
            }} />
            </>}
             {(currentPage < totalPages-3 ) && <>
             <div style={{
              position: "absolute", right: 0, top: "1%", bottom: "1%", width: 14,
              transform: "translateX(100%)",
              borderRadius: "0 2px 2px 0",
              background: "repeating-linear-gradient(270deg,#ede5d8 0,#ede5d8 2px,#e0d6c6 2px,#e0d6c6 4px,#d3c9b8 4px,#d3c9b8 6px,#c7bcab 6px,#c7bcab 8px,#bbb09e 8px,#bbb09e 10px,#b0a493 10px,#b0a493 12px,#a49889 12px,#a49889 14px)",
            }}
            />
             </>}
            
          


          {/* Book shadow */}
          <div style={{
            position: "absolute", inset: 0, zIndex: -1,
            boxShadow: "0 70px 140px -10px rgba(0,0,0,0.98), 0 20px 60px rgba(0,0,0,0.8), 0 0 0 1px rgba(0,0,0,0.6)",
          }} />

          {/* The flip book */}
          <ScaleCtx.Provider value={scale}>
          {/* @ts-ignore */}
          <HTMLFlipBook
            ref={bookRef}
            width={pageSize.width}
            height={pageSize.height}
            size="fixed"
            minWidth={260}
            maxWidth={700}
            minHeight={368}
            maxHeight={990}
            showCover={true}
            usePortrait={false}
            mobileScrollSupport
            flippingTime={700}
            drawShadow
            maxShadowOpacity={0.5}
            showPageCorners
            className=""
            style={{}}
            onFlip={(e: any) => setCurrentPage(e.data)}
            onChangeState={(e: any) => setFlipState(e.data)}
            onInit={(e: any) => setTotalPages(e.object.getPageCount())}
          >
            <Page><CoverPage /></Page>
            <Page><SummaryPage /></Page>
            <Page><AboutPage /></Page>

            {/* Leather Bag — pages 4–8 */}
            <Page><ProductHeroPage imgs={[images.bag1, images.bag1_2]} items={by("Leather Bag").slice(0, 1)} page={4} /></Page>
            <Page><ProductThreeUpPage items={by("Leather Bag").slice(1, 4)} page={5} /></Page>
            <Page><ProductFourUpPage items={by("Leather Bag").slice(4, 8)} page={6} /></Page>
            <Page><ProductThreeUpPage items={by("Leather Bag").slice(8, 11)} page={7} /></Page>
            <Page><ProductFourUpPage items={by("Leather Bag").slice(11, 15)} page={8} /></Page>

            {/* Leather Wallet — pages 9–13 */}
            <Page><ProductHeroPage items={by("Leather Wallet").slice(0, 1)} page={9} /></Page>
            <Page><ProductThreeUpPage items={by("Leather Wallet").slice(1, 4)} page={10} /></Page>
            <Page><ProductFourUpPage items={by("Leather Wallet").slice(4, 8)} page={11} /></Page>
            <Page><ProductThreeUpPage items={by("Leather Wallet").slice(8, 11)} page={12} /></Page>
            <Page><ProductFourUpPage items={by("Leather Wallet").slice(11, 15)} page={13} /></Page>

            {/* Leather Accessories — pages 14–16 */}
            <Page><ProductHeroPage items={by("Leather Accessories").slice(0, 1)} page={14} /></Page>
            <Page><ProductThreeUpPage items={by("Leather Accessories").slice(1, 4)} page={15} /></Page>
            <Page><ProductFourUpPage items={by("Leather Accessories").slice(4, 8)} page={16} /></Page>

            {/* Leather Belt — pages 17–21 */}
            <Page><ProductHeroPage items={by("Leather Belt").slice(0, 1)} page={17} /></Page>
            <Page><ProductThreeUpPage items={by("Leather Belt").slice(1, 4)} page={18} /></Page>
            <Page><ProductFourUpPage items={by("Leather Belt").slice(4, 8)} page={19} /></Page>
            <Page><ProductThreeUpPage items={by("Leather Belt").slice(8, 11)} page={20} /></Page>
            <Page><ProductFourUpPage items={by("Leather Belt").slice(11, 15)} page={21} /></Page>

            <Page><ContactPage /></Page>
            <Page>
              <div style={{ width: A4_W, height: A4_H, background: "radial-gradient(ellipse at 50% 25%, #1e1510 0%, #0a0806 100%)" }} />
            </Page>
          </HTMLFlipBook>
          </ScaleCtx.Provider>
      </div>
      </main>
    </div>
  );
}
