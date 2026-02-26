"use client";

import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex justify-between mb-10">
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm tracking-wider">
              CONTACT
            </h4>
            <div className="flex flex-row gap-6">
              <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                <span className="text-sm">+252 612 698 278</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
                <span className="text-sm">xafo.xubbi123@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm tracking-wider">
              FOLLOW
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/hafsa-apdullhi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground hover:opacity-80 transition-opacity"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:opacity-80 transition-opacity"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 text-center text-xs text-muted-foreground">
          <p>© 2025 Hafsa Abdullahi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
