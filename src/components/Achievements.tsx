import { Card } from "@/components/ui/card";
import { Trophy, Code, GitBranch } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Thesis & Capstone Projects",
    description: "Created and completed multiple thesis/capstone projects for students, delivering high-quality solutions."
  },
  {
    icon: Code,
    title: "Full-Stack Applications",
    description: "Built several full-stack web applications using React, Node.js, and MongoDB with modern best practices."
  },
  {
    icon: GitBranch,
    title: "Continuous Learning",
    description: "Actively learning modern frameworks and contributing to open-source projects in the developer community."
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">Achievements & Highlights</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <achievement.icon className="h-8 w-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {achievement.title}
              </h3>
              
              <p className="text-muted-foreground">
                {achievement.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
