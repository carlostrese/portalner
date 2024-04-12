import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-consultar-amenidades',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './consultar-amenidades.component.html',
  styleUrl: './consultar-amenidades.component.css'
})
export  class ConsultarAmenidadesComponent {

}
