import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragDropModule, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Deal, INITIAL_DEALS } from '../deals.data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, DragDropModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  deals: Deal[] = [...INITIAL_DEALS];
  searchTerm: string = '';
  selectedPipeline: string = 'All Pipelines';
  selectedSort: string = 'default';

  // Modal Control & New Deal Form State
  isModalOpen: boolean = false;

  newDeal = {
    title: '',
    value: 0,
    closingDate: '',
    assignedTo: '',
    priority: 'Medium' as 'High' | 'Medium' | 'Low',
    stage: 'Prospecting' as Deal['stage'],
    status: 'Initial Contact',
    pipeline: 'Sales Pipeline'
  };

  pipelines: string[] = [
    'All Pipelines',
    'Sales Pipeline',
    'Enterprise Deals',
    'SMB Pipeline',
    'Partner Network'
  ];

  stages: Array<Deal['stage']> = [
    'Prospecting',
    'Qualified',
    'Proposal Sent',
    'In Negotiation',
    'Closed Won'
  ];

  // Dynamic Filtering Logic
  getFilteredDeals(stage: Deal['stage']): Deal[] {
    let filtered = this.deals.filter(deal => {
      const matchesStage = deal.stage === stage;
      const matchesPipeline = this.selectedPipeline === 'All Pipelines' || deal.pipeline === this.selectedPipeline;

      const search = this.searchTerm.toLowerCase().trim();
      const matchesSearch = !search ||
        deal.title.toLowerCase().includes(search) ||
        deal.assignedTo.toLowerCase().includes(search) ||
        deal.value.toString().includes(search);

      return matchesStage && matchesPipeline && matchesSearch;
    });

    // Sorting
    if (this.selectedSort === 'val-desc') {
      filtered = filtered.sort((a, b) => b.value - a.value);
    } else if (this.selectedSort === 'val-asc') {
      filtered = filtered.sort((a, b) => a.value - b.value);
    } else if (this.selectedSort === 'title-asc') {
      filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    return filtered;
  }

  getStageCount(stage: Deal['stage']): number {
    return this.getFilteredDeals(stage).length;
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.selectedPipeline = 'All Pipelines';
    this.selectedSort = 'default';
  }

  // Modal Methods
  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  addDeal(): void {
    if (!this.newDeal.title || !this.newDeal.value) return;

    const dealToAdd: Deal = {
      id: (this.deals.length + 1).toString(),
      ...this.newDeal
    };

    // top in new deal array
    this.deals = [dealToAdd, ...this.deals];

    // Reset Form
    this.newDeal = {
      title: '',
      value: 0,
      closingDate: '',
      assignedTo: '',
      priority: 'Medium',
      stage: 'Prospecting',
      status: 'Initial Contact',
      pipeline: 'Sales Pipeline'
    };

    this.closeModal();
  }

  // Advanced Drag & Drop Handler
  drop(event: CdkDragDrop<Deal[]>, targetStage: Deal['stage']) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const movedDeal = event.previousContainer.data[event.previousIndex];
      if (movedDeal) {
        movedDeal.stage = targetStage;
      }
    }
  }
}