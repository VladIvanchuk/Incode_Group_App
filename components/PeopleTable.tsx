import { FlatList, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { ActivityIndicator, DataTable, IconButton, Surface } from "react-native-paper";
import { useGetPeopleQuery } from "../redux/api/peopleApiSlice";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  favoriteSelector,
  removeFromFavorites,
} from "../redux/favoriteSlice";
import { IPerson } from "../types/person";
import { COLORS } from "../constants/theme";
import { styles } from "../styles/surface";

const PeopleTable = () => {
  const [page, setPage] = useState(0);
  const navigation = useNavigation<NavigationProp<any>>();
  const dispatch = useDispatch();
  const favorites = useSelector(favoriteSelector);
  const { data } = useGetPeopleQuery({ page });

  const itemsPerPage = 10;
  const from = page * itemsPerPage + 1;
  const to = Math.min((page + 1) * itemsPerPage, data?.count);

  const handleFavoriteToggle = (item: IPerson) => {
    if (!favorites.includes(item)) {
      dispatch(addToFavorites(item));
    } else {
      dispatch(removeFromFavorites(item));
    }
  };

  if (!data) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator color={COLORS.primary} animating={true} />
      </View>
    );
  }

  return (
    <Surface style={[styles.surface, { flex: 1 }]} elevation={1}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title numeric>Gender</DataTable.Title>
          <DataTable.Title numeric>Birth Year</DataTable.Title>
          <DataTable.Title numeric>
            <IconButton icon="heart" size={20} />
          </DataTable.Title>
        </DataTable.Header>

        <FlatList
          data={data.results}
          renderItem={({ item }: { item: IPerson }) => (
            <DataTable.Row onPress={() => navigation.navigate("Details", { item })}>
              <DataTable.Cell>{item.name}</DataTable.Cell>
              <DataTable.Cell numeric>{item.gender}</DataTable.Cell>
              <DataTable.Cell numeric>{item.birth_year}</DataTable.Cell>
              <DataTable.Cell numeric>
                <IconButton
                  icon="heart"
                  size={20}
                  iconColor={favorites.includes(item) ? COLORS.primary : COLORS.grey}
                  onPress={() => {
                    handleFavoriteToggle(item);
                  }}
                />
              </DataTable.Cell>
            </DataTable.Row>
          )}
          keyExtractor={(item) => item.url}
        />

        <DataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(data.count / itemsPerPage)}
          onPageChange={(page) => setPage(page)}
          label={`${from}-${to} of ${data.count}`}
        />
      </DataTable>
    </Surface>
  );
};

export default PeopleTable;
