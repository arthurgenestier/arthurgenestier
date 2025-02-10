import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Projet 1",
      description: "Description du projet",
      technologies: ["React", "Node.js"],
      image: "/project1.jpg",
      github: "https://github.com/...",
      demo: "https://..."
    },
    // Ajoutez vos autres projets ici
  ];

  const filters = ["all", "React", "Node.js", "Vue", "Angular"];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.technologies.includes(filter));

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Mes Projets</h1>
      
      <div className="flex gap-4 mb-8 overflow-x-auto">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded whitespace-nowrap ${
              filter === f 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex gap-2 mb-4">
                {project.technologies.map(tech => (
                  <span 
                    key={tech}
                    className="px-2 py-1 bg-gray-200 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a 
                  href={project.github}
                  className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a 
                  href={project.demo}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}