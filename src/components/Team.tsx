
import { Linkedin, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  linkedin: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Yasmine Znatni",
    role: "UI/UX Designer",
    image: "/lovable-uploads/7e302de2-4921-4b19-b749-7461a8d04af5.png",
    linkedin: "https://www.linkedin.com/in/yasmine-znatni/",
  },
  {
    name: "Saad Boukili",
    role: "Frontend Developer",
    image: "/lovable-uploads/aa614a98-44ad-47a4-ac41-c678e52b7f0c.png",
    linkedin: "https://www.linkedin.com/in/saad-boukili-a68303224/",
  },
  {
    name: "Abdelali Chergaoui",
    role: "Backend Developer",
    image: "/lovable-uploads/e220d8c5-a68a-44e4-a563-d5d9ffa0db0c.png",
    linkedin: "https://www.linkedin.com/in/abdelali-chergaoui-b62b61225/",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <div className="w-24 h-1 bg-tickyfy-blue mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            The talented individuals behind the TickyFy project, working together to revolutionize
            the ticketing experience for CAN 2025 in Morocco.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.name}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow team-card"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <div className="flex items-center justify-between">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-tickyfy-blue text-tickyfy-blue hover:bg-tickyfy-blue/10"
                    asChild
                  >
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    asChild
                  >
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-500 hover:text-tickyfy-green">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
