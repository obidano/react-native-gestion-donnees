import {Article} from "../../datasource/models/Article.ts";
import {Categorie} from "../../datasource/models/Categorie.ts";

export interface ArticlesListStates {
  listeDesArticles: Article[];
  listeCategorie: Categorie[];
  categorieSelectionne: Categorie | null;
}
