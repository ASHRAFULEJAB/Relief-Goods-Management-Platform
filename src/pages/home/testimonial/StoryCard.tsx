import React from "react";
import "./StoryCard.css";

interface StoryCardProps {
  title: string;
  description: string;
  name: string;
  role: string;
  image: string;
}

const StoryCard: React.FC<StoryCardProps> = ({
  title,
  description,
  name,
  role,
  image,
}) => {
  return (
    <div className="story-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="author">
        <img src={image} alt={name} />
        <div>
          <p className="name">{name}</p>
          <p className="role">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
