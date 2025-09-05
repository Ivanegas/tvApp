import { Clock, Wifi, Thermometer, Sun, Cloud, CloudRain } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTVFocus } from "@/hooks/useTVFocus";
import hotelRoomBg from "@/assets/hotel-room-bg.jpg";
import hiltonHonorsIcon from "@/assets/hilton-honors-icon.jpg";
import flightStatusIcon from "@/assets/airport-terminal-lounge.jpg";
import hotelAmenitiesIcon from "@/assets/hotel-amenities-icon.jpg";
import menuServicesIcon from "@/assets/menu-services-icon.jpg";
import elSalvadorTourismIcon from "@/assets/el-salvador-tourism-icon.jpg";
import netflixLogo from "@/assets/netflix-logo.png";
import primeVideoLogo from "@/assets/prime-video-logo.png";
import disneyPlusLogo from "@/assets/disney-plus-logo.png";
import youtubeLogo from "@/assets/youtube-logo.svg";
import aiAssistantQR from "@/assets/ai-assistant-qr.png";
import miHotelRewardsHero from "@/assets/hotel-facade-rewards.jpg";
import sincortar2 from "@/assets/bienvenida/sincortar2.png";
import vuelos from "@/assets/vuelos/vuelos.jpg";
import enjoy from "@/assets/menu/1.png";
import menu from "@/assets/menu.png";
import discover from "@/assets/discover/iStock-2181541758.jpg";


