import React, { useState, useEffect, useRef } from "react";

const Body = ({ keyword }) => {
  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const currentAudioRef = useRef(null);



  const fetchMusicData = async () => {
    setTracks([]);
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://v1.nocodeapi.com/ankur1998/spotify/TUIKYEwMkJiFTtfU/search?q=${keyword}&type=track&perPage=50`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch music data");
      }
      const jsonData = await response.json();
      setTracks(jsonData.tracks.items);
    } catch (error) {
      console.error("Error fetching music data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMusicData();
  }, [keyword]);

  const handlePlay = (event) => {
    if (currentAudioRef.current && currentAudioRef.current !== event.target) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }
    currentAudioRef.current = event.target;
  };
  

  return (
    <div className="container mt-4">
      {isLoading ? (
        <p>Loading music data...</p>
      ) : tracks.length > 0 ? (
        <div className="row">
          {tracks.map((track) => (
            <div key={track.id} className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div className="card h-100 d-flex flex-column">
                <div className="ratio ratio-1x1 bg-secondary bg-opacity-25">
                  <img src={track.album.images[0].url} className="card-img-top" alt={track.name} />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{track.name}</h5>
                  <p className="card-text">Artist: {track.artists[0].name}</p>
                  <p className="card-text">Release date: {track.album.release_date}</p>
                  <div className="mt-auto">
                    <audio src={track.preview_url} controls className="w-100" onPlay={handlePlay}></audio>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No music data found.</p>
      )}
    </div>
  );
};

export default Body;
