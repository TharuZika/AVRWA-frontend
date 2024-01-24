import { AfterViewInit, Component, OnInit } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']  // Correct property name
})
export class HeroSectionComponent implements OnInit, AfterViewInit {


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (typeof particlesJS !== 'undefined') {
      this.initializeParticles();
    } else {
      console.error('Particle.js not defined. Make sure it is properly loaded.');
    }
  }

  private initializeParticles() {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 100,
        },
        color: {
          value: '#00b6ff',
        },
        shape: {
          type: 'circle',
        },
        opacity: {
          value: 0.7,
          random: true,
        },
        size: {
          value: 3,
          random: true,
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#00ffec',
          opacity: 0.4,
          width: 1,
        },
      },
    });
  }
}
