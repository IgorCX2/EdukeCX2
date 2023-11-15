'use client'
import { useEffect } from 'react';

export default function Video({ src }) {
  
  useEffect(() => {
    const eventListener = (event) => {
      if (!document.getElementById(`youtube-${src}`).contains(event.target)) {
        const iframe = document.getElementById(`youtube-${src}`);
        iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      }
    };
    document.addEventListener('click', eventListener);
    return () => {
      document.removeEventListener('click', eventListener);
    };
  }, []);

  return (
    <iframe
      id={`youtube-${src}`}
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      src={`https://www.youtube.com/embed/${src}?enablejsapi=1&controls=1&modestbranding=1&rel=0`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}
