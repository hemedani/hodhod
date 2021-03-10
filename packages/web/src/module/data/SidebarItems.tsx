import { Path } from "../../routes/Path";

export const SidebarItems = [
  {
    name: "خانه",
    route: Path.home,
  },
  {
    name: "ثبت نام فروشنده",
    route: Path.sellerdatainput,
  },
  {
    name: "داشبورد ",
    route: Path.client,
  },
  { name: "بدهی ها", route: Path.debts },
  { name: "مراکز", route: Path.centers },
];
