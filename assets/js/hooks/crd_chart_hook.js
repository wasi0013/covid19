import Plotly from 'plotly.js-dist'

import { makeChart } from './helpers';

var colorMap = {
  "confirmed": "lightblue",
  "deaths": "pink",
  "recovered": "lightgreen",
}

export default {
    mounted() {
      let data = JSON.parse(this.el.dataset.statistics);
      let type = this.el.dataset.type;

      let datasetNew = [{
        x: data.map(x => x.date),
        y: data.map(y => y[`new_${type}`]).filter(y => y > 0),
        type: 'bar',
        marker: {
          line: {
            color: colorMap[type],
            width: 1.5
          }
        }
      }];

      makeChart(`new-${type}-chart`, datasetNew);

      let datasetCumulative = [{
        x: data.map(x => x.date),
        y: data.map(y => y[type]).filter(y => y > 0),
        mode: 'lines',
        line: {
          color:  colorMap[type],
          width: 3
        }
      }];

      makeChart(`cumulative-${type}-chart`, datasetCumulative);
    },
    updated() {
      let isLogarithmic = JSON.parse(this.el.dataset.logarithmic);
      let type = this.el.dataset.type;

      var layout = {
        margin: { t: 0, b: 30, l: 30, r: 10 },
        showlegend: false,
        yaxis: {
          type: !!isLogarithmic ? 'log' : 'linear',
          autorange: true
        }
      };

      Plotly.relayout(`cumulative-${type}-chart`, layout);
    }
}