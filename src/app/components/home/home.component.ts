import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];

  constructor(private spotyfiService: SpotifyService) { }

  ngOnInit(): void {
    this.spotyfiService.getNewReleases()
    .subscribe( (data: any) => {
      console.log(data);
      this.nuevasCanciones = data;
    });
  }

}
