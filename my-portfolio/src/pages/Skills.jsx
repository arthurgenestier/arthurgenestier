import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      techs: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Vue.js", level: 80 }
      ]
    },
    {
      category: "Backend",
      techs: [
        { name: "Node.js", level: 75 },
        { name: "Express", level: 70 }
      ]
    },
    {
      category: "Outils",
      techs: [
        { name: "Git", level: 85 },
        { name: "Webpack", level: 75 },
        { name: "Docker", level: 65 }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12">Profil</h1>
      
      {skills.map((skillGroup, index) => (
        <motion.div 
          key={skillGroup.category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">{skillGroup.category}</h2>
          <div className="space-y-6">
            {skillGroup.techs.map(tech => (
              <div key={tech.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{tech.name}</span>
                  <span>{tech.level}%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${tech.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}