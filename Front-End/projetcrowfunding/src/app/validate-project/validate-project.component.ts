import { Component } from '@angular/core';

interface ProjectData {
  id: number;
  name: string;
  category: string;
  donation: string;
  startDate: string;
  validated?: boolean; 
}

@Component({
  selector: 'app-validate-project',
  templateUrl: './validate-project.component.html',
  styleUrls: ['./validate-project.component.css']
})
export class ValidateProjectsComponent {
  data: ProjectData[] = [
    { id: 1, name: 'Sassi Imen', category: 'Designer', donation: '28$', startDate: '2023-05-25' },
    { id: 2, name: 'Arfaoui Karim', category: 'Design', donation: '35$', startDate: '2023-12-05' },
    { id: 3, name: 'Souha Ch', category: 'Finance', donation: '45$', startDate: '2023-08-12' },
    { id: 4, name: 'Wafa Dh', category: 'Technologie', donation: '34$', startDate: '2012-06-11' },
    { id: 5, name: 'Nidhal Dh', category: 'Biologie', donation: '47$', startDate: '2023-04-19' },
  ];

  addRow() {
    const newData: ProjectData = {
      id: this.data.length + 1,
      name: 'New User',
      category: 'New Category',
      donation: '0$',
      startDate: 'date',
    };
    this.data.push(newData);
  }

  deleteRow(id: number) {
    this.data = this.data.filter(item => item.id !== id);
  }

  validateProject(id: number) {
 
    const project = this.data.find(item => item.id === id);

   
    if (project) {
      project.validated = !project.validated;
    }
  }
}
