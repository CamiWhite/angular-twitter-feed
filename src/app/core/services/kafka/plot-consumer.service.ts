import { Observer } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';
import io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlotConsumerService {

  private url: String = 'http://localhost:8091';
  private observable: Observable<any[]>;
  private socket;

  constructor() {
    this.socket = io(this.url);
    this.observable = new Observable(subscriber => {
      this.socket.on('message', data => {
        subscriber.next(data);
      });
    })
  }

  subscribe(observer: Observer<any[]>) {
    this.observable.subscribe(observer);
  }
}
