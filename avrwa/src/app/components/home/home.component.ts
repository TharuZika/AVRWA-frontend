import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {GeneralService} from "../../services/general.service";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slideImg1: string = "";
  slideImg2: string = "";
  slideImg3: string = "";

  constructor(public router: Router, private readonly service: GeneralService) {
  }

  clickLearnMore(){
    this.service.testApiCall().subscribe({
      next: (res: HttpResponse<any>) => {
        console.log("Test Done!")
      },
      error: err =>{
        console.log("Test Error!");
        console.log(err);
      }
    })
  }

  loadImg(){
    this.slideImg1 = "https://cdn2.slidemodel.com/wp-content/uploads/70010-01-artificial-intelligence-powerpoint-template-1-558x314.jpg";
    this.slideImg2 = "https://www.slidesalad.com/wp-content/uploads/2021/06/Deep-Learning-PowerPoint-Templates-Infographics-Diagrams-0003.jpg";
    this.slideImg3 = "https://www.slidesalad.com/wp-content/uploads/2021/06/Deep-Learning-PowerPoint-Templates-Infographics-Diagrams-0001.jpg";
  }

  ngOnInit(): void {
    this.loadImg()
  }

  navigateTo(nav: string) {
    if (nav === 'cctv'){
      this.router.navigate(['/cctv']);
    }else if (nav === 'media'){
      this.router.navigate(['/media']);
    }
  }
}
