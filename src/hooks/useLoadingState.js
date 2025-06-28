import { useState, useEffect } from 'react';

export const useLoadingState = (dependencies = [], timeout = 5000) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let mounted = true;

    const checkDependencies = async () => {
      try {
        // If no dependencies, just wait for a minimal time
        if (dependencies.length === 0) {
          await new Promise(resolve => setTimeout(resolve, 100));
          if (mounted) {
            setIsLoading(false);
          }
          return;
        }

        // Check if all dependencies are resolved
        const results = await Promise.allSettled(dependencies);
        const successful = results.filter(result => result.status === 'fulfilled').length;
        const progressPercent = (successful / dependencies.length) * 100;
        
        if (mounted) {
          setProgress(progressPercent);
          
          if (successful === dependencies.length) {
            setIsLoading(false);
          }
        }
      } catch (error) {
        console.warn('Loading check failed:', error);
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    // Set a timeout to prevent infinite loading
    const timeoutId = setTimeout(() => {
      if (mounted) {
        setIsLoading(false);
      }
    }, timeout);

    checkDependencies();

    return () => {
      mounted = false;
      clearTimeout(timeoutId);
    };
  }, [dependencies, timeout]);

  return { isLoading, progress };
};

export const useImageLoading = (imageUrls = []) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    if (imageUrls.length === 0) {
      setIsLoading(false);
      return;
    }

    let mounted = true;
    let loaded = 0;

    const checkImageLoad = () => {
      loaded++;
      if (mounted) {
        setLoadedCount(loaded);
        if (loaded >= imageUrls.length) {
          setIsLoading(false);
        }
      }
    };

    // Preload images
    imageUrls.forEach(url => {
      const img = new Image();
      img.onload = checkImageLoad;
      img.onerror = checkImageLoad; // Continue even if image fails
      img.src = url;
    });

    // Fallback timeout
    const timeoutId = setTimeout(() => {
      if (mounted) {
        setIsLoading(false);
      }
    }, 3000);

    return () => {
      mounted = false;
      clearTimeout(timeoutId);
    };
  }, [imageUrls]);

  return { isLoading, loadedCount, totalImages: imageUrls.length };
};

export const usePageLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return { isLoading };
}; 