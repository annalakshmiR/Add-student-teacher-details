import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Student } from '../deliver.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  studentlist :Student[] =[];
  studentObj : Student = {
    id:'',
    student_name:'',
    roll_no:'',
    age:'',
    class:'',
    section:'',
    teacher_name:''
  };
    id:string='';
    student_name:string='';
    roll_no:string='';
    age:string='';
    class:string='';
    section:string='';
    teacher_name:string='';


  constructor(private data :DataserviceService) { }

  ngOnInit(): void {
    this.getAllstudent();
  }
  getAllstudent(){
    this.data.getAllstudent().subscribe( res =>{
      this.studentlist = res.map((e :any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
   })
  }, err =>{
    alert('Error while fetching deliver data');
    })
  }
  resetform(){
    this.id ='' ;
    this.student_name ='';
    this.roll_no ='';
    this.age ='';
    this.class = '';
    this.section='';
    this.teacher_name='';
  }
  addstudent(){
  if(this.student_name == '' || this.roll_no == '' || this.age  == '' || this.class== '' ||this.section == ''||this.teacher_name==''){
    alert('Fill all input fields');
    return;
  }
  this.studentObj.id = '';
  this.studentObj.student_name = this.student_name;
  this.studentObj.roll_no = this.roll_no;
  this.studentObj.age = this.age;
  this.studentObj.class = this.class;
  this.studentObj.section = this.section;
  this.studentObj.teacher_name = this.teacher_name;
  this.data.addstudent(this.studentObj);
  this.resetform();
  }
  
  deletestudent(stu: Student){
    
      this.data.deletestudent(stu);
   }
    
  
  }
  
  
  

