import { useEffect, useRef, useState } from 'react';
import styles from './CameraApp.module.css';

export default function CameraApp() {
  const [image, setImage] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const downloadRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    async function setupWebcam() {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        console.log(videoRef.current);
      }
    }
    setupWebcam();
  }, []);

  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (video && canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = canvas.toDataURL('image/png');
        setImage(imageData);
      }
    }
  };

  const downloadImage = () => {
    if (downloadRef.current && image) {
      downloadRef.current.href = image;
      downloadRef.current.download = 'captured_image.png';
    }
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>카메라 앱</h1>
      <div className={styles.content__container}>
        <div className={styles.media__container}>
          <button onClick={captureImage} className={styles.button}>
            이미지 캡쳐
          </button>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className={styles.media}
          ></video>
        </div>
        <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
        {image && (
          <div className={styles.media__container}>
            <a
              ref={downloadRef}
              onClick={downloadImage}
              className={styles.button}
            >
              이미지 다운로드
            </a>
            <img src={image} alt='캡쳐된 이미지' className={styles.media} />
          </div>
        )}
      </div>
    </div>
  );
}
