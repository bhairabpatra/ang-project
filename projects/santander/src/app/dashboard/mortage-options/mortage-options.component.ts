import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,Input} from '@angular/core';
import { Subject } from 'rxjs';
import { DataTablesModule } from 'angular-datatables';
import { AuthService } from '../../auth/auth.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-mortage-options',
  templateUrl: './mortage-options.component.html',
  styleUrls: ['./mortage-options.component.scss']
})
export class MortageOptionsComponent implements OnInit {


  dtOptions: DataTables.Settings = {};
  persons:any = [];

  constructor(private httpClient: HttpClient,private authService:AuthService , private activaRoute:ActivatedRoute) { }
  dtTrigger: Subject<any> = new Subject<any>();
  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this.persons = this.activaRoute.snapshot.data['data'];
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

 
}
