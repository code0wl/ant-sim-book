import { Point } from "engine/modules/draw/point";
import { currentResolution } from "./center";

const padding = 15;

export const generateRandomInteger = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * Math.floor(max));
};

export const generateRandomCoordinates = (coordinates: Point) =>
    new Point(
        boundedCell(
            generateRandomInteger(coordinates.x - 2, coordinates.x + 2),
            coordinates
        ),
        boundedCell(
            generateRandomInteger(coordinates.y - 2, coordinates.y + 2),
            coordinates
        )
    );

// TODO fix this
export const boundedCell = (coordinate: number, coordinates: Point) => {
    if (coordinate < 0) {
        return coordinate + padding;
    }

    if (
        coordinates.x + padding >= currentResolution.x ||
        coordinates.y + padding >= currentResolution.y
    ) {
        return coordinate - padding;
    }

    return coordinate;
};
