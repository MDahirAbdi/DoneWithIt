import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Screen from "../components/Screen";

import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";

const messages = [
  {
    id: 1,
    title: "Somalia",
    description: "Soomaaliya soomaali baa leh",
    image: require("../assets/Somalia.png"),
  },
  {
    id: 2,
    title: "Palestine",
    description: "Free palestine",
    image: require("../assets/Palestine.png"),
  },
];

function MessagesScreen(props) {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
