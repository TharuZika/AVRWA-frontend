import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-media-upload',
  templateUrl: './media-upload.component.html',
  styleUrls: ['./media-upload.component.css']
})
export class MediaUploadComponent implements OnInit {
  isUploaded: boolean = false;
  imgSrc: string = "";


  upload() {
    this.isUploaded = !this.isUploaded;
  }

  ngOnInit(): void {
    this.imgSrc = "https://media.licdn.com/dms/image/C4E12AQFCBgITW4_uSA/article-cover_image-shrink_600_2000/0/1635865151443?e=2147483647&v=beta&t=YaP4k2HRvQDWILl6NKgpaayw4HvTQEfMoZYlkw5LE60"
  }
}
