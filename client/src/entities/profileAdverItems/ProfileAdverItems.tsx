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
        title: "Сергиенко Евгений",
        description: "Backend Developer"
    },
    {
        image: denwaIcon,
        title: "Коваленко Родион",
        description: " Frontend Developer"
    },
    {
        image: denwaIcon,
        title: "Денис Николаенко",
        description: "Data Science Engineer"
    },
  
    
]