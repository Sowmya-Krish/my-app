import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

export function Counter() {
  let [like, setLike] = useState(0);
  let [dislike, setdisLike] = useState(0);
  const incrementLike = () => setLike(like + 1);
  const incrementDisLike = () => setdisLike(dislike + 1);

  return (
    <div>
      <IconButton onClick={incrementLike} color="primary" aria-label="like">
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>

      <IconButton
        onClick={incrementDisLike}
        color="error "
        aria-label="dislike"
      >
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
      </IconButton>
    </div>
  );
}
export default Counter;