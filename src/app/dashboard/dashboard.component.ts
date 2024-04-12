import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule,MatIconModule, MatIconModule,MatToolbarModule, MatSidenavModule,MatButtonModule, MatListModule, MatExpansionModule,],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export  class DashboardComponent {
  public sideBarItem = [
    { label: 'Administracion y amenidades',icon: 'label', submodulos: [
      {label: 'consultar solicitudes', url:'/consultar_solicitudes'},
      {label:'levantar solicitud', url: '/'}
    ]},
    { label: 'Atencion a inquilinos',icon: 'add' },
    {  label: 'Atencion a usuarios',icon: 'search',},
    { label: 'comunicacion'},
    {label: 'configuracion modulos'},
    {label: 'eventualidades'},
    {label: 'reportes (condominios)'},
    {label: 'roles'},
    {label: 'usuarios'}
  ];
  panelOpenState = false;

}
