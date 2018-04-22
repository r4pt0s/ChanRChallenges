const dataSets= require('./script.js');
var blessed = require('blessed')
  , contrib = require('blessed-contrib')
  , screen = blessed.screen()
  , bar = contrib.bar(
       { label: 'Standard Deviation'
       , barWidth: 5
       , barSpacing: 10
       , xOffset: 0
       , maxHeight: 9
       , height: "50%"
       , barBgColor: 'cyan' })

screen.append(bar)

bar.setData(
       { titles: ['McDonalds', 'Burger King', 'Wendys', 'Jack in the Box', 'KFC']
       , data: dataSets.sigma
});// Put in your array here })

screen.render();
