import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import HiltonHonors from "./pages/HiltonHonors";
import FlightStatus from "./pages/FlightStatus";
import HotelAmenities from "./pages/HotelAmenities";
import MenuServices from "./pages/MenuServices";
import DiscoverElSalvador from "./pages/DiscoverElSalvador";
import AIAssistant from "./pages/AIAssistant";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/hilton-honors" element={<HiltonHonors />} />
          <Route path="/dashboard/flight-status" element={<FlightStatus />} />
          <Route path="/dashboard/hotel-amenities" element={<HotelAmenities />} />
          <Route path="/dashboard/menu-services" element={<MenuServices />} />
          <Route path="/dashboard/discover-el-salvador" element={<DiscoverElSalvador />} />
          <Route path="/dashboard/ai-assistant" element={<AIAssistant />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
