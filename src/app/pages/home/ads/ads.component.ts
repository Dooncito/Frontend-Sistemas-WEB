import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ads',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ads.component.html',
  styleUrl: './ads.component.css'
})

export class AdsComponent {
  currentSlide = 0;
  autoSlideInterval: any;
  progressInterval: any;
  progress = 0;

  slides = [
    {
      title: 'Relojes Inteligentes',
      subtitle: '%80 De Descuento',
      description: 'LAS MEJORES OFERTAS EN RELOJES INTELIGENTES',
      image: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      bgColor: 'linear-gradient(135deg, #6B1B7B 0%, #4A1A5C 100%)'
    },
    {
      title: 'SmartWatches Premium',
      subtitle: '%70 De Descuento',
      description: 'TECNOLOGÍA DE ÚLTIMA GENERACIÓN',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      bgColor: 'linear-gradient(135deg, #1E3A8A 0%, #1E40AF 100%)'
    },
    {
      title: 'SmartWatches Premium',
      subtitle: '%70 De Descuento',
      description: 'TECNOLOGÍA DE ÚLTIMA GENERACIÓN',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      bgColor: 'linear-gradient(135deg, #1E3A8A 0%, #1E40AF 100%)'
    },
    {
      title: 'Fitness Trackers',
      subtitle: '%60 De Descuento',
      description: 'MONITOREA TU SALUD Y RENDIMIENTO',
      image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      bgColor: 'linear-gradient(135deg, #059669 0%, #047857 100%)'
    }
  ];

  ngOnInit() {
    this.startAutoSlide();
    this.startProgressBar();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
    this.stopProgressBar();
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  startProgressBar() {
    this.progress = 0;
    this.progressInterval = setInterval(() => {
      this.progress += 1;
      if (this.progress >= 100) {
        this.progress = 0;
      }
    }, 40); // 4000ms / 100 = 40ms per 1%
  }

  stopProgressBar() {
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.resetProgress();
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
    this.resetProgress();
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.resetProgress();
  }

  resetProgress() {
    this.stopProgressBar();
    this.startProgressBar();
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  getCurrentSlide() {
    return this.slides[this.currentSlide];
  }
}