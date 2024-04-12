import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'dashboard',
    loadComponent: ()=> import ('./dashboard/dashboard.component').then(m => m.DashboardComponent),
    children:[
      {
        path: 'consultar_solicitudes',
        title: 'Consultar Solicitudes',
        loadChildren: ()=>import('./dashboard/pages/consultar-amenidades/consultar-amenidades.component').then(m => m.ConsultarAmenidadesComponent)
      }

    ]
  },
  {
    path:'',
    redirectTo:'/dashboard',
    pathMatch: 'full'
  }
];
