import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  AdjustmentsHorizontalIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeatureRow from "../components/FeatureRow";
const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center space-x-2">
        <Image
          className="w-7 h-7 p-4 rounded-full bg-gray-300"
          source={{ uri: "https://links.papareact.com/wru" }}
        ></Image>
        <View className="flex-1">
          <Text className=" font-bold text-gray-400 text-xs">
            Delivery Now!
          </Text>
          <Text className="font-bold text-xl">Current Location</Text>
        </View>
        <UserIcon size={35} />
      </View>
      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2">
        <View className="flex-row space-x-2 flex-1  bg-gray-200  p-3">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput placeholder="Restaurant" keyboardType="default" />
        </View>
        <AdjustmentsHorizontalIcon />
      </View>
      {/* Scroll view */}
      <ScrollView>
        {/* Category */}
        <Categories></Categories>
        {/* Features Rows */}
        <FeatureRow id="" title='Featured' des=" description"></FeatureRow>
        <FeatureRow id="" title='Tasty Discount' des="description"></FeatureRow>
        <FeatureRow id="" title='Offer near you!' des="description"></FeatureRow>

      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
