import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import maryemProfile from "@/assets/maryem-profile.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary/20 rounded-full blur-xl animate-pulse"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <div className="mb-6">
              <p className="text-primary font-medium text-lg mb-2 animate-fade-in stagger-1">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in stagger-2">
                <span className="gradient-text">Maryem Rabie</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-muted-foreground mb-6 animate-fade-in stagger-3">
                Aspiring Data Analyst & <br />
                Machine Learning Enthusiast
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl animate-fade-in stagger-4">
                Transforming raw data into meaningful insights and building solutions 
                that solve real-world problems through the power of data science and machine learning.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in stagger-4">
              <Button
                onClick={() => scrollToSection("#portfolio")}
                size="lg"
                className="bg-gradient-primary hover:scale-105 transition-all duration-300 hero-glow"
              >
                View Portfolio
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={() => scrollToSection("#contact")}
                variant="outline"
                size="lg"
                className="gradient-border hover:scale-105 transition-all duration-300"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-portfolio-hero hover:scale-105 transition-all duration-500">
                <img
                  src={maryemProfile}
                  alt="Maryem Rabie - Data Analyst & ML Enthusiast"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating elements around profile */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-accent/30 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -left-8 w-6 h-6 bg-secondary rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("#about")}
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
          >
            <ArrowDown className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;