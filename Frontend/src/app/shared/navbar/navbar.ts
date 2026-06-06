import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, RouterLinkWithHref, Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLinkActive, RouterLinkWithHref],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit{

  constructor(
    private _router: Router
  ){}

  ngOnInit(): void{}

searchTechnology(query: string){
  this._router.navigate(["/search", query]);
}

}
