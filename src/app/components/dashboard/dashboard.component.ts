import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private notifierService: NotificationService){}

  ngOnInit(): void {
    this.notifierService.onDefault('hello')
    this.notifierService.onInfo('integration work')
    this.notifierService.onSucces('Connexion reussi');
  }

}
