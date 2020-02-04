import { Request, Response, Router } from "express";
import MovieController from "../controllers/movie.controller";

export const router: Router = Router();

// Test Route
router.get("/", async function (req: Request, res: Response) {
    res.json({
        message: "API working!"
    });
});

/*
 * Movie Routes
 */
const movieController: MovieController = new MovieController();
router.get("/movies/", movieController.getMovies);
router.post("/movies/", movieController.createMovie);
router.get("/movies/:id", movieController.getMovie);
router.put("/movies/:id", movieController.updateMovie);
router.delete("/movies/:id", movieController.deleteMovie);