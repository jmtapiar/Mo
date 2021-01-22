import { Component, OnInit } from '@angular/core';

declare interface rutaSide {
  path: string;
  title: string;
  icon: string;
  class: string;
  new: number;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menu: any[];
  novedades:boolean;
  constructor() { }
  ngOnInit() {
    this.menu = RUTAS.filter(menu => menu);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}

export const RUTAS: rutaSide[] = [
  {
    path: "inicio",
    title: "Inicio",
    icon: "fa-home",
    class: "",
    new:1
  },
  {
    path: "/empresas",
    title: "Empresas",
    icon: "fa-university",
    class: "",
    new:0
  },
  {
    path: "/clientes",
    title: "Clientes",
    icon: "fa-users",
    class: "",
    new:0
 },
  {
    path: "/productos",
    title: "Productos",
    icon: "fa-cubes",
    class: "",
    new:0
  },

  {
    path: "/user",
    title: "Usuarios",
    icon: "fa-user-circle",
    class: "",
    new:1
  },
  {
    path: "/Reportes",
    title: "Reportes",
    icon: "fa-signal",
    class: "",
    new:1
  },
  {
    path: "/estadistica",
    title: "Estadistica",
    icon: "fa-sitemap",
    class: "",
    new:2
  }
];

