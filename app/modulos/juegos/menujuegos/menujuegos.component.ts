import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menujuegos',
  templateUrl: './menujuegos.component.html',
  styleUrls: ['./menujuegos.component.css']
})
export class MenujuegosComponent implements OnInit {

  
  constructor(private route: ActivatedRoute,
    private router: Router) { }

ngOnInit(): void {
}

Juego(tipo: string) {
  switch (tipo) {
      case 'Ahorcado':
      this.router.navigate(['/juegos/ahorcado']);
      break;
      case 'Agilidad':
      this.router.navigate(['/juegos/agilidad']);
      break;
      /* case 'AgilidadaMasListado':
      this.router.navigate(['/Juegos/AgilidadaMasListado']);
      break; */
      case 'MayorOMenor':
      this.router.navigate(['/juegos/mayoromenor']);
      break;
      case 'Preguntados':
      this.router.navigate(['/juegos/preguntados']);
      break;
    }
  }

}
