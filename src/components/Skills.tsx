import { Card } from "@/components/ui/card";

const skills = [
  { name: "HTML5", color: "text-orange-500" },
  { name: "CSS3", color: "text-blue-500" },
  { name: "JavaScript", color: "text-yellow-500" },
  { name: "TypeScript", color: "text-blue-400" },
  { name: "React", color: "text-cyan-400" },
  { name: "Node.js", color: "text-green-500" },
  { name: "Express", color: "text-gray-400" },
  { name: "MongoDB", color: "text-green-600" },
  { name: "Git", color: "text-orange-600" },
  { name: "GitHub", color: "text-purple-400" },
  { name: "Vite", color: "text-purple-500" },
  { name: "Tailwind CSS", color: "text-cyan-500" }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">Skills & Technologies</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer animate-fade-in group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="text-center">
                <div className={`text-3xl mb-2 ${skill.color} group-hover:scale-110 transition-transform`}>
                  ●
                </div>
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
