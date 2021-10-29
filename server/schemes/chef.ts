import {Schema, model} from "mongoose";

interface Chef {
    chefImg: string;
    name: string;
    content: string;
}

const chefSchema = new Schema<Chef>({
    chefImg: { type: String, trim: true, required: true},
    name: { type: String, trim: true, required: true },
    content: { type: String, trim: true, required: true },

});

const Chef = model<Chef>("Chef", chefSchema);

// {"name":"Pad Ki Mao" , "restaurant":"Kab Kem", "content":"Delicious", "icon": "something.png" , "price":"96", "type":"breakfast"}

export default Chef;

