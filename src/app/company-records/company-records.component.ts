import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataRepoService } from '../services/data-repo.service';
import { Company } from '../Models/data-interface';
import { LoadingSpinnerComponent } from '../shared/loading-spinner.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-company-records',
  templateUrl: './company-records.component.html',
  styleUrls: ['./company-records.component.css']
})
export class CompanyRecordsComponent implements OnInit {

  isLoading = false;
  companies:Company[];
  dataSource: any = new MatTableDataSource();
  displayedColumns: string[] = ['CompanyName','Description'];

  constructor(private dataRepoService: DataRepoService,
    private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.getCompaines();
  }

 // Getting reponse for companies 
  getCompaines() {
    this.isLoading = true;
    this.dataRepoService.getCompaines().subscribe(response => {
      this.companies = <Company[]>response;
      console.log(JSON.stringify(this.companies));
      this.dataSource = new MatTableDataSource(this.companies);
      this.isLoading = false;
    },error=>{
      this.snackBar.open("Something went wrong !");
      this.isLoading = false;
    })
  }

}
