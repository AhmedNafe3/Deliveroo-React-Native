import { View, TouchableOpacity,Image, Text } from "react-native";
import React from "react";
import { LockClosedIcon, MapIcon, MapPinIcon, StarIcon } from "react-native-heroicons/outline";

const RestaurantCards = ({
  id,
  imageUrl,
  title,
  rating,
  genre,
  address,
  short_desc,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className="mr-2">
      <Image
        source={{
          uri: imageUrl,
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View  className="px-3 pb-4" >
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className=" flex-row items-center space-x-1">
            <StarIcon color="green" opacity={0.5} size={22}></StarIcon>
            <Text className=" text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> .{genre}
            </Text>
        </View>
        <View className="flex-row items-center space-x-1">
        <MapPinIcon color="green" opacity={0.5}></MapPinIcon>
            <Text className=" text-xs text-gray-500"> Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCards;
