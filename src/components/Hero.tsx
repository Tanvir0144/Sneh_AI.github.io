import React from 'react';
import { Button } from './ui/button';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-black"></div>
        <img
          src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-kCV02D7F1k2s3Yg5c7aQ2iZg/user-K4EaYA09dY77XCxIuZb5gs4V/img-q3uC7G0jG3h7E4f5Z6c9V1b3.png?st=2024-03-06T15%3A25%3A58Z&se=2024-03-06T17%3A25%3A58Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&sks=b&skv=2021-08-06&sig=b4J/T/Cpr8HhM9qE4s7d6J4Z7G8H2r3g9k6Y3vF2d6I%3D"
          alt="Abstract AI background with warm gradients"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
          Meet Sneh AI
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/80">
          Your friendly and caring AI companion, here to help you with your daily tasks and creative ideas.
        </p>
        <Button variant="hero" size="lg">Get Started</Button>
      </div>
    </div>
  );
};

export default Hero;