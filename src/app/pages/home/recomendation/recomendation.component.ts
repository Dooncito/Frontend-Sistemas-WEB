// RecomendationComponent.component.ts
import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  isOnSale?: boolean;
}

interface Category {
  name: string;
  active: boolean;
}

@Component({
  selector: 'app-recomendation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recomendation.component.html',
  styleUrl: './recomendation.component.css'
})
export class RecomendationComponent {
  @ViewChild('carouselContainer') carouselContainer!: ElementRef;
  
  categories: Category[] = [
    { name: 'Hogar', active: true },
    { name: 'Laptops', active: false },
    { name: 'Computadoras', active: false },
    { name: 'Tablets', active: false },
    { name: 'Pantallas', active: false },
    { name: 'Servicios', active: false },
    { name: 'No MÃ¡ticos y Hodte', active: false },
    { name: 'OFERTAS Y REBAJAS', active: false }
  ];

  topProducts: Product[] = [
    {
      id: 1,
      name: 'EX DISPLAY - HP Pro 15',
      price: 499.00,
      rating: 4,
      reviews: 131,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
      category: 'laptop',
      isOnSale: false
    },
    {
      id: 2,
      name: 'EX DISPLAY - MSI Pro 16 Plus OAHSCD65 MULTTOUCH',
      price: 499.00,
      rating: 4,
      reviews: 131,
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=300&h=200&fit=crop',
      category: 'desktop',
      isOnSale: false
    },
    {
      id: 3,
      name: 'EX DISPLAY - MSI Pro 16 Plus OAHSCD65 MULTTOUCH',
      price: 499.00,
      rating: 4,
      reviews: 131,
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop',
      category: 'laptop',
      isOnSale: false
    },
    {
      id: 4,
      name: 'EX DISPLAY - MSI Pro 16 Plus OAHSCD65 MULTTOUCH',
      price: 699.00,
      rating: 5,
      reviews: 131,
      image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=300&h=200&fit=crop',
      category: 'desktop',
      isOnSale: false
    },
    {
      id: 5,
      name: 'EX DISPLAY - LG Pro 15',
      price: 499.00,
      rating: 4,
      reviews: 131,
      image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=200&fit=crop',
      category: 'desktop',
      isOnSale: false
    },
    {
      id: 6,
      name: 'EX DISPLAY - Dell Inspiron 15',
      price: 399.00,
      rating: 4,
      reviews: 87,
      image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=300&h=200&fit=crop',
      category: 'laptop',
      isOnSale: false
    },
    {
      id: 7,
      name: 'EX DISPLAY - Gaming PC RTX 4070',
      price: 1299.00,
      rating: 5,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=300&h=200&fit=crop',
      category: 'desktop',
      isOnSale: false
    }
  ];

  currentTime: string = '';
  
  // Carousel properties
  currentIndex: number = 0;
  cardWidth: number = 240; // Card width + gap
  maxScrollIndex: number = 0;
  cardsPerView: number = 4;

  ngOnInit() {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 1000);
    
    this.updateCarouselSettings();
    window.addEventListener('resize', () => this.updateCarouselSettings());
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.updateCarouselSettings();
    }, 0);
  }

  updateTime() {
    const now = new Date();
    this.currentTime = `LUN - SAT: 9:00 AM - 6:00 PM`;
  }

  onCategoryClick(clickedCategory: Category) {
    this.categories.forEach(cat => cat.active = false);
    clickedCategory.active = true;
  }

  generateStars(rating: number): boolean[] {
    return Array(5).fill(false).map((_, index) => index < rating);
  }

  updateCarouselSettings() {
    if (typeof window !== 'undefined') {
      const screenWidth = window.innerWidth;
      
      if (screenWidth <= 480) {
        this.cardsPerView = 2;
        this.cardWidth = 160;
      } else if (screenWidth <= 768) {
        this.cardsPerView = 3;
        this.cardWidth = 180;
      } else if (screenWidth <= 1024) {
        this.cardsPerView = 4;
        this.cardWidth = 220;
      } else {
        this.cardsPerView = 5;
        this.cardWidth = 240;
      }
      
      this.maxScrollIndex = Math.max(0, this.topProducts.length - this.cardsPerView);
      
      // Reset carousel position if current index is out of bounds
      if (this.currentIndex > this.maxScrollIndex) {
        this.currentIndex = this.maxScrollIndex;
      }
    }
  }

  scrollCarousel(direction: 'prev' | 'next') {
    if (direction === 'next' && this.currentIndex < this.maxScrollIndex) {
      this.currentIndex++;
    } else if (direction === 'prev' && this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}