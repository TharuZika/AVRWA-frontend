import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cctv-config',
  templateUrl: './cctv-config.component.html',
  styleUrls: ['./cctv-config.component.css']
})
export class CctvConfigComponent implements OnInit {
  isConnected: boolean = false;
  imgSrc: string;

  constructor() {
    this.imgSrc = "";
  }


  connect() {
    this.isConnected = !this.isConnected;
  }

  ngOnInit(): void {
    this.imgSrc = "https://www.cctvinstallation-uk.com/wp-content/uploads/2021/03/cctv-car-tracking-1024x539.jpg";
  }

  disconnect() {
    confirm("Are you sure you want to disconnect?");
    this.isConnected = !this.isConnected;
  }
}
