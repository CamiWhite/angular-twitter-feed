import { Injectable, OnInit } from '@angular/core';
import { KafkaClient, Consumer } from 'kafka-node';

@Injectable({
  providedIn: 'root'
})
export class PlotConsumerService implements OnInit {

  private kafkaClient: KafkaClient;
  private consumer: Consumer;

  constructor() { }

  ngOnInit(): void {
    this.kafkaClient = new KafkaClient();
    this.consumer = new Consumer(
      this.kafkaClient,
      [{
        topic: 'my-replicated-topic'
      }],
      {
        autoCommit: true
      }
    );
  }
}
