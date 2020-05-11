import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo!');
  }

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization : 'Bearer BQCskTQ-vAY2MbSKBBEs0YrTjtXi1R5M0C77FUVt1SS17cHri63_eNnmQsBCJ2dx4Oo-CK_3z4KHvJi5E-U'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=50')
      .pipe(map((data: any) => {
        return data.albums.items;
      }));
  }

  getArtist(termino: string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`)
      .pipe(map((data: any) => {
        return data.artists.items;
      }));
  }
}
