import React, { useEffect } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import ArticlesListCtrl from "./ArticlesListCtrl.tsx";
import { ArticlesListEvents } from "./ArticlesListEvents.tsx";
import { Categorie } from "../../datasource/models/Categorie.ts";
import { Article } from "../../datasource/models/Article.ts";

type CategorieAttr = { item: Categorie };
const CategorieItemView = ({ item }: CategorieAttr) => {
  return (
    <View style={stylesCat.parent}>
      <Text style={stylesCat.text}> {item.nom} </Text>
    </View>
  );
};

const stylesCat = StyleSheet.create({
  parent: {
    height: 40,
    width: 100,
    marginHorizontal: 10,
    backgroundColor: "#cecece",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {}
});


type ArticleAttr = { item: Article };
const ArticleItemView = ({ item }: ArticleAttr) => {
  return (
    <View style={stylesArticle.parent}>
      <View>
        <Image style={stylesArticle.image}
               source={require("../../../images/react_native_logo.png")}/> </View>
      <View>
        <Text>{item.nom}</Text>
      </View>
    </View>
  );
};

const stylesArticle = StyleSheet.create({
  parent: {
    flexDirection: "row",
    marginHorizontal: 10,
    backgroundColor: "#cecece",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {},
  image: { width: 50, height: 50, borderRadius:50}
});


const ArticlesListPage = (): React.JSX.Element => {
  const { pageState, eventsHandler } = ArticlesListCtrl();

  useEffect(() => {
    eventsHandler(ArticlesListEvents.RecupererCategories);
    eventsHandler(ArticlesListEvents.RecupererArticles);
  }, []);

  return (
    <View style={styles.parent}>
      <Text style={styles.nomApplication}>Somba na Tshombo</Text>
      <FlatList
        data={pageState.listeCategorie}
        horizontal
        renderItem={({ item, index }) => {
          return <CategorieItemView item={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1
  },
  nomApplication: {
    fontWeight: "bold",
    fontSize: 30,
    color: "orange",
    textAlign: "center",
    marginVertical: 50
  }
});

export default ArticlesListPage;
