import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCards from "../components/RestaurantCards";

const FeatureRow = ({ id, title, des }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon></ArrowRightIcon>
      </View>
      <Text className="text-xs text-gray-500 px-4">{des}</Text>
      <ScrollView
        className="pt-4  "
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10,
        }}
        horizontal
        showHorizontalScrollIndicator={false}
      >
        <RestaurantCards
         id={123}
         imageUrl="https://links.papareact.com/gn7"
         title="Yo! suhei"
         rating={4.5}
         genre="Japanese"
         address="123 main St"
         short_desc="this is test desc"
         dishes={[]}
         long={20}
         lat={0}/>

<RestaurantCards
         id={123}
         imageUrl="https://links.papareact.com/gn7"
         title="Yo! suhei"
         rating={4.5}
         genre="Japanese"
         address="123 main St"
         short_desc="this is test desc"
         dishes={[]}
         long={20}
         lat={0}/>
           <RestaurantCards
         id={123}
         imageUrl="https://links.papareact.com/gn7"
         title="Yo! suhei"
         rating={4.5}
         genre="Japanese"
         address="123 main St"
         short_desc="this is test desc"
         dishes={[]}
         long={20}
         lat={0}/>
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
