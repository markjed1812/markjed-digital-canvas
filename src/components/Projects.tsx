import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Crowdsourced Platform",
    description: "Full-stack e-commerce solution built with React, Node.js, Express, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://meyc-assist.page.gd/index.php?i=1",
    demo: "#"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates. Built using React, TypeScript, and Firebase for backend services.",
    tech: ["React", "TypeScript", "Firebase", "Tailwind"],
    github: "https://github.com/markjed1812",
    demo: "#"
  },
  {
    title: "Weather Dashboard",
    description: "Modern weather dashboard using OpenWeather API. Features include current weather, 7-day forecast, and location-based search with beautiful data visualizations.",
    tech: ["React", "API Integration", "Chart.js", "Vite"],
    github: "https://github.com/markjed1812",
    demo: "#"
  },
  {
    title: "Portfolio Generator",
    description: "Automated portfolio website generator for developers. Users can input their data and generate a customized portfolio with multiple themes.",
    tech: ["React", "Node.js", "Template Engine", "CSS"],
    github: "https://github.com/markjed1812",
    demo: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">Featured Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl animate-fade-in overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Code className="h-16 w-16 text-primary/50" />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/50 hover:bg-primary/10"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90"
                  asChild
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const Code = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

export default Projects;
