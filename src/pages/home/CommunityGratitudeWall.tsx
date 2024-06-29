import React, { useState, useEffect } from "react";
import "./CommunityGratitudeWall.css";

const CommunityGratitudeWall = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    // Load comments from local storage on component mount
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  useEffect(() => {
    // Save comments to local storage whenever comments change
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      setComments([...comments, input]);
      setInput("");
    }
  };

  return (
    <div className="gratitude-wall-container">
      <h1>Community Gratitude Wall</h1>
      <p>Share your appreciation for the support you’ve received.</p>
      <form onSubmit={handleSubmit} className="comment-form">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write your gratitude message here..."
          rows={3}
        />
        <button type="submit">Post</button>
      </form>
      <div className="comments-section">
        {comments.map((comment, index) => (
          <div key={index} className="comment-card">
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityGratitudeWall;
