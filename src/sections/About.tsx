"use client";

import { Smartphone, Globe, Database, Server } from "lucide-react";
import AboutCard from "@/components/AboutCard";
import SectionHeader from "@/components/SectionHeader";

const cards = [
  {
    title: "Flutter development",
    description:
      "Cross-platform mobile apps in Flutter and Dart — one codebase, shipped to both the Play Store and the App Store.",
    icon: Smartphone,
  },
  {
    title: "Web development",
    description:
      "Responsive product work in Next.js, React and Tailwind CSS, built to stay fast and accessible as it grows.",
    icon: Globe,
  },
  {
    title: "Databases",
    description:
      "Schema design and query work across SQL and NoSQL, with an eye on what happens once the data gets big.",
    icon: Database,
  },
  {
    title: "DevOps",
    description:
      "Linux, CI/CD pipelines and containers — learning how code gets from a commit to production reliably.",
    icon: Server,
    badge: "Learning",
  },
];

const About: React.FC = () => (
  <section id="about" className="rule-top grid-texture relative overflow-hidden bg-primary py-24 sm:py-32">
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        title="What I do"
        lede="Four things I spend my time on — three I build with today, and one I'm deliberately working my way into."
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, index) => (
          <AboutCard key={card.title} {...card} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default About;
