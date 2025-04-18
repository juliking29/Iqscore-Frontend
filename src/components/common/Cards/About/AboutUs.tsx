import { Brain, Search, BarChart3, MessageCircle } from 'lucide-react';

const AboutUsCard = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-transparent text-gray-900 dark:text-white flex flex-col items-center justify-center px-6 py-16 transition-colors duration-500">
      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 mb-10 animate-fadeInUp">
        Sobre Nosotros
      </h1>

      <div className="bg-white/90 dark:bg-black/40 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-2xl max-w-4xl w-full p-10 space-y-8 backdrop-blur-md transition-all duration-500">
        <div className="flex items-start gap-4">
          <BarChart3 className="text-blue-500 dark:text-blue-400 w-8 h-8 mt-1" />
          <p className="text-lg leading-relaxed">
            <span className="font-semibold text-blue-500 dark:text-blue-400">IQSScore</span> es una plataforma avanzada de análisis de datos deportivos basada en <span className="font-semibold">Big Data</span>, especializada en fútbol. Gestiona una base de datos extensa y precisa sobre ligas, equipos y jugadores, con estadísticas actualizadas en tiempo real.
          </p>
        </div>

        <div className="flex items-start gap-4">
          <Search className="text-purple-500 dark:text-purple-400 w-8 h-8 mt-1" />
          <p className="text-lg leading-relaxed">
            Utiliza <span className="font-semibold text-purple-500 dark:text-purple-400">web scraping</span> para analizar y comparar cuotas de múltiples casas de apuestas, recomendando siempre la mejor opción disponible en cada momento.
          </p>
        </div>

        <div className="flex items-start gap-4">
          <Brain className="text-green-500 dark:text-green-400 w-8 h-8 mt-1" />
          <p className="text-lg leading-relaxed">
            Su módulo de <span className="text-green-500 dark:text-green-400 font-semibold">inteligencia artificial</span> analiza grandes volúmenes de datos históricos y contextuales para generar recomendaciones personalizadas, optimizando las decisiones de apuesta.
          </p>
        </div>

        <div className="flex items-start gap-4">
          <MessageCircle className="text-yellow-500 dark:text-yellow-400 w-8 h-8 mt-1" />
          <p className="text-lg leading-relaxed">
            Un <span className="text-yellow-500 dark:text-yellow-400 font-semibold">chatbot inteligente</span> ofrece asistencia en tiempo real sobre fútbol y apuestas, mejorando la experiencia del usuario con respuestas rápidas y precisas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsCard;
