import LoadingScreen from "@/pages/loadingScreen";
import { useEffect, useState } from "react";

const SESSION_PRELOADED_FLAG = 'imagesPreloaded';

const PreloadImages = ({ images, children }: {images: string[], children: React.ReactNode}) => {
  const [isReady, setIsReady] = useState(() => {
    return sessionStorage.getItem(SESSION_PRELOADED_FLAG) === 'true';
  });

  useEffect(() => {
    if (isReady) return;

    let mounted = true;

    const preloadImages = async () => {
      try {
        
        const promises = images.map(
          (src: string) =>
            new Promise<void>((res) => {
              const img = new Image();
              img.src = src;
              img.onload = () => res();
              img.onerror = () => res();
            })
        );

        await Promise.all(promises);
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        if (mounted) {
          sessionStorage.setItem(SESSION_PRELOADED_FLAG, 'true');
          setIsReady(true);
        }
      } catch (error) {
        if (mounted) {
          setIsReady(true);
        }
      }
    };

    preloadImages();

    return () => {
      mounted = false;
    };
  }, [images, isReady]);

  if (!isReady) {
    return <LoadingScreen />
  }

  return children;
};

export default PreloadImages;