import {Categorie} from "./Categorie.ts";

export interface Article {
  id: number;
  nom: string;
  prix: number;
  quantiteDispo: number;
  categorie: Categorie;
}
