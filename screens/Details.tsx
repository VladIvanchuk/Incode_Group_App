import { Text, SafeAreaView } from "react-native";
import React from "react";
import { Surface } from "react-native-paper";
import { IPerson } from "../types/person";
import { styles } from "../styles/details";

interface DetailsProps {
  route: {
    params: {
      item: IPerson;
    };
  };
}

const Details = ({ route }: DetailsProps) => {
  const { item } = route.params;

  return (
    <SafeAreaView style={styles.wrapper}>
      <Surface style={styles.surface}>
        <Text style={styles.item}>Name: {item?.name}</Text>
        <Text style={styles.item}>Birth year: {item?.birth_year}</Text>
        <Text style={styles.item}>Gender: {item?.gender}</Text>
        <Text style={styles.item}>Height: {item?.height}</Text>
        <Text style={styles.item}>Mass: {item?.mass}</Text>
        <Text style={styles.item}>Hair color: {item?.hair_color}</Text>
        <Text style={styles.item}>Skin color: {item?.skin_color}</Text>
      </Surface>
    </SafeAreaView>
  );
};

export default Details;
