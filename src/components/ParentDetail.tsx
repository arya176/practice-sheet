import { useEffect, useState } from "react";

type ParentProps = {
  id: number;
};

export type ParentDetails = {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  text: string;
  time: number;
  title: string;
  type: string;
};

export const ParentDetail: React.FC<ParentProps> = (props: ParentProps) => {
  const [parentDetails, setParentDetails] = useState<ParentDetails>();
  useEffect(() => {
    const fetchParentsDetails = async () => {
      try {
        const response = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${props.id}.json`
        );
        const data = await response.json();
        setParentDetails(data);
      } catch (error) {
        console.error("Error is Error", error);
      }
    };
    fetchParentsDetails();
  }, [props.id]);

  return (
    <div>
      <div className="">
        <Link to={`comments/${parentDetails?.id}`}>
          {" "}
          <p>id: {parentDetails?.id}</p>
        </Link>
        <p>By: {parentDetails?.by}</p>
        <p>Descendants: {parentDetails?.descendants}</p>
        <p>Kids: {parentDetails?.kids}</p>
        <p>Score: {parentDetails?.score}</p>
        <p>Text: {parentDetails?.text}</p>
        <p>Time: {parentDetails?.time}</p>
        <p>Title: {parentDetails?.title}</p>
        <p>Type: {parentDetails?.type}</p>
      </div>
      <hr />
    </div>
  );
};
