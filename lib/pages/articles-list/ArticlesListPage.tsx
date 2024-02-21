import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ArticlesListCtrl from "./ArticlesListCtrl.tsx";
import { ArticlesListEvents } from "./ArticlesListEvents.tsx";

const ArticlesListPage = (): React.JSX.Element => {
  const { pageState, eventsHandler } = ArticlesListCtrl();

  useEffect( ()=>{
    eventsHandler(ArticlesListEvents.RecupererCategories)
    eventsHandler(ArticlesListEvents.RecupererArticles)
  }, [] )

  return (
    <View style={styles.parent}>
      <Text style={styles.nomApplication}>Somba na Tshombo</Text>
      <FlatList data={pageState.listeCategorie} renderItem={} />
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1
  },
  nomApplication: {
    fontWeight: "bold",
    fontSize: 18,
    color: "orange"
  }
});

export default ArticlesListPage;
