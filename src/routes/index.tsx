import { createFileRoute } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  ArrowRight,
  GraduationCap,
  Code2,
  Trophy,
  ExternalLink,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast, Toaster } from "sonner";
import profileImg from "@/assets/profile.jpeg";
// keep RESUME filename for compatibility with existing generated asset types
import resumeUrl from "@/assets/resume.pdf?url";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Typewriter } from "@/components/Typewriter";
import { MagneticButton } from "@/components/MagneticButton";
import { TiltCard } from "@/components/TiltCard";
import { CountUp } from "@/components/CountUp";
import { WaveDivider } from "@/components/WaveDivider";
import { SkillOrbit } from "@/components/SkillOrbit";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ganesh Koli — CS Engineer & Full-Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Ganesh Koli, a CSE student at D.Y. Patil Kolhapur building modern web experiences with React, TypeScript and the MERN stack.",
      },
    ],
  }),
  component: Index,
});

const socials = [
  { icon: Github, href: "https://github.com/Ganeshkoli01", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ganeshkoli0149/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:ganeshkoli0149@gmail.com", label: "Email" },
];

const education = [
  {
    period: "2023 — 2027",
    title: "B.Tech in Computer Science and Engineering",
    place: "D.Y. Patil College of Engineering & Technology, Kolhapur",
    scoreLabel: "CGPA",
    scoreValue: 7.7,
    scoreSuffix: " / 10",
    decimals: 2,
  },
  {
    period: "2022 — 2023",
    title: "HSC — Science",
    place:
      "Swa. Sai. M. G. Patil Adarsh Vidyaniketan And Junior College, Minche (Maharashtra Board)",
    scoreLabel: "Percentage",
    scoreValue: 63.17,
    scoreSuffix: "%",
    decimals: 2,
  },
];

const project = {
  title: "Room & Mess Finder",
  subtitle: "Full-Stack Web Application",
  description:
    "A high-performance platform built with React, TypeScript and Supabase that streamlines property discovery across India. Features real-time data, secure auth, an AI-powered chatbot via Google Gemini, interactive Leaflet maps and Razorpay payments — wrapped in a polished UX with Tailwind CSS and React Query.",
  tech: [
    "React 18",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "Framer Motion",
    "shadcn/ui",
    "React Query",
    "Supabase",
    "Google Gemini AI",
    "Razorpay",
    "Leaflet Maps",
  ],
  href: "https://room-mess-finder.vercel.app/",
};

const languages = [
  { name: "C++", level: 85 },
  { name: "Python", level: 80 },
  { name: "JavaScript", level: 82 },
  { name: "HTML", level: 92 },
  { name: "CSS", level: 88 },
];

const softSkills = ["Problem Solving", "Teamwork & Collaboration", "Leadership"];

function Index() {
  return (
    <main id="home" className="relative min-h-screen">
      <div className="mesh-bg" />
      <div className="grain" />
      <CustomCursor />
      <ScrollProgress />
      <Toaster theme="dark" richColors position="top-center" />
      <Navbar />
      <Hero />
      <WaveDivider />
      <About />
      <Education />
      <WaveDivider flip />
      <Projects />
      <Skills />
      <WaveDivider />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const tx = useSpring(useTransform(mx, [-1, 1], [-15, 15]), { stiffness: 80, damping: 20 });
  const ty = useSpring(useTransform(my, [-1, 1], [-15, 15]), { stiffness: 80, damping: 20 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth) * 2 - 1);
      my.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section className="relative flex min-h-screen items-center px-6 pt-32 pb-20">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-border bg-card/40 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur"
          >
            <span className="relative grid h-2 w-2 place-items-center">
              <span className="h-2 w-2 rounded-full bg-emerald-400 pulse-dot" />
            </span>
            Open to work · Available for internships
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-[5.5rem]"
          >
            <span className="block">Hi, I'm</span>
            <span className="gradient-text block">Ganesh Koli</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 flex flex-wrap items-baseline gap-2 text-lg text-muted-foreground sm:text-xl"
          >
            <span>I'm a</span>
            <Typewriter
              words={["Full-Stack Developer", "MERN Stack Enthusiast", "Problem Solver"]}
              className="font-semibold text-foreground"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-4 max-w-xl text-base text-muted-foreground/90"
          >
            Building modern web experiences with{" "}
            <span className="text-foreground">React, TypeScript</span> & the{" "}
            <span className="text-foreground">MERN Stack</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--cyan)] via-[var(--violet)] to-[var(--pink)] px-6 py-3 text-sm font-semibold text-primary-foreground glow-violet"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
            <a
              href={resumeUrl}
              download="Ganesh-Koli-Resume.pdf"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-card"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex items-center gap-3"
          >
            {socials.map(({ icon: Icon, href, label }) => (
              <MagneticButton
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="group inline-grid place-items-center rounded-full border border-border bg-card/40 p-3 text-muted-foreground backdrop-blur transition-colors hover:border-[var(--violet)] hover:text-foreground"
              >
                <Icon className="h-5 w-5" />
              </MagneticButton>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ x: tx, y: ty }}
          className="relative mx-auto"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-[var(--cyan)] via-[var(--violet)] to-[var(--pink)] opacity-50 blur-3xl" />
            <div className="rounded-full bg-gradient-to-tr from-[var(--cyan)] via-[var(--violet)] to-[var(--pink)] p-[3px] glow-violet">
              <div className="rounded-full bg-background p-2">
                <img
                  src={profileImg}
                  alt="Ganesh Koli"
                  width={320}
                  height={320}
                  className="h-64 w-64 rounded-full object-cover sm:h-80 sm:w-80"
                />
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="glass absolute -left-6 top-10 rounded-full px-3 py-1.5 text-xs font-medium"
            >
              ⚛️ React
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="glass absolute -right-4 bottom-12 rounded-full px-3 py-1.5 text-xs font-medium"
            >
              🟦 TypeScript
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="mb-12 text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--cyan)]">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}

function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="About" title="A bit about me" />
        <Reveal>
          <div className="glass rounded-3xl p-8 md:p-10 glow-soft">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I am a Computer Science Engineering student at{" "}
              <span className="text-foreground">
                D.Y. Patil College of Engineering & Technology, Kolhapur
              </span>{" "}
              with a strong interest in software development and web technologies. I have hands-on
              knowledge of <span className="text-foreground">C++, Python, Web Development</span> and
              the <span className="text-foreground">MERN Stack</span>. I enjoy building projects,
              solving programming problems and learning new technologies — and I'm actively seeking
              opportunities to apply my skills and gain practical industry experience.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Education" title="Academic journey" />
        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-[var(--cyan)] via-[var(--violet)] to-transparent md:left-1/2 md:block" />
          <div className="space-y-8">
            {education.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.1}>
                <div
                  className={`md:grid md:grid-cols-2 md:gap-8 ${i % 2 === 1 ? "md:[&>*:first-child]:col-start-2" : ""}`}
                >
                  <div className="glass relative rounded-3xl p-6 transition-all hover:-translate-y-1 hover:glow-soft">
                    <div className="absolute -left-2 top-6 hidden h-4 w-4 rounded-full bg-gradient-to-r from-[var(--cyan)] to-[var(--violet)] glow-violet md:block" />
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-card/60 px-3 py-1 text-xs text-muted-foreground">
                      <GraduationCap className="h-3.5 w-3.5" />
                      {e.period}
                    </div>
                    <h3 className="font-display text-lg font-semibold">{e.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{e.place}</p>
                    <p className="mt-4 flex items-baseline gap-2">
                      <span className="text-xs uppercase tracking-wider text-muted-foreground">
                        {e.scoreLabel}
                      </span>
                      <span className="font-display text-2xl font-bold gradient-text">
                        <CountUp to={e.scoreValue} decimals={e.decimals} suffix={e.scoreSuffix} />
                      </span>
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Projects" title="Things I've built" />
        <Reveal>
          <TiltCard className="border-glow group relative rounded-3xl">
            <div className="rounded-3xl bg-card/70 p-8 backdrop-blur md:p-10">
              <div
                className="flex flex-wrap items-start justify-between gap-4"
                style={{ transform: "translateZ(40px)" }}
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--cyan)]">
                    {project.subtitle}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
                    {project.title}
                  </h3>
                </div>
                <MagneticButton
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm font-medium transition-colors hover:border-[var(--violet)] hover:text-foreground"
                >
                  <Github className="h-4 w-4" />
                  View Code
                  <ExternalLink className="h-3.5 w-3.5" />
                </MagneticButton>
              </div>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, type: "spring", stiffness: 260, damping: 18 }}
                    className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-muted-foreground transition-all hover:border-[var(--cyan)] hover:text-foreground"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Skills" title="Tools of the trade" />
        <div className="grid items-center gap-8 md:grid-cols-2">
          <Reveal>
            <div className="glass rounded-3xl p-8 glow-soft">
              <div className="mb-6 flex items-center gap-3">
                <Code2 className="h-5 w-5 text-[var(--cyan)]" />
                <h3 className="font-display text-xl font-semibold">Languages</h3>
              </div>
              <div className="grid grid-cols-3 gap-4 sm:grid-cols-3">
                {languages.map((l, i) => (
                  <ProgressRing key={l.name} skill={l} delay={i * 0.1} />
                ))}
              </div>
              <div className="mt-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Soft Skills
                </p>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-background/40 px-3 py-1.5 text-xs"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass rounded-3xl p-8 glow-soft">
              <div className="mb-6 flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-[var(--violet)]" />
                <h3 className="font-display text-xl font-semibold">Skill Universe</h3>
              </div>
              <SkillOrbit skills={languages} />
              <p className="mt-4 text-center text-xs text-muted-foreground">
                Hover an orb to see proficiency
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ProgressRing({ skill, delay }: { skill: { name: string; level: number }; delay: number }) {
  const [hover, setHover] = useState(false);
  const size = 84;
  const stroke = 6;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, type: "spring", stiffness: 200, damping: 18 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative flex flex-col items-center gap-2"
    >
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <defs>
            <linearGradient id={`g-${skill.name}`} x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.82 0.16 195)" />
              <stop offset="60%" stopColor="oklch(0.7 0.22 295)" />
              <stop offset="100%" stopColor="oklch(0.75 0.2 340)" />
            </linearGradient>
          </defs>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            stroke="oklch(0.3 0.03 280 / 60%)"
            strokeWidth={stroke}
            fill="none"
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            stroke={`url(#g-${skill.name})`}
            strokeWidth={stroke}
            strokeLinecap="round"
            fill="none"
            strokeDasharray={c}
            initial={{ strokeDashoffset: c }}
            whileInView={{ strokeDashoffset: c - (c * skill.level) / 100 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          <span className="font-display text-sm font-bold">{skill.level}%</span>
        </div>
      </div>
      <span className="text-xs font-medium text-muted-foreground">{skill.name}</span>
      {hover && (
        <span className="pointer-events-none absolute -top-8 whitespace-nowrap rounded-md bg-background px-2 py-1 text-[10px] font-medium shadow-lg ring-1 ring-border">
          {skill.level}% proficiency
        </span>
      )}
    </motion.div>
  );
}

