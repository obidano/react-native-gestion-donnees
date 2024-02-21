import {useState} from "react";
import {ArticlesListStates} from "./ArticlesListStates.tsx";
import {ArticlesListEvents} from "./ArticlesListEvents.tsx";
import { DataService } from "../../datasource/DataService.ts";

const ArticlesListCtrl = () => {
  const [pageState, setPagestate] = useState<ArticlesListStates>({
    listeDesArticles: [],
    listeCategorie: [],
    categorieSelectionne: null
  });

  const eventsHandler = async (action: ArticlesListEvents) => {
    switch (action) {
      case ArticlesListEvents.RecupererArticles:
        const articles = await DataService.recuperationArticles();
        setPagestate({ ...pageState, listeDesArticles: articles })
        break;
      case ArticlesListEvents.RecupererCategories:
        const categories= await DataService.recuperationCategories()
        setPagestate({ ...pageState, listeCategorie: categories })
        break;
    }
  };
};

export default ArticlesListCtrl;
