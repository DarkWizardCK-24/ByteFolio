import { Github, Linkedin, Mail } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="glass border-t border-accent/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-center md:text-left">
            © 2025 <span className="text-accent font-semibold">Chaitanya Katare (Dark Wizard)</span>.
            All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/DarkWizardCK-24"
              aria-label="GitHub"
              className="group p-3 glass rounded-xl border border-accent/30 text-gray-400 hover:text-accent hover:border-accent/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/30"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/chaitanya-katare-3b765b281"
              aria-label="LinkedIn"
              className="group p-3 glass rounded-xl border border-accent/30 text-gray-400 hover:text-accent hover:border-accent/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/30"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              aria-label="Email"
              className="group p-3 glass rounded-xl border border-accent/30 text-gray-400 hover:text-accent hover:border-accent/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/30"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.instagram.com/the_keys_of_passion?igsh=MXV0bGVtd29ubzd0Zw%3D%3D&utm_source=qr"
              aria-label="Instagram"
              className="group p-3 glass rounded-xl border border-accent/30 text-gray-400 hover:text-accent hover:border-accent/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/30"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linktr.ee/DarkWizard_CK"
              aria-label="LinkTree"
              className="group p-3 glass rounded-xl border border-accent/30 text-gray-400 hover:text-accent hover:border-accent/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/30"
            >
              <SiLinktree size={20} />
            </a>
            <a
              href="https://www.fiverr.com/darkwizard103"
              aria-label="Fiverr"
              className="group relative p-3 glass rounded-xl border border-accent/30 text-gray-400 hover:text-accent hover:border-accent/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/30"
            >
              <TbBrandFiverr size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
