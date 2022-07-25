import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPhoto} from "../interfaces/IPhoto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private httpClient: HttpClient) { }

  getPhotos(): Observable<IPhoto[]> {
    return this.httpClient.get<IPhoto[]>('https://jsonplaceholder.typicode.com/photos');
  }

  getPhotoById(id: string) {
    return this.httpClient.get<IPhoto>('https://jsonplaceholder.typicode.com/photos/' + id);
  }
}
