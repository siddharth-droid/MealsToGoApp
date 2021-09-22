import React from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { StatusBar, SafeAreaView, FlatList } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import { Spacer } from "../../../components/spacer/spacer.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList)`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <FlatList
      data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
      renderItem={() => (
        <>
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        </>
      )}
      keyExtractor={(item) => item.name}
      contentContainerStyle={{ padding: 16 }}
    />
  </SafeArea>
);
