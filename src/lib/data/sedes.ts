import { Sede } from "./types";

export const sedes: Sede[] = [
  {
    id: "san-jose",
    name: "Sede Central - San José",
    address: "Calle Principal, Edificio Torre Médica, Piso 3, Consultorio 305, San José, Costa Rica",
    phone: "+506 2234-5678",
    email: "sanjose@therakids.com",
    hours: "Lunes a Viernes: 8:00 AM - 6:00 PM | Sábados: 8:00 AM - 12:00 PM",
    mapUrl: "https://maps.google.com/?q=9.9281,-84.0907",
    latitude: 9.9281,
    longitude: -84.0907,
    icon: "location_on",
    iconBgColor: "bg-purple-100 dark:bg-purple-900/30",
    iconTextColor: "text-primary",
  },
  {
    id: "heredia",
    name: "Sede Heredia",
    address: "Plaza Comercial Flores, Local 12, contiguo a la farmacia, Heredia, Costa Rica",
    phone: "+506 2261-7890",
    email: "heredia@therakids.com",
    hours: "Lunes a Viernes: 9:00 AM - 5:00 PM",
    mapUrl: "https://maps.google.com/?q=10.0024,-84.1165",
    latitude: 10.0024,
    longitude: -84.1165,
    icon: "storefront",
    iconBgColor: "bg-yellow-100 dark:bg-yellow-900/30",
    iconTextColor: "text-yellow-600 dark:text-yellow-400",
  },
];
