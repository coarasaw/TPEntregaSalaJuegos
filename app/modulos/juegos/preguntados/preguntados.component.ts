import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Juego } from 'src/app/clases/juego';
import { PokemonService } from 'src/app/servicios/pokemon.service';
import { JuegoService } from '../../../servicios/juego.service';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {

  numero: number = 1;
  vamos: boolean = false;
  name: string = '';
  puntos: number = 0;
  vidas: number = 4;
  vidasTotal: number = 4;
  win: boolean = false;
  lose: boolean = false;
  mensajeFinal: string = '';
  mensajeWin: string = '';
  mensajeLose: string = '';
  smsFinal: boolean = false;
  emailConectado: string;


  //imagenes
  imgPokemon: any;
  charizard: any; // 1 compañero de quien es ok
  poliwag: any; //20 preguntar q tipo de digimon es ok
  mew: any; //22 evolucion de que digimon es ok
  gastly: any; // 74 preguntar por quien se sacrifico ok
  pikachu: any; //199 preguntar en que temporada aparece ok
  bulbasaur: any; // 58 preguntar a que digimon elegido tenia bajo su control (gatomon) Ok

  /**pregunta */
  hacerPregunta!: string;
  rta!: string;

  /**bonotnes */
  boton_1!: string;
  boton_2!: string;
  boton_3!: string;
  boton_4!: string;

  //**PREGUNTAS */

  //formato       0 numero de pregunta 
  //              1 ->pregunta  
  //              2 al 5 -> opciones
  //              6 -> indice de la respuesta correcta
  pregunta_01: string[] = ['1', '¿Cual es la habilidad de Charizard ?', 'Correr', 'Salto de rana', 'Blaze', 'Vuela alto', '4'];
  pregunta_02: string[] = ['2', '¿Como se llama este Pokemon?', 'Gofy', 'Poliwag', 'Blastoise', 'Caterpie', '3'];
  pregunta_03: string[] = ['3', '¿Cual es la habilidad de Mew?', 'Pisar fuerte', 'Rayos', 'Magia', 'Sincronia', '5'];
  pregunta_04: string[] = ['4', '¿Cual es la evolucion de Gastly?', 'En Atun', 'A Vaca voladora', 'A Topo', 'A Genar', '5'];
  pregunta_05: string[] = ['5', '¿Cual es la evolucion de Pikachu?', 'Charizard', 'Miki','Mew', 'Pichu', '5'];
  pregunta_06: string[] = ['6', '¿Que habilidad tiene bulbasaur?', 'Rebota mucho', 'Espesura', 'Elastico', 'Gases fuertes', '3'];

  constructor(
    private apiPokemon: PokemonService,
    public  _unJuego: JuegoService,
    private rutas: Router ) {
          
    this.apiPokemon.getPokemon('charizard').subscribe( (pokemon: any) => { 
       this.charizard = pokemon.sprites.front_default;
    })
    this.apiPokemon.getPokemon('poliwag').subscribe( (pokemon: any) => { 
      this.poliwag = pokemon.sprites.front_default;
    })
    this.apiPokemon.getPokemon('mew').subscribe( (pokemon: any) => { 
      this.mew = pokemon.sprites.front_default;
    })
    this.apiPokemon.getPokemon('gastly').subscribe( (pokemon: any) => { 
      this.gastly = pokemon.sprites.front_default;
    }) 
    this.apiPokemon.getPokemon('pikachu').subscribe( (pokemon: any) => { 
      this.pikachu = pokemon.sprites.front_default;
    })    
    this.apiPokemon.getPokemon('bulbasaur').subscribe( (pokemon: any) => { 
      this.bulbasaur = pokemon.sprites.front_default;
    }) 
    
    this.emailConectado = this.obtener_localstorage();
           
  }

  ngOnInit(): void {
  }
  
  obtener_localstorage(){
    let datoUsuario = JSON.parse(localStorage.getItem('user'));
    //console.log(datoUsuario);
    return datoUsuario.email;
  }

  Iniciar()
  {
      this.vamos = true;

      // this.hacerPregunta = this.pregunta_01[1];
      // this.boton_1 = this.pregunta_01[2];
      // this.boton_2 = this.pregunta_01[3];
      // this.boton_3 = this.pregunta_01[4];
      // this.boton_4 = this.pregunta_01[5];

      // this.imgPokemon = this.charizard;

      // this.rta = this.pregunta_01[6];
         
      this.SiguienteRonda(this.numero);

      console.log("inicio: rta -> ", this.rta);
  } 

  SiguienteRonda(numero: number){

    console.log(this.numero);

    if(this.numero == parseInt(this.pregunta_01[0]))
    {
      this.hacerPregunta = this.pregunta_01[1];
      this.boton_1 = this.pregunta_01[2];
      this.boton_2 = this.pregunta_01[3];
      this.boton_3 = this.pregunta_01[4];
      this.boton_4 = this.pregunta_01[5];

      this.imgPokemon = this.charizard;

      this.rta = this.pregunta_01[6];
      //console.log("rta del if -> "); console.log(this.rta);
      
      //this.numero++;    
    }

    console.log('pregunta: ' , parseInt(this.pregunta_02[0]));
    console.log('numero: ' , this.numero);
    if(this.numero == parseInt(this.pregunta_02[0]))
    {
      this.imgPokemon = this.poliwag;

      this.hacerPregunta = this.pregunta_02[1];
      this.boton_1 = this.pregunta_02[2];
      this.boton_2 = this.pregunta_02[3];
      this.boton_3 = this.pregunta_02[4];
      this.boton_4 = this.pregunta_02[5];

      this.rta = this.pregunta_02[6];
      //console.log("rta del if -> "); console.log(this.rta);
      
      //this.numero++;    
    }
    if(this.numero == parseInt(this.pregunta_03[0]))
    {
      this.imgPokemon = this.mew;

      this.hacerPregunta = this.pregunta_03[1];
      this.boton_1 = this.pregunta_03[2];
      this.boton_2 = this.pregunta_03[3];
      this.boton_3 = this.pregunta_03[4];
      this.boton_4 = this.pregunta_03[5];

      this.rta = this.pregunta_03[6];  
      //console.log("rta del if -> "); console.log(this.rta);  
      
      //this.numero++;      
    }
    if(this.numero == parseInt(this.pregunta_04[0]))
    {
      this.imgPokemon = this.gastly;

      this.hacerPregunta = this.pregunta_04[1];
      this.boton_1 = this.pregunta_04[2];
      this.boton_2 = this.pregunta_04[3];
      this.boton_3 = this.pregunta_04[4];
      this.boton_4 = this.pregunta_04[5];

      this.rta = this.pregunta_04[6];
      
      //this.numero++;    
    }
    if(this.numero == parseInt(this.pregunta_05[0]))
    {
      this.imgPokemon = this.pikachu;

      this.hacerPregunta = this.pregunta_05[1];
      this.boton_1 = this.pregunta_05[2];
      this.boton_2 = this.pregunta_05[3];
      this.boton_3 = this.pregunta_05[4];
      this.boton_4 = this.pregunta_05[5];

      this.rta = this.pregunta_05[6];
      
      //this.numero++;    
    }
    if(this.numero == parseInt(this.pregunta_06[0]))
    {
      this.imgPokemon = this.bulbasaur;

      this.hacerPregunta = this.pregunta_06[1];
      this.boton_1 = this.pregunta_06[2];
      this.boton_2 = this.pregunta_06[3];
      this.boton_3 = this.pregunta_06[4];
      this.boton_4 = this.pregunta_06[5];

      this.rta = this.pregunta_06[6];
      //console.log("rta del if -> "); console.log(this.rta);
    } 
  }

  Control(boton: number){

    if(boton == parseInt(this.rta) && this.vidas>0 && this.puntos < 3){
      this.mensajeWin = 'Correcto!';
      this.win = true;
      this.lose = false;
      this.numero++;  
      this.puntos++;
      this.SiguienteRonda(this.numero);
    }
    else if(boton != parseInt(this.rta) && this.vidas>0 && this.puntos < 3){
            this.mensajeLose = 'Incorrencto!';
            this.win = false;
            this.lose = true;
            this.rta = '';
            this.numero++;  
            this.vidas--;  
            this.SiguienteRonda(this.numero);
    }

    if(this.puntos === 3){
      
      //Gardar Jugada Ver si va aca
      //this.res.agregarResultado('Win', 'Preguntados');

      this.mensajeFinal = 'GANASTE!!!';
      this.rta = '';
      this.smsFinal = true;
      this.win = false;
      this.lose = false;
    }


    if(this.vidas === 0){

      //Guardar jugada ver si va aca
      //this.res.agregarResultado('Lose', 'Preguntados');

      this.mensajeFinal = 'Fin del juego!!!';
      this.rta = '';
      this.smsFinal = true;
      this.win = false;
      this.lose = false;
    }  
  }

  Repetir(){
    this.numero = 1;
    this.vidas = 4;
    this.puntos = 0;
    this.win = false;
    this.lose = false;
    this.smsFinal = false;
    this.rta = '';

    this.Iniciar();
  }

  salirGame(){
    let date = new Date();
    let fechaActual = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();

    const puntajeJuego: Juego = {
      uemailJuego: this.emailConectado,
      nombreJuego: 'Preguntados',
      puntajeJuego: this.puntos.toString(),
      fechaJuego: fechaActual
    }
    this._unJuego.crearJuego(puntajeJuego);
    this.rutas.navigate(['juegos/menujuegos']);
  }
}
