export type ProductItem = {
    id: string;
    name: string;
    price: number;
    description: string;
    imageSrc: string;
    categoryKey: string;
};

const products: ProductItem[] = [
    {
        id: "1",
        name: "Филадельфия классик",
        price: 540,
        description: "Лосось, сливочный сыр, огурец, рис, нори",
        imageSrc: "/sushi/filadelfiya-classic.jpg",
        categoryKey: "rolly-holodnye"
    },
    {
        id: "2",
        name: "Калифорния с крабом",
        price: 600,
        description: "Краб-микс, авокадо, огурец, икра тобико, майонез",
        imageSrc: "/sushi/california-crab.jpg",
        categoryKey: "rolly-zharenye"
    },
    {
        id: "3",
        name: "Ролл с угрём",
        price: 490,
        description: "Угорь, сливочный сыр, огурец, соус унаги",
        imageSrc: "/sushi/eel-roll.jpg",
        categoryKey: "rolly-holodnye"
    },
    {
        id: "4",
        name: "Ролл Дракон",
        price: 800,
        description: "Лосось, угорь, сливочный сыр, огурец, авокадо",
        imageSrc: "/sushi/dragon-roll.jpg",
        categoryKey: "rolly-zapechennye"
    },
    {
        id: "5",
        name: "Ролл с креветкой темпура",
        price: 700,
        description: "Креветка в темпуре, авокадо, огурец, соус спайси",
        imageSrc: "/sushi/shrimp-tempura.jpg",
        categoryKey: "rolly-holodnye"
    },
    {
        id: "6",
        name: "Ролл Радуга",
        price: 500,
        description: "Лосось, тунец, авокадо, огурец, сливочный сыр",
        imageSrc: "/sushi/rainbow-roll.jpg",
        categoryKey: "rolly-holodnye"
    },
    {
        id: "7",
        name: "Ролл с тунцом",
        price: 740,
        description: "Тунец, авокадо, огурец, кунжут",
        imageSrc: "/sushi/tuna-roll.jpg",
        categoryKey: "rolly-holodnye"
    },
    {
        id: "8",
        name: "Ролл Окинава",
        price: 1100,
        description: "Курица, болгарский перец, огурец, соус терияки",
        imageSrc: "/sushi/okinawa-roll.jpg",
        categoryKey: "rolly-holodnye"
    },
    {
        id: "9",
        name: "Ролл с лососем",
        price: 940,
        description: "Лосось, сливочный сыр, огурец, кунжут",
        imageSrc: "/sushi/salmon-roll.jpg",
        categoryKey: "rolly-holodnye"
    },
    {
        id: "10",
        name: "Ролл Вегетарианский",
        price: 500,
        description: "Авокадо, огурец, болгарский перец, морковь",
        imageSrc: "/sushi/vegetable-roll.jpg",
        categoryKey: "rolly-holodnye"
    }   
];

export default products;