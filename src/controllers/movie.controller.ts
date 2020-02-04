import { Request, Response } from "express";
import { Movie } from "../db";

export default class MovieController {

    public async createMovie(req: Request, res: Response): Promise<void> {
        const movie: Movie = await Movie.create({
            format: req.body.format,
            length: +req.body.length,
            rating: +req.body.rating,
            title: req.body.title,
            year: +req.body.year
        });
        res.json({
            movie: movie
        });
    }

    public async deleteMovie(req: Request, res: Response): Promise<void> {
        const response: number = await Movie.destroy({
            where: {
                id: +req.params.id
            }
        });
        res.status(response ? 204: 500);
    }

    public async getMovies(req: Request, res: Response): Promise<void> {
        const movies: Movie[] = await Movie.findAll();
        res.json({
            movies: movies
        });
    }

    public async getMovie(req: Request, res: Response): Promise<void> {
        const movie: Movie = await Movie.findByPk(req.params.id);
        res.json({
            movie: movie
        });
    }

    public async updateMovie(req: Request, res: Response): Promise<void> {
        const movie: [number, Movie[]] = await Movie.update({
            format: req.body.format,
            length: +req.body.length,
            rating: +req.body.rating,
            title: req.body.title,
            year: +req.body.year
        }, {
            where: {
                id: +req.params.id
            }
        });
        res.json({
            movie: movie[0]
        });
    }
}