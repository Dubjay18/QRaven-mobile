import { Heart } from "lucide-react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  return (
    <TouchableOpacity onPress={() => setLiked(!liked)}>
      <Heart
        fill={liked ? "#8FB680" : "transparent"}
        stroke={liked ? "#8FB680" : "#fff"}
      />
    </TouchableOpacity>
  );
}

export default LikeButton;
