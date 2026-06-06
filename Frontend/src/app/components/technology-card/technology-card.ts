import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-technology-card',
  imports: [RouterLink],
  templateUrl: './technology-card.html',
  styleUrl: './technology-card.css',
})
export class TechnologyCard implements OnInit{

  @Input() technology: any = {}
  constructor(){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
}
