import { ScrollView, Text } from "react-native";
import CategoryCard from '../components/CategoryCard'

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showHorizontalScrollIndicator={false}
    >  
      <CategoryCard title='category1' imageUrl="https://links.papareact.com/gn7"/>
      <CategoryCard title='category2'  imageUrl="https://links.papareact.com/gn7"/>
      <CategoryCard title='category3'  imageUrl="https://links.papareact.com/gn7"/>
      <CategoryCard title='category4'  imageUrl="https://links.papareact.com/gn7"/>
      <CategoryCard title='category5'  imageUrl="https://links.papareact.com/gn7"/>

    </ScrollView>
  );
};

export default Categories;
 