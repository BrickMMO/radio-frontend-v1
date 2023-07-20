import React, { useState, useEffect } from 'react';
import AudioPlayer from './AudioPlayer';
import HostData from './hostData';
import SegmentData from './segmentData';

// lego radio station image from https://brickative.shoplo.com/en_GB/p/Radio-Station/151

export default function MainBody() {
 
  return (
    <div>
      <main className='basic-container' id='main'>
        <div className='welcome-text'>
          <h1 className='main-title'>
            Welcome to <span className='orange-text'>BRICK</span>
            <span className='red-text'>MMO</span> Radio!
          </h1>
          <p className='main-para'>Streaming live, now!</p>
          <img className="station-image" src="images/radioStation.png" width='300' alt='image of a lego radiostation'></img>

        </div>
       
        <div >
          <SegmentData />
          <HostData />
        </div>
      </main>
    </div>
  );
}
