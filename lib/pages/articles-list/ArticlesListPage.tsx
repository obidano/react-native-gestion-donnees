import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ArticlesListCtrl from "./ArticlesListCtrl.tsx";
import { ArticlesListEvents } from "./ArticlesListEvents.tsx";
import { Categorie } from "../../datasource/models/Categorie.ts";

type CategorieAttr={item:Categorie}
const CategorieItemView= ({item}:CategorieAttr)=>{
  return (
    <View style={stylesCat.parent}>
  </View>)
}

const stylesCat=StyleSheet.create({
  parent: {
    height: 100,
    marginHorizontal: 10,
    backgroundColor: "#cecece"
  }
})

const ArticlesListPage = (): React.JSX.Element => {
  const { pageState, eventsHandler } = ArticlesListCtrl();

  useEffect( ()=>{
    eventsHandler(ArticlesListEvents.RecupererCategories)
    eventsHandler(ArticlesListEvents.RecupererArticles)
  }, [] )

  return (
    <View style={styles.parent}>
      <Text style={styles.nomApplication}>Somba na Tshombo</Text>
      <FlatList data={pageState.listeCategorie}
                renderItem={({item, index})=>{
                  return <CategorieItemView item={item}/>
                }} />
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  nomApplication: {
    fontWeight: "bold",
    fontSize: 18,
    color: "orange"
  }
});

export default ArticlesListPage;
