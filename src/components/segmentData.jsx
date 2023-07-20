import {useState, useEffect} from "react";

// retrieve and display segment data from reporter cms backend

export default function SegmentData() {
  const [segments, setSegments] = useState([]);

  useEffect(()=> {
    const getSegments = async () => {
      try{
        const response = await fetch('https://reporters.brickmmo.com/api/segments');
        const data = await response.json();
        setSegments(data);
      }
      catch(error) {
        console.error('Error:', error);
      }
    };
    getSegments();
  }, []);


  if (segments.length === 0) {
    return <div></div>;
  }

// make featured/recent segment random

const randomSegment = Math.floor(Math.random() * segments.length + 1)

const recentSegment = segments[randomSegment];

const segmentDataObject = JSON.parse(recentSegment.segment_data);
const headline = segmentDataObject.headline;
const joke = segmentDataObject.joke;
const content = segmentDataObject.content;

// lego block image from adobe stock

return (
  <div className="basic-container segmentSection">
     
    <h1 className="dailySegment">Featured <span className="orange-text">SEGMENT </span></h1>
    <div key={recentSegment.id}>
      <h2 className="segmentTitle">'{recentSegment.title}'</h2>
      <img className="segmentImage" src={`https://reporters.brickmmo.com/storage/${recentSegment.image}`} width="450"></img>
      {/* conditional whether joke or segment */}
      <p className="segment-content">
        '{joke || content}'
      </p>
    </div>
    <img className="lego-block" src="images/orange_lego.png" width="100" alt="an orange six by two piece of lego"></img>
  </div>
)

}