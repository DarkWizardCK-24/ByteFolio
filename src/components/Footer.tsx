import { Github, Linkedin, Mail } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";

const socials = [
  { href: "https://github.com/DarkWizardCK-24", label: "GitHub", Icon: Github },
  { href: "https://www.linkedin.com/in/chaitanya-katare-3b765b281", label: "LinkedIn", Icon: Linkedin },
  { href: "https://www.fiverr.com/darkwizard103", label: "Fiverr", Icon: TbBrandFiverr },
  {
    href: "https://www.instagram.com/the_keys_of_passion?igsh=MXV0bGVtd29ubzd0Zw%3D%3D&utm_source=qr",
    label: "Instagram",
    Icon: FaInstagram,
  },
  { href: "https://linktr.ee/DarkWizard_CK", label: "Linktree", Icon: SiLinktree },
];

const Footer: React.FC = () => (
  <footer className="rule-top bg-primary">
    {/* The page ends on the one thing it wants the reader to do. */}
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="flex flex-col gap-8 border-b border-line pb-16 md:flex-row md:items-end md:justify-between">
        <div className="max-w-lg">
          <h2 className="text-[2.25rem] font-bold leading-[1.05] text-text sm:text-5xl">
            Got something
            <br />
            you want built?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            I&apos;m open to full-time roles and freelance work — mobile, web, or the services
            underneath. Tell me what you&apos;re working on.
          </p>
        </div>

        <div className="flex flex-col items-start gap-3">
          <a
            href="mailto:chaitanya.katare@aaibuzz.com"
            className="flex items-center gap-2.5 rounded-card bg-accent px-6 py-3.5 font-semibold text-primary shadow-glow transition-colors duration-300 hover:bg-accent-soft"
          >
            <Mail size={17} />
            chaitanya.katare@aaibuzz.com
          </a>
          <p className="flex items-center gap-2 pl-1 text-xs text-faint">
            <span className="h-1.5 w-1.5 rounded-full bg-live" aria-hidden />
            Usually replies within a day
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse gap-6 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-faint">
          © {new Date().getFullYear()} Chaitanya Katare. Built with Next.js and Tailwind CSS.
        </p>

        <div className="flex gap-1">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-card text-faint transition-colors duration-200 hover:bg-raised hover:text-text"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </section>
  </footer>
);

export default Footer;
