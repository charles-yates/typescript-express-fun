import { DataTypes, Sequelize} from "sequelize";
import { Movie } from "./models/Movie";

const sequelize: Sequelize = new Sequelize("localdb", "root", null, {
    host: "localhost",
    dialect: "sqlite",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    storage: "data/database.sqlite",
    logging: false
});

Movie.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    format: {
        type: new DataTypes.STRING(10),
        allowNull: false
    },
    length: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: sequelize,
    tableName: "movies",
    timestamps: true
});

export const init = async (force: boolean) => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({
            force: force || false
        });
        return "Connection has been established successfully.";
    } catch (error) {
        throw new Error("DB Connection failed!");
    }
};