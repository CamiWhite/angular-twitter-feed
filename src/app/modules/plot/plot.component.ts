import { Component, OnInit } from '@angular/core';
import { Chart } from 'taucharts';
import { PlotConsumerService } from '@service/kafka/plot-consumer.service';
import { HashTagChartModel } from '@model/hash-tag-chart.model';


@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.sass']
})
export class PlotComponent implements OnInit {

  private chart: HashTagChartModel;

  constructor(
    private plotConsumer: PlotConsumerService
  ) { }

  ngOnInit() {
    this.chart = new HashTagChartModel();
    this.chart.draw('#plot');
    this.plotConsumer.subscribe(this.chart);
  }
}
