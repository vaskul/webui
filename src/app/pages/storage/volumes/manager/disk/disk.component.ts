import {Component, ElementRef, Input, OnInit, Type} from '@angular/core';

import filesize from 'filesize';

@Component({
  selector : 'app-disk',
  template : `
  <span>
	<i class="fa fa-hdd-o fa-25">
	</i>
	<br>
	{{ data.devname }} ({{ capacity }})
	<br>
  </span>
  `,
  styles : [
    'span { float: left; display:inline-block; margin:.05em;} .fa-25 { font-size:2em; color:#1384c0; text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.4); }'
  ],
})
export class DiskComponent implements OnInit {

  @Input() data: any;
  public capacity: string;

  constructor(public elementRef: ElementRef) {}

  ngOnInit() {
    console.log();
    this.capacity = filesize(this.data.capacity, {standard : "iec"});
  }
}