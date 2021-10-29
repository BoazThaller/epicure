import Chef from "../schemes/chef";
import { Model, Query } from "mongoose";

export interface IBaseService {
  model: Model<any, {}, {}, {}>;
  add(body: any): Promise<any>;
  get(id: string): Query<any, any, {}, any>;
  update(body: any, id: string): Query<any, any, {}, any>;
  delete(body: string): Query<any, any, {}, any>;
}

class ChefService {
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
  public getAll() {
    return this.model.find()
  }
  public getNames() {
    return this.model.find().select("name -_id");
  }

  public getLimit(limit:number) {
    console.log("here")
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

const chefService = new ChefService(Chef);

export default chefService;