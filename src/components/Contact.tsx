import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Phone, 
  Linkedin,
  Send,
  MapPin,
  Loader2
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Initialize EmailJS
  emailjs.init("eIi8OMqzVTLJiXQbg");

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mrymkhtab00@gmail.com",
      link: "mailto:mrymkhtab00@gmail.com",
      gradient: "bg-gradient-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "01065631285",
      link: "tel:+201065631285",
      gradient: "bg-gradient-accent"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Maryem Rabie",
      link: "https://linkedin.com/in/maryem-rabie",
      gradient: "bg-gradient-secondary"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        "service_lffhrhn", // Service ID
        "template_id8d1ju", // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Failed to Send",
        description: "There was an error sending your message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next data project? Let's discuss how we can work together 
            to unlock insights from your data.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply chat about data science and machine learning. Feel free to reach out through 
                any of the channels below.
              </p>
            </div>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card 
                    key={index}
                    className="glass-card hover-lift border-0 overflow-hidden animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-0">
                      <a 
                        href={info.link}
                        className="flex items-center p-6 hover:bg-muted/20 transition-colors group"
                        target={info.icon === Linkedin ? "_blank" : undefined}
                        rel={info.icon === Linkedin ? "noopener noreferrer" : undefined}
                      >
                        <div className={`${info.gradient} p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
                            {info.label}
                          </p>
                          <p className="text-foreground font-medium text-lg">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Location Info */}
            <Card className="glass-card border-0">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-gradient-accent rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
                      Location
                    </p>
                    <p className="text-foreground font-medium text-lg">
                      Beni-Suef, Egypt
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up stagger-1">
            <Card className="glass-card border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block">
                        Your Name
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        required
                        className="transition-all focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block">
                        Email Address
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                        className="transition-all focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                      Subject
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="transition-all focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me more about your project or inquiry..."
                      rows={6}
                      required
                      className="transition-all focus:ring-2 focus:ring-primary/20 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    disabled={isLoading}
                    className="w-full bg-gradient-primary hover:scale-105 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;