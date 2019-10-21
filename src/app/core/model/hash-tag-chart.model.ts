import { Observer } from "rxjs";
import * as Highcharts from 'highcharts';
require('highcharts/modules/exporting')(Highcharts);

export interface HashTagInfo {
  hashTag: string,
  times: number
}

export class HashTagChartModel implements Observer<Array<HashTagInfo>> {

  private chart: Highcharts.Chart;

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

  constructor() {
    this.chart = Highcharts.chart('plot', {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Popular tweets'
      },
      xAxis: {
        categories: this.dataSource.map(val => val.hashTag),
        title: {
          text: null
        }
      },
      series: [{
        type: 'bar',
        name: '# Hashtag',
        data: [
          ['#ジャパンコーラ', 52],
          ['#ペプシ', 52],
          ['#本田とコイントス', 51],
          ['#毎日挑戦', 51],
          ['#11時start', 50],
          ['#PCAs', 32],
          ['#質問箱', 32],
          ['#私はKのコインを選ぶ', 28],
          ['#갓세븐', 22],
          ['#私はHのコインを選ぶ', 22],
        ]
      }]
    })
  }

  next(value: HashTagInfo[]) {
    this.chart.series[0].setData(value.map(val => [val.hashTag, val.times]));
    this.chart.xAxis[0].setCategories(value.map(val => val.hashTag))
  };


  error(err: any) {
    console.log('[ERROR] Could not drawn', err);
  };

  draw(selector: String) {
  }

  complete: () => void;
}