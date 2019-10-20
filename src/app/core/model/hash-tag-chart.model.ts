import { Observer } from "rxjs";
import { Chart } from 'taucharts';

export interface HashTagInfo {
  hashtag: String,
  times: Number
}

export class HashTagChartModel implements Observer<Array<HashTagInfo>> {

  private chart;

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
    this.chart = new Chart({
      data: this.dataSource,
      guide: {
        x: { label: '# of tweets' },
        y: { label: 'Hashtag' },
      },
      type: 'horizontal-bar',
      x: 'times',
      y: 'hashTag',
      color: 'team'
    })
  }

  next(value: HashTagInfo[]) {
    this.chart.setData(value);
  };


  error(err: any) {
    console.log('[ERROR] Could not drawn', err);
  };

  draw(selector: String) {
    this.chart.renderTo(selector);
  }

  complete: () => void;
}