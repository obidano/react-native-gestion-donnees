import { Article } from "../datasource/models/Article.ts";
import { AppEvents } from "./AppEvents.ts";

export interface Panier{
  article : Article;
  quantity: number;
}


export interface AppState{
  panier: Panier[];
  eventsHandler: (action: AppEvents, article: Article) => void;
}
