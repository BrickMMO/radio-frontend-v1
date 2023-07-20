
import React, { useState, useEffect, useRef } from 'react';

// Retrieve and play audio content from producer back end CMS, via icecast

// Also, retieve data from icecast regarding meta data from the stream. 
// currently grabbing the amount of active listeners, and the title of what is currently 
// playing.

const AudioPlayer = () => {

  const audioUrl = import.meta.env.VITE_RADIO_HOST;
  const dataUrl = import.meta.env.VITE_STREAM_DATA;
  const audioRef = useRef(null);
  const [metadata, setMetadata] = useState(null);
  const [listenerCount, setListenerCount] = useState(null);
  const [trackTitle, setTracktitle] = useState(null);



  useEffect(() => {

    // this calls the endpoint every 5 sec to update the audio metadata
    
    const intervalId = setInterval(fetchAudioMetaData, 5000);
    return () => clearInterval(intervalId);
  }, []);
  
  const fetchAudioMetaData = async () => {
    try {
      const response = await fetch(dataUrl);
      const data = await response.json();
      const listeners = data.icestats.source.listeners;
      const title = data.icestats.source.title;

      setListenerCount(listeners);
      setTracktitle(title);

    } catch (error) {
      console.error('error fetching audio data', error);
    }
  }
  
  return (
    <div className="basic-container player-container">
      <audio ref={audioRef} controls>
        <source src={audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className='stream-data'>
        <p><span className='orange-text'>Now Playing:</span> {trackTitle}</p>
        <p><span className='orange-text'>Listener Count:</span> {listenerCount}</p>
      </div>
    </div>
  );
};

export default AudioPlayer;
