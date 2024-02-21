import { Categorie } from "./models/Categorie.ts";
import { Article } from "./models/Article.ts";

export class DataService {
  static async recuperationArticles(): Promise<Article[]> {
    return await new Promise(resolve => {
      setTimeout(() => {
        const reponseServeur: Article[] = [
          {
            id: 1,
            nom: "Wine - Magnotta, Merlot Sr Vqa",
            prix: 28,
            quantiteDispo: 19,
            categorie: {
              id: 1,
              nom: "Meuble"
            }
          },
          {
            id: 2,
            nom: "Lime Cordial - Roses",
            prix: 57,
            quantiteDispo: 4,
            categorie: {
              id: 1,
              nom: "Meuble"
            }
          },
          {
            id: 3,
            nom: "Mushroom - Chantrelle, Fresh",
            prix: 72,
            quantiteDispo: 2,
            categorie: {
              id: 1,
              nom: "Meuble"
            }
          },
          {
            id: 4,
            nom: "Muffin Orange Individual",
            prix: 29,
            quantiteDispo: 9,
            categorie: {
              id: 1,
              nom: "Meuble"
            }
          },
          {
            id: 5,
            nom: "Trout - Rainbow, Frozen",
            prix: 25,
            quantiteDispo: 11,
            categorie: {
              id: 1,
              nom: "Meuble"
            }
          },
          {
            id: 6,
            nom: "Uniform Linen Charge",
            prix: 61,
            quantiteDispo: 6,
            categorie: {
              id: 1,
              nom: "Meuble"
            }
          },
          {
            id: 7,
            nom: "Soup - Campbells, Minestrone",
            prix: 27,
            quantiteDispo: 16,
            categorie: {
              id: 1,
              nom: "Meuble"
            }
          },
          {
            id: 8,
            nom: "Monkfish Fresh - Skin Off",
            prix: 75,
            quantiteDispo: 4,
            categorie: {
              id: 1,
              nom: "Meuble"
            }
          },
          {
            id: 9,
            nom: "Iced Tea - Lemon, 340ml",
            prix: 23,
            quantiteDispo: 18,
            categorie: {
              id: 1,
              nom: "Meuble"
            }
          },
          {
            id: 10,
            nom: "Beer - Upper Canada Lager",
            prix: 35,
            quantiteDispo: 8,
            categorie: {
              id: 1,
              nom: "Meuble"
            }
          }
        ];
        resolve(reponseServeur);
      }, 1000);
    });
  }

  static async recuperationCategories(): Promise<Categorie[]> {
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
          }
        ];
        resolve(responseServeur);
      }, 800);
    });
  }
}
