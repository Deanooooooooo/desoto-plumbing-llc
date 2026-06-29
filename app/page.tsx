"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { ArrowUpRight, BadgeCheck, Droplets, Facebook, Mail, MapPin, Phone, ShieldCheck, ShowerHead, Star, Wrench } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const assets = (name: string) => `${basePath}/assets/${name}`;

const businessName = "Desoto Plumbing LLC";
const phoneDisplay = "(901) 832-1344";
const phoneHref = "tel:+19018321344";
const smsHref = "sms:+19018321344";
const email = "dakota@desotoplumbingllc.com";
const facebookUrl = "https://www.facebook.com/people/Desoto-Plumbing-LLC/100087457586277/";
const mapsUrl = "https://www.google.com/maps/place/Desoto+Plumbing+LLC/@34.6361619,-90.2605971,124636m/data=!3m5!1s0x2c8a74c18dc8d635:0x2dcaee3d2cbd0afb!8m2!3d34.6366053!4d-89.930962!16s%2Fg%2F11zg5ksqvc";
const mapEmbedUrl = "https://maps.google.com/maps?ll=34.6366053,-89.930962&z=10&t=m&hl=en&q=Desoto%20Plumbing%20LLC%20Hernando%20MS&output=embed";

const services = [
  { icon: Droplets, title: "Leak repairs", body: "Fast, clear help for leaks, shutoffs, supply lines and plumbing issues before water damage spreads." },
  { icon: ShowerHead, title: "Water heaters", body: "Water heater repair and replacement enquiries with a proper licensed plumbing company." },
  { icon: Wrench, title: "Drain work", body: "Drain cleaning, stoppages and maintenance for homes that need the water moving again." },
  { icon: ShieldCheck, title: "Licensed plumbing", body: "Facebook profile lists Desoto Plumbing as licensed, bonded and insured, license #23159." },
];

const gallery = [
  { src: "hero-plumbing.png", alt: "Generated plumbing service visual showing water heater and pipework", title: "Water heater and pipework" },
  { src: "leak-repair.png", alt: "Generated plumbing service visual showing under sink leak repair", title: "Leak repair enquiries" },
  { src: "drain-maintenance.png", alt: "Generated plumbing service visual showing drain maintenance setup", title: "Drain maintenance" },
  { src: "fb-profile.jpg", alt: "Desoto Plumbing LLC Facebook profile image", title: "Verified Facebook profile" },
];

const proofPoints = [
  "Facebook profile verifies Desoto Plumbing LLC in Hernando, Mississippi.",
  "Public profile copy lists water heaters, leak repairs and drain work.",
  "Facebook lists the business as licensed, bonded and insured, license #23159.",
  "Google Maps listing verifies Desoto Plumbing LLC with a Hernando-area service map.",
];

const testimonials = [
  { quote: "Desoto Plumbing LLC is exactly who I recommend. Great service.", name: "Arron Woolsey", source: "Facebook recommendation snippet" },
  { quote: "Great service, great price and a very nice guy.", name: "C.C.H.", source: "Nextdoor recommendation snippet" },
  { quote: "Dakota Huffman is definitely who I'd call. Great service.", name: "Tim Holland", source: "Facebook recommendation snippet" },
];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-90px" }} transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

