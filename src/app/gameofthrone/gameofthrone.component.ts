import { Component, OnInit } from '@angular/core';
import { GOTService } from "../services/got.service";

@Component({
  selector: 'app-gameofthrone',
  templateUrl: './gameofthrone.component.html',
  styleUrls: ['./gameofthrone.component.css']
})
export class GameofthroneComponent implements OnInit {

  constructor(private GOT:GOTService) { }

  personajeGOT:any;

  ngOnInit(): void {
    this.getPersonaje();
  }

  getPersonaje(){
    this.GOT.getPersonaje().subscribe(result =>{
      this.personajeGOT = result
      console.log(this.personajeGOT);
    })
  }
}

