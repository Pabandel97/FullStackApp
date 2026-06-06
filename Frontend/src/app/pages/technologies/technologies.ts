import { Component, OnInit } from '@angular/core';
import { Http } from '../../services/http';
import { TechnologyCard } from '../../components/technology-card/technology-card';

@Component({
  selector: 'app-technologies',
  imports: [TechnologyCard],
  templateUrl: './technologies.html',
  styleUrl: './technologies.css',
})
export class Technologies  implements OnInit {

  public technologies: any;

  constructor(
    private _hhtpService: Http
  ){}

  ngOnInit(): void {
    
    this._hhtpService
      .getTechnologies()
      .subscribe((technologies: any) => {
        this.technologies = technologies.data;
    });
  }
}
