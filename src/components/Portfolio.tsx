import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Github,
  BarChart3,
  Globe,
  Database,
  Brain
} from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Hotel Dashboard Analysis",
      description: "Built an interactive dashboard to analyze hotel booking data using Python, Dash, and Plotly. Features comprehensive data visualization and real-time insights.",
      tech: ["Python", "Dash", "Plotly", "Pandas"],
      icon: BarChart3,
      gradient: "bg-gradient-primary",
      year: "2024",
      category: "Data Visualization"
    },
    {
      title: "Titanic Dataset Analysis & Prediction",
      description: "Conducted comprehensive data analysis and built predictive models on the famous Titanic dataset. Achieved high accuracy in survival prediction.",
      tech: ["Python", "Scikit-learn", "Matplotlib", "Pandas"],
      icon: Brain,
      gradient: "bg-gradient-secondary",
      year: "2024",
      category: "Machine Learning"
    },
    {
      title: "Drink Shop Website",
      description: "A functional website project showcasing web development fundamentals and user interface design principles.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      icon: Globe,
      gradient: "bg-gradient-accent",
      year: "2022",
      category: "Web Development"
    },
    {
      title: "Mini Data Analysis Projects",
      description: "Various small-scale projects focusing on data manipulation, analysis, and visualization using Pandas and Matplotlib.",
      tech: ["Python", "Pandas", "Matplotlib", "NumPy"],
      icon: Database,
      gradient: "bg-gradient-primary",
      year: "2023-2024",
      category: "Data Analysis"
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore my latest projects showcasing data analysis, machine learning, and visualization skills
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
          {["All", "Data Analysis", "Machine Learning", "Data Visualization", "Web Development"].map((filter, index) => (
            <Button 
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className={index === 0 ? "bg-gradient-primary" : "gradient-border"}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index}
                className="glass-card hover-lift border-0 overflow-hidden animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  {/* Project Header */}
                  <div className={`${project.gradient} p-6 text-white group-hover:scale-105 transition-transform`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="p-2 bg-white/20 rounded-lg mr-4">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-xl mb-1">{project.title}</h3>
                          <div className="flex items-center text-white/80 text-sm">
                            <Badge variant="secondary" className="bg-white/20 text-white border-0 mr-2">
                              {project.category}
                            </Badge>
                            <span>{project.year}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-white/90 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Project Details */}
                  <div className="p-6">
                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="font-medium text-sm text-muted-foreground mb-3 uppercase tracking-wide">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="outline"
                            className="hover:scale-105 transition-transform"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex-1 gradient-border group"
                      >
                        <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                        View Project
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex-1 group"
                      >
                        <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in">
          <div className="bg-gradient-hero p-8 rounded-xl text-white">
            <h3 className="text-2xl font-semibold mb-4">
              Interested in working together?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate on data-driven projects. 
              Let's discuss how we can turn your data into valuable insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get In Touch
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;