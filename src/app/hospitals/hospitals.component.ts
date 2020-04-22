import {Component, OnInit, ViewChild} from '@angular/core';
import {HospitalService} from '../services/hospital.service';
import {HospitalItem} from '../models/hospital';
import {MatTable} from '@angular/material/table';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css']
})
export class HospitalsComponent implements OnInit {
  @ViewChild(MatTable, {static: false}) table: MatTable<HospitalItem>;

  hospitals: HospitalItem[] = null;
  displayedColumns: string[] = ['hospitals', 'number', 'place'];

  constructor(private hospitalService: HospitalService) { }

  ngOnInit() {
    this.hospitalService.getHospitals().subscribe(hospital => {
      this.hospitals = hospital;
    });
  }

}
