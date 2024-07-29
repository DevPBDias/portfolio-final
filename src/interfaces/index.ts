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

export interface ProjectData {
    id: number,
    type: string,
    image: StaticImageData,
    inGroup: boolean,
    description: string,
    name: string,
    year: number,
    link: string,
    techs: string[]
}