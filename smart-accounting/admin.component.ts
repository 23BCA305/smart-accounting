import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  activeSection: string = 'dashboard';
  currentAdmin: string = 'Admin';

  // Dashboard stats
  totalUsers: number = 0;
  totalTransactions: number = 0;
  totalCategories: number = 0;
  totalBudgets: number = 0;

  // Data arrays
  users: any[] = [];
  allTransactions: any[] = [];
  categories: any[] = [];
  budgets: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadDashboardData();
  }

  setActiveSection(section: string) {
    this.activeSection = section;
  }

  loadDashboardData() {
    // Mock data - in real app, this would come from services
    this.totalUsers = 150;
    this.totalTransactions = 1250;
    this.totalCategories = 25;
    this.totalBudgets = 80;

    this.users = [
      { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active', joinDate: new Date() },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'active', joinDate: new Date() },
      // Add more mock users
    ];

    this.allTransactions = [
      { id: 1, user: 'John Doe', description: 'Salary', category: 'Income', type: 'income', amount: 50000, date: new Date() },
      { id: 2, user: 'Jane Smith', description: 'Grocery Shopping', category: 'Food', type: 'expense', amount: 2500, date: new Date() },
      // Add more mock transactions
    ];

    this.categories = [
      { id: 1, name: 'Food', description: 'Food and dining expenses', userCount: 120 },
      { id: 2, name: 'Transportation', description: 'Travel and transport costs', userCount: 95 },
      // Add more mock categories
    ];

    this.budgets = [
      { id: 1, user: 'John Doe', category: 'Food', limit: 10000, spent: 7500, period: 'Monthly' },
      { id: 2, user: 'Jane Smith', category: 'Entertainment', limit: 5000, spent: 3200, period: 'Monthly' },
      // Add more mock budgets
    ];
  }

  logout() {
    // Implement logout logic
    this.router.navigate(['/']);
  }

  // User management methods
  viewUserDetails(user: any) {
    // Implement view user details
    console.log('Viewing user:', user);
  }

  editUser(user: any) {
    // Implement edit user
    console.log('Editing user:', user);
  }

  deleteUser(user: any) {
    // Implement delete user
    console.log('Deleting user:', user);
  }

  // Transaction management methods
  viewTransactionDetails(transaction: any) {
    // Implement view transaction details
    console.log('Viewing transaction:', transaction);
  }

  editTransaction(transaction: any) {
    // Implement edit transaction
    console.log('Editing transaction:', transaction);
  }

  deleteTransaction(transaction: any) {
    // Implement delete transaction
    console.log('Deleting transaction:', transaction);
  }

  // Category management methods
  addCategory() {
    // Implement add category
    console.log('Adding new category');
  }

  editCategory(category: any) {
    // Implement edit category
    console.log('Editing category:', category);
  }

  deleteCategory(category: any) {
    // Implement delete category
    console.log('Deleting category:', category);
  }

  // Budget management methods
  viewBudgetDetails(budget: any) {
    // Implement view budget details
    console.log('Viewing budget:', budget);
  }

  editBudget(budget: any) {
    // Implement edit budget
    console.log('Editing budget:', budget);
  }

  deleteBudget(budget: any) {
    // Implement delete budget
    console.log('Deleting budget:', budget);
  }

  // Report methods
  generateUserReport() {
    // Implement user report generation
    console.log('Generating user report');
  }

  generateTransactionReport() {
    // Implement transaction report generation
    console.log('Generating transaction report');
  }

  generateSystemReport() {
    // Implement system report generation
    console.log('Generating system report');
  }
}
