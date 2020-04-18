import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {DataTableItem} from '../models/hospital';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  hospitals: Observable<any[]>;
  hospitalsCollection: AngularFirestoreCollection<DataTableItem>;

  constructor(public afs: AngularFirestore) {
    this.hospitals = this.afs.collection('hospitals').valueChanges();
    this.hospitalsCollection = this.afs.collection('hospitals');
  }

  getHospitals(): Observable<DataTableItem[]> {
    return this.hospitals;
  }

  addHospital(dataTableItem: DataTableItem) {
    this.hospitalsCollection.add(dataTableItem);
  }
}
