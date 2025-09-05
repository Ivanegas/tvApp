import { ArrowLeft, Plane } from "lucide-react";
import { useNavigate } from "react-router-dom";
import airportBg from "@/assets/airport-bg.jpg";

const FlightStatus = () => {
  const navigate = useNavigate();

  const getAirlineLogo = (airline: string) => {
    const logos: { [key: string]: string } = {
      "AVIANCA": "AV",
      "COPA": "CM",
      "AMERICAN": "AA",
      "TACA": "TA", 
      "AEROMEXICO": "AM"
    };
    return logos[airline] || airline.substring(0, 2);
  };

  const getAirlineColor = (airline: string) => {
    const colors: { [key: string]: string } = {
      "AVIANCA": "bg-red-600",
      "COPA": "bg-blue-600",
      "AMERICAN": "bg-blue-800",
      "TACA": "bg-green-600",
      "AEROMEXICO": "bg-orange-600"
    };
    return colors[airline] || "bg-gray-600";
  };

  const arrivals = [
    {
      time: "08:45",
      origin: "GUATEMALA CITY",
      flight: "AV523",
      gate: "A3",
      status: "ON TIME",
      airline: "AVIANCA"
    },
    {
      time: "10:30",
      origin: "PANAMA CITY",
      flight: "CM315",
      gate: "B2",
      status: "DELAYED",
      airline: "COPA"
    },
    {
      time: "14:20",
      origin: "MIAMI",
      flight: "AA1234",
      gate: "A1",
      status: "ON TIME",
      airline: "AMERICAN"
    },
    {
      time: "16:15",
      origin: "SAN JOSE",
      flight: "TA456",
      gate: "A4",
      status: "BOARDING",
      airline: "TACA"
    },
    {
      time: "18:30",
      origin: "MEXICO CITY",
      flight: "AM442",
      gate: "B1",
      status: "CANCELLED",
      airline: "AEROMEXICO"
    }
  ];

  const departures = [
    {
      time: "09:30",
      destination: "GUATEMALA CITY",
      flight: "AV524",
      gate: "A3",
      status: "BOARDING",
      airline: "AVIANCA"
    },
    {
      time: "11:45",
      destination: "PANAMA CITY",
      flight: "CM316",
      gate: "B2",
      status: "ON TIME",
      airline: "COPA"
    },
    {
      time: "15:30",
      destination: "MIAMI",
      flight: "AA1235",
      gate: "A1",
      status: "ON TIME",
      airline: "AMERICAN"
    },
    {
      time: "17:00",
      destination: "SAN JOSE",
      flight: "TA457",
      gate: "A4",
      status: "DELAYED",
      airline: "TACA"
    },
    {
      time: "19:15",
      destination: "MEXICO CITY",
      flight: "AM443",
      gate: "B1",
      status: "CANCELLED",
      airline: "AEROMEXICO"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ON TIME":
        return "text-green-400";
      case "DELAYED":
        return "text-yellow-400";
      case "BOARDING":
        return "text-blue-400";
      case "CANCELLED":
        return "text-red-400";
      default:
        return "text-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Image with heavy dark overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${airportBg})` }}
      />
      
      <div className="relative z-10 p-8 font-mono">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <button 
            onClick={() => navigate("/dashboard")}
            className="p-2 bg-amber-400 text-black rounded-lg hover:bg-amber-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="text-amber-400">
            <h1 className="text-2xl font-bold flex items-center gap-2 uppercase tracking-wide">
              <Plane className="w-7 h-7" />
              FLIGHT STATUS
            </h1>
            <p className="text-sm opacity-90 tracking-wide">MONSEÑOR OSCAR ARNULFO ROMERO INTERNATIONAL AIRPORT (SAL)</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Arrivals */}
          <div className="bg-black border border-amber-400 rounded-lg overflow-hidden">
            <div className="bg-amber-400 text-black p-3">
              <div className="flex items-center gap-2">
                <Plane className="w-5 h-5 rotate-45" />
                <h2 className="text-lg font-bold uppercase tracking-wide">ARRIVALS</h2>
              </div>
            </div>
            
            {/* Header */}
            <div className="bg-gray-800 p-2 grid grid-cols-6 gap-3 text-amber-400 font-bold uppercase tracking-wide text-xs">
              <div>AIRLINE</div>
              <div>TIME</div>
              <div>ORIGIN</div>
              <div>FLIGHT</div>
              <div>GATE</div>
              <div>STATUS</div>
            </div>
            
            {/* Flights */}
            <div className="divide-y divide-gray-700">
              {arrivals.map((flight, index) => (
                <div key={index} className="p-2 grid grid-cols-6 gap-3 text-amber-400 uppercase tracking-wide hover:bg-gray-900 transition-colors text-sm">
                  <div className="flex items-center">
                    <div className={`${getAirlineColor(flight.airline)} text-white text-xs font-bold px-2 py-1 rounded`}>
                      {getAirlineLogo(flight.airline)}
                    </div>
                  </div>
                  <div className="font-bold">{flight.time}</div>
                  <div>{flight.origin}</div>
                  <div className="text-white font-bold">{flight.flight}</div>
                  <div>{flight.gate}</div>
                  <div className={`font-bold ${getStatusColor(flight.status)}`}>
                    {flight.status}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Departures */}
          <div className="bg-black border border-amber-400 rounded-lg overflow-hidden">
            <div className="bg-amber-400 text-black p-3">
              <div className="flex items-center gap-2">
                <Plane className="w-5 h-5 -rotate-45" />
                <h2 className="text-lg font-bold uppercase tracking-wide">DEPARTURES</h2>
              </div>
            </div>
            
            {/* Header */}
            <div className="bg-gray-800 p-2 grid grid-cols-6 gap-3 text-amber-400 font-bold uppercase tracking-wide text-xs">
              <div>AIRLINE</div>
              <div>TIME</div>
              <div>DESTINATION</div>
              <div>FLIGHT</div>
              <div>GATE</div>
              <div>STATUS</div>
            </div>
            
            {/* Flights */}
            <div className="divide-y divide-gray-700">
              {departures.map((flight, index) => (
                <div key={index} className="p-2 grid grid-cols-6 gap-3 text-amber-400 uppercase tracking-wide hover:bg-gray-900 transition-colors text-sm">
                  <div className="flex items-center">
                    <div className={`${getAirlineColor(flight.airline)} text-white text-xs font-bold px-2 py-1 rounded`}>
                      {getAirlineLogo(flight.airline)}
                    </div>
                  </div>
                  <div className="font-bold">{flight.time}</div>
                  <div>{flight.destination}</div>
                  <div className="text-white font-bold">{flight.flight}</div>
                  <div>{flight.gate}</div>
                  <div className={`font-bold ${getStatusColor(flight.status)}`}>
                    {flight.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Airport Info */}
        <div className="mt-6 bg-black border border-amber-400 rounded-lg overflow-hidden">
          <div className="bg-amber-400 text-black p-3">
            <h3 className="text-lg font-bold uppercase tracking-wide">AIRPORT INFORMATION</h3>
          </div>
          <div className="p-4 grid grid-cols-3 gap-4 text-center">
            <div className="text-amber-400">
              <h4 className="font-bold text-sm uppercase tracking-wide mb-1">TIME TO AIRPORT</h4>
              <p className="text-2xl font-bold text-green-400">25 MIN</p>
              <p className="text-xs opacity-75 uppercase">FROM HOTEL</p>
            </div>
            <div className="text-amber-400">
              <h4 className="font-bold text-sm uppercase tracking-wide mb-1">SHUTTLE SERVICE</h4>
              <p className="text-2xl font-bold text-green-400">$15</p>
              <p className="text-xs opacity-75 uppercase">PER PERSON</p>
            </div>
            <div className="text-amber-400">
              <h4 className="font-bold text-sm uppercase tracking-wide mb-1">TAXI</h4>
              <p className="text-2xl font-bold text-green-400">$20-25</p>
              <p className="text-xs opacity-75 uppercase">AVERAGE FARE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightStatus;