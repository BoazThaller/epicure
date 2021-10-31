import { ActionType } from "./ActionType";
import { Action } from "./Action";
import { AppState } from "./AppState";

// This function is NOT called direcrtly by you
export function Reduce(oldAppState: AppState = new AppState(), action: Action): AppState {
  // Cloning the oldState (creating a copy)
  const newAppState = { ...oldAppState };
  
  switch (action.type) {
    case ActionType.GetChef:
        let chef = action.payload;
        newAppState.chefArray = chef.data;
      break;
    case ActionType.GetRestaurants:
        let restaurants = action.payload;
        newAppState.restaurantsArray = restaurants.data;
      break;
    case ActionType.GetDishes:
        let dishes = action.payload;
        newAppState.dishesArray = dishes.data;
      break;
    case ActionType.GetRestaurant:
        let restaurant = action.payload;
        newAppState.restaurantArray.pop()
        newAppState.restaurantArray.push(restaurant);
      break;
    // case ActionType.GetChefsRestaurants:
    //     let chefsRestaurants = action.payload;
    //     newAppState.chefsRestaurants = chefsRestaurants;
    //   break;
    case ActionType.GetDish:
        let dish = action.payload;
        newAppState.dishObj.pop()
        newAppState.dishObj.push(dish);
      break;
    case ActionType.GetResults:
        let results = action.payload;
        newAppState.searchResults = results;
      break;
    // case ActionType.GetDishesNames:
    //     let names = action.payload;
    //     newAppState.dishesNames = names.data;
    //   break;
    case ActionType.SetRestaurantsLink:
        let restaurantsLinkState = action.payload;
        newAppState.restaurantsLink = restaurantsLinkState;
      break;
    case ActionType.SetChefsLink:
        let chefsLinkState = action.payload;
        newAppState.chefsLink = chefsLinkState;
      break;
    case ActionType.AddToBag:
        let item = action.payload;
        newAppState.amountOfItems = newAppState.amountOfItems + item;
      break;
    case ActionType.AddToOrders:
        let orders = action.payload;
        newAppState.orders = orders;
      break;

  }
  return newAppState;
}
