import { Opinion } from "./Opinion";

export interface Property{
    propertyId: number;
    ownerId: number;
    title: String;
    description: String;
    price: number;
    address: String;
    city: String;
    cityId: number;
    type: string;
    rooms: number;
    capacity: number;
    state: boolean;
    wifi: boolean;
    parking: boolean;
    bathrooms: number;
    whenUpdated: Date;
    photo: String[];
    opinion: Opinion;
}