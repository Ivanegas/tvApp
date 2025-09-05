import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTVFocus } from "@/hooks/useTVFocus";
import { ArrowLeft, QrCode, Smartphone, Clock, MessageCircle } from "lucide-react";
import aiAssistantQR from "@/assets/ai-assistant-qr.png";

const AIAssistant = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden tv-safe-area responsive-container">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
      
      <div className="relative z-10 p-4 sm:p-6 lg:p-8 tv-optimized responsive-padding">
        {/* Header with back button */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate("/dashboard")}
            className="focusable card-focusable focus-transition text-white border-white/30 hover:bg-white/10"
            tabIndex={0}
          >
            <ArrowLeft className="w-6 h-6 mr-2" />
            Volver
          </Button>
          <h1 className="text-4xl font-bold text-white tv-high-contrast">Asistente IA Virtual</h1>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 max-w-6xl mx-auto">
          {/* QR Code Section */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 text-center">
            <div className="bg-white rounded-2xl p-8 mb-6 inline-block">
              <img 
                src={aiAssistantQR} 
                alt="Código QR para Asistente IA" 
                className="w-64 h-64 mx-auto"
              />
            </div>
            <div className="text-white space-y-4">
              <div className="flex items-center justify-center gap-3 mb-4">
                <QrCode className="w-8 h-8 text-blue-300" />
                <h2 className="text-2xl font-bold">Escanea el Código QR</h2>
              </div>
              <p className="text-lg opacity-90">
                Usa la cámara de tu celular para escanear este código QR
              </p>
            </div>
          </Card>

          {/* Instructions Section */}
          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
              <div className="flex items-start gap-4">
                <Smartphone className="w-8 h-8 text-green-400 mt-1 flex-shrink-0" />
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-3">¿Cómo funciona?</h3>
                  <ol className="space-y-3 text-lg opacity-90">
                    <li className="flex items-start gap-3">
                      <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                      <span>Abre la cámara de tu celular</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                      <span>Escanea el código QR que aparece en pantalla</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                      <span>Se abrirá el asistente virtual en tu celular</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
                      <span>¡Comienza a hablar con nuestro asistente!</span>
                    </li>
                  </ol>
                </div>
              </div>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
              <div className="flex items-start gap-4">
                <MessageCircle className="w-8 h-8 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-3">¿En qué te puede ayudar?</h3>
                  <ul className="space-y-2 text-lg opacity-90">
                    <li>• Información sobre servicios del hotel</li>
                    <li>• Recomendaciones de restaurantes</li>
                    <li>• Actividades turísticas en El Salvador</li>
                    <li>• Solicitar servicios de habitación</li>
                    <li>• Consultas generales sobre tu estadía</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="bg-green-600/20 backdrop-blur-sm border-green-400/30 p-6">
              <div className="flex items-center gap-4 text-green-300">
                <Clock className="w-8 h-8 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Disponible 24/7</h3>
                  <p className="text-lg opacity-90">
                    Nuestro asistente IA está disponible las 24 horas del día, 
                    los 7 días de la semana para ayudarte con cualquier consulta.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-white/60 text-lg">
            ¿Tienes problemas escaneando el código? Solicita ayuda en recepción.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;