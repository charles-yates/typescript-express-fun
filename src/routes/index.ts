import { Request, Response, Router } from "express";
import MovieController from "../controllers/movie.controller";

export const router: Router = Router();

// Test Route
router.get('/', async function (req: Request, res: Response) {
    res.json({
        message: 'API working!'
    })
});

/*
 * Movie Routes
 */
const movieController: MovieController = new MovieController();
router.get('/', movieController.getMovies);
router.post('/', movieController.createMovie);
router.get('/:id', movieController.getMovie);
router.put('/:id', movieController.updateMovie);
router.delete('/:id', movieController.deleteMovie);