import { Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import PeopleTable from "../components/PeopleTable";
import FavoriteData from "../components/FavoriteData";
import { useDispatch } from "react-redux";
import { clear } from "../redux/favoriteSlice";
import { COLORS } from "../constants/theme";
import { styles } from "../styles/home";

const Home = () => {
  const dispatch = useDispatch();

  const handleClearFavoriteData = () => {
    dispatch(clear());
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Fans</Text>
        <Button
          mode="outlined"
          textColor={COLORS.primary}
          buttonColor={COLORS.secondary}
          uppercase
          style={styles.button}
          onPress={() => handleClearFavoriteData()}
        >
          Clear fans
        </Button>
      </View>
      <FavoriteData />
      <View style={styles.tableWrapper}>
        <PeopleTable />
      </View>
    </SafeAreaView>
  );
};

export default Home;
