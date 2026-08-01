import { useEffect } from 'react';
import { SHOWCASE_PROJECTS, SERVICE_CATEGORIES, LISTINGS_DATA } from '../data/arInteriorData';

export const ImagePreloader = () => {
  useEffect(() => {
    // Delay preloading by 1 second to prioritize the main page rendering
    const timeout = setTimeout(() => {
      const urls = new Set<string>();

      // Collect all image URLs from our data
      SHOWCASE_PROJECTS.forEach(p => {
        if (p.imageUrl) urls.add(p.imageUrl);
      });

      SERVICE_CATEGORIES.forEach(c => {
        c.projects.forEach(p => {
          if (p.imageUrl) urls.add(p.imageUrl);
        });
      });

      LISTINGS_DATA.forEach(l => {
        if (l.imageUrl) urls.add(l.imageUrl);
      });

      // Add static structural images
      urls.add('/about-left.png');
      urls.add('/about-right.jpg');
      urls.add('/hero-video.mp4'); // The browser can cache the video too if requested

      // Fire off requests for all images so the browser caches them instantly
      urls.forEach(url => {
        if (url && !url.endsWith('.mp4')) {
          const img = new window.Image();
          img.src = url;
        } else if (url && url.endsWith('.mp4')) {
          // Preload video without playing
          const video = document.createElement('video');
          video.preload = 'auto';
          video.src = url;
        }
      });
    }, 1500); // 1.5 seconds delay

    return () => clearTimeout(timeout);
  }, []);

  return null; // This component doesn't render anything visible
};
