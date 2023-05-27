import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.less'],
})
export class SvgComponent implements OnInit {
  @Input() icon!: string;
  @Input() color!: string;
  @Input() hoverColor!: string;
  @Input() size = '28px';
  @Input() navigationSide?: string;
  defaultColor!: string;

  ngOnInit(): void {
    this.defaultColor = this.color;
  }

  handleHover() {
    this.color = this.hoverColor;
    if (this.icon === 'ellipsis') {
      if (this.navigationSide === 'left') {
        this.icon = 'db-arrow-left';
      } else {
        this.icon = 'db-arrow-right';
      }
    }
  }

  handleLeave() {
    this.color = this.defaultColor;

    if (this.icon === 'db-arrow-left' || this.icon === 'db-arrow-right') {
      this.icon = 'ellipsis';
    }
  }
}
