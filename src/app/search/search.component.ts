import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchQuery: string = '';
  searchHistory: string[] = [];
  filteredHistory: string[] = [];
  showDropdown: boolean = false;
  selectedIndex: number = -1;

  ngOnInit() {
    // Historial temporal de ejemplo
    this.searchHistory = [
      'angular components',
      'typescript tutorial',
      'rxjs observables',
      'angular routing',
      'css flexbox',
      'javascript promises'
    ];
  }

  onInputChange() {
    this.selectedIndex = -1;
    this.filterHistory();
    this.showDropdown = this.searchQuery.length > 0 || this.filteredHistory.length > 0;
  }

  onInputFocus() {
    this.filterHistory();
    this.showDropdown = true;
  }

  onInputBlur() {
    // Delay para permitir clicks en el dropdown
    setTimeout(() => {
      this.showDropdown = false;
    }, 150);
  }

  filterHistory() {
    if (this.searchQuery.trim() === '') {
      this.filteredHistory = [...this.searchHistory];
    } else {
      this.filteredHistory = this.searchHistory.filter(item =>
        item.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }

  onSearch(query?: string) {
    const searchTerm = query || this.searchQuery.trim();
    
    if (searchTerm && searchTerm.length > 0) {
      // Remover si ya existe en el historial
      this.searchHistory = this.searchHistory.filter(item => 
        item.toLowerCase() !== searchTerm.toLowerCase()
      );
      
      // Agregar al inicio del historial
      this.searchHistory.unshift(searchTerm);
      
      // Mantener solo los últimos 10 elementos
      if (this.searchHistory.length > 10) {
        this.searchHistory = this.searchHistory.slice(0, 10);
      }

      this.searchQuery = searchTerm;
      this.showDropdown = false;
      
      // Aquí puedes agregar la lógica de búsqueda real
      console.log('Buscando:', searchTerm);
    }
  }

  selectHistoryItem(item: string) {
    this.onSearch(item);
  }

  removeFromHistory(item: string, event: Event) {
    event.stopPropagation();
    this.searchHistory = this.searchHistory.filter(historyItem => historyItem !== item);
    this.filterHistory();
  }

  onKeyDown(event: KeyboardEvent) {
    if (!this.showDropdown) return;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.selectedIndex = Math.min(this.selectedIndex + 1, this.filteredHistory.length - 1);
        break;
      
      case 'ArrowUp':
        event.preventDefault();
        this.selectedIndex = Math.max(this.selectedIndex - 1, -1);
        break;
      
      case 'Enter':
        event.preventDefault();
        if (this.selectedIndex >= 0 && this.selectedIndex < this.filteredHistory.length) {
          this.onSearch(this.filteredHistory[this.selectedIndex]);
        } else {
          this.onSearch();
        }
        break;
      
      case 'Escape':
        this.showDropdown = false;
        this.selectedIndex = -1;
        break;
    }
  }

  clearSearch() {
    this.searchQuery = '';
    this.showDropdown = false;
    this.selectedIndex = -1;
  }
}
