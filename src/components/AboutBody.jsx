import AudioPlayer from "./AudioPlayer";

// lego radio station image from https://brickative.shoplo.com/en_GB/p/Radio-Station/151

export default function AboutBody() {
  return (
      <div>
        <main className='basic-container' id='main'>
          <h1 className='main-title'>
            Welcome to <span className='orange-text'>BRICK</span>
            <span className='red-text'>MMO</span> Radio!
          </h1>
          <p>Streaming live, now!</p>
          <img className="station-image" src="images/radioStation.png" width='300' alt='image of a lego radiostation'></img>
          <h2>Developers</h2>
          <div className="devDiv">
            <p><a href="https://www.shavinsingh.tech/" target="_blank" rel="noopener noreferrer">Shavin Singh</a></p>
            <p><a href="https://abarksbytes.com/" target="_blank" rel="noopener noreferrer">Andrew Barker</a></p>
          </div>
          

        </main>
      </div>
    );
  }
