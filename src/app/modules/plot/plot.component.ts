import { Component, OnInit } from '@angular/core';
import { Chart } from 'taucharts';
import { PlotConsumerService } from 'src/app/core/services/kafka/plot-consumer.service';


@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.sass']
})
export class PlotComponent implements OnInit {

  private dataSource = [
    {"hashTag":"#ジャパンコーラ","times":52},
    {"hashTag":"#ペプシ","times":52},
    {"hashTag":"#本田とコイントス","times":51},
    {"hashTag":"#毎日挑戦","times":51},
    {"hashTag":"#11時start","times":50},
    {"hashTag":"#PCAs","times":32},
    {"hashTag":"#質問箱","times":32},
    {"hashTag":"#私はKのコインを選ぶ","times":28},
    {"hashTag":"#갓세븐","times":22},
    {"hashTag":"#私はHのコインを選ぶ","times":22},
  ];

  private chart;

  constructor(
    private plotConsumer: PlotConsumerService
  ) { }

  ngOnInit() {
    this.chart = new Chart({
      data: this.dataSource,
      guide: {
        x: { label: '# of tweets' },
        y: { label: 'Hashtag' },
      },
      type: 'horizontal-bar',
      x: "times",
      y: "hashTag"
    })
    this.chart.renderTo('#plot');
  }
}
