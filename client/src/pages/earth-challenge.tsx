import ChallengeBlog from "@/components/challenge-blog";

export default function EarthChallenge() {
  const content = {
    conceive: [
      "Identify the need for autonomous ground vehicles in challenging terrain navigation and obstacle detection applications.",
      "Define requirements for real-time terrain mapping using LiDAR sensors and stereoscopic cameras for 3D environmental analysis.",
      "Conceptualize machine learning algorithms for dynamic obstacle recognition and adaptive route planning in changing terrain conditions.",
      "Establish specifications for IoT communication system enabling remote monitoring and telepresence control capabilities."
    ],
    design: [
      "Design and model 3D chassis using CAD software, considering weight distribution, center of gravity, and structural resistance for various terrain types.",
      "Create detailed system architecture integrating ESP32 microcontroller, HC-SR04 ultrasonic sensors, OV2640 camera, GPS module, and stepper motor traction system.",
      "Develop control algorithms using Python and OpenCV computer vision libraries for image processing and obstacle detection.",
      "Design intelligent traction system with omnidirectional wheels for complex movements and enhanced maneuverability in confined spaces."
    ],
    implement: [
      "Build physical prototype using 3D printing for chassis, electronic circuit assembly, and sensor calibration procedures.",
      "Program control algorithms with real-time obstacle detection and autonomous navigation capabilities.",
      "Implement wireless communication system for telemetry data transmission and remote control command reception.",
      "Integrate and test all subsystems including navigation, control, communication, and power management."
    ],
    operate: [
      "Deploy functional autonomous ground vehicle prototype with successful navigation on multiple surface types and effective obstacle detection up to 2 meters distance.",
      "Operate intelligent control system enabling 4 hours continuous autonomous operation on single battery charge with complex mission completion capabilities.",
      "Utilize complete mobile user interface for visual route programming, real-time sensor monitoring, and emergency manual vehicle control.",
      "Maintain comprehensive technical documentation including electronic schematics, commented source code, user manual, and system demonstration videos."
    ]
  };

  const processImages = [
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  ];

  return (
    <ChallengeBlog
      title="Reto Tierra"
      description="Desarrollo de vehículos autónomos terrestres con navegación inteligente"
      heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600"
      colorClass="earth-color"
      bgColor="bg-gradient-to-r from-purple-900/70 to-purple-600/50"
      challengeType="earth"
      content={content}
      processImages={processImages}
    />
  );
}
