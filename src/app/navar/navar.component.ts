import { RouterOutlet } from '@angular/router';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 👈 importa aquí

@Component({
  selector: 'app-navar',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './navar.component.html',
  styleUrl: './navar.component.css'
})
export class NavarComponent {
  menuActivo = false;
  searchTerm = '';
  activeLink = '';

  // 👇 variables para login/registro
  mostrarLogin = false;
  mostrarRegistro = false;

  loginData = { email: '', password: '' };
  registroData = { nombre: '', email: '', password: '' };

  toggleMenu() {
    this.menuActivo = !this.menuActivo;
  }

  activarLink(nombre: string) {
    this.activeLink = nombre;
    this.menuActivo = false; // cerrar menú en móvil
  }

  performSearch() {
    if (this.searchTerm.trim()) {
      alert(`Buscando: ${this.searchTerm}`);
      console.log('Buscando:', this.searchTerm);
    }
  }

  abrirCarrito() {
    alert('Abriendo carrito de compras');
  }

  abrirPerfil() {
    alert('Abriendo perfil de usuario');
  }

  // 👇 funciones nuevas
  abrirLogin() {
    this.mostrarLogin = true;
    this.mostrarRegistro = false;
  }

  abrirRegistro() {
    this.mostrarRegistro = true;
    this.mostrarLogin = false;
  }

  cerrarModal() {
    this.mostrarLogin = false;
    this.mostrarRegistro = false;
  }

  loginUsuario() {
    console.log("Login:", this.loginData);
    alert(`Login con: ${this.loginData.email}`);
    this.cerrarModal();
  }

  registrarUsuario() {
    console.log("Registro:", this.registroData);
    alert(`Registro con: ${this.registroData.email}`);
    this.cerrarModal();
  }

  // Cerrar menú en resize
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (window.innerWidth > 768 && this.menuActivo) {
      this.menuActivo = false;
    }
  }
}
