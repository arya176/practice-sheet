import { useEffect, useState } from "react";
import { ParentDetails } from "./ParentDetail";

import { CheckFirstCommentsBranch } from "./CheckFirstCommentsBranch";

export const CommentContainer = () => {
  const [parentDetails, setParentDetails] = useState<ParentDetails>();
  const { storiesId } = useParams();

  useEffect(() => {
    const fetchStoriesId = async () => {
      try {
        const response = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${storiesId}.json`
        );
        const data = await response.json();
        setParentDetails(data);
      } catch (error) {
        console.error("Error is errors ids: ", error);
      }
    };
    fetchStoriesId();
  }, [storiesId]);

  return (
    <div>
      <div>parentDetails id:{parentDetails?.id}</div>
      {/* <Comment kids={parentDetails?.kids} /> */}
      <CheckFirstCommentsBranch kids={parentDetails?.kids} />
    </div>
  );
};
function useParams(): { storiesId: any } {
  throw new Error("Function not implemented.");
}
