import { TypesItem } from "@/Types/common-types";

interface MenuItemNumberProps {
  place: string;
  phoneNumber: string;
}

//    Номера телефонов      \\
export const phoneNumbers: MenuItemNumberProps[] = [
  {
    phoneNumber: "8 (800) 350-80-17",
    place: "Россия",
  },
  {
    phoneNumber: "8 (800) 350-80-17",
    place: "Москва",
  },
  {
    phoneNumber: "8 (800) 350-80-17",
    place: "Санкт-Петербург",
  },
];
//    Продукты по назначению      \\
export const itemsByRole: TypesItem[] = [
  {
    name: "Лечение ран",
    link: "/catalog/woundRecovery",
  },
  {
    name: "Энтеральное питание",
    link: "/catalog/enteralFood",
  },
  {
    name: "Уход за стомой",
    link: "/catalog/careForFtoma",
  },
  {
    name: "Массаж простаты",
    link: "/catalog/massageOfProstate",
  },
  {
    name: "Уход за лежачими больными",
    link: "/catalog/careForLaidUp",
  },
  {
    name: "Экспресс-тесты",
    link: "/catalog/exrpessTests",
  },
];
//    Продукция по типу      \\
export const itemsByType: TypesItem[] = [
  {
    name: "Бинты и пластыри",
    link: "/catalog/bandageAndPatch",
  },
  {
    name: "Урология",
    link: "/catalog/urology",
  },
  {
    name: "Гинекология",
    link: "/catalog/ginecology",
  },
  {
    name: "Медицинские перчатки",
    link: "/catalog/medicalGloves",
  },
  {
    name: "Ортопедия",
    link: "/catalog/orthopedics",
  },
  {
    name: "Медтехника для дома",
    link: "/catalog/medTechForHome",
  },
];
//    Сервисы     \\
export const itemsService: TypesItem[] = [
  {
    name: "Оплата",
    link: "/info/payment",
  },
  {
    name: "Доставка",
    link: "/info/delivery",
  },
  {
    name: "Компенсация",
    link: "/info/compensation",
  },
  {
    name: "Контакты",
    link: "/info/contacts",
  },
  {
    name: "Политика конфиденциальности",
    link: "/info/policy",
  },
];
