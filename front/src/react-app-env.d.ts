///<reference types="react-scripts" />

interface equipmentProp {
    name: String,
    type: String,
    cost_to_buy: number,
    sell_price: number,
    amount_in_stock: number,
    _id: number
}

interface drinkProp {
    name: String,
    amount_in_stock: number,
    cost_to_buy: number,
    sell_price: number,
    _id: number
}

interface foodProp {
    name: string,
    amount_in_stock: number,
    cost_to_buy: number,
    sell_price: number,
    _id: number
}

interface questProp {
    name: string,
    description: string,
    pay: number,
    status: string,
    _id: number
}

interface roomProp {
    room: number,
    available: string,
    occupancy: number,
    cost_per_night: number,
    _id: number
}

