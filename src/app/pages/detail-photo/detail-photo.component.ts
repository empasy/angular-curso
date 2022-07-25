import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IPhoto} from "../../interfaces/IPhoto";
import {PhotosService} from "../../services/photos.service";
import {take} from "rxjs";

@Component({
  selector: 'app-detail-photo',
  templateUrl: './detail-photo.component.html',
  styleUrls: ['./detail-photo.component.scss']
})
export class DetailPhotoComponent implements OnInit {
  photo!: IPhoto;
  photoId: string | null = '';

  constructor(
    private photosService: PhotosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.photoId = this.route.snapshot.paramMap.get('id');
    this.getDetail()
  }

  getDetail() {
    this.photosService.getPhotoById(this.photoId!).pipe(take(1)).subscribe(photo => {
      this.photo = photo;
    });
  }

}
