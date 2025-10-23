import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="gradient-text">About Me</span>
          </h2>
          
          <Card className="p-8 bg-card border-border shadow-xl animate-fade-in">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              I'm <span className="text-primary font-semibold">Markjed Areno</span>, a passionate full-stack developer and computer science student. 
              I enjoy solving problems with clean, efficient code and creating modern web applications that make an impact.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              With experience in building scalable applications using React, Node.js, and MongoDB, I strive to deliver 
              solutions that not only meet requirements but exceed expectations. I'm constantly learning new technologies 
              and contributing to the developer community.
            </p>

            <div className="flex justify-center">
              <Button 
                variant="outline" 
                className="border-primary/50 hover:bg-primary/10"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
