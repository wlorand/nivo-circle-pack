// import React from 'react';

// @nivo charts
import { ResponsiveBubble } from '@nivo/circle-packing';

// mock-data
import chartLibData from '../mock-data/chartLibData.js';

// styles
import '../styles/app.css';

const CirclePack = () => (
  <div className="chart">
    <ResponsiveBubble
      root={chartLibData}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      identity="name"
      value="loc"
      colors={['#7b3294', '#c2a5cf', '#f7f7f7', '#a6dba0', '#008837']} // { scheme: 'category10' }
      padding={20}
      labelSkipRadius={0}
      labelTextColor="black"
      borderWidth={1}
      borderColor="#000000"
      animate={true}
      motionStiffness={65}
      motionDamping={15}
    />
  </div>
);

export default CirclePack;
