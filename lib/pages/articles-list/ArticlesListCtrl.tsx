import {useState} from "react";
import {ArticlesListStates} from "./ArticlesListStates.tsx";
import {ArticlesListEvents} from "./ArticlesListEvents.tsx";

const ArticlesListCtrl = () => {
  const [pageState, setPagestate] = useState<ArticlesListStates>({
    listeDesArticles: [],
    listeCategorie: [],
    categorieSelectionne: null
  });

  const eventsHandler = (action: ArticlesListEvents) => {
    switch (action) {
      case ArticlesListEvents.RecupererArticles:
        break;
      case ArticlesListEvents.RecupererCategories:
        break;
    }
  };
};

export default ArticlesListCtrl;
