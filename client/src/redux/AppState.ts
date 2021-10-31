import { IChef } from "../interfaces/chef";
import { IDish } from "../interfaces/IDish";
import { IOrder } from "../interfaces/IOrder";
import { IRestaurant } from "../interfaces/IRestaurant";

export class AppState{
    public chefArray: IChef[] = [];
    // public chefsRestaurants = [];
    public dishesArray: IDish[] = [];
    public restaurantsArray: IRestaurant[] = [];
    public restaurantArray: IRestaurant[] = [];
    public dishObj: IDish[] = [];
    public searchResults = [];
    // public dishesNames = [];
    public restaurantsLink = false;
    public chefsLink = false;
    public amountOfItems = 0;
    public orders: IOrder[] = [];
}
