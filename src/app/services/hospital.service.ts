import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {HospitalItem} from '../models/hospital';
import {shareReplay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  hospitals: Observable<any[]>;
  hospitalsCollection: AngularFirestoreCollection<HospitalItem>;

  constructor(public afs: AngularFirestore) {
    this.hospitals = this.afs.collection('hospitals').valueChanges();
    this.hospitalsCollection = this.afs.collection('hospitals');
  }

  getHospitals(): Observable<HospitalItem[]> {
    return this.hospitals.pipe(shareReplay(1));
  }

  addHospital(dataTableItem: HospitalItem) {
    this.hospitalsCollection.add(dataTableItem);
  }
}
