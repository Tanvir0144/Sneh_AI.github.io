import React from 'react';

const features = [
  {
    title: "Personalized Assistance",
    description: "Sneh AI learns your preferences to provide truly personalized help.",
  },
  {
    title: "24/7 Support",
    description: "Always available to answer your questions and assist you anytime.",
  },
  {
    title: "Creative Ideas",
    description: "Get inspired with creative suggestions for your projects and hobbies.",
  },
];

const Features: React.FC = () => {
  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Why You'll Love Sneh AI</h2>
          <p className="text-muted-foreground mt-2">Discover what makes your new AI companion special.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card p-8 rounded-lg border">
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;