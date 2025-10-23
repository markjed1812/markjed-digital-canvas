import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(20, 25, 38, 0.95), rgba(20, 25, 38, 0.98)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Profile Picture Placeholder */}
          <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-blue-500 p-1 animate-glow">
            <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-6xl font-bold text-primary">
              MA
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">Markjed Areno</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-4">
            Full Stack Developer & IT Student
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Turning ideas into scalable digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all"
            >
              View Projects
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-primary/50 hover:bg-primary/10"
            >
              Contact Me
              <Mail className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="flex gap-6 justify-center">
            <a 
              href="https://github.com/markjed1812" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="mailto:markjedareno@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
