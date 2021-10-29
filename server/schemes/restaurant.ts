import {Schema, model} from "mongoose";

interface Restaurant {
    name: string;
    chef: string;
    opens: string;
    closes: string;
    dateOpened: Date;
    url: string;
    urlBig: string;
}

const restaurantSchema = new Schema<Restaurant>({
    name: { type: String, trim: true, required: true },
    chef: { type: String, trim: true, required: true },
    opens: { type: String, trim: true, required: true },
    closes: { type: String, trim: true, required: true },
    dateOpened: { type: Date, trim: true, required: true },
    url: { type: String, trim: true, required: true },
    urlBig: { type: String, trim: true, required: true },
});

const Restaurant = model<Restaurant>("Restaurant", restaurantSchema);

export default Restaurant;