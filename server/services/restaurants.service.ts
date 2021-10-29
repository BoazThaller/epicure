import Dish from "../schemes/dish";
import { Model, Query } from "mongoose";
import Restaurant from "../schemes/restaurant";

export interface IBaseService {
  model: Model<any, {}, {}, {}>;
  add(body: any): Promise<any>;
  get(id: string): Query<any, any, {}, any>;
  update(body: any, id: string): Query<any, any, {}, any>;
  delete(body: string): Query<any, any, {}, any>;
}

class RestaurantService {
  model: Model<any, {}, {}, {}>;

  constructor(model: Model<any, {}, {}, {}>) {
    this.model = model;
  }

  //create
  public add(body: any) {
    return this.model.create(body);
  }

  //Get
  public get(id: string) {
    return this.model.findById(id);
  }

  //Get
  public getAll(limit:number) {
    return this.model.find().limit(+limit);
  }

  //update
  public update(body: any, id: string) {
    return this.model.findByIdAndUpdate(id, body);
  }

  //delete
  public delete(id: string) {
    return this.model.findByIdAndDelete(id);
  }
}

const restaurantService = new RestaurantService(Restaurant);

export default restaurantService;