import { Component } from '@angular/core';

@Component({
  selector: 'app-supporters',
  templateUrl: './supporters.component.html',
  styleUrls: ['./supporters.component.css']
})
export class SupportersComponent {

  creators: Creator[] = [
    { name: 'John Doe', amount: 5000, supporters: 120 },
    { name: 'Jane Smith', amount: 8000, supporters: 80 },
    { name: 'Bob Johnson', amount: 3000, supporters: 150 },
    { name: 'Anne', amount: 6000, supporters: 50 },
    { name: 'John Doe', amount: 5000, supporters: 120 },
    { name: 'Jane Smith', amount: 8000, supporters: 80 },
    { name: 'Bob Johnson', amount: 3000, supporters: 150 },
    { name: 'Anne', amount: 6000, supporters: 50 }
    

  ];

}
interface Creator {
  name: string;
  amount: number;
  supporters: number;
}
