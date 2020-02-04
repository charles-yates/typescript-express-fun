import { Model } from "sequelize";

export class Movie extends Model {
    public id: number;
    public format: string;
    public length: number;
    public rating: number;
    public title: string;
    public year: number;

    public readonly createdAt: Date;
    public readonly updatedAt: Date;
}