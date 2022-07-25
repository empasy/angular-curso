import {Component, OnDestroy, OnInit} from '@angular/core';
import {PhotosService} from "../../services/photos.service";
import {IPhoto} from "../../interfaces/IPhoto";
import {Observable, of, Subscription, take} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-container-photos',
  templateUrl: './container-photos.component.html',
  styleUrls: ['./container-photos.component.scss']
})
export class ContainerPhotosComponent implements OnInit {

  public imagen: string  = "https://i.linio.com/p/3eebd43470916f18151d45c8e962560e-product.webp";
  photos: Observable<IPhoto[]> = of([]);
  constructor(
    private photosService: PhotosService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos() {
    this.photos = this.photosService.getPhotos().pipe(take(1));
  }

  async goToPhoto(id: number) {
  console.log('id: ', id);
  await this.router.navigate(['/photos/' + id]);
  }

}
