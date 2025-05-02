import React from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import logo from "/images/LogoIQ.png";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    console.log("Disparar flujo de login con Google");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login con email/usuario y contraseña");
  };

  const ballVariants = {
    animate: {
      y: [-10, -200, -20, -50, -20],
      opacity: [1, 1, 1, 1, 0],
      transition: {
        duration: 3,
        times: [0, 0.2, 0.5, 0.8, 1],
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-500">
      {/* Panel Izquierdo */}
      <div className="w-1/2 relative flex flex-col justify-center items-center p-12 text-white overflow-hidden">
        {/* SVG blobs decorativos */}
        <svg
          className="absolute top-0 left-0 w-64 opacity-20"
          viewBox="0 0 200 200"
        >
          <path
            fill="#FFFFFF"
            d="M42.3,-66.4C55.6,-57.8,68.8,-50.3,75,-38.1C81.1,-26,80.2,-9.2,74.8,6.6C69.4,22.4,59.5,37.5,46.2,48.5C32.9,59.5,16.4,66.5,1.4,64.2C-13.7,62,-27.5,50.6,-40,38.6C-52.5,26.6,-63.7,13.3,-66.1,-1C-68.4,-15.3,-62,-30.6,-50.1,-39.7C-38.2,-48.8,-21.1,-51.6,-5.1,-47.6C10.9,-43.6,21.8,-32.4,42.3,-66.4Z"
            transform="translate(100 100)"
          />
        </svg>
        <motion.div
          className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-black text-xl absolute top-1/3 filter drop-shadow-lg"
          variants={ballVariants}
          animate="animate"
        >
          ⚽
        </motion.div>
        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg z-10">IQScore</h1>
        <p className="text-center max-w-xs text-lg leading-relaxed opacity-90 z-10">
          Plataforma de análisis predictivo de fútbol. Regístrate para
          empezar a ganar con Big Data.
        </p>
      </div>

      {/* Panel Derecho */}
      <div className="w-1/2 flex items-center justify-center p-10">
        <div className="w-full max-w-md bg-white/40 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/30">
          <img
            src={logo}
            alt="IQSports Logo"
            className="w-32 h-auto mx-auto mb-6"
          />
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            ¡Bienvenido de nuevo!
          </h2>
          <p className="text-center text-sm text-white/90 mb-6">
            Ingresa tus credenciales o usa Google para continuar.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1 text-white/90">
                Correo o Usuario
              </label>
              <input
                type="email"
                placeholder="correo@ejemplo.com"
                className="w-full px-5 py-3 rounded-xl bg-white/50 placeholder-white/70 text-black font-medium mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-300 border border-white/50"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-white/90">
                Contraseña
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full px-5 py-3 rounded-xl bg-white/50 placeholder-white/70 text-black font-medium mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-300 border border-white/50"
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm text-white/90">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-indigo-300" />
                <span>Recordar usuario</span>
              </label>
              <a href="#" className="hover:underline hover:text-white">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center py-3 rounded-xl border-2 border-white text-white hover:bg-white hover:text-indigo-600 transition"
            >
              <FcGoogle className="w-5 h-5 mr-2" />
              Iniciar con Google
            </button>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold transition"
            >
              Iniciar sesión
            </button>

            <button
              type="button"
              onClick={() => navigate("/registro")}
              className="w-full py-3 rounded-xl bg-indigo-700 text-white hover:bg-indigo-800 font-semibold transition border-2 border-white"
            >
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;