const HotelTVDashboard = () => {
  const navigate = useNavigate();
  const { ref: initialFocusRef } = useTVFocus(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time for display
  const timeString = currentTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  // Format date for display
  const dateString = currentTime.toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Weather data for El Salvador (could be connected to a real API)
  const weatherData = {
    temperature: 28,
    condition: "Soleado",
    humidity: 65,
    windSpeed: 12,
    icon: <Sun className="w-6 h-6" />,
    high: 32,
    low: 22
  };

  const services = [
    {
      title: "Hilton Honors",
      subtitle: "¡Únete a Hilton Honors y descubre todos los beneficios exclusivos que tenemos para ti!",
      image: "/lovable-uploads/609bd03b-dbc2-4032-8d4d-d7a6a3b70766.png",
      buttonText: "Más información",
      bgColor: "bg-blue-600"
    },
    {
      title: "Flight status",
      subtitle: "Check your flight information",
      image: "/lovable-uploads/609bd03b-dbc2-4032-8d4d-d7a6a3b70766.png",
      bgColor: "bg-orange-500"
    },
    {
      title: "Enjoy your Hotel",
      subtitle: "Discover hotel amenities",
      image: "/lovable-uploads/609bd03b-dbc2-4032-8d4d-d7a6a3b70766.png",
      bgColor: "bg-green-600"
    },
    {
      title: "Menu and services",
      subtitle: "Room service and dining",
      image: "/lovable-uploads/609bd03b-dbc2-4032-8d4d-d7a6a3b70766.png",
      bgColor: "bg-gray-600"
    },
    {
      title: "Discover El Salvador",
      subtitle: "Local attractions and tours",
      image: "/lovable-uploads/609bd03b-dbc2-4032-8d4d-d7a6a3b70766.png",
      bgColor: "bg-red-600"
    }
  ];

  const streamingApps = [
    { name: "Stream TV", logo: "📺" },
    { name: "Netflix", logo: netflixLogo, bgColor: "bg-black" },
    { name: "Prime Video", logo: primeVideoLogo, bgColor: "bg-blue-500" },
    { name: "Disney+", logo: disneyPlusLogo, bgColor: "bg-blue-700" },
    { name: "YouTube", logo: youtubeLogo, bgColor: "bg-white" },
    { name: "Asistente IA", logo: aiAssistantQR, bgColor: "bg-purple-600", isQR: true }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden tv-safe-area responsive-container">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hotelRoomBg})` }}
      />
      {/* Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/40" />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-hotel-bg/60 to-background/60" />

      {/* Content with TV optimizations */}
      <div className="relative z-10 p-4 sm:p-6 lg:p-8 tv-optimized responsive-padding">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          {/* Hotel Logo and Info */}
          <div className="text-white">
            <div className="flex items-center gap-4 mb-2">
              <div
                ref={initialFocusRef}
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer focusable custom-focus"
                onClick={() => navigate("/")}
                tabIndex={0}
                role="button"
                aria-label="Ir al video de bienvenida"
              >
                <span className="text-3xl font-bold text-hotel-primary">M</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold tv-high-contrast">Mi Hotel</h1>
                <p className="text-lg opacity-90 tv-high-contrast">SAN SALVADOR</p>
                <p className="text-sm opacity-75 tv-high-contrast">El Salvador, Centro América</p>
              </div>
            </div>
          </div>

          {/* Time and Weather */}
          <div className="text-white text-right">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
              <div className="text-4xl font-light mb-1">{timeString}</div>
              <div className="text-sm opacity-90 capitalize">{dateString}</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-end gap-3 mb-2">
                {weatherData.icon}
                <div>
                  <div className="text-2xl font-bold">{weatherData.temperature}°C</div>
                  <div className="text-sm opacity-90">{weatherData.condition}</div>
                </div>
              </div>
              <div className="text-xs opacity-75 space-y-1">
                <div className="flex justify-between gap-4">
                  <span>Máx: {weatherData.high}°C</span>
                  <span>Mín: {weatherData.low}°C</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Humedad: {weatherData.humidity}%</span>
                  <span>Viento: {weatherData.windSpeed} km/h</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid - Responsive y optimizado para TV */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 mb-6 lg:mb-8 responsive-grid">
          {/* Hilton Honors - Large card */}
          <Card
            className="lg:col-span-5 bg-black/60 text-white border-0 overflow-hidden relative h-40 sm:h-48 lg:h-48 focusable card-focusable focus-transition"
            onClick={() => navigate("/dashboard/hilton-honors")}
            tabIndex={0}
            role="button"
            aria-label="Acceder a Mi Hotel Rewards"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${sincortar2})` }}
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 p-6 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">Mi Hotel Rewards</h2>
                <p className="text-sm opacity-90 mb-4">
                  ¡Únete a Mi Hotel Rewards y descubre todos los beneficios exclusivos que tenemos para ti!
                </p>
              </div>
              <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-white/30 hover:bg-white/30 transition-colors text-sm font-medium self-start">
                Más información
              </button>
            </div>
          </Card>

          {/* Flight Status */}
          <Card
            className="lg:col-span-7 bg-black/60 text-white border-0 overflow-hidden relative h-40 sm:h-48 lg:h-48 focusable card-focusable focus-transition"
            onClick={() => navigate("/dashboard/flight-status")}
            tabIndex={0}
            role="button"
            aria-label="Ver estado de vuelos"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${vuelos})` }}
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 p-6 h-full flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">Flight status</h2>
                <p className="text-sm opacity-90">Check your flight information</p>
              </div>
              <div className="w-24 h-24 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-4xl">✈️</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Services Grid - Optimizado para navegación TV */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mb-6 lg:mb-8 responsive-services">
          <Card
            className="bg-black/60 text-white border-0 overflow-hidden h-24 sm:h-28 lg:h-32 focusable card-focusable focus-transition relative"
            onClick={() => navigate("/dashboard/hotel-amenities")}
            tabIndex={0}
            role="button"
            aria-label="Ver amenidades del hotel"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${enjoy})` }}
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 p-4 h-full flex items-center justify-between">
              <div>
                <h3 className="font-bold">Enjoy your Hotel</h3>
                <p className="text-xs opacity-90">Discover amenities</p>
              </div>
              <span className="text-2xl">🏨</span>
            </div>
          </Card>

          <Card
            className="bg-black/60 text-white border-0 overflow-hidden h-24 sm:h-28 lg:h-32 focusable card-focusable focus-transition relative"
            onClick={() => navigate("/dashboard/menu-services")}
            tabIndex={0}
            role="button"
            aria-label="Ver menú y servicios"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${menu})` }}
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 p-4 h-full flex items-center justify-between">
              <div>
                <h3 className="font-bold">Menu and services</h3>
                <p className="text-xs opacity-90">Room service & dining</p>
              </div>
              <span className="text-2xl">🍽️</span>
            </div>
          </Card>

          <Card
            className="bg-black/40 text-white border-0 overflow-hidden h-24 sm:h-28 lg:h-32 focusable card-focusable focus-transition relative"
            onClick={() => navigate("/dashboard/discover-el-salvador")}
            tabIndex={0}
            role="button"
            aria-label="Descubrir El Salvador"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${discover})` }}
            />
            <div className="relative z-10 p-4 h-full flex items-center justify-between">
              <div>
                <h3 className="font-bold">Discover El Salvador</h3>
                <p className="text-xs opacity-90">Local attractions</p>
              </div>
              <span className="text-2xl">🌅</span>
            </div>
          </Card>
        </div>

        {/* Streaming Apps - Optimizado para TV */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-6 responsive-streaming">
          {streamingApps.map((app, index) => (
            <Card
              key={index}
              className="bg-white/90 backdrop-blur-sm border-0 transition-colors focusable card-focusable focus-transition"
              onClick={() => {
                if (app.name === "Asistente IA") {
                  navigate("/dashboard/ai-assistant");
                } else {
                  const urls: { [key: string]: string } = {
                    "Netflix": "https://netflix.com",
                    "Prime Video": "https://primevideo.com",
                    "Disney+": "https://disneyplus.com",
                    "YouTube": "https://youtube.com"
                  };
                  if (urls[app.name]) {
                    window.open(urls[app.name], '_blank');
                  }
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`Abrir ${app.name}`}
            >
              <div className="p-4 text-center">
                {typeof app.logo === 'string' && app.logo.includes('/') ? (
                  <img
                    src={app.logo}
                    alt={app.name}
                    className={`${app.isQR ? 'w-full h-16' : 'w-full h-12'} mx-auto mb-2 object-contain`}
                  />
                ) : (
                  <div className="text-3xl mb-2">{app.logo}</div>
                )}
                <p className="text-sm font-medium text-gray-800">{app.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelTVDashboard;