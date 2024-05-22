import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Musica } from '../../domain/musica';
import { FirebaseService } from '../../service/firebase.service';


@Component({
  selector: 'app-canciones',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './canciones.component.html',
  styleUrl: './canciones.component.scss'
})
export class CancionesComponent {
  t: string='';
  a: string='';
  g: string='';
  musica: Musica = new Musica();
  canciones: any;
  constructor(private firestoreService: FirebaseService) { }

  ngOnInit() {
  this.firestoreService.getMusica().then(data=> {
    this.canciones = data.docs.map((doc:any)=>{
      console.log(doc.titulo);
      return{
        id: doc.id,
        ... doc.data()        
      }
    });
   
  }
  );
  }


  guardarCancion() {
    console.log('Guardando canción: ' + this.t + ' ' + this.a + ' ' + this.g);
    this.firestoreService.save(this.musica); 

  }
}
