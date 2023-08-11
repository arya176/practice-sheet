import { FirstCommentsBranch } from "./FirstCommentsBranch";

type CheckFirstCommentsBranchProps = {
  kids?: number[];
};

export const CheckFirstCommentsBranch = (
  props: CheckFirstCommentsBranchProps
) => {
  return props.kids && props.kids.length ? (
    <div>
      {props.kids.map((item) => (
        <div>
          <FirstCommentsBranch id={item} />
        </div>
      ))}
    </div>
  ) : (
    <p>No comment</p>
  );
};
