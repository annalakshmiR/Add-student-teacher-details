import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Student } from './deliver.model';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
 
  constructor(private afs :AngularFirestore) { }
  addstudent(student:Student){
    student.id=this.afs.createId();
    return this.afs.collection('/Student').add(student);
    }
  //get all student
  getAllstudent(){
    return this.afs.collection('/Student').snapshotChanges();
  }
  //delete student
  deletestudent(student:Student){
    return this.afs.doc('/Student/'+student.id).delete();
  }
  
  
}
