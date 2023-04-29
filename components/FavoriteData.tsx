import { Text, View } from "react-native";
import React, { memo } from "react";
import { Surface } from "react-native-paper";
import { useSelector } from "react-redux";
import { favoriteSelector } from "../redux/favoriteSlice";
import { IPerson } from "../types/person";
import { styles } from "../styles/favoriteData";

interface ISurfaceProps {
  value: number;
  label: string;
}

const CustomSurface = memo(({ value, label }: ISurfaceProps) => {
  return (
    <Surface style={styles.surface} elevation={1}>
      <Text style={styles.amountValue}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </Surface>
  );
});

const FavoriteData = () => {
  const favorites = useSelector(favoriteSelector);

  const { femaleCount, maleCount, otherCount } = favorites.reduce(
    (counts, item: IPerson) => {
      if (item.gender === "female") {
        counts.femaleCount++;
      } else if (item.gender === "male") {
        counts.maleCount++;
      } else {
        counts.otherCount++;
      }
      return counts;
    },
    {
      femaleCount: 0,
      maleCount: 0,
      otherCount: 0,
    }
  );

  return (
    <View style={styles.container}>
      <CustomSurface value={femaleCount} label="Female Fans" />
      <CustomSurface value={maleCount} label="Male Fans" />
      <CustomSurface value={otherCount} label="Others" />
    </View>
  );
};

export default FavoriteData;
