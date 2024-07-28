import { IconsHeader, INavLinks, ProjectData } from "@/interfaces"
import github from "../../public/assets/icons/GithubLogo.png";
import linkedin from "../../public/assets/icons/LinkedinLogo.png";
import css from "../../public/assets/icons/CSS3.png";
import html from "../../public/assets/icons/Html 5.png";
import js from "../../public/assets/icons/JavaScript.png";
import mongo from "../../public/assets/icons/Mongo Db.png";
import next from "../../public/assets/icons/Next.js.png";
import node from "../../public/assets/icons/Nodejs.png";
import react from "../../public/assets/icons/React.png";
import tailwind from "../../public/assets/icons/Tailwind CSS.png";
import ts from "../../public/assets/icons/TypeScript.png";
import styled from "../../public/assets/icons/styled.png";
import model from "../../public/assets/images/model.png";
import { StaticImageData } from "next/image";

export const navLinks: INavLinks[] = [
    {
        id: 1,
        name: 'Home',
        path: '/'
    },
    {
        id: 2,
        name: 'Sobre',
        path: '/about'
    },    {
        id: 3,
        name: 'Projetos',
        path: '/projects'
    },    {
        id: 4,
        name: 'CV',
        path: '/curriculum'
    },
]

export const iconsHeader: IconsHeader[] = [
    {
        id: 1,
        icon: github,
        url: 'https://github.com/DevPBDias'
    },
    {
        id: 2,
        icon: linkedin,
        url: 'https://www.linkedin.com/in/devpaulobrunomdias/'
    }
]

export const projects: ProjectData[] = [
    {
        id: 1,
        type: 'Trybe',
        image: model,
        title: 'Nome do projeto',
        description: 'Lorem ipsum dolor sit amet consectetur. Bibendum felis felis bibendum nulla vel a vel pretium.',
        stacks: [react, next, node, ts, tailwind, html, mongo],
    },
    {
        id: 2,
        type: 'Freelancer',
        image: model,
        title: 'Nome do projeto',
        description: 'Lorem ipsum dolor sit amet consectetur. Bibendum felis felis bibendum nulla vel a vel pretium.',
        stacks: [react, next, node, ts, tailwind, html, mongo],
    },
    {
        id: 3,
        type: 'Em grupo',
        image: model,
        title: 'Nome do projeto',
        description: 'Lorem ipsum dolor sit amet consectetur. Bibendum felis felis bibendum nulla vel a vel pretium.',
        stacks: [react, next, node, ts, styled, html, mongo],
    },
    {
        id: 4,
        type: 'Pessoal',
        image: model,
        title: 'Nome do projeto',
        description: 'Lorem ipsum dolor sit amet consectetur. Bibendum felis felis bibendum nulla vel a vel pretium.',
        stacks: [react, next, node, js, css, html, mongo],
    },
]

export const devStacks: StaticImageData[] = [
    react, next, node, js, css, html, mongo, ts, tailwind, styled
]