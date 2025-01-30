import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

import { Patient } from '../../models/patient.model';

const PATIENT_DATA: Patient[] = [
  {
    id: 1,
    fname: 'John',
    lname: 'Doe',
    provider: 'Dr. Smith',
    recommendations: ['Exercise regularly', 'Eat a balanced diet'],
  },
  {
    id: 2,
    fname: 'Jane',
    lname: 'Smith',
    provider: 'Dr. Johnson',
    recommendations: ['Reduce stress', 'Get 8 hours of sleep'],
  },
  {
    id: 3,
    fname: 'Alice',
    lname: 'Brown',
    provider: 'Dr. Lee',
    recommendations: ['Drink more water', 'Limit sugar intake'],
  },
  {
    id: 4,
    fname: 'Bob',
    lname: 'Johnson',
    provider: 'Dr. Patel',
    recommendations: ['Quit smoking', 'Monitor blood pressure'],
  },
  {
    id: 5,
    fname: 'Charlie',
    lname: 'Davis',
    provider: 'Dr. Garcia',
    recommendations: [
      'Take prescribed medications',
      'Attend follow-up appointments',
    ],
  },
  {
    id: 6,
    fname: 'Eva',
    lname: 'Martinez',
    provider: 'Dr. Wilson',
    recommendations: ['Avoid processed foods', 'Practice mindfulness'],
  },
  {
    id: 7,
    fname: 'Frank',
    lname: 'Garcia',
    provider: 'Dr. Taylor',
    recommendations: ['Walk 10,000 steps daily', 'Limit caffeine intake'],
  },
  {
    id: 8,
    fname: 'Grace',
    lname: 'Lee',
    provider: 'Dr. Anderson',
    recommendations: ['Stretch daily', 'Avoid prolonged sitting'],
  },
  {
    id: 9,
    fname: 'Henry',
    lname: 'Clark',
    provider: 'Dr. White',
    recommendations: ['Track daily calories', 'Avoid late-night snacks'],
  },
  {
    id: 10,
    fname: 'Ivy',
    lname: 'Lewis',
    provider: 'Dr. Harris',
    recommendations: ['Practice deep breathing', 'Limit screen time'],
  },
  {
    id: 11,
    fname: 'Jack',
    lname: 'Walker',
    provider: 'Dr. Martin',
    recommendations: ['Use a standing desk', 'Take regular breaks'],
  },
  {
    id: 12,
    fname: 'Karen',
    lname: 'Hall',
    provider: 'Dr. Thompson',
    recommendations: ['Drink herbal tea', 'Avoid alcohol'],
  },
  {
    id: 13,
    fname: 'Leo',
    lname: 'Allen',
    provider: 'Dr. Martinez',
    recommendations: ['Practice yoga', 'Meditate daily'],
  },
  {
    id: 14,
    fname: 'Mona',
    lname: 'Young',
    provider: 'Dr. Moore',
    recommendations: ['Eat more fiber', 'Avoid fried foods'],
  },
  {
    id: 15,
    fname: 'Nina',
    lname: 'King',
    provider: 'Dr. Scott',
    recommendations: ['Get annual checkups', 'Wear sunscreen'],
  },
];

@Component({
  selector: 'app-patients-table',
  imports: [MatTableModule, MatPaginator, MatPaginatorModule, MatButtonModule],
  templateUrl: './patients-table.component.html',
  styleUrl: './patients-table.component.css',
})
export class PatientsTableComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'fname',
    'lname',
    'provider',
    'recommendations',
    'action',
  ];
  dataSource = new MatTableDataSource<Patient>(PATIENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  viewPatientProfile(event: MouseEvent, patient: Patient) {
    console.log('View patient profile:', patient.fname, patient.lname);
    event.stopPropagation();
  }
}
