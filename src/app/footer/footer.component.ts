import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  email: string = '';

  constructor() { }

  onSubscribe(): void {
    if (this.email && this.isValidEmail(this.email)) {
      // Aquí puedes agregar la lógica para suscribir al newsletter
      console.log('Suscribiendo email:', this.email);
      
      // Ejemplo de llamada a servicio
      this.subscribeToNewsletter(this.email);
      
      // Limpiar el campo después de la suscripción
      this.email = '';
      
      // Mostrar mensaje de éxito (puedes usar un servicio de notificaciones)
      this.showSuccessMessage();
    }
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private subscribeToNewsletter(email: string): void {
    // Aquí implementarías la llamada a tu API
    // Ejemplo:
    /*
    this.newsletterService.subscribe(email).subscribe(
      response => {
        console.log('Suscripción exitosa:', response);
      },
      error => {
        console.error('Error en suscripción:', error);
        this.showErrorMessage();
      }
    );
    */
  }

  private showSuccessMessage(): void {
    // Implementar notificación de éxito
    alert('¡Gracias por suscribirte a nuestro newsletter!');
  }

  private showErrorMessage(): void {
    // Implementar notificación de error
    alert('Hubo un error al procesar tu suscripción. Inténtalo de nuevo.');
  }
}