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
  @Input() size = '24px';
  defaultColor!: string;

  ngOnInit(): void {
    this.defaultColor = this.color;
  }

  handleHover() {
    this.color = this.hoverColor;
  }

  handleLeave() {
    this.color = this.defaultColor;
  }
}
