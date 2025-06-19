export type Product = { id: string; img: string; price: number; color: string,name?: string };

export const initProducts: Product[] = [
  { id: "1", color: "#D068A3", img: "/assets/gorra.png", price: 25, name: "Gorra" },
  { id: "2", color: "#A67244", img: "/assets/termos.png", price: 15 ,name: "Termos" },
  { id: "3", color: "#7698AB", img: "/assets/llavero.png", price: 35 ,name: "llavero" },
  { id: "4", color: "#E9D5AA", img: "/assets/camisas.png", price: 5 ,name: "camisas" },
  { id: "5", color: "#EEB304", img: "/assets/bolsas.png", price: 100,name: "bolsas"  },
];
