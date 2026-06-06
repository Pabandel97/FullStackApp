import { Component, OnInit } from '@angular/core';
import { Http } from '../../services/http';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { UpperCasePipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-technology',
  imports: [RouterLink, UpperCasePipe, DatePipe],
  templateUrl: './technology.html',
  styleUrl: './technology.css',
})
export class Technology implements OnInit {

  public technology: any = {};

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _httpService: Http
  ){}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      console.log(params);
      const id: string = params['id'];
      this._httpService.getTechnology(id).subscribe((technology: any) => {
        this.technology = {
          name: technology.data.name,
          description: technology.data.description,
          logo: technology.data.logo,
          _id: technology.data._id,
          tags: technology.data.tags,
          createdAt: technology.data.createdAt,
          updatedAt: technology.data.updatedAt
        };
      });
    });
    
  }

}
