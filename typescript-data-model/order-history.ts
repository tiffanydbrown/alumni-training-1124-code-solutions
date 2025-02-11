interface Order {
  orderPlaced: string;
  total: string;
  shipTo: string;
  orderNum: string;
  deliverDate: string;
  itemsPurchased: string[];
  purchasePrice: string;
  author?: string[];
}

const orderHistory: Order[] = [
  {
    orderPlaced: 'August 4, 2020',
    total: '$34.00',
    shipTo: 'JS Masher',
    orderNum: '114-3941689-8772232',
    deliverDate: 'Aug 8, 2020',
    itemsPurchased: ['JavaScript for Impatient Programmers'],
    purchasePrice: '$31.55',
    author: ['Rauschmayer, Dr. Axel'],
  },
  {
    orderPlaced: 'July 19, 2020',
    total: '$44.53',
    shipTo: 'JS Masher',
    orderNum: '113-9984268-1280257',
    deliverDate: 'Jul 20, 2020',
    itemsPurchased: ['The Timeless Way of Building'],
    purchasePrice: '$41.33',
    author: ['Alexander, Christopher'],
  },
  {
    orderPlaced: 'July 4, 2020',
    total: '$17.22',
    shipTo: 'JS Masher',
    orderNum: '114-2875557-9059409',
    deliverDate: 'Jul 7, 2020',
    itemsPurchased: ['Gamecube Controller Adapter'],
    purchasePrice: '$15.98',
  },
  {
    orderPlaced: 'July 3, 2020',
    total: '$138.93',
    shipTo: 'JS Masher',
    orderNum: '113-2883177-2648248',
    deliverDate: 'Jul 5, 2020',
    itemsPurchased: [
      'GameCube Controller - Super Smash Bros. Edition',
      'The Art of Sql',
    ],
    purchasePrice: '$41.33',
    author: ['Faroult, Stephane'],
  },
];
