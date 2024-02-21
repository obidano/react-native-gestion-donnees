import React, { useEffect } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ArticlesListCtrl from "./ArticlesListCtrl.tsx";
import { ArticlesListEvents } from "./ArticlesListEvents.tsx";
import { Categorie } from "../../datasource/models/Categorie.ts";
import { Article } from "../../datasource/models/Article.ts";
import AppCtrl from "../../shared/AppCtrl.tsx";
import { AppEvents } from "../../shared/AppEvents.ts";
import { useNavigation } from "@react-navigation/native";

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


type ArticleAttr = { item: Article, ajoutPanier: (item:Article)=>void };
const ArticleItemView = ({ item, ajoutPanier }: ArticleAttr) => {
  return (
    <View style={stylesArticle.parent}>
      <View>
        <Image style={stylesArticle.image}
               source={require("../../../images/react_native_logo.png")}/>
      </View>
      <View>
        <Text>{item.nom}</Text>
        <TouchableOpacity onPress={()=> ajoutPanier(item) }  style={stylesArticle.boutonPanier}>
          <Text>Ajouter au Panier</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const stylesArticle = StyleSheet.create({
  parent: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 5,
    // backgroundColor: "#cecece",
    borderRadius: 5,
    alignItems: "center",
    gap: 10
  },
  text: {},
  image: { width: 50, height: 50, borderRadius:50},
  boutonPanier:{
    backgroundColor: "orange",
    margin: 10,
    padding: 10,
    width: 150
  }
});


const ArticlesListPage = (): React.JSX.Element => {
  const { pageState, eventsHandler } = ArticlesListCtrl();
  const appCtrl=AppCtrl()
  const navigation=useNavigation()
  useEffect(() => {
    eventsHandler(ArticlesListEvents.RecupererCategories);
    eventsHandler(ArticlesListEvents.RecupererArticles);
  }, []);

  return (
    <View style={styles.parent}>
      <View style={styles.panierNbre}>
        <Text onPress={()=> navigation.navigate("panier")}>{appCtrl.panier.length}</Text>
      </View>
      <Text style={styles.nomApplication}>Somba na Tshombo</Text>
      <FlatList
        data={pageState.listeCategorie}
        horizontal
        renderItem={({ item, index }) => {
          return <CategorieItemView item={item} />;
        }}
      />

      <FlatList
        data={pageState.listeDesArticles}
        renderItem={({ item, index }) => {
          return <ArticleItemView item={item}
                                  ajoutPanier={(item)=> appCtrl.eventsHandler(AppEvents.AjouterPanier, item)} />;
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
    marginBottom: 50,
    marginTop: 10
  },
  panierNbre: {
    borderRadius: 50,
    padding: 10,
    margin: 30,
    backgroundColor: "red",
    alignSelf: "flex-end"
  }
});

export default ArticlesListPage;
