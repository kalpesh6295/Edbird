import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { field}  from '../model/Field'
@Injectable()
export class DataService {
  fieldsCollection: AngularFirestoreCollection<insight>;
  fields: Observable<field[]>;
  fieldDoc: AngularFirestoreDocument<field>;
  constructor(public afs: AngularFirestore) { 
    this.fields = this.afs.collection('professions', ref => ref.orderBy('name')).valueChanges();  
    
   }
 
  getfields(){
    return this.fields;
  } 
}
