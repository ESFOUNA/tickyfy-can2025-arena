
import { Button } from "./ui/button";
import { ArrowRight, Trophy } from "lucide-react";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Set up Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 800 / 450, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    
    renderer.setSize(800, 450);
    renderer.setClearColor(0x000000, 0);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Create football
    const ballGeometry = new THREE.SphereGeometry(3, 32, 32);
    const ballTexture = new THREE.TextureLoader().load(
      "https://threejs.org/examples/textures/soccer.png"
    );
    const ballMaterial = new THREE.MeshPhongMaterial({ map: ballTexture });
    const football = new THREE.Mesh(ballGeometry, ballMaterial);
    scene.add(football);

    // Create facial recognition grid/frame
    const faceFrameGeometry = new THREE.BoxGeometry(7, 9, 0.1);
    const faceFrameMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x0FA0CE,
      transparent: true,
      opacity: 0.7,
      wireframe: true
    });
    const faceFrame = new THREE.Mesh(faceFrameGeometry, faceFrameMaterial);
    faceFrame.position.set(-6, 0, -2);
    scene.add(faceFrame);

    // Create ticket
    const ticketGeometry = new THREE.PlaneGeometry(6, 3);
    const ticketMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xffffff,
      side: THREE.DoubleSide
    });
    const ticket = new THREE.Mesh(ticketGeometry, ticketMaterial);
    ticket.position.set(6, 0, 0);
    scene.add(ticket);

    // QR code on ticket
    const qrGeometry = new THREE.PlaneGeometry(2, 2);
    const qrMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x000000,
      side: THREE.DoubleSide
    });
    const qrCode = new THREE.Mesh(qrGeometry, qrMaterial);
    qrCode.position.set(6, 0, 0.1);
    scene.add(qrCode);

    // Position camera
    camera.position.z = 15;

    // Animation loop
    let frameId: number;
    
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      
      // Rotate football
      football.rotation.y += 0.01;
      football.rotation.x += 0.005;
      
      // Pulse effect on face frame
      const pulseFactor = Math.sin(Date.now() * 0.002) * 0.1 + 0.9;
      faceFrame.scale.set(pulseFactor, pulseFactor, pulseFactor);
      
      // Hover effect on ticket
      ticket.position.y = Math.sin(Date.now() * 0.001) * 0.3;
      qrCode.position.y = ticket.position.y;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle responsive design
    const handleResize = () => {
      const container = canvasRef.current?.parentElement;
      if (container) {
        const width = container.clientWidth;
        const height = width * (9/16); // 16:9 aspect ratio
        
        if (width <= 450) {
          camera.position.z = 20; // Adjust camera for smaller screens
        } else {
          camera.position.z = 15;
        }
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    };
    
    // Set initial size
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      
      // Dispose resources
      ballGeometry.dispose();
      ballMaterial.dispose();
      faceFrameGeometry.dispose();
      faceFrameMaterial.dispose();
      ticketGeometry.dispose();
      ticketMaterial.dispose();
      qrGeometry.dispose();
      qrMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section 
      id="home" 
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-white to-blue-50 animate-fade-in dark:from-gray-900 dark:to-gray-800 dark:text-white"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 max-w-2xl">
            <div className="flex items-center mb-4">
              {/* TickeFy text removed per request */}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Modern Digital Ticketing for 
              <span className="text-morocco-red"> CAN </span>
              <span className="text-morocco-green">2025</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 dark:text-gray-300">
              TickeFy revolutionizes stadium access with secure, digital tickets and facial recognition technology for 
              the Africa Cup of Nations in Morocco.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-tickyfy-green hover:bg-tickyfy-green/90 text-white"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-tickyfy-blue text-tickyfy-blue hover:bg-tickyfy-blue/10 dark:border-tickyfy-blue/70 dark:text-tickyfy-blue/90"
                asChild
              >
                <a href="#features">See Features</a>
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="bg-white p-6 rounded-xl shadow-xl dark:bg-gray-800">
              {/* 3D Animation Canvas */}
              <canvas 
                ref={canvasRef} 
                className="w-full h-64 rounded-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-morocco-red/80 backdrop-blur-sm text-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-lg">Coming to Morocco</p>
                <p>January 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
