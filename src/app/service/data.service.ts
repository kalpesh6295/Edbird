import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { field, insight, stories, content, author}  from '../model/Field'
@Injectable()
export class DataService {
  stories: Observable<stories[]>;
  storiesCollection: AngularFirestoreCollection<stories>;
  storiesDoc: AngularFirestoreDocument<stories>;

  fieldsCollection: AngularFirestoreCollection<field>;
  fields: Observable<field[]>;
  fieldDoc: AngularFirestoreDocument<field>;

  insightsCollection: AngularFirestoreCollection<insight>;
  insights: Observable<insight[]>;
  insightDoc: AngularFirestoreDocument<insight>;

  contents: Observable<content[]>;
  contentDoc: AngularFirestoreDocument<content>;
  contentsCollection: AngularFirestoreCollection<content>;

  authorsCollection: AngularFirestoreCollection<author>;
  authors: Observable<author[]>;
  authorDoc: AngularFirestoreDocument<author>;
  constructor(public afs: AngularFirestore) {
   }
 
  getfields(){ 
    this.fields = this.afs.collection('professions', ref => ref.orderBy('name')).valueChanges();
    return this.fields;
  } 
  
  getinsights(profession_name:string){
    this.insights=this.afs.collection(profession_name+'_insights', ref => ref.orderBy('author_name')).valueChanges();
      return this.insights;
  } 
  getstories(){
    this.stories=this.afs.collection('stories', ref => ref.orderBy('content_heading')).valueChanges();
    return this.stories;
} 
getcontent(content_heading:string){
  this.contents=this.afs.collection(content_heading).valueChanges();
  return this.contents;
}
getauthor(name:string){
  this.authors = this.afs.collection(name).valueChanges();
  return this.authors;
}
}
