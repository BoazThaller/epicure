import {Schema, model} from "mongoose";

interface Dish {
    name: string;
    restaurant: string;
    content: string;
    icon: string;
    price: number;
    type: string;
    dishImg: string;
}

const dishSchema = new Schema<Dish>({
    name: { type: String, trim: true, required: true },
    restaurant: { type: String, trim: true, required: true },
    content: { type: String, trim: true, required: true },
    icon: { type: String, trim: true, required: true },
    price: { type: Number, trim: true, required: true },
    type: { type: String, trim: true, required: true },
    dishImg: { type: String, trim: true, required: true },

});

const Dish = model<Dish>("Dish", dishSchema);

// {"name":"Pad Ki Mao" , "restaurant":"Kab Kem", "content":"Delicious", "icon": "something.png" , "price":"96", "type":"breakfast"}

export default Dish;

