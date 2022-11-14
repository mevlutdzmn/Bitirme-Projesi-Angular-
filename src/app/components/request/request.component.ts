import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  request1: any = { requestId: 1, categoryId: 1, wallet: 'tskdckşakerj', reasonRequest: 'parasal neden', collectedAid: 231 }
  request2: any = { requestId: 2, categoryId: 1, wallet: 'tskdckşakerj', reasonRequest: 'sma neden', collectedAid: 231 }
  request3: any = { requestId: 3, categoryId: 1, wallet: 'tsrgdakerj', reasonRequest: 'eğitim neden', collectedAid: 231 }
  request4: any = { requestId: 4, categoryId: 1, wallet: '45şakerj', reasonRequest: 'öyle işte neden', collectedAid: 231 }
  request5: any = { requestId: 5, categoryId: 1, wallet: 'tskdckş898j', reasonRequest: 'destek neden', collectedAid: 231 }

  requests = [this.request1, this.request2, this.request3, this.request4, this.request5]
  constructor() {  }

  ngOnInit(): void { 
  }

}