export default function Page() {
  const main = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.28], [0, -80]);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [area, setArea] = useState("");
  const [service, setService] = useState("Leak repair");
  const [details, setDetails] = useState("");

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true, syncTouch: false });
    let rafId = 0;
    function raf(time: number) { lenis.raf(time); rafId = requestAnimationFrame(raf); }
    rafId = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(rafId); lenis.destroy(); };
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".service-card", { y: 44, opacity: 0, duration: 0.8, stagger: 0.06, ease: "power3.out", scrollTrigger: { trigger: ".services-grid", start: "top 74%" } });
    }, main);
    return () => ctx.revert();
  }, []);

  const subject = encodeURIComponent(`Plumbing enquiry from ${name || "website visitor"}`);
  const body = encodeURIComponent(`Hi Desoto Plumbing,\n\nName: ${name}\nContact: ${contact}\nArea: ${area}\nService: ${service}\nDetails: ${details}\n\nPlease contact me about this plumbing enquiry.`);
  const mailHref = `mailto:${email}?subject=${subject}&body=${body}`;
  const textHref = `${smsHref}?&body=${body}`;

  const schema = { "@context": "https://schema.org", "@type": "Plumber", name: businessName, image: `${basePath}/assets/fb-profile.jpg`, telephone: "+19018321344", email, url: "https://deanooooooooo.github.io/desoto-plumbing-llc/", sameAs: [facebookUrl, mapsUrl], areaServed: ["Hernando", "DeSoto County", "North Mississippi"], address: { "@type": "PostalAddress", addressLocality: "Hernando", addressRegion: "MS", addressCountry: "US" }, description: "Licensed plumbing company serving Hernando and DeSoto County with water heaters, leak repairs and drain work." };

  return (
    <main ref={main} className="min-h-screen overflow-hidden bg-[#f4f7f8] text-[#0d1f25]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/14 bg-[#0d1f25]/88 text-white backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-8">
          <a href="#top" className="flex min-w-0 items-center gap-3"><span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-cyan-200/25 bg-white/10"><Image src={assets("fb-profile.jpg")} alt="Desoto Plumbing LLC profile image" fill sizes="56px" className="object-cover" priority /></span><span><span className="block text-lg font-black leading-tight">Desoto Plumbing LLC</span><span className="block text-sm font-semibold text-white/68">Hernando, MS plumbing</span></span></a>
          <nav className="hidden items-center gap-7 text-sm font-black lg:flex"><a href="#services">Services</a><a href="#gallery">Visuals</a><a href="#proof">Reviews</a><a href="#contact">Contact</a></nav>
          <a href={phoneHref} className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-cyan-200 px-4 py-3 text-sm font-black text-[#0d1f25] transition hover:bg-white"><Phone size={18} /><span className="hidden sm:inline">{phoneDisplay}</span></a>
        </div>
      </header>

      <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-[#0d1f25] px-4 pb-14 pt-28 text-white sm:px-8">
        <motion.div className="absolute inset-0" style={{ y: heroY }}><Image src={assets("hero-plumbing.png")} alt="Plumbing pipework and water heater service visual" fill sizes="100vw" priority className="object-cover opacity-75" /><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,31,37,0.98)_0%,rgba(13,31,37,0.82)_45%,rgba(13,31,37,0.36)_100%)]" /></motion.div>
        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[0.96fr_0.84fr]">
          <Reveal><div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/28 bg-cyan-200/12 px-4 py-2 text-sm font-black text-cyan-100"><ShieldCheck size={18} /> Licensed, bonded & insured</div><h1 className="max-w-4xl text-4xl font-black leading-[1.02] sm:text-6xl lg:text-[4.6rem]">Plumber in Hernando MS for leaks, water heaters and drains.</h1><p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-white/76 sm:text-xl">Desoto Plumbing LLC is built around honest service, quality work and clear help when local customers need plumbing sorted properly.</p><div className="mt-8 flex flex-wrap gap-3"><a href={phoneHref} className="inline-flex min-h-14 items-center gap-2 rounded-xl bg-cyan-200 px-6 py-4 text-base font-black text-[#0d1f25] transition hover:bg-white"><Phone size={20} /> Call {phoneDisplay}</a><a href="#services" className="inline-flex min-h-14 items-center gap-2 rounded-xl border border-white/18 bg-white/10 px-6 py-4 text-base font-black text-white transition hover:bg-white hover:text-[#0d1f25]"><ArrowUpRight size={20} /> See services</a></div></Reveal>
          <Reveal delay={0.1}><form className="w-full max-w-xl rounded-2xl border border-white/16 bg-white/[0.10] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.44)] backdrop-blur-2xl sm:p-6" onSubmit={(event) => event.preventDefault()}><p className="text-sm font-black uppercase text-cyan-100">Plumbing enquiry</p><h2 className="mt-2 text-3xl font-black leading-tight text-white">Ask Desoto for help.</h2><div className="mt-5 grid gap-3"><input value={name} onChange={e=>setName(e.target.value)} className="min-h-13 rounded-xl bg-white/92 px-4 font-semibold text-[#0d1f25]" placeholder="Name" /><input value={contact} onChange={e=>setContact(e.target.value)} className="min-h-13 rounded-xl bg-white/92 px-4 font-semibold text-[#0d1f25]" placeholder="Phone or email" /><div className="grid gap-3 sm:grid-cols-2"><select value={service} onChange={e=>setService(e.target.value)} className="min-h-13 rounded-xl bg-white/92 px-4 font-semibold text-[#0d1f25]"><option>Leak repair</option><option>Water heater</option><option>Drain cleaning</option><option>General plumbing</option><option>Urgent plumbing issue</option></select><input value={area} onChange={e=>setArea(e.target.value)} className="min-h-13 rounded-xl bg-white/92 px-4 font-semibold text-[#0d1f25]" placeholder="Area / address" /></div><textarea value={details} onChange={e=>setDetails(e.target.value)} className="min-h-28 rounded-xl bg-white/92 px-4 py-3 font-semibold text-[#0d1f25]" placeholder="What needs sorting? Leak, water heater, drain issue, timing..." /></div><div className="mt-4 grid gap-3 sm:grid-cols-2"><Button asChild className="min-h-14 rounded-xl bg-cyan-200 text-base font-black text-[#0d1f25] hover:bg-white"><a href={mailHref}><Mail size={20} /> Send enquiry</a></Button><a href={textHref} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-white/16 px-5 text-base font-black text-white transition hover:bg-white hover:text-[#0d1f25]"><Phone size={19} /> Text brief</a></div><p className="mt-4 text-sm font-semibold leading-6 text-white/62">Quote details can go by email or text, with the phone number ready for urgent jobs.</p></form></Reveal>
        </div>
      </section>

      <section id="services" className="px-4 py-24 sm:px-8"><div className="mx-auto max-w-7xl"><Reveal className="max-w-3xl"><p className="mb-3 text-sm font-black uppercase text-cyan-700">Plumbing services</p><h2 className="text-4xl font-black leading-none sm:text-6xl">Clear help for the plumbing jobs people need sorted quickly.</h2></Reveal><div className="services-grid mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{services.map(item=><article key={item.title} className="service-card rounded-2xl border border-[#0d1f25]/10 bg-white p-6 shadow-[0_18px_60px_rgba(13,31,37,0.08)]"><item.icon className="mb-7 text-cyan-700" size={34}/><h3 className="text-2xl font-black leading-tight">{item.title}</h3><p className="mt-4 text-base font-medium leading-7 text-[#536068]">{item.body}</p></article>)}</div></div></section>

      <section id="gallery" className="bg-[#0d1f25] px-4 py-24 text-white sm:px-8"><div className="mx-auto max-w-7xl"><Reveal><p className="mb-3 text-sm font-black uppercase text-cyan-200">Service cues</p><h2 className="max-w-4xl text-4xl font-black leading-none sm:text-6xl">Water heaters, leaks and drain issues made easy to enquire about.</h2></Reveal><div className="mt-12 grid gap-4 md:grid-cols-2">{gallery.map(item=><figure key={item.src} className="relative h-[420px] overflow-hidden rounded-2xl border border-white/10 bg-white/5"><Image src={assets(item.src)} alt={item.alt} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover"/><figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/60 to-transparent p-5"><span className="text-xl font-black">{item.title}</span><span className="mt-1 block text-sm font-bold text-white/64">Plumbing service</span></figcaption></figure>)}</div></div></section>

      <section id="proof" className="bg-white px-4 py-24 sm:px-8"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1fr]"><Reveal><p className="mb-3 text-sm font-black uppercase text-cyan-700">Trust points</p><h2 className="text-4xl font-black leading-none sm:text-6xl">Built on honest service and local proof.</h2></Reveal><div className="grid gap-4">{proofPoints.map(point=><Reveal key={point}><div className="flex gap-4 rounded-2xl border border-[#0d1f25]/10 bg-[#f4f7f8] p-5"><BadgeCheck className="mt-1 shrink-0 text-cyan-700"/><p className="text-base font-bold leading-7 text-[#3d4a50]">{point}</p></div></Reveal>)}</div></div><div className="mx-auto mt-16 grid max-w-7xl gap-4 lg:grid-cols-3">{testimonials.map(item=><Reveal key={item.name}><article className="h-full rounded-2xl bg-[#0d1f25] p-6 text-white"><div className="mb-5 flex gap-1 text-cyan-300" aria-label="5 star review">{[0,1,2,3,4].map(s=><Star key={s} size={18} fill="currentColor"/>)}</div><p className="text-base font-semibold leading-8 text-white/82">"{item.quote}"</p><p className="mt-6 text-lg font-black">{item.name}</p><p className="mt-1 text-sm font-bold text-white/52">{item.source}</p></article></Reveal>)}</div></section>

      <section id="contact" className="bg-[#f4f7f8] px-4 py-24 sm:px-8"><div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl border border-[#0d1f25]/10 bg-white shadow-[0_24px_90px_rgba(13,31,37,0.12)] lg:grid-cols-[0.88fr_1.12fr]"><div className="p-6 sm:p-9 lg:p-12"><p className="mb-3 text-sm font-black uppercase text-cyan-700">Contact</p><h2 className="text-4xl font-black leading-none sm:text-5xl">Speak to a plumber serving Hernando and DeSoto County.</h2><div className="mt-8 grid gap-4"><a href={phoneHref} className="flex items-center gap-4 rounded-xl bg-[#0d1f25] p-4 text-white"><Phone className="text-cyan-200"/><span className="font-black">{phoneDisplay}</span></a><a href={mailHref} className="flex items-center gap-4 rounded-xl bg-[#f4f7f8] p-4"><Mail className="text-cyan-700"/><span className="font-black">{email}</span></a><a href={facebookUrl} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-xl bg-[#f4f7f8] p-4"><Facebook className="text-cyan-700"/><span className="font-black">Facebook profile</span></a></div></div><iframe title="Desoto Plumbing service area map" src={mapEmbedUrl} width="100%" height="520" loading="lazy" className="h-[420px] w-full border-0 lg:h-full"/></div></section>

      <footer className="bg-[#0d1f25] px-4 py-10 text-white sm:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between"><div><p className="text-xl font-black">Desoto Plumbing LLC</p><p className="mt-2 max-w-2xl text-sm font-semibold leading-6 text-white/58">Licensed plumbing help for water heaters, leaks, drains and general plumbing around Hernando and DeSoto County.</p></div><div className="flex gap-3"><a href={phoneHref} aria-label="Call Desoto Plumbing" className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/12 bg-white/10"><Phone size={20}/></a><a href={mailHref} aria-label="Email Desoto Plumbing" className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/12 bg-white/10"><Mail size={20}/></a><a href={facebookUrl} target="_blank" rel="noreferrer" aria-label="Desoto Plumbing on Facebook" className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/12 bg-white/10"><Facebook size={20}/></a><a href={mapsUrl} target="_blank" rel="noreferrer" aria-label="Desoto Plumbing on Google Maps" className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/12 bg-white/10"><MapPin size={20}/></a></div></div></footer>
    </main>
  );
}
