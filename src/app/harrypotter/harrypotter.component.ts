import { Component, OnInit, Input } from '@angular/core';
import { HPService } from "../services/hp.service";


@Component({
  selector: 'app-harrypotter',
  templateUrl: './harrypotter.component.html',
  styleUrls: ['./harrypotter.component.css']
})
export class HarrypotterComponent implements OnInit {

  constructor( private HP:HPService) {   }

  casa = '';
  personajeHP:any;

  ngOnInit(): void {

  }

  getPersonaje(casa:string){
    this.HP.getPersonaje(casa).subscribe(result =>{
      this.personajeHP = result;
      console.log(this.personajeHP);
    })
  }

}
