// ResetPassword.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "/images/LogoIQ.png";

const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    if (password !== confirm) {
      setError("Las contraseñas no coinciden.");
      return;
    }
    setError("");
    console.log("Cambiar contraseña a:", password);
    // aquí llamas tu API de cambio de contraseña
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
          Plataforma de análisis predictivo de fútbol. Cambia tu contraseña para
          seguir ganando con Big Data.
        </p>
      </div>

      {/* Panel Derecho */}
      <div className="w-1/2 flex items-center justify-center p-10">
        <div className="w-full max-w-md bg-white/40 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/30">
          <img src={logo} alt="IQSports Logo" className="w-32 h-auto mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-white text-center mb-4">Cambiar Contraseña</h2>
          <p className="text-center text-sm text-white/90 mb-6">
            Ingresa tu nueva contraseña para actualizar tu cuenta.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1 text-white/90">Nueva Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="w-full px-5 py-3 rounded-xl bg-white/50 placeholder-white/70 text-black font-medium focus:outline-none focus:ring-2 focus:ring-indigo-300 border border-white/50"
                placeholder="********"
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-white/90">Confirmar Contraseña</label>
              <input
                type="password"
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
                required
                className="w-full px-5 py-3 rounded-xl bg-white/50 placeholder-white/70 text-black font-medium focus:outline-none focus:ring-2 focus:ring-indigo-300 border border-white/50"
                placeholder="********"
              />
            </div>
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold transition mt-4"
            >
              Cambiar Contraseña
            </button>
            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="text-white/90 hover:text-white text-sm transition"
              >
                Volver al inicio de sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;