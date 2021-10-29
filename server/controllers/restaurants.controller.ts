import DishService from "../services/dishes.service";
import { Request, Response, Router, NextFunction } from "express";
import { nextTick } from "process";
import { IBaseService } from "../services/BaseService";

class restaurantsController {
    public router: Router;
    public service: any;
  
    constructor(service: IBaseService) {
      this.router = Router();
      this.service = service;
      this.initializeRoutes();
    }
  
    protected initializeRoutes(): void {
      this.router.post("/", this.create.bind(this));
      this.router.get("/", this.readAll.bind(this));
      this.router.get("/:id", this.get.bind(this));
      this.router.put("/:id", this.update.bind(this));
      this.router.delete("/:id", this.delete.bind(this));
    }
  
    // Create
    public async create(req: Request, res: Response, next: NextFunction) {
      try {
        const response = await this.service.add(req.body);
        res.json(response);
      } catch (error) {
        next(error);
      }
    }
  
    // Get
    public async get(req: Request, res: Response, next: NextFunction) {
      try {
        const response = await this.service.get(req.params.id);
        res.json(response);
      } catch (error) {
        next(error);
      }
    }
  
    // Get All
    public async readAll(req: Request, res: Response, next: NextFunction) {
      let response;
      try {
        if(req.query.limit) {
           response = await this.service.getAll(req.query.limit);
        }
        else{
           response = await this.service.getAll();
        }
        res.json(response);
      } catch (error) {
        next(error);
      }
    }
  
    // Update
    public async update(req: Request, res: Response, next: NextFunction) {
      try {
        const response = await this.service.update(req.body, req.params.id);
        res.json(response);
      } catch (error) {
        next(error);
      }
    }
  
    // Delete
    public async delete(req: Request, res: Response, next: NextFunction) {
      try {
        const response = await this.service.delete(req.params.id);
        res.json(response);
      } catch (error) {
        next(error);
      }
    }
  }

export default restaurantsController;

