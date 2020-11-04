import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  someText =
    'provident perspiciatis consequuntur repudiandae similique, omnis fuga voluptatem necessitatibus nostrum.';

  data = [
    {
      title: 'Total Orders',
      color: 'lightpurple',
      amount: 313.12,
      type: 'shop',
      percent: 45,
      iconName: 'icon-shop',
    },
    {
      title: 'Avg Orders',
      color: 'lightorange',
      amount: 260.32,
      percent: 64,
      type: 'calendar',
      iconName: 'icon-calendar',
    },
  ];

  @ViewChild('cardCalendar', { static: true }) cardCalendar: TemplateRef<any>;
  @ViewChild('cardShop', { static: true }) cardShop: TemplateRef<any>;

  get selectedData() {
    return this.data[0];
  }
  get selectedDataSecond() {
    return this.data[1];
  }

  getSelectedComponentTemplate(type) {
    switch (type) {
      case 'shop':
        return this.cardShop;
      case 'calendar':
        return this.cardCalendar;
      default:
        return;
    }
  }
}
