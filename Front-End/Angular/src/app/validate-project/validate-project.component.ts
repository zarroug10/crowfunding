
import { Component, OnInit } from '@angular/core';

interface ProjectData {
  id: number;
  name: string;
  category: string;
  donation: string;
  startDate: string;
}

@Component({
  selector: 'app-validate-project',
  templateUrl: './validate-project.component.html',
  styleUrls: ['./validate-project.component.css']
})
export class ValidateProjectsComponent {
  data: ProjectData[] = [
    { id: 1, name: 'sassi imen', category: 'Designer', donation: '28$', startDate: '2023-05-25' },
    { id: 2, name: 'arfaoui karim', category: 'agriculture', donation: '35$', startDate: '2023-12-05' },
    { id: 3, name: 'souha ch', category: 'Finance', donation: '45$', startDate: '2023-08-12' },
    { id: 4, name: 'wafa dh', category: 'technologie', donation: '34$', startDate: '2012-06-11' },
    { id: 5, name: 'nidhal dh', category: 'biologie', donation: '47$', startDate: '2023-04-19' },
  ];

  addRow() {
    const newData: ProjectData = {
      id: this.data.length + 1,
      name: 'New User',
      category: 'New Category',
      donation: '0$',
      startDate: '2023-01-01',
    };
    this.data.push(newData);
  }

  deleteRow(id: number) {
    this.data = this.data.filter(item => item.id !== id);
  }
}
