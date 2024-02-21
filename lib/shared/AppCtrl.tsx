import { create } from "zustand";
import { AppState } from "./AppState.ts";
import { AppEvents } from "./AppEvents.ts";

const AppCtrl = create<AppState>(set => ({
  panier: [],
  eventsHandler: (action, article) => {
    set(state => {
      const currentState={...state}
      switch (action) {
        case AppEvents.AjouterPanier:
          currentState.panier.push({ article: article, quantity: 1})
          break;
        case AppEvents.EnleverPanier:
          break;
      }
      return { ...state};
    });
  }
}));


export default  AppCtrl
