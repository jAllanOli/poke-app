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

  nextPage(): void {
    if (this.currentPage === Math.ceil(this.qtdOfItems / this.itemsPerPage)) {
      this.toggleModalVisibility();
      this.modalMessage = 'Already on last page';
      return;
    }
    this.selectPage(this.currentPage + 1);
  }

  toggleModalVisibility(): void {
    this.modalVisibility = !this.modalVisibility;
  }

  jumpForward(): void {
    if (this.currentPage > this.pages.length - 5) {
      this.selectPage(this.pages.length);
      return;
    }
    this.selectPage(this.currentPage + 5);
  }

  jumpBackward(): void {
    if (this.currentPage < 6) {
      this.selectPage(1);
      return;
    }
    this.selectPage(this.currentPage - 5);
  }

  visiblePageBtns(): Page[] {
    const currentPage = this.getCurrentPage().pageNumber;
    const pagesLength = this.pages.length;
    const currentPageIndex = this.pages.indexOf(this.getCurrentPage());

    if (currentPage < 4) {
      return this.pages.slice(1, 5);
    } else if (currentPage === 4) {
      return this.pages.slice(1, 6);
    } else if (currentPage <= pagesLength - 3) {
      return this.pages.slice(currentPageIndex - 2, currentPageIndex + 3);
    } else if (currentPage < pagesLength - 1) {
      return this.pages.slice(currentPageIndex - 2, currentPageIndex + 2);
    } else if (currentPage < pagesLength) {
      return this.pages.slice(currentPageIndex - 3, currentPageIndex + 1);
    } else {
      return this.pages.slice(currentPageIndex - 4, currentPageIndex);
    }
  }
}
