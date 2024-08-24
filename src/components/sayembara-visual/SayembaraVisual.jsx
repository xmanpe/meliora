import React from 'react';
import './SayembaraVisual.scss';

const SayembaraVisualComponent = ({ videos }) => {
  return (
    <div className='section'>
      <div className='section-content'>
        <div className='content-card'>
          {videos.map((video, index) => (
            <div key={index} className='video-container'>
              <div className='card-video'>
                {video.link ? (
                  <iframe
                    width="560"
                    height="315"
                    src={video.link}
                    title={`YouTube video player ${index}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className='no-video'>
                    <p>To be announced</p>
                  </div>
                )}
                <div className='video-info'>
                  <h3 className='video-title'> {video.title || 'To be announced'}</h3>
                  <p className='video-subtitle'> {video.title || 'To be announced'}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const youtubeVideos = [
    {
      link: "",
      title: "",
      subtitle: ""
    },
    {
      link: "",  // No link provided
      title: "",
      subtitle: ""
    },
    {
      link: "",
      title: "",
      subtitle: ""
    }
    // Add more video objects here
  ];

  return (
    <div>
      <SayembaraVisualComponent videos={youtubeVideos} />
    </div>
  );
};

export default App;
