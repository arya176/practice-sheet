import { useEffect, useState } from "react";

type FirstCommentsBranchProps = {
  id: number;
};

type FirstCommentsBranchType = {
  by: string;
  id: number;
  kids: number[];
  parent: number;
  text: string;
  time: number;
  type: string;
};

export const FirstCommentsBranch = (props: FirstCommentsBranchProps) => {
  const [firstComments, setFirstComents] = useState<FirstCommentsBranchType>();
  useEffect(() => {
    const fetchFirstCommentsBranch = async () => {
      try {
        const response = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${props.id}.json`
        );
        const data = await response.json();
        setFirstComents(data);
      } catch (error) {
        console.error("Error is:", error);
      }
    };
    fetchFirstCommentsBranch();
  }, [props.id]);
  return (
    <div>
      <div className="bg-red-200">
        <p>written by:{firstComments?.by}</p>
        <p>parent id: {firstComments?.parent}</p>
      </div>
    </div>
  );
};
