import {Component, OnInit} from '@angular/core';
import {GeneralService} from "../../services/general.service";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-media-upload',
  templateUrl: './media-upload.component.html',
  styleUrls: ['./media-upload.component.css']
})
export class MediaUploadComponent implements OnInit {
  isUploaded: boolean = false;
  imgSrc: string = "";

  constructor(private readonly service: GeneralService) {
  }

  upload() {
    this.isUploaded = !this.isUploaded;
  }

  ngOnInit(): void {
    this.imgSrc = "https://media.licdn.com/dms/image/C4E12AQFCBgITW4_uSA/article-cover_image-shrink_600_2000/0/1635865151443?e=2147483647&v=beta&t=YaP4k2HRvQDWILl6NKgpaayw4HvTQEfMoZYlkw5LE60"
  }

  fileName = '';

  onFileSelected(event: Event) {
    if (event.target) {
      const fileInput = event.target as HTMLInputElement;
      const file: File | null = (fileInput.files && fileInput.files[0]) || null;

      if (file) {
        this.fileName = file.name;

        const formData = new FormData();

        if (file.type.startsWith('image/')) {
          formData.append("type", "image");
          console.log("Image file selected");
          this.service.imagePr(formData).subscribe({
            next: (res: HttpResponse<any>) => {
              console.log("Done");
            },
            error: err => {
              console.log(err)
            }
          });
        }

        else if (file.type.startsWith('video/')) {
          formData.append("type", "video");
          console.log("Video file selected");
          this.service.videoPr(formData).subscribe({
            next: (res: HttpResponse<any>) => {
              console.log("Done");
            },
            error: err => {
              console.log(err)
            }
          });
        }

        else {
          console.log("Unknown file type");
        }

        console.log("formData");
        console.log(formData);
      }
    }
  }


}
