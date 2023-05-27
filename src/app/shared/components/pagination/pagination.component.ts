import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

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
  currentPage!: Page;
  pages: Page[] = [];

  ngDoCheck(): void {
    if (!this.pages.length) {
      this.buildPages();
      if (this.pages.length) {
        console.log(this.pages);
        this.selectPage(this.pages[0].pageNumber);
      }
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
    if (pageNumber === this.getCurrentPage().pageNumber) {
      return;
    }
    if (this.pages) {
      this.pages.forEach((page) => (page.isSelected = false));
    }

    const page = this.pages[pageNumber - 1];
  }
}
