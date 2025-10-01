import { Scale } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Scale className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Bardhar & Bardhar</h3>
                <p className="text-xs text-muted-foreground">Associates</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Three generations of legal excellence serving Rajasthan since 1950.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#legacy" className="hover:text-primary transition-colors">
                  Our Legacy
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-primary transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#practice" className="hover:text-primary transition-colors">
                  Practice Areas
                </a>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Practice Areas</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Revenue Law</li>
              <li>Civil Law</li>
              <li>Criminal Law</li>
              <li>Family Law</li>
              <li>Banking & Finance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>B-18/F, Bardhar Lane</li>
              <li>Bani Park, Jaipur - 302016</li>
              <li>Rajasthan, India</li>
              <li className="pt-2">
                <a href="tel:01412200967" className="hover:text-primary transition-colors">
                  0141-2200967
                </a>
              </li>
              <li>
                <a
                  href="mailto:bardharandbardhar@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  bardharandbardhar@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Bardhar & Bardhar Associates. All rights reserved.
          </p>
          <p className="mt-2">
            Disclaimer: This website is for informational purposes only and does not constitute
            legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
