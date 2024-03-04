import { Component } from '@angular/core';

interface Item {
  id: number;
  name: string;
  type: string;
}

@Component({
  selector: 'app-cattle',
  templateUrl: 'cattle.component.html',
  styleUrls: ['cattle.component.scss'],
})
export class CattlePage {
  items: Item[] = [
    { id: 1, name: 'Vaca 1', type: 'vaca' },
    { id: 2, name: 'Vaca 2', type: 'vaca' },
    { id: 3, name: 'Vaca 3', type: 'vaca' },
    { id: 4, name: 'Toro 1', type: 'toro' },
    { id: 5, name: 'Toro 2', type: 'toro' },
    { id: 6, name: 'Toro 3', type: 'toro' },
  ];
  searchTerm = '';

  filteredItems: Item[] = [];

  ngOnInit() {
    this.filteredItems = this.items;
  }

  filterItems() {
    this.filteredItems = this.items.filter((item) =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  viewItem(id: number) {
    console.log(`Viewing details for item with id ${id}`);
  }

  deleteItems() {
    // Implement the delete functionality here
    console.log('Deleting items...');
  }
}