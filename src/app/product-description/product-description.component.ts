import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-description',
  standalone: true, // Ensure it's a standalone component
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss'],
  imports: [CommonModule], // Import CommonModule to use *ngIf
})
export class ProductDescriptionComponent {
  isDropdownOpen = false;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  toggleDropdown(event: Event) {
    event.stopPropagation();
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown(event: Event) {
    if (this.isDropdownOpen) {
      this.isDropdownOpen = false;
    }
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      document.addEventListener('click', (event) => this.closeDropdown(event));
    }
  }
}
