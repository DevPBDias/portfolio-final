import { IconsHeader, INavLinks } from "@/interfaces"
import github from "../../public/assets/icons/GithubLogo.png";
import linkedin from "../../public/assets/icons/LinkedinLogo.png";

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