import { StaticImageData } from "next/image";

export interface INavLinks {
    id: number,
    name: string,
    path: string,
}
export interface IconsHeader {
    id: number,
    icon: StaticImageData,
    url: string,
}