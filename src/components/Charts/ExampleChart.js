import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Chart from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts,Chart,FusionTheme);

const ChartComponent = ({data}) => {

  const chartConfigs = {
    type:'column2d',
    width:'400  ',
    height:'400',
    dataFormat:'json',
    dataSource: {
      chart: {
        caption: 'Countries With Most Oil Reserves [2017-18]',
        subCaption:'In MMbbl = One Million Barriers',
        xAxisName: 'Country',
        yAxisName: 'reserves (MMbbl) ',
        numberSuffix: 'K',
        theme : 'fusion', 
      },
      // Chart Data
      data:data,
    },
  }; 

  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
