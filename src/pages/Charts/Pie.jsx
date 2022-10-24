import React from 'react';
import { Inject, AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries, AccumulationDataLabel, AccumulationTooltip } from '@syncfusion/ej2-react-charts';

import { Header } from '../../components'
import { pieChartData  } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Pie = () => {
  const { currentMode } = useStateContext();
  
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
    <Header  category="Chart" title="Cost Breakdown"/>
      <AccumulationChartComponent
      id='pie-chart'
      height='420px'
      chartArea={{ border: { width: 0 }}}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject services={[ PieSeries, AccumulationDataLabel, AccumulationTooltip ]}/>
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective 
          dataSource={pieChartData}
          dataLabel={{ visible: true, position: 'Outside',  connectorStyle: {     length: '20px', type: 'Curve' }, name: 'text', font:  {fontWeight: '600' } }}
          xName='x'
          yName='y'
          type='Pie'
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
    </div>
    
  )
}

export default Pie;