// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: 1,
    name: "Count Vladislaus",
    username: "admin123",
    password: "12345",
    role: "admin",
  },
  {
    id: 2,
    name: "Witch Morgana",
    username: "darkwitch",
    password: "hex666",
    role: "admin",
  },
  {
    id: 3,
    name: "Phantom Grim",
    username: "shadowlord",
    password: "ghost999",
    role: "admin",
  },
];


const customers = [
  {
    id: 1,
    name: "Vlad Dracul",
    email: "user123",
    password: "12345",
    role: "customer",
  },
  {
    id: 2,
    name: "Morgana LeFay",
    email: "morlefay01@gmail.com",
    password: "darkmagic2023",
    role: "customer",
  },
  {
    id: 3,
    name: "Grim Reaper",
    email: "grimrside@gmail.com",
    password: "death666",
    role: "customer",
  },
  {
    id: 4,
    name: "Lilith Nightshade",
    email: "lilithana@gmail.com",
    password: "shadow999",
    role: "customer",
  },
  {
    id: 5,
    name: "Banshee Wail",
    email: "wailananana@gmail.com",
    password: "scream1010",
    role: "customer",
  },
  {
    id: 6,
    name: "Nosferatu Zodd",
    email: "nosferatu.zodd@gmail.com",
    password: "bloodthirst321",
    role: "customer",
  },
  {
    id: 7,
    name: "Raven Hex",
    email: "raven.hex@gmail.com",
    password: "curse777",
    role: "customer",
  },
  {
    id: 8,
    name: "Draven Gloom",
    email: "c",
    password: "darkness456",
    role: "customer",
  },
  {
    id: 9,
    name: "Selene Wraith",
    email: "selene.wraith@gmail.com",
    password: "ghostly123",
    role: "customer",
  },
  {
    id: 10,
    name: "Zephyr Ghoul",
    email: "zephyr.ghoul@gmail.com",
    password: "haunt555",
    role: "customer",
  },
];


// const invoices = [
//   {
//     customer_id: customers[0].id,
//     amount: 15795,
//     status: 'pending',
//     date: '2022-12-06',
//   },
//   {
//     customer_id: customers[1].id,
//     amount: 20348,
//     status: 'pending',
//     date: '2022-11-14',
//   },
//   {
//     customer_id: customers[4].id,
//     amount: 3040,
//     status: 'paid',
//     date: '2022-10-29',
//   },
//   {
//     customer_id: customers[3].id,
//     amount: 44800,
//     status: 'paid',
//     date: '2023-09-10',
//   },
//   {
//     customer_id: customers[5].id,
//     amount: 34577,
//     status: 'pending',
//     date: '2023-08-05',
//   },
//   {
//     customer_id: customers[2].id,
//     amount: 54246,
//     status: 'pending',
//     date: '2023-07-16',
//   },
//   {
//     customer_id: customers[0].id,
//     amount: 666,
//     status: 'pending',
//     date: '2023-06-27',
//   },
//   {
//     customer_id: customers[3].id,
//     amount: 32545,
//     status: 'paid',
//     date: '2023-06-09',
//   },
//   {
//     customer_id: customers[4].id,
//     amount: 1250,
//     status: 'paid',
//     date: '2023-06-17',
//   },
//   {
//     customer_id: customers[5].id,
//     amount: 8546,
//     status: 'paid',
//     date: '2023-06-07',
//   },
//   {
//     customer_id: customers[1].id,
//     amount: 500,
//     status: 'paid',
//     date: '2023-08-19',
//   },
//   {
//     customer_id: customers[5].id,
//     amount: 8945,
//     status: 'paid',
//     date: '2023-06-03',
//   },
//   {
//     customer_id: customers[2].id,
//     amount: 1000,
//     status: 'paid',
//     date: '2022-06-05',
//   },
// ];

// const revenue = [
//   { month: 'Jan', revenue: 2000 },
//   { month: 'Feb', revenue: 1800 },
//   { month: 'Mar', revenue: 2200 },
//   { month: 'Apr', revenue: 2500 },
//   { month: 'May', revenue: 2300 },
//   { month: 'Jun', revenue: 3200 },
//   { month: 'Jul', revenue: 3500 },
//   { month: 'Aug', revenue: 3700 },
//   { month: 'Sep', revenue: 2500 },
//   { month: 'Oct', revenue: 2800 },
//   { month: 'Nov', revenue: 3000 },
//   { month: 'Dec', revenue: 4800 },
// ];

const Products = {
  food: [
    {
      id: 11,
      name: "Spiderweb Quesadilla",
      price: 50000,
      image: "/spider.jpg",
      description:
        "Quesadilla hitam dengan keju meleleh yang membentuk jaring laba-laba. Hati-hati, jangan sampai laba-laba keluar dari dalamnya!",
    },
    {
      id: 12,
      name: "Bloody Eyeball Bites",
      price: 30000,
      image: "/eyeball.jpg",
      description:
        "Gigitan bola daging dengan bola mata zaitun hitam, mengeluarkan darah setiap gigitan. Siap-siap terkejut!",
    },
    {
      id: 13,
      name: "Spooky Ghost Pizza",
      price: 75000,
      image: "/pizza.jpg",
      description:
        "Pizza dengan keju mozzarella berbentuk hantu yang melayang. Rasakan sensasi dingin di tenggorokan seperti roh yang menuntut balas!",
    },
    {
      id: 14,
      name: "Witch’s Fingers",
      price: 20000,
      image: "/fingers.jpg",
      description:
        "Telur setan disulap jadi tatapan horor—mata berdarah yang siap memeriahkan pesta Halloween-mu!",
    },
    {
      id: 15,
      name: "Buried Alive Bites",
      price: 25000,
      image: "/makanan.jpg",
      description:
        "Kue cokelat yang tampak terkubur di dalam tanah, dengan lapisan brownie yang lembut dan cacing gummy yang menjulur keluar dari dalamnya. Jangan takut, itu hanya rasa manis!",
    },
  ],
  drink: [
    {
      id: 16,
      name: "Bloody Vision",
      price: 30000,
      image: "/minuman.jpg",
      description:
        "Koktail merah menyala berisi 'bola mata' buah dan jelly—minuman segar yang tampak mengerikan tapi nikmat!",
    },
    {
      id: 17,
      name: "Bloody Elixir",
      price: 30000,
      image: "/elixir.jpg",
      description:
        "Ramuan merah pekat yang menggoda, terbuat dari jus delima yang memiliki kekuatan gelap. Hati-hati, sekali menyesap, kamu takkan bisa berhenti!",
    },
    {
      id: 18,
      name: "Graveyard Pudding",
      price: 25000,
      image: "/puding.jpg",
      description:
        "Puding gelap dengan rasa mencekam, siap membawa Anda ke dunia yang tak terlihat",
    },
    {
      id: 19,
      name: "Haunted Ghost Shake",
      price: 28000,
      image: "/ghost.jpg",
      description:
        "Minuman es krim yang membawa sensasi arwah gentayangan, menambah misteri di setiap tegukan. Hati-Hati kamu bisa didatangi oleh arwah gentayangan!",
    },
    {
      id: 20,
      name: "Vampire Blood Bags",
      price: 40000,
      image: "/vampire.jpg",
      description:
        "Minuman darah vampir yang penuh misteri, menggetarkan dalam setiap tetesnya. Berani coba?",
    },
  ],
};


export { users, customers, Products };