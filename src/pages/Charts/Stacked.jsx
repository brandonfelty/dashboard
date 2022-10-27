import React from 'react';

import { Header, Stacked as StackedChart } from '../../components';

const Stacked = () => {
  return (
    <div>
      <Header category='Stacked' title='Revenue Breakdown' />
      <div className='w-full'>
        <StackedChart />
      </div>
    </div>
  )
}

export default Stacked