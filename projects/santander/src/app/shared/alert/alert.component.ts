import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from '../../_service/alert.service';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  private subscription!: Subscription;
  message: any;
  constructor(private alertService:AlertService) { }

  ngOnInit(): void {
  }

}
