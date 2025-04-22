
import { Card, CardContent } from "./ui/card";

const frontendTechs = [
  { name: "React.js", description: "UI component library" },
  { name: "TypeScript", description: "Type-safe JavaScript" },
  { name: "Tailwind CSS", description: "Utility-first styling" },
  { name: "React Router", description: "Navigation management" },
];

const backendTechs = [
  { name: "Node.js", description: "Runtime environment" },
  { name: "Express", description: "Web framework" },
  { name: "MongoDB", description: "NoSQL database" },
  { name: "JWT", description: "Authentication" },
];

const libraries = [
  { name: "qrcode.react", description: "QR code generation" },
  { name: "jsPDF", description: "PDF generation" },
  { name: "html2canvas", description: "Ticket capture" },
  { name: "react-confetti", description: "Celebrations" },
];

export default function Technical() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Specifications</h2>
          <div className="w-24 h-1 bg-tickyfy-blue mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Built with modern technologies to ensure security, performance, and a seamless user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-center text-tickyfy-green">Frontend</h3>
            <Card className="h-full">
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {frontendTechs.map((tech) => (
                    <li key={tech.name} className="border-b border-gray-100 pb-3">
                      <div className="font-medium">{tech.name}</div>
                      <div className="text-sm text-gray-600">{tech.description}</div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-center text-morocco-red">Backend</h3>
            <Card className="h-full">
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {backendTechs.map((tech) => (
                    <li key={tech.name} className="border-b border-gray-100 pb-3">
                      <div className="font-medium">{tech.name}</div>
                      <div className="text-sm text-gray-600">{tech.description}</div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-center text-tickyfy-blue">Key Libraries</h3>
            <Card className="h-full">
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {libraries.map((lib) => (
                    <li key={lib.name} className="border-b border-gray-100 pb-3">
                      <div className="font-medium">{lib.name}</div>
                      <div className="text-sm text-gray-600">{lib.description}</div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
