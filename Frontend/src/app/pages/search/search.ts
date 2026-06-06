import { Component, OnInit } from '@angular/core';
import { TechnologyCard } from "../../components/technology-card/technology-card";
import { ActivatedRoute } from '@angular/router';
import { Http } from '../../services/http';

@Component({
  selector: 'app-search',
  imports: [TechnologyCard],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search implements OnInit{

  public technologies: any = [];
  public query: string = "";

  constructor(
    private _activateRoute: ActivatedRoute,
    private _httpService: Http
  ){}

  ngOnInit(): void {
    this._activateRoute.params.subscribe(params => {
      this.query = params['query'];
      this._httpService.searchTechnology(this.query).subscribe((technologies: any) => {
        this.technologies = technologies.data;
      });
    });
  }
}
