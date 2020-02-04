import { Request, Response } from "express";
import { Movie } from "../db";

export default class MovieController {

    public async createMovie(req: Request, res: Response): Promise<void> {
        const movie: Movie = await Movie.create({
            format: req.params.format,
            length: +req.params.length,
            rating: +req.params.rating,
            title: req.params.title,
            year: +req.params.year
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
            format: req.params.format,
            length: +req.params.length,
            rating: +req.params.rating,
            title: req.params.title,
            year: +req.params.year
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