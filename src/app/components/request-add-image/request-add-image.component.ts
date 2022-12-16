import { ActivatedRoute, Router } from '@angular/router';
import { RequestImageService } from './../../services/request-image.service';
import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-trainer-add-image',
  templateUrl: './request-add-image.component.html',
  styleUrls: ['./request-add-image.component.css'],
})
export class RequestAddImageComponent implements OnInit {
  requestId: string; 
  file: any;
  insert: boolean = true;
  filePreview:any

  constructor(
    private requestImageService:RequestImageService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.requestId = params['requestId'];
    });
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      if (queryParams['insert'] == 'false') {
        this.insert = false;
      }
    });
    this.getRequestImages()
  }

  onFileChange(evt: any): void {
    this.file = evt.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.file); // toBase64
    reader.onload = () => {
      this.filePreview = reader.result as string; // base64 Image src
      console.log(this.filePreview);
      
    };
  }

  getRequestImages() {
    this.requestImageService.getImagesByrequestId(Number(this.requestId))
    .subscribe((response) => {
      
      if (response.data.length > 0)
        this.filePreview = "data:image/jpg;base64," + response.data[0].imagePath
      });
  }

  uploadImage() {
    this.insert
      ? this.requestImageService
          .add(this.requestId, this.file)
          .subscribe((response) => {
            this.router.navigate([`/requests/request/${this.requestId}`]);
          })
      : this.requestImageService
          .update(this.requestId, this.file)
          .subscribe((response) => {
            this.router.navigate([`/requests/request/${this.requestId}`]);
          });
  }
}