// import React from 'react';

// @nivo charts
import { ResponsiveBubble } from '@nivo/circle-packing';

// styles
import '../styles/app.css';

const CirclePack = ({ data }) => {
  return (
    <div className="chart-height-400">
      <h3 className="panel-title">{data.name}</h3>
      <ResponsiveBubble
        root={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        identity="name"
        value="value"
        colors={['#0b5795', '#aed4e6']} // { scheme: 'category10' }
        padding={20}
        labelSkipRadius={8}
        labelTextColor="black"
        borderWidth={1}
        borderColor="#000000"
        animate={true}
        motionStiffness={65}
        motionDamping={15}
      />
    </div>
  );
};
export default CirclePack;
