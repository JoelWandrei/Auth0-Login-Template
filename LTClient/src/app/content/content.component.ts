import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  pingResult;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.PingApi().subscribe(res => this.pingResult = res);
  }

}
