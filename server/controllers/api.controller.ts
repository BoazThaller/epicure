import dishesController from "./dishes.controller"
import restaurantsController from "./restaurants.controller";
import chefsController from "./chefs.controller";
import dishService from "../services/dishes.service";
import restaurantsService from "../services/restaurants.service";
import chefService from "../services/chefs.service";
import { Router } from "express";

const DishesController = new dishesController(dishService);
const ChefsController = new chefsController(chefService);
const RestaurantsController = new restaurantsController(restaurantsService);

const router: Router = Router();

router.use("/dishes", DishesController.router);
router.use("/restaurants", RestaurantsController.router);
router.use("/chefs", ChefsController.router);

export default router;