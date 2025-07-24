import ChallengeBlog from "@/components/challenge-blog";

export default function AirChallenge() {
  const content = {
    conceive: [
      "Identify the need for autonomous multirotor drones with advanced intelligent flight capabilities, precision GPS navigation, and automatic aerial obstacle avoidance.",
      "Define requirements for computer vision systems enabling pattern recognition, target tracking, and real-time search and rescue capabilities.",
      "Conceptualize adaptive flight control system automatically compensating adverse weather conditions including crosswinds and turbulence.",
      "Establish specifications for artificial intelligence integration enabling autonomous decision-making during complex missions and flight route optimization."
    ],
    design: [
      "Design aerodynamic frame using CFD simulations to optimize energy efficiency, flight stability, and resistance to external disturbances.",
      "Create system architecture integrating Pixhawk flight controller, brushless motors, ESCs, carbon fiber propellers, and long-range telemetry system.",
      "Develop navigation system with RTK GPS, 9-axis IMU, precision barometer, and optical flow sensors for indoor stabilization.",
      "Design flight control algorithms using PX4 Autopilot with custom MAVLink missions and ground control station integration."
    ],
    implement: [
      "Build physical prototype with optimized aerodynamic frame and integrated flight systems.",
      "Program flight control algorithms with PID parameter fine-tuning and IMU vibration dampening systems.",
      "Implement vision system with stabilized gimbal camera, real-time image processing, and deep learning object detection algorithms.",
      "Integrate and test all subsystems including navigation, flight control, communication, and mission execution."
    ],
    operate: [
      "Deploy functional autonomous drone prototype with advanced flight capabilities, precision navigation, and successful execution of complex programmed missions.",
      "Operate visual recognition system with capability to detect and track specific objects, useful for search and rescue applications.",
      "Utilize complete mission control platform with graphical interface for flight planning, real-time monitoring, and post-flight telemetry data analysis.",
      "Maintain detailed technical documentation including flight manuals, safety procedures, performance analysis, and system capability demonstration videos."
    ]
  };

  const processImages = [
    "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1548558811-14d3e3de6d45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  ];

  return (
    <ChallengeBlog
      title="Reto Aire"
      description="Sistemas aéreos no tripulados con inteligencia avanzada"
      heroImage="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600"
      colorClass="air-color"
      bgColor="bg-gradient-to-r from-cyan-900/70 to-cyan-600/50"
      challengeType="air"
      content={content}
      processImages={processImages}
    />
  );
}
