import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent {

  transactions: any[] = [];

  budgets: any[] = [];

  categories: string[] = ['Food', 'Rent', 'Salary', 'Shopping'];

  selectedBudget: any = null;

  filteredTransactions: any[] = [];

  isEditing = false;

  newTransaction = {
    id: null,
    description: '',
    amount: 0,
    category: '',
    type: 'income',
    date: ''
  };

  // ✅ TOTAL INCOME
  getTotalIncome(): number {
    return this.transactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + Number(t.amount), 0);
  }

  // ✅ TOTAL EXPENSES
  getTotalExpenses(): number {
    return this.transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + Number(t.amount), 0);
  }

  // ✅ NET BALANCE
  getNetBalance(): number {
    return this.getTotalIncome() - this.getTotalExpenses();
  }

  // ✅ ADD TRANSACTION
  addTransaction() {
    this.transactions.push({ ...this.newTransaction, id: Date.now() });
    this.resetForm();
  }

  // ✅ EDIT TRANSACTION
  editTransaction(transaction: any) {
    this.newTransaction = { ...transaction };
    this.isEditing = true;
  }

  // ✅ UPDATE TRANSACTION
  updateTransaction() {
    const index = this.transactions.findIndex(t => t.id === this.newTransaction.id);
    if (index !== -1) {
      this.transactions[index] = { ...this.newTransaction };
    }
    this.resetForm();
  }

  // ✅ DELETE TRANSACTION
  deleteTransaction(id: number) {
    this.transactions = this.transactions.filter(t => t.id !== id);
  }

  // ✅ CANCEL EDIT
  cancelEdit() {
    this.resetForm();
  }

  // ✅ RESET FORM
  resetForm() {
    this.isEditing = false;
    this.newTransaction = {
      id: null,
      description: '',
      amount: 0,
      category: '',
      type: 'income',
      date: ''
    };
  }

  // Dummy methods to avoid template errors
  selectBudget(budget: any) {
    this.selectedBudget = budget;
  }

  clearBudgetSelection() {
    this.selectedBudget = null;
  }

  getCategoryIcon(id: any) {
    return 'fas fa-tag';
  }

  getBudgetSpent(budget: any): number {
    return 0;
  }

  getBudgetRemaining(budget: any): number {
    return 0;
  }

  getBudgetProgress(budget: any): number {
    return 0;
  }
}
