import {Categorie} from "./models/Categorie.ts";

export class DataService {
  static async recuperationArticles(){}

  static async recuperationCategories() {
    return await new Promise(resolve => {
      setTimeout(() => {
        const responseServeur: Categorie[] = [
          {
            id: 1,
            nom: "Shoes"
          },
          {
            id: 2,
            nom: "Movies"
          },
          {
            id: 3,
            nom: "Shoes"
          },
          {
            id: 4,
            nom: "Games"
          },
          {
            id: 5,
            nom: "Sports"
          },
        ];
        resolve(responseServeur);
      }, 800);
    });
  }
}
