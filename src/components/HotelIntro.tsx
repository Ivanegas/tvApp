import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Play, Pause } from "lucide-react";
import hotelIntroBg from "@/assets/hotel-intro-bg.jpg";
import hotelVideo from "@/assets/video/video2.mp4"; // 👈 Importa tu video local

const HotelIntro = () => {
  const navigate = useNavigate();
  const [fadeIn, setFadeIn] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(true);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleEnterApp = () => {
    navigate("/dashboard");
  };

  const togglePlayPause = () => {
    const video = document.getElementById("hotelVideo") as HTMLVideoElement | null;
    if (video) {
      if (videoPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setVideoPlaying(!videoPlaying);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Video Background */}
      <video
        id="hotelVideo"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        style={{ opacity: 0.7 }}
      >
        <source src={hotelVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Fallback Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{
          transform: `scale(${fadeIn ? 1.02 : 1})`,
          opacity: fadeIn ? 0.6 : 0.3,
        }}
      />

      {/* Logo + Texto */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
        <div
          className={`text-center mb-8 transition-all duration-2000 delay-500 ${fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
            <span className="text-4xl font-bold text-hotel-primary">M</span>
          </div>
          <h1 className="text-5xl font-light text-white mb-3 tracking-wider">
            MI HOTEL
          </h1>
          <h2 className="text-xl text-white opacity-90 tracking-widest">
            SAN SALVADOR
          </h2>
          <p className="text-sm text-white opacity-75 mt-1">
            El Salvador, Centro América
          </p>
        </div>
      </div>

      {/* Botón Ingresar abajo a la derecha */}
      <div className="absolute bottom-6 right-6 z-20">
        <button
          onClick={handleEnterApp}
          className="px-6 py-3 bg-white/20 backdrop-blur-md text-white font-semibold rounded-lg shadow-lg hover:bg-white/30 transition"
        >
          Ingresar al SmartRoom
        </button>
      </div>

      {/* Botón Play/Pause abajo a la izquierda */}
      <div className="absolute bottom-6 left-6 z-20">
        <button
          onClick={togglePlayPause}
          className="p-3 bg-black/40 rounded-full text-white hover:bg-black/60 transition"
          aria-label={videoPlaying ? "Pausar video" : "Reproducir video"}
        >
          {videoPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
      </div>
    </div>
  );
};

export default HotelIntro;
