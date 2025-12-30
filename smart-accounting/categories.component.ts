import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Category {
  id: number;
  name: string;
  image: string;
}

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  filter = '';
  showForm = false;
  editingId: number | null = null;
  nextId = 5;

  formData = { name: '', image: '' };

  categories: Category[] = [
    { id: 1, name: 'Sales', image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&q=60' },
    { id: 2, name: 'Utilities', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=60' },
    { id: 3, name: 'Office', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=60' },
    { id: 4, name: 'Travel', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=60' }
  ];

  filteredCategories(): Category[] {
    const term = (this.filter || '').toLowerCase().trim();
    if (!term) return this.categories;
    return this.categories.filter(c => String(c.id).includes(term) || c.name.toLowerCase().includes(term));
  }

  openForm(category?: Category) {
    if (category) {
      this.editingId = category.id;
      this.formData = { name: category.name, image: category.image };
    } else {
      this.editingId = null;
      this.formData = { name: '', image: '' };
    }
    this.showForm = true;
  }

  saveCategory() {
    if (!this.formData.name.trim() || !this.formData.image.trim()) {
      alert('Please fill all fields');
      return;
    }

    if (this.editingId) {
      const idx = this.categories.findIndex(c => c.id === this.editingId);
      if (idx !== -1) {
        this.categories[idx] = { id: this.editingId, ...this.formData };
      }
    } else {
      this.categories.push({ id: this.nextId++, ...this.formData });
    }
    this.closeForm();
  }

  deleteCategory(id: number) {
    if (!confirm('Delete this category?')) return;
    this.categories = this.categories.filter(c => c.id !== id);
  }

  closeForm() {
    this.showForm = false;
    this.editingId = null;
    this.formData = { name: '', image: '' };
  }
}
