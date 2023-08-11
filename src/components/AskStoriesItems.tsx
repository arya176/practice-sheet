import { useEffect, useState } from "react";
import { ParentDetail } from "./ParentDetail";
import { CommentContainer } from "./CommentContainer";

export const AskStoriesItems = () => {
  const [storiesId, setStoriesId] = useState<number[]>([]);

  useEffect(() => {
    const fetchAskStorisItemsByIds = async () => {
      try {
        const response = await fetch(
          "https://hacker-news.firebaseio.com/v0/askstories.json"
        );
        const data = await response.json();
        setStoriesId(data);
      } catch (error) {
        console.error("Error fetching top story IDs:", error);
      }
    };
    fetchAskStorisItemsByIds();
  }, []);

  return (
    <div>
      <div>
        {storiesId.map((sid) => (
          <ParentDetail key={sid} id={sid} />
        ))}
      </div>
    </div>
  );
};
