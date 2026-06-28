import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../services/student';
import { Student } from '../../models/student';

@Component({
  selector: 'app-edit-student',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-student.html',
  styleUrl: './edit-student.css'
})
export class EditStudent {


  studentId!: number;

  studentForm;


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) {


    this.studentForm = this.fb.group({

      name: ['', Validators.required],

      email: ['', [Validators.required, Validators.email]],

      department: ['', Validators.required],

      age: ['', Validators.required]

    });


  }


  ngOnInit() {


    this.studentId =
      Number(this.route.snapshot.paramMap.get('id'));


    const student =
      this.studentService.getStudentById(this.studentId);


    if (student) {

      this.studentForm.patchValue({
        name: student.name,
        email: student.email,
        department: student.department,
        age: student.age.toString()
      });

    }


  }


  updateStudent() {


    if (this.studentForm.valid) {


      const updatedStudent: Student = {


        id: this.studentId,

        name: this.studentForm.value.name!,

        email: this.studentForm.value.email!,

        department: this.studentForm.value.department!,

        age: Number(this.studentForm.value.age!)

      };


      this.studentService.updateStudent(updatedStudent);


      alert("Student Updated Successfully");


      this.router.navigate(['/students']);


    }


  }


}