import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { field, insight, stories}  from '../model/Field'
@Injectable()
export class DataService {
  stories: Observable<stories[]>;
  fieldsCollection: AngularFirestoreCollection<field>;
  fields: Observable<field[]>;
  fieldDoc: AngularFirestoreDocument<field>;
  insightsCollection: AngularFirestoreCollection<insight>;
  insights: Observable<insight[]>;
  insightDoc: AngularFirestoreDocument<insight>;
  storiesCollection: AngularFirestoreCollection<stories>;
  storieDoc: AngularFirestoreDocument<stories>;
  constructor(public afs: AngularFirestore) { 
    this.fields = this.afs.collection('professions', ref => ref.orderBy('name')).valueChanges();
    this.insights=this.afs.collection('tatto art_insights', ref => ref.orderBy('author_name')).valueChanges();
    this.stories=this.afs.collection('stories', ref => ref.orderBy('content_heading')).valueChanges();
    // this.insights=this.afs.collection( 'designing_insights', ref => ref.orderBy('author_name')).valueChanges();
    // this.insights=this.afs.collection( 'photography_insights', ref => ref.orderBy('author_name')).valueChanges();
    // this.insights=this.afs.collection( 'animation_insights', ref => ref.orderBy('author_name')).valueChanges();
   }
 
  getfields(){ 
    return this.fields;
  } 
  
  getinsights(){
      return this.insights;
  } 
  getstories(){
    return this.stories;
} 
}
