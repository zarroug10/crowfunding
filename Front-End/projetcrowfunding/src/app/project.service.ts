import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from './app.module';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [];

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getProject(id: number): Observable<Project | undefined> {
    const project = this.projects.find(p => p.id === id);
    return of(project);
  }

  createProject(project: Project): Observable<Project> {
    project.id = this.projects.length + 1;
    this.projects.push(project);
    return of(project);
  }

  updateProject(project: Project): Observable<Project> {
    const index = this.projects.findIndex(p => p.id === project.id);
    if (index !== -1) {
      this.projects[index] = project; 
      return of(project);
    } else{
      throw new Error('Project not found');
    }
}
}
