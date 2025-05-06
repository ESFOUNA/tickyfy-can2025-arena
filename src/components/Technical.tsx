
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import { 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiReactrouter,
  SiNodedotjs,
  SiSpringboot,
  SiTensorflow,
  SiMysql,
  SiJsonwebtokens
} from "react-icons/si";
import { useIsMobile } from "@/hooks/use-mobile";

const technologies = [
  {
    category: "Frontend",
    items: [
      { 
        name: "React.js", 
        description: "UI component library for building interactive interfaces",
        icon: SiReact,
        color: "text-blue-400"
      },
      { 
        name: "TypeScript", 
        description: "Type-safe JavaScript for robust development",
        icon: SiTypescript,
        color: "text-blue-600"
      },
      { 
        name: "Tailwind CSS", 
        description: "Utility-first CSS framework for rapid UI development",
        icon: SiTailwindcss,
        color: "text-cyan-400"
      },
      { 
        name: "React Router", 
        description: "Declarative routing for React applications",
        icon: SiReactrouter,
        color: "text-red-400"
      },
    ]
  },
  {
    category: "Backend",
    items: [
      { 
        name: "Node.js", 
        description: "JavaScript runtime for scalable server-side applications",
        icon: SiNodedotjs,
        color: "text-green-500"
      },
      { 
        name: "Spring Boot", 
        description: "Java-based framework for building robust REST APIs",
        icon: SiSpringboot,
        color: "text-green-400"
      },
      { 
        name: "JWT", 
        description: "Secure authentication and authorization",
        icon: SiJsonwebtokens,
        color: "text-purple-400"
      },
    ]
  },
  {
    category: "AI & Data",
    items: [
      { 
        name: "TensorFlow", 
        description: "Open-source machine learning framework",
        icon: SiTensorflow,
        color: "text-orange-500"
      },
      { 
        name: "MySQL", 
        description: "Relational database management system",
        icon: SiMysql,
        color: "text-blue-500"
      },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function Technical() {
  const isMobile = useIsMobile();

  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-white">Technical Stack</h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4 md:mb-6"></div>
          <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-300 px-2">
            Built with cutting-edge technologies to ensure security, performance, and a seamless user experience.
          </p>
        </div>

        <motion.div 
          className={`grid grid-cols-1 ${isMobile ? '' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6 md:gap-8`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {technologies.map((category) => (
            <div key={category.category} className="space-y-6 md:space-y-8">
              <h3 className="text-xl md:text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {category.category}
              </h3>
              <div className="space-y-4 md:space-y-6">
                {category.items.map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={cardVariants}
                    whileHover={{ scale: isMobile ? 1.01 : 1.02 }}
                    className="group"
                  >
                    <Card className="relative overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <CardContent className="p-4 md:p-6">
                        <div className="flex items-center space-x-3 md:space-x-4">
                          <tech.icon className={`w-6 h-6 md:w-8 md:h-8 ${tech.color} flex-shrink-0`} />
                          <div>
                            <h4 className="text-base md:text-lg font-semibold text-white">{tech.name}</h4>
                            <p className="text-xs md:text-sm text-gray-400">{tech.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
