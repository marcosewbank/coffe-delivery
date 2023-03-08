export interface Products {
  id: number;
  flags: string[];
  name: string;
  description: string;
  price: number;
  image?: string;
  quantity: number;
}

export const products: Products[] = [
  {
    id: 1,
    image: "/src/assets/coffe-tradicional.png",
    flags: ["tradicional"],
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.99,
    quantity: 0,
  },
  {
    id: 2,
    image: "/src/assets/coffee-americano.png",
    flags: ["tradicional"],
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.99,
    quantity: 0,
  },
  {
    id: 3,
    image: "/src/assets/coffee-cremoso.png",
    flags: ["tradicional"],
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.99,
    quantity: 0,
  },
  {
    id: 4,
    image: "/src/assets/coffee-gelado.png",
    flags: ["gelado"],
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.99,
    quantity: 0,
  },
  {
    id: 5,
    image: "/src/assets/coffee-leite.png",
    flags: ["tradicional", "com leite"],
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.99,
    quantity: 0,
  },
  {
    id: 6,
    image: "/src/assets/latte.png",
    flags: ["tradicional", "com leite"],
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.99,
    quantity: 0,
  },
  {
    id: 7,
    image: "/src/assets/capuccino.png",
    flags: ["tradicional", "com leite"],
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.99,
    quantity: 0,
  },
  {
    id: 8,
    image: "/src/assets/coffe-macchiato.png",
    flags: ["tradicional", "com leite"],
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.99,
    quantity: 0,
  },
  {
    id: 9,
    image: "/src/assets/coffee-mocaccino.png",
    flags: ["tradicional", "com leite"],
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.99,
    quantity: 0,
  },
  {
    id: 10,
    image: "/src/assets/choco-quente.png",
    flags: ["especial", "com leite"],
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.99,
    quantity: 0,
  },
  {
    id: 11,
    image: "/src/assets/coffee-cubano.png",
    flags: ["especial", "alcoólico", "gelado"],
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.99,
    quantity: 0,
  },
  {
    id: 12,
    image: "/src/assets/coffee-havaiano.png",
    flags: ["especial"],
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.99,
    quantity: 0,
  },
  {
    id: 13,
    image: "/src/assets/coffee-arabe.png",
    flags: ["especial"],
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.99,
    quantity: 0,
  },
  {
    id: 14,
    image: "/src/assets/coffe-irlandes.png",
    flags: ["especial", "alcoólico"],
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.99,
    quantity: 0,
  },
];
