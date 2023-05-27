import { Component, DoCheck, EventEmitter, Input, Output } from '@angular/core';

interface Page {
  pageNumber: number;
  isSelected: boolean;
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.less'],
})
export class PaginationComponent implements DoCheck {
  @Output() navigate = new EventEmitter();
  @Input() qtdOfItems!: number;
  @Input() itemsPerPage = 20;
  currentPage = 0;
  pages: Page[] = [];

  modalVisibility = false;
  modalMessage!: string;

  ngDoCheck(): void {
    if (this.qtdOfItems && !this.pages.length) {
      this.buildPages();
      this.selectPage(1);
    }
  }

  buildPages() {
    const qtdOfPages = Math.ceil(this.qtdOfItems / this.itemsPerPage);
    for (let i = 1; i <= qtdOfPages; i++) {
      this.pages.push({
        pageNumber: i,
        isSelected: false,
      });
    }
  }

  getCurrentPage(): Page {
    return this.pages.filter((page) => page.isSelected)[0];
  }

  selectPage(pageNumber: number): void {
    if (pageNumber === this.currentPage) {
      console.log('entrou onde n devia');
      return;
    }
    if (this.pages) {
      this.pages.forEach((page) => (page.isSelected = false));
    }

    const page = this.pages[pageNumber - 1];
    page.isSelected = true;

    this.currentPage = page.pageNumber;

    this.navigate.emit(page.pageNumber);
  }

  previousPage() {
    if (this.currentPage === 1) {
      this.toggleModalVisibility();
      this.modalMessage = 'Already on first page';
      return;
    }
    this.selectPage(this.currentPage - 1);
  }

  nextPage() {
    if (this.currentPage === Math.ceil(this.qtdOfItems / this.itemsPerPage)) {
      this.toggleModalVisibility();
      this.modalMessage = 'Already on last page';
      return;
    }
    this.selectPage(this.currentPage + 1);
  }

  toggleModalVisibility() {
    this.modalVisibility = !this.modalVisibility;
  }
}
