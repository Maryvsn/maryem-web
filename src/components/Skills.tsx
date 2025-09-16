import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  BarChart3, 
  Brain,
  FileSpreadsheet,
  Palette
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "SQL"],
      color: "bg-primary",
      gradient: "bg-gradient-primary"
    },
    {
      title: "Libraries & Tools",
      icon: FileSpreadsheet,
      skills: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
      color: "bg-accent",
      gradient: "bg-gradient-accent"
    },
    {
      title: "Database Systems",
      icon: Database,
      skills: ["MySQL"],
      color: "bg-secondary",
      gradient: "bg-gradient-secondary"
    },
    {
      title: "Data Analysis & Visualization",
      icon: BarChart3,
      skills: ["Data Cleaning", "Data Preprocessing", "Statistical Analysis", "Data Storytelling"],
      color: "bg-primary",
      gradient: "bg-gradient-primary"
    },
    {
      title: "Dashboard Development",
      icon: Brain,
      skills: ["Dash", "Plotly", "Interactive Dashboards"],
      color: "bg-accent",
      gradient: "bg-gradient-accent"
    },
    {
      title: "Machine Learning",
      icon: Brain,
      skills: ["Classification", "Regression", "Prediction Models"],
      color: "bg-secondary",
      gradient: "bg-gradient-secondary"
    },
    {
      title: "Software Tools",
      icon: Palette,
      skills: ["Microsoft Word", "PowerPoint", "Canva"],
      color: "bg-accent",
      gradient: "bg-gradient-accent"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for transforming data into actionable insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className="glass-card hover-lift border-0 overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  {/* Header with gradient background */}
                  <div className={`${category.gradient} p-6 text-white`}>
                    <div className="flex items-center mb-4">
                      <IconComponent className="h-6 w-6 mr-3" />
                      <h3 className="font-semibold text-lg">{category.title}</h3>
                    </div>
                  </div>
                  
                  {/* Skills list */}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex}
                          variant="secondary"
                          className="hover:scale-105 transition-transform cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Skills Progress Bars - Visual representation */}
        <div className="mt-20 animate-fade-in">
          <h3 className="text-2xl font-semibold text-center mb-12">
            Proficiency <span className="gradient-text">Levels</span>
          </h3>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { skill: "Python", level: 85, color: "bg-primary" },
              { skill: "Data Analysis", level: 90, color: "bg-accent" },
              { skill: "Machine Learning", level: 75, color: "bg-secondary" },
              { skill: "SQL", level: 80, color: "bg-primary" },
              { skill: "Data Visualization", level: 85, color: "bg-accent" },
              { skill: "Dashboard Development", level: 70, color: "bg-secondary" }
            ].map((item, index) => (
              <div 
                key={index}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-foreground">{item.skill}</span>
                  <span className="text-sm text-muted-foreground">{item.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${item.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;