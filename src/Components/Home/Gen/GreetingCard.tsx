import React from "react";

type GreetingCardProps = {
  greeting: string;
  subtext: string;
};

export const GreetingCard: React.FC<GreetingCardProps> = ({
  greeting,
  subtext,
}) => {
  return (
    <div className="font-montserrat text-center md:text-start">
      <h1 className="text-xl md:text-3xl font-bold text-gradient font-comfortaa md:pb-2 md:-ml-5 mb-2">
        {greeting}
      </h1>
      <p className="md:text-lg md:-ml-5 -mt-4">{subtext}</p>
    </div>
  );
};

export default GreetingCard;
