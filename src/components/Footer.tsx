import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-hero text-white py-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Side - Brand */}
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <h3 className="text-2xl font-bold mb-2">Maryem Rabie</h3>
            <p className="text-white/80 mb-4">
              Aspiring Data Analyst & Machine Learning Enthusiast
            </p>
            <p className="text-white/60 text-sm max-w-md">
              Transforming raw data into meaningful insights and building solutions 
              that solve real-world problems.
            </p>
          </div>

          {/* Right Side - Links and Social */}
          <div className="text-center lg:text-right">
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
              <nav className="flex flex-wrap justify-center gap-6">
                {[
                  { href: "#home", label: "Home" },
                  { href: "#about", label: "About" },
                  { href: "#skills", label: "Skills" },
                  { href: "#services", label: "Services" },
                  { href: "#portfolio", label: "Portfolio" },
                  { href: "#contact", label: "Contact" },
                ].map((item) => (
                  <button
                    key={item.href}
                    onClick={() => {
                      const element = document.querySelector(item.href);
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-white/80 hover:text-white text-sm transition-colors hover:scale-105"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="border-white/30 text-white hover:bg-white/10 group"
            >
              <ArrowUp className="mr-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-white/60">
          <p className="mb-4 sm:mb-0">
            © {currentYear} Maryem Rabie. All rights reserved.
          </p>
          <p className="flex items-center">
            Built with <Heart className="h-4 w-4 mx-1 text-red-400" /> and lots of data
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;