function Achievements() {
  return (
    <section id="achievements" className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Achievements" title="Beyond the code" />
        <Reveal>
          <div className="glass flex items-start gap-5 rounded-3xl p-8 glow-soft">
            <div className="rounded-2xl bg-gradient-to-br from-[var(--cyan)] via-[var(--violet)] to-[var(--pink)] p-3 glow-violet">
              <Trophy className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold">
                National-Level Throwball Player
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Represented Maharashtra in national throwball competitions — combining discipline,
                teamwork and competitive drive on the field with the same focus I bring to
                engineering.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  const [sending, setSending] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    const mailto = `mailto:ganeshkoli0149@gmail.com?subject=Portfolio%20message%20from%20${encodeURIComponent(String(name))}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;
    window.location.href = mailto;
    setTimeout(() => {
      setSending(false);
      toast.success("Opening your email client…");
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Contact" title="Let's build something" />
        <div className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="glass flex h-full flex-col gap-5 rounded-3xl p-8 glow-soft">
              <h3 className="font-display text-xl font-semibold">Get in touch</h3>
              <p className="text-sm text-muted-foreground">
                I'm open to internships, freelance projects and collaborations. Drop a line — I'll
                get back within a day.
              </p>
              <div className="space-y-3 pt-2">
                <a
                  href="mailto:ganeshkoli0149@gmail.com"
                  className="flex items-center gap-3 rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm transition-colors hover:border-[var(--cyan)]"
                >
                  <Mail className="h-4 w-4 text-[var(--cyan)]" />
                  ganeshkoli0149@gmail.com
                </a>
                <a
                  href="tel:+918010434421"
                  className="flex items-center gap-3 rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm transition-colors hover:border-[var(--violet)]"
                >
                  <Phone className="h-4 w-4 text-[var(--violet)]" />
                  +91 8010434421
                </a>
                <div className="flex items-center gap-3 rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  Kolhapur, Maharashtra, India
                </div>
              </div>
              <div className="mt-auto flex gap-3 pt-4">
                {socials.map(({ icon: Icon, href, label }) => (
                  <MagneticButton
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="inline-grid place-items-center rounded-full border border-border bg-background/40 p-3 text-muted-foreground transition-colors hover:border-[var(--violet)] hover:text-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </MagneticButton>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="glass rounded-3xl p-8 glow-soft">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Your name" />
                <Field label="Email" name="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="mt-4">
                <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project…"
                  className="w-full resize-none rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--violet)]"
                />
              </div>
              <MagneticButton
                type="submit"
                disabled={sending}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--cyan)] via-[var(--violet)] to-[var(--pink)] px-6 py-3 text-sm font-semibold text-primary-foreground glow-violet disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                {sending ? "Sending…" : "Send Message"}
              </MagneticButton>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        required
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--violet)]"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-border/60 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} Ganesh Koli. Crafted with React & Framer Motion.</p>
        <div className="flex gap-6">
          <a href="#about" className="hover:text-foreground">
            About
          </a>
          <a href="#projects" className="hover:text-foreground">
            Projects
          </a>
          <a href="#contact" className="hover:text-foreground">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
