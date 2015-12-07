(function (){

  'use strict';

  var colors = {
    Usage: '#868686',
    Android: '#222',
    IOS: '#999',
    Windows: '#ddd',
    Others: '#ccc'
  };
  var patterns = {
    //Usage: textures.circles().thicker(),
    Android: textures.lines().thinner().orientation('6/8'),
    IOS: textures.lines().orientation('6/8'),
    Others: textures.lines().thicker().orientation('6/8')
  };

  var chart = c3.generate({
    bindto: '#chart-main',
    data: {
      x: 'Year',
      xFormat: '%Y',
      columns: [
        ['Year', '2010','2011','2012','2013','2014','2015','2016','2017','2018','2019', '2020'],
        ['Usage', 700,910,1320,1644,2300,3301.2,4100.0,4823.6,5576.6,6040.6],
        ['Android', 26.6,134.2,367,675.5,1054.6,1161,1171,1294.8,1541.5,1538.3],
        ['IOS', 33.5,81,139.6,208.4,202.9,225.9,221,236.5,273.5,264.4],
        ['Windows', 21.8,14.7,15.9,28.5,32.5,31.5,31.6,34.7,42.1,42.8],
        ['Others', 222.9,264.6,202.8,107.3,10.4,11.4,11.5,12.9,15.9,16.8]
      ],
      names: {
        Usage: 'Number of smartphone currently used',
        Android: 'Android shipments',
        IOS: 'IOS shipments',
        Windows: 'Windows shipments',
        Others: 'Others shipments'
      },
      axes: {
        Android: 'y2',
        IOS: 'y2',
        Windows: 'y2',
        Others: 'y2',
        Usage: 'y2'
      },
      types: {
        'Android': 'area-spline',
        'IOS': 'area-spline',
        'Windows': 'area-spline',
        'Others': 'area-spline',
        'Usage': 'area-spline'
      },
      groups: [
        ['Android', 'IOS', 'Others', 'Windows'],
        ['Usage']
      ],
      colors: colors
    },
    legend: {position: 'inset'},
    point: {show: false},
    axis: {
      y: {show: false},
      y2: {
        show: true,
        label: {
          text: 'Smartphones (in millions)',
          position: 'outer-middle'
        },
        tick: {outer: false},
        padding: {top: 10, bottom: 0}
      },
      x: {
        label: {
          text: 'Year',
          position: 'outer-left'
        },
        type: 'timeseries',
        tick: {
          outer: false,
          format: '%Y',
          values: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']
        },
        padding: {left: 0, right: 0}
      }
    },
    tooltip: {
      format: {
        value: d3.format('f')
      }
    },
    transition: {duration: 0},
    onrendered: texture
  });


  var svg = d3.select('#chart-main svg');
  function getPattern(pattern) {
    svg.call(pattern);
    return pattern.url();
  }
  var urls = {};

  Object.keys(patterns).forEach(function (serie) {
    urls[serie] = getPattern(patterns[serie].background(colors[serie]));
  });

  function texture() {
    setTimeout(function () {
      Object.keys(urls).forEach(function (serie) {
        d3.select('.c3-area-' + serie).style('fill', urls[serie]);
        d3.select('.c3-legend-item-' + serie + ' .c3-legend-item-tile').style('fill', urls[serie]);
        d3.select('.c3-tooltip-name-Usage span').style('background', 'url(' + urls[serie] +')');
      });
    }, 100);
  }


  // Price.
  var colors2 = {
    low: '#999',
    mid: '#555',
    high: '#222'
  };

  c3.generate({
    bindto: '#chart-price',
    data: {
      columns: [
        ['low', 0.5866,0,0.614],
        ['mid', 0.2152,0.154,0.249],
        ['high', 0.1982,0.846,0.137]
      ],
      names: {
        low: 'less than $200',
        mid: '$200–$400',
        high: 'more than $400'
      },
      type: 'bar',
      groups: [
        ['low', 'mid', 'high']
      ],
      order: null,
      colors: colors2
    },
    point: {show: false},
    axis: {
      y: {show: false},
      x: {
        type: 'categories',
        categories: ['Android', 'IOS', 'Windows']
      }
    },
    tooltip: {
      format: {
        value: d3.format('.2%')
      }
    },
    transition: {duration: 0},
    onrendered: texture2
  });

  var svg2 = d3.select('#chart-price svg');
  var patterns2 = {
    low: textures.lines().thicker(),
    mid: textures.lines(),//.orientation('6/8'),
    high: textures.lines().thinner()
  };
  function getPattern2(pattern) {
    svg2.call(pattern);
    return pattern.url();
  }
  var urls2 = {};

  Object.keys(patterns2).forEach(function (serie) {
    urls2[serie] = getPattern(patterns2[serie].background(colors2[serie]));
  });

  function texture2() {
    setTimeout(function () {
      Object.keys(urls2).forEach(function (serie) {
        d3.select('.c3-shapes-' + serie + ' .c3-bar-0').style('fill', urls2[serie]);
        d3.select('.c3-shapes-' + serie + ' .c3-bar-1').style('fill', urls2[serie]);
        d3.select('.c3-shapes-' + serie + ' .c3-bar-2').style('fill', urls2[serie]);
        d3.select('.c3-legend-item-' + serie + ' .c3-legend-item-tile').style('fill', urls2[serie]);
      });
    }, 100);
  }

}());
