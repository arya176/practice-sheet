//1-parents id

//making a component like AskStoriesItems or homePage or app.tsx and fetch the askstoriesid from hackernews. this component recievinhg informatio base of their ids. this codes is about the big array or parent array with just id, then details of this idies or items will recieve by Parent component and Parent going inside this component.
// making useState.
// making a variable name by fetchAskStoriesItems and write the codes to fetch them.

// import { useEffect, useState } from "react";
// export const AskStoriesItems = () => {
//   const [storiesId, setStoriesId] = useState<number[]>([]);
//   useEffect(() => {
//     const fetchAskStorisItemsByIds = async () => {
//       try {
//         const response = await fetch(
//           "https://hacker-news.firebaseio.com/v0/askstories.json"
//         );
//         const data = await response.json();
//         setStoriesId(data);
//       } catch (error) {
//         console.error("Error fetching top story IDs:", error);
//       }
//       fetchAskStorisItemsByIds();
//     };
//   }, []);
//   return (
//     <div>
//        <div>
//         {storiesId.map((sid) => (
//             <Parent />
//           ))}
//         </div>
//     </div>
//   );
// };
//for passing id and key as properties we need to make card componet first and when we pass id in there as a props, then here we can recognize the id

//2-parents details
// now we are going to fetch each id details. we are going to make another component and call it Parent.
// we write the type of parents item details.
//now we writing a useState and the first property type should be the type we wrote above, like below:
// type ParentDetails = {
//     by: string;
//     descendants: number;
//     id: number;
//     kids: number[];
//     score: number;
//     text: string;
//     time: number;
//     title: string;
//     type: string;
//   };
// const [parentDetails, setParentDetails] = useState<ParentDetails>();

//3- we make a component like CommentContainer. in this page we reach anything we need from ParentDetails and AskSoriesItem and combining them by useParams. no w we have to make first branch of children and import it here. (we make a component as FirstCommentsBranch to use).
//important:
//if we use FirstCommentsBranch component straightly here if there was not any comment or child in this part , can make our code with a little trouble, for solving this we make a conditional component to firt check if there is any children of comment or.. and the render the FirstCommentsBranch for us. so for that we need to make a conditional component to check that for us. we call this component CheckFirstCommentsBranch and we import this componnet inside CommentContainer.
