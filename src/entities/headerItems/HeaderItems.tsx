interface IHeaderItemEntry {
  title: string;
  path: string;
}

type IHeaderItems = IHeaderItemEntry[];

export const headerItems: IHeaderItems = [
  {
    title: "Главная",
    path: "/",
  },
  {
    title: "О Denwa",
    path: "/about",
  },
  {
    title: "Преимущества",
    path: "/feature",
  },
  {
    title: "Resource",
    path: "/resource",
  },
];
