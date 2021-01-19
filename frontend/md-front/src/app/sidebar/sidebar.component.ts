import { Component, OnInit } from '@angular/core';

declare interface rutaSide {
  path: string;
  title: string;
  icon: string;
  class: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menu: any[];
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
    path: "/inicio",
    title: "Inicio",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "/empresas",
    title: "Empresas",
    icon: "icon-atom",
    class: ""
  },
  {
    path: "/clientes",
    title: "Clientes",
    icon: "icon-pin",
    class: "" },
  {
    path: "/productos",
    title: "Productos",
    icon: "icon-bell-55",
    class: ""
  },

  {
    path: "/user",
    title: "Usuarios",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/Reportes",
    title: "Reportes",
    icon: "icon-puzzle-10",
    class: ""
  },
  {
    path: "/estadistica",
    title: "estadistica",
    icon: "icon-align-center",
    class: ""
  }
];

