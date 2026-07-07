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
    let mounted = true;
    const startTime = Date.now();
    const MIN_DISPLAY_MS = 2000;

    const assets = [
      'https://res.cloudinary.com/dvybb2xnc/image/upload/v1783333390/ChatGPT_Image_Jul_6_2026_01_21_52_PM_iuw4k7.png',
      `${process.env.PUBLIC_URL}/pmi-it-logo.png`,
      'https://res.cloudinary.com/dvybb2xnc/image/upload/v1751550832/pmi-it-logo_pegnsp.png',
    ];

    let assetsReady = false;
    let pageReady = document.readyState === 'complete';
    let loadedCount = 0;
    let finishTimer = null;

    const tryFinish = () => {
      if (!mounted || !assetsReady || !pageReady) return;

      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);

      finishTimer = window.setTimeout(() => {
        if (mounted) {
          setIsLoading(false);
        }
      }, remaining);
    };

    const onAssetLoad = () => {
      loadedCount += 1;
      if (loadedCount >= assets.length) {
        assetsReady = true;
        tryFinish();
      }
    };

    assets.forEach((url) => {
      const img = new Image();
      img.onload = onAssetLoad;
      img.onerror = onAssetLoad;
      img.src = url;
    });

    const handleLoad = () => {
      pageReady = true;
      tryFinish();
    };

    if (pageReady) {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    const timeoutId = setTimeout(() => {
      if (mounted) {
        setIsLoading(false);
      }
    }, 5000);

    return () => {
      mounted = false;
      clearTimeout(timeoutId);
      if (finishTimer) clearTimeout(finishTimer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return { isLoading };
}; 