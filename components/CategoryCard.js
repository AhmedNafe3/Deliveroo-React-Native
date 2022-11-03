import {Image, Text ,TouchableOpacity} from "react-native";
import React from "react";

const CategoryCard = ({imageUrl,title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image className="h-20 w-20 rounded"  source={{ uri: imageUrl }}/>
      
      <Text className="absolute text-white  bottom-1 left-1 font-bold">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
 