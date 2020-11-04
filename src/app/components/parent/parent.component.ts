import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  @Input() cardTemplateRef: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
