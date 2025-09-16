import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Monitor, 
  Brain,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Data Analysis",
      description: "Cleaning, preprocessing, and exploring datasets to deliver actionable insights.",
      icon: BarChart3,
      features: [
        "Data cleaning and preprocessing",
        "Exploratory data analysis",
        "Statistical analysis",
        "Actionable insights generation"
      ],
      gradient: "bg-gradient-primary",
      delay: "0s"
    },
    {
      title: "Dashboard Development",
      description: "Interactive dashboards with Python, Dash, and Plotly for effective data storytelling.",
      icon: Monitor,
      features: [
        "Interactive dashboard creation",
        "Real-time data visualization",
        "Custom Plotly charts",
        "User-friendly interfaces"
      ],
      gradient: "bg-gradient-accent",
      delay: "0.1s"
    },
    {
      title: "Machine Learning Models",
      description: "Predictive modeling using Scikit-learn for classification and regression tasks.",
      icon: Brain,
      features: [
        "Classification algorithms",
        "Regression modeling",
        "Model evaluation & optimization",
        "Predictive analytics"
      ],
      gradient: "bg-gradient-secondary",
      delay: "0.2s"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive data science solutions tailored to your business needs
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="glass-card hover-lift border-0 overflow-hidden animate-scale-in group"
                style={{ animationDelay: service.delay }}
              >
                <CardContent className="p-0 h-full">
                  {/* Header */}
                  <div className={`${service.gradient} p-6 text-white group-hover:scale-105 transition-transform`}>
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-white/20 rounded-lg mr-4">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="font-semibold text-xl">{service.title}</h3>
                    </div>
                    <p className="text-white/90 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Features */}
                  <div className="p-6 flex-1">
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      onClick={scrollToContact}
                      variant="outline" 
                      className="w-full gradient-border hover:scale-105 transition-all group"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4">
              My <span className="gradient-text">Process</span>
            </h3>
            <p className="text-muted-foreground">
              A structured approach to delivering quality results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Understand", description: "Analyze your requirements and data" },
              { step: "02", title: "Explore", description: "Deep dive into data exploration" },
              { step: "03", title: "Build", description: "Develop models and visualizations" },
              { step: "04", title: "Deliver", description: "Present insights and solutions" }
            ].map((item, index) => (
              <div 
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                  )}
                </div>
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;