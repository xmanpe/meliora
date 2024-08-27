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
                  <div className='no-video'
                  >
                    <p><i>To be announced</i></p>
                  </div>
                )}
                <div className='video-info'>
                  <div
                    className='video-title'
                    dangerouslySetInnerHTML={{ __html: video.title || '<i>To be announced</i>' }}
                  ></div>
                  <div
                    className='video-subtitle'
                    dangerouslySetInnerHTML={{ __html: video.subtitle || '<i>To be announced</i>' }}
                  ></div>
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
      title: "Terbaik 2",
      subtitle: ""
    },
    {
      link: "",  // No link provided
      title: "Terbaik 1",
      subtitle: ""
    },
    {
      link: "",
      title: "Terbaik 3",
      subtitle: ""
    },
    {
      link: "",
      title: "<i>Runner Up</i>",
      subtitle: ""
    },
    {
      link: "",
      title: "<i>Runner Up</i>",
      subtitle: ""
    }
  ];

  return (
    <div>
      <SayembaraVisualComponent videos={youtubeVideos} />
    </div>
  );
};

export default App;
