
export interface ICategory {
    name: string
    key: string
}

export const categories: ICategory[] = [
    {
        name: "Все товары", 
        key: "all"
    },
    {
        name: "Роллы холодные",
        key: "rolly-holodnye",
    },
    {
        name: "Роллы жареные",
        key: "rolly-zharenye",
    },
    {
        name: "Роллы запеченные",
        key: "rolly-zapechennye",
    },
    {
        name: "Роллы классические",
        key: "rolly-klassicheskie",
    },
    {
        name: "СЕТ",
        key: "set",
    },
    {
        name: "Пицца",
        key: "pizza",
    },
    {
        name: "Сладкая Пицца",
        key: "sladkaya-pizza",
    },
    {
        name: "WOK",
        key: "wok",
    },
    {
        name: "Бургеры",
        key: "burgery",
    },
    {
        name: "Снеки",
        key: "snеki",
    },
    {
        name: "Детское меню",
        key: "detskoe-menyu",
    },
    {
        name: "Напитки",
        key: "napitki",
    },
]