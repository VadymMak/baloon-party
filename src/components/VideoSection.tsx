// src/components/VideoSection.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addVideoUrls } from "../store/instagramSlice";
import { RootState } from "../store/store";
import styles from "./VideoSection.module.scss";

interface VideoSectionProps {
  urls: string[];
}

const VideoSection: React.FC<VideoSectionProps> = ({ urls }) => {
  const dispatch = useDispatch();

  // Retrieve the video URLs from the Redux store and type the state properly
  const storedVideoUrls = useSelector(
    (state: RootState) => state.instagram.videoUrls
  );

  // Effect to add video URLs to Redux store if they are not already present
  useEffect(() => {
    if (urls.length > 0 && storedVideoUrls.length === 0) {
      dispatch(addVideoUrls(urls)); // Dispatch to store
    }
  }, [urls, storedVideoUrls, dispatch]);

  // Dynamically load Instagram Embed script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Initialize Instagram embeds after the script is loaded
    script.onload = () => {
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process(); // Process all Instagram embeds
      }
    };

    return () => {
      document.body.removeChild(script); // Cleanup
    };
  }, []);

  // Re-run the Instagram embed process when stored video URLs change
  useEffect(() => {
    if (window.instgrm && window.instgrm.Embeds) {
      window.instgrm.Embeds.process(); // Re-initialize Instagram embeds when video URLs change
    }
  }, [storedVideoUrls]);

  return (
    <section className={styles.videoSection}>
      <h2 className={styles.title}>Watch Our Work</h2>
      <div className={styles.videoContainer}>
        {storedVideoUrls.map((url: string, index: number) => (
          <blockquote
            key={index}
            className="instagram-media"
            data-instgrm-permalink={url}
            data-instgrm-version="13"
          >
            <a href={url} target="_blank" rel="noopener noreferrer">
              <span className="sr-only">View Instagram post</span>
            </a>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default VideoSection;
