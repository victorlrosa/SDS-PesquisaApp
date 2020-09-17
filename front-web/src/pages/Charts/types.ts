import { Platfomr } from "../Records/types";

export type Game = {
    id: number;
    title: string;
    platform: Platfomr;
}

export type ChartItem = {
    x: string;
    y: number;
}