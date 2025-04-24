import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// Extract video ID from YouTube URL
function getYouTubeVideoId(url) {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[7].length === 11) ? match[7] : null;
}

// Generate thumbnail URL from video ID
function getYouTubeThumbnail(videoId) {
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;
}

export default function FeaturedVideosSection() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Initial video data with URLs
  const initialVideos = [
    {
      id: 1,
      videoUrl: 'https://www.youtube.com/watch?v=RWpWxpGMjiU&t=3s',
      // Optional fallback data if API fails
      fallbackTitle: 'Are we living in a simulation?',
      fallbackPresenter: 'Barry Smith',
      fallbackDate: 'March 15, 2023'
    },
    {
      id: 2,
      videoUrl: 'https://www.youtube.com/watch?v=bj8mSbHh-qA&t=1911s',
      fallbackTitle: 'Introduction to Ontology Engineering',
      fallbackPresenter: 'Barry Smith',
      fallbackDate: 'June 20, 2023'
    },
    // Add your other videos here
    {
      id: 3,
      videoUrl: 'https://www.youtube.com/watch?v=p0buEjR3t8A&t=2s', // This is a fake URL
      fallbackTitle: 'Introduction to Basic Formal Ontology',
      fallbackPresenter: 'Barry Smith',
      fallbackDate: 'April 10, 2021'
    },
    {
      id: 4,
      videoUrl: 'https://www.youtube.com/watch?v=__P0HU3ln3w', // This is a fake URL
      fallbackTitle: 'Ontology for system engineering',
      fallbackPresenter: 'Barry Smith',
      fallbackDate: 'May 5, 2023'
    }
  ];

  // Fetch video data from YouTube API
  useEffect(() => {
    async function fetchVideoData() {
      try {
        // Create a copy of initialVideos to update with fetched data
        const updatedVideos = [...initialVideos];
        
        // Process each video
        for (let i = 0; i < updatedVideos.length; i++) {
          const video = updatedVideos[i];
          const videoId = getYouTubeVideoId(video.videoUrl);
          
          if (!videoId) {
            // If invalid URL, use fallback data
            updatedVideos[i] = {
              ...video,
              title: video.fallbackTitle,
              presenter: video.fallbackPresenter,
              date: video.fallbackDate,
              thumbnail: null
            };
            continue;
          }
          
          // Set thumbnail from ID
          video.thumbnail = getYouTubeThumbnail(videoId);
          
          try {
            // Fetch video data from YouTube API
            // NOTE: This requires a YouTube API key
            const apiKey = 'YOUR_YOUTUBE_API_KEY'; // Replace with your actual API key
            const response = await fetch(
              `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`
            );
            
            if (!response.ok) throw new Error('YouTube API request failed');
            
            const data = await response.json();
            
            if (data.items && data.items.length > 0) {
              const snippet = data.items[0].snippet;
              
              // Format the date
              const publishedAt = new Date(snippet.publishedAt);
              const formattedDate = publishedAt.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              });
              
              // Update video with API data
              updatedVideos[i] = {
                ...video,
                title: snippet.title,
                presenter: snippet.channelTitle,
                date: formattedDate,
                thumbnail: getYouTubeThumbnail(videoId)
              };
            } else {
              // Fallback to provided data if API returns no items
              updatedVideos[i] = {
                ...video,
                title: video.fallbackTitle,
                presenter: video.fallbackPresenter,
                date: video.fallbackDate,
                thumbnail: getYouTubeThumbnail(videoId)
              };
            }
          } catch (error) {
            console.error('Error fetching video data:', error);
            // Use fallback data on error
            updatedVideos[i] = {
              ...video,
              title: video.fallbackTitle,
              presenter: video.fallbackPresenter,
              date: video.fallbackDate,
              thumbnail: getYouTubeThumbnail(videoId)
            };
          }
        }
        
        setVideos(updatedVideos);
      } catch (error) {
        console.error('Error processing videos:', error);
        // If overall process fails, use fallback data for all videos
        const fallbackVideos = initialVideos.map(video => {
          const videoId = getYouTubeVideoId(video.videoUrl);
          return {
            ...video,
            title: video.fallbackTitle,
            presenter: video.fallbackPresenter,
            date: video.fallbackDate,
            thumbnail: videoId ? getYouTubeThumbnail(videoId) : null
          };
        });
        setVideos(fallbackVideos);
      } finally {
        setLoading(false);
      }
    }

    fetchVideoData();
  }, []);

  // Render loading state or videos
  return (
    <div className={styles.videosContainer}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Featured <span className={styles.highlight}>Videos</span>
          </h2>
          <p className={styles.sectionDescription}>
            Watch lectures, presentations, and discussions on ontological research and applications.
          </p>
        </div>

        {loading ? (
          <div className={styles.loadingContainer}>
            <div className={styles.loadingSpinner}></div>
            <p>Loading videos...</p>
          </div>
        ) : (
          <div className={styles.videosGrid}>
            {videos.map((video) => (
              <a key={video.id} href={video.videoUrl} className={styles.videoCard} target="_blank" rel="noopener noreferrer">
                <div className={styles.thumbnailContainer}>
                  <div className={styles.thumbnail}>
                    {video.thumbnail ? (
                      <img 
                        src={video.thumbnail} 
                        alt={`Thumbnail for ${video.title}`}
                        className={styles.thumbnailImage}
                      />
                    ) : (
                      <div className={styles.placeholderThumbnail}></div>
                    )}
                    <div className={styles.playButton}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="white" />
                        <path d="M16 12L10 15.464V8.536L16 12Z" fill="#9e7418" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className={styles.videoInfo}>
                  <h3 className={styles.videoTitle}>{video.title}</h3>
                  <div className={styles.videoMeta}>
                    <span className={styles.presenter}>{video.presenter}</span>
                    <span className={styles.date}>{video.date}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        <div className={styles.viewAllContainer}>
          <a
            href="https://www.youtube.com/@BarrySmithOntology"
            className={styles.youtubeButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              className={styles.youtubeIcon}
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
            Visit Our YouTube Channel
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.arrowIcon}>
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
} 