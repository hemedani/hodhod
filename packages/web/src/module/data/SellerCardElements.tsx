import { inpType } from "../components/inputs/TextInput";

export const items: { name: string; type: inpType; placeholder: string }[] = [
  {
    name: "fName",
    type: "text",
    placeholder: "نام",
  },
  { name: "lName", type: "text", placeholder: "نام خانوادگی" },
  { name: "codeMelli", type: "number", placeholder: "کد ملی" },
  { name: "cellPhone", type: "number", placeholder: "شماره همراه" },
  { name: "landLine", type: "number", placeholder: "تلفن ثابت" },
  { name: "country", type: "text", placeholder: "کشور " },
  { name: "province", type: "text", placeholder: "استان " },
  { name: "city", type: "text", placeholder: "شهر " },
  { name: "parish", type: "text", placeholder: "محله " },
  { name: "address", type: "text", placeholder: "آدرس " },
];
