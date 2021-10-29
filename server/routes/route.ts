import { Router } from "express";
import apiController from "../controllers/api.controller"
const router: Router = Router();


router.use("/v1", apiController); 


export default router;