import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { StudentList } from './components/student-list/student-list';
import { AddStudent } from './components/add-student/add-student';
import { EditStudent } from './components/edit-student/edit-student';
import { StudentDetails } from './components/student-details/student-details';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'students', component: StudentList },
  { path: 'add-student', component: AddStudent },
  { path: 'edit-student/:id', component: EditStudent },
  { path: 'student-details/:id', component: StudentDetails }
];