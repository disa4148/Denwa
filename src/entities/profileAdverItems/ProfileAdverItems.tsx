import denwaIcon from "/public/assets/images/denwa-icon.svg";

interface IProfileAdverEntry {
    image: string;  
    title: string;
    description: string;
}

type IProfileAdver = IProfileAdverEntry[];

export const ProfileAdverItems: IProfileAdver = [
    {
        image: denwaIcon,
        title: "LoremAirBnb",
        description: "Category - 2021-2022"
    },
    {
        image: denwaIcon,
        title: "LoremAirBnb",
        description: "Category - 2021-2022"
    },
    
]