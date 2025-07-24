import ChallengeBlog from "@/components/challenge-blog";

export default function WaterChallenge() {
  const content = {
    conceive: [
      "Identify the need for autonomous underwater vehicles (AUV) for deep marine exploration using inertial navigation systems and sonar for oceanic floor mapping.",
      "Define requirements for specialized sensors monitoring water quality including pH, temperature, salinity measurements and chemical contaminant detection.",
      "Conceptualize efficient hydrodynamic propulsion system with multiple thrusters enabling precise six-dimensional underwater movements.",
      "Establish specifications for underwater communication system using acoustic technology for real-time data transmission and localization."
    ],
    design: [
      "Design hydrodynamic hull using CFD simulation software to optimize water resistance and directional stability under various marine currents.",
      "Create system architecture integrating marine-grade waterproof microcontroller, pressure sensors, gyroscope, digital compass, ultrasonic sonar, and water quality sensors.",
      "Develop propulsion system with submersible motors, variable pitch propellers, and automated ballast tank buoyancy control system.",
      "Design underwater navigation algorithms using Kalman filters for sensor fusion and position estimation in GPS-denied environments."
    ],
    implement: [
      "Build waterproof housing with certified marine materials, redundant sealing system, and visualization windows for underwater cameras.",
      "Program underwater navigation algorithms with sensor fusion capabilities for precise position tracking.",
      "Implement acoustic communication system with optimized transmission frequencies and acoustic repeater network.",
      "Integrate and test all subsystems including navigation, propulsion, communication, and environmental monitoring."
    ],
    operate: [
      "Deploy functional autonomous submarine prototype with successful diving capabilities, stable navigation at controlled depths, and effective environmental data collection.",
      "Operate complete environmental monitoring system recording and transmitting water quality data in real-time with laboratory-verified scientific precision.",
      "Utilize remote control platform enabling underwater mission programming, surface GPS tracking, and automatic emergency recovery.",
      "Maintain comprehensive project documentation including hydrodynamic analysis, testing protocols, field mission results, and preventive maintenance guides."
    ]
  };

  const processImages = [
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1564415708827-2d2d2e2c5448?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1571406252890-8fd8b5d1ba99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  ];

  return (
    <ChallengeBlog
      title="Reto Agua"
      description="Sistemas subacuáticos inteligentes para exploración marina"
      heroImage="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600"
      colorClass="water-color"
      bgColor="bg-gradient-to-r from-blue-900/70 to-blue-600/50"
      challengeType="water"
      content={content}
      processImages={processImages}
    />
  );
}
