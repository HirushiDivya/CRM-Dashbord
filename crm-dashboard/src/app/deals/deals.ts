import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Deal, INITIAL_DEALS } from '../../deals.data';

@Component({
  selector: 'app-deals',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './deals.html',
  styleUrl: './deals.scss'
})
export class DealsComponent {
  deals: Deal[] = [...INITIAL_DEALS];
  searchTerm: string = '';

  get filteredDeals() {
    return this.deals.filter(d => d.title.toLowerCase().includes(this.searchTerm.toLowerCase()) || d.assignedTo.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
}