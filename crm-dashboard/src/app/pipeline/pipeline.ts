import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Deal, INITIAL_DEALS } from '../../deals.data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pipeline',
  standalone: true,
  imports: [CommonModule, FormsModule, DragDropModule],
  templateUrl: './pipeline.html',
  styleUrl: './pipeline.scss'
})
export class PipelineComponent {
  deals: Deal[] = [...INITIAL_DEALS];
  
  searchTerm: string = '';
  selectedPipeline: string = 'All Pipelines';
  pipelines: string[] = ['All Pipelines', 'QuickDeal', 'Enterprise Deal'];

  stages: Array<Deal['stage']> = [
    'Prospecting',
    'Qualified',
    'Proposal Sent',
    'In Negotiation',
    'Closed Won'
  ];

  getFilteredDeals(stage: Deal['stage']) {
    return this.deals.filter(d => 
      d.stage === stage && 
      d.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  getStageCount(stage: Deal['stage']): number {
    return this.getFilteredDeals(stage).length;
  }

  clearSearch() {
    this.searchTerm = '';
  }

  openModal() {
    console.log('Open modal clicked');
  }

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