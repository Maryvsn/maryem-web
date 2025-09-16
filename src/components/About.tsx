import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, GraduationCap, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get to know more about my journey, education, and passion for data science
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <div className="animate-slide-up">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">My Story</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  I'm Maryem Rabie, a passionate data enthusiast with a strong interest in data analysis, 
                  machine learning, and visualization. I enjoy transforming raw data into meaningful insights 
                  and building solutions that solve real-world problems.
                </p>
              </div>

              <div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  My journey in data science combines technical expertise with creative problem-solving. 
                  I believe that every dataset tells a story, and I'm dedicated to uncovering those stories 
                  to drive meaningful decision-making and innovation.
                </p>
              </div>

              <div className="pt-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:scale-105 transition-all duration-300"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="animate-slide-up stagger-1">
            <Card className="glass-card hover-lift border-0 p-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-primary rounded-lg mr-4">
                    <GraduationCap className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary">Education</h3>
                    <p className="text-muted-foreground">Academic Background</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border-l-2 border-primary/30 pl-4 py-2">
                    <h4 className="font-semibold text-lg mb-2">Bachelor's in Artificial Intelligence</h4>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        <span>Faculty of Computers and Artificial Intelligence</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        <span>Beni-Suef National University</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        <span>Expected Graduation: 2026</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm text-muted-foreground italic">
                    "Specializing in machine learning algorithms, data mining techniques, 
                    and artificial intelligence applications in real-world scenarios."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Projects Completed", color: "text-primary" },
              { number: "5+", label: "Technologies Mastered", color: "text-accent" },
              { number: "2+", label: "Years Learning", color: "text-secondary" },
              { number: "100%", label: "Passion & Dedication", color: "text-gradient-primary" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center animate-scale-in hover-lift p-6 rounded-lg bg-card/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;