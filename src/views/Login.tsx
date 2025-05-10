import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";

import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { CredentialResponse } from '@react-oauth/google'; // Import type
import { useAuth } from "../context/AuthContext"; // Import the auth hook

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // Use the auth hook
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!captchaValue) {
      alert("Por favor, completa el captcha antes de continuar.");
      return;
    }
  
  
    try {
      const response = await fetch("https://obvious-enhance-libs-ranks.trycloudflare.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailOrUsername,
          password,
          rememberMe,
          captcha: captchaValue,  // 👈 ESTA ES LA CLAVE para que tu backend reciba el captcha
        }),
      });
      
  
      const data = await response.json();
      console.log(data); // 👉 Aquí puedes ver la respuesta completa
  
      if (response.ok) {
        // ✅ Si el login es exitoso, actualiza el contexto y navega a la página principal
        console.log("Login exitoso");
        // Extrae el email del usuario de la respuesta
        const email = data.email || (data.user && data.user.email) || emailOrUsername;
        if (email) {
          login({ email }); // Actualiza el contexto de autenticación
        }
        navigate("/"); // Cambia esto según la ruta de tu app
      } else {
        // 🚨 Muestra un error (puedes mejorarlo con un alert o un mensaje en pantalla)
        alert(data.message || "Error en el login");
      }
    } catch (error) {
      console.error("Error en la petición:", error);
      alert("Hubo un problema al intentar iniciar sesión.");
    }
  };
  
  const GOOGLE_CLIENT_ID = "656521501617-pr273c84j029tuhau1nveu3tu08gsn54.apps.googleusercontent.com"; // <-- pega aquí tu Client ID de Google

  // Función para decodificar JWT y extraer información
  function parseJwt(token: string) {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  }

  const handleGoogleSuccess = async (response: CredentialResponse) => {
    try {
      const res = await fetch("https://obvious-enhance-libs-ranks.trycloudflare.com/api/auth/google-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ credential: response.credential }), // 👈 solo esto
      });
      const data = await res.json();
      if (res.ok) {
        // Intenta extraer el email de la respuesta o del token
        let email = data.email || (data.user && data.user.email);
        if (!email && data.token) {
          const payload = parseJwt(data.token);
          email = payload?.email;
        }
        // Si el backend solo responde con el token de Google, decodifica el JWT:
        if (!email && response.credential) {
          const payload = parseJwt(response.credential);
          email = payload?.email;
        }
        if (email) {
          login({ email }); // Actualiza el contexto de autenticación
        }
        alert("¡Login con Google exitoso!");
        navigate("/");
      } else {
        alert(data.message || "Error en el login con Google");
      }
    } catch (error) {
      console.error("Error en Google login:", error);
      alert("Error inesperado en Google login");
    }
  };
  


  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>

    <div className="min-h-screen flex flex-col md:flex-row bg-[#1B1D20] relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Campo de fútbol estilizado */}
        <div className="absolute inset-0 bg-[#1B1D20]">
          <div className="absolute top-0 left-0 right-0 bottom-0">
            {/* Líneas del campo */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#354AED]/10 transform -translate-x-1/2"></div>
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#354AED]/10 transform -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-32 h-32 border-2 border-[#354AED]/10 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-0 left-0 right-0 bottom-0 border-2 border-[#354AED]/10 m-10 rounded-xl"></div>
          </div>
        </div>
        
        {/* Efectos de luz */}
        <div className="absolute -top-10 -left-10 w-96 h-96 bg-[#354AED] opacity-20 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#8400FF] opacity-20 rounded-full filter blur-3xl"></div>
      </div>

      {/* Panel izquierdo - Contenido de fútbol */}
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-lg"
        >
          {/* Logo y título */}
          <div className="flex flex-col items-center mb-10">
            <div className="w-24 h-24 rounded-full bg-[#354AED] flex items-center justify-center mb-6">
              <svg viewBox="0 0 24 24" className="w-12 h-12 text-white" fill="currentColor">
                <path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M16.9,8.57l-2.3,2.32c-0.07,0.07-0.13,0.16-0.16,0.26l-0.93,2.98c-0.21,0.67-1.13,0.71-1.42,0.07l-0.82-1.84c-0.07-0.16-0.2-0.29-0.36-0.36l-1.84-0.82c-0.64-0.29-0.6-1.2,0.07-1.42l2.98-0.93c0.1-0.03,0.19-0.09,0.26-0.16l2.32-2.3C15.31,6.34,18.02,6.58,16.9,8.57z" />
              </svg>
            </div>
            <h1 className="text-5xl font-bold text-white mb-2 tracking-tight">IQScore</h1>
            <p className="text-xl text-white/70">Análisis Predictivo de Fútbol</p>
          </div>

          {/* Características */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#1B1D20]/80 backdrop-blur-lg p-5 rounded-xl border border-[#354AED]/20 hover:border-[#354AED]/40 transition-all">
              <div className="w-10 h-10 bg-[#8400FF] rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-white text-lg font-medium mb-1">Estadísticas Avanzadas</h3>
              <p className="text-white/60 text-sm">Análisis completo del rendimiento de equipos y jugadores</p>
            </div>
            
            <div className="bg-[#1B1D20]/80 backdrop-blur-lg p-5 rounded-xl border border-[#354AED]/20 hover:border-[#354AED]/40 transition-all">
              <div className="w-10 h-10 bg-[#8400FF] rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-white text-lg font-medium mb-1">Predicciones en Vivo</h3>
              <p className="text-white/60 text-sm">Pronósticos en tiempo real basados en IA</p>
            </div>
            
            <div className="bg-[#1B1D20]/80 backdrop-blur-lg p-5 rounded-xl border border-[#354AED]/20 hover:border-[#354AED]/40 transition-all">
              <div className="w-10 h-10 bg-[#8400FF] rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white text-lg font-medium mb-1">Alertas Personalizadas</h3>
              <p className="text-white/60 text-sm">Recibe notificaciones para tus equipos favoritos</p>
            </div>
            
            <div className="bg-[#1B1D20]/80 backdrop-blur-lg p-5 rounded-xl border border-[#354AED]/20 hover:border-[#354AED]/40 transition-all">
              <div className="w-10 h-10 bg-[#8400FF] rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white text-lg font-medium mb-1">Historial Completo</h3>
              <p className="text-white/60 text-sm">Acceso a datos históricos de todas las ligas</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Panel derecho - Formulario de login */}
      <div className="w-full md:w-1/2 p-8 flex items-center justify-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-md"
        >
          <div className="bg-[#1B1D20]/80 backdrop-blur-xl p-8 rounded-2xl border border-[#354AED]/30 shadow-xl shadow-[#8400FF]/5 relative overflow-hidden">
            {/* Efectos decorativos */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#354AED] opacity-10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#8400FF] opacity-10 rounded-full filter blur-3xl"></div>
            
            <h2 className="text-2xl font-bold text-white mb-2">Bienvenido</h2>
            <p className="text-white/60 mb-6">Ingresa tus credenciales para acceder a tu cuenta.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-white/70 mb-2">Correo electrónico o usuario</label>
                <input
                  type="text"
                  value={emailOrUsername}
                  onChange={(e) => setEmailOrUsername(e.target.value)}
                  className="w-full bg-[#1B1D20] border border-[#354AED]/40 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#8400FF] transition-all"
                  placeholder="Correo o usuario"
                  required
                />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm text-white/70">Contraseña</label>
                  <a href="/Reestablecer" className="text-xs text-[#8400FF] hover:text-[#354AED] transition-colors">¿Olvidaste tu contraseña?</a>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#1B1D20] border border-[#354AED]/40 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#8400FF] transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
              
              <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rounded border-[#354AED]/40 text-[#8400FF] focus:ring-[#8400FF] mr-2"
              />

                <label htmlFor="remember" className="text-sm text-white/70">Mantener sesión iniciada</label>
              </div>
              
<ReCAPTCHA
  sitekey="6LeIJzIrAAAAACcwY43S_9iX_V1biscHsOcDOEvM" // 👈 Usa aquí el site key real de Google
  onChange={(value) => {
    console.log("Captcha value:", value);
    setCaptchaValue(value);
  }}
  theme="dark" // Opcional, se verá mejor con tu diseño oscuro
/>



              <button
                type="submit"
                className="w-full bg-[#354AED]  text-white py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-[#8400FF]/20 focus:outline-none focus:ring-2 focus:ring-[#8400FF]/50"
              >
                Iniciar sesión
              </button>
              
              <div className="relative flex items-center my-6">
                <div className="flex-grow border-t border-white/10"></div>
                <span className="flex-shrink mx-4 text-white/40 text-sm">o continúa con</span>
                <div className="flex-grow border-t border-white/10"></div>
              </div>
              
              <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={() => alert("Error al iniciar sesión con Google")}
        />
              
              <p className="text-center text-white/60 text-sm mt-6">
                ¿No tienes una cuenta?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/registro")}
                  className="text-[#8400FF] hover:text-[#354AED] transition-colors font-medium"
                >
                  Regístrate
                </button>
              </p>
            </form>
          </div>

          {/* Emblema de ligas */}
          <div className="flex justify-center space-x-4 mt-6">
            <div className="w-8 h-8 bg-white/10 rounded-full"></div>
            <div className="w-8 h-8 bg-white/10 rounded-full"></div>
            <div className="w-8 h-8 bg-white/10 rounded-full"></div>
            <div className="w-8 h-8 bg-white/10 rounded-full"></div>
            <div className="w-8 h-8 bg-white/10 rounded-full"></div>
          </div>
        </motion.div>
      </div>

      {/* Pelota animada */}
      <motion.div
        className="absolute z-10"
        initial={{ x: "-10vw", y: "40vh" }}
        animate={{ 
          x: ["0vw", "60vw", "80vw", "20vw", "0vw"],
          y: ["40vh", "10vh", "50vh", "80vh", "40vh"],
          rotate: [0, 180, 360, 720, 1080]
        }}
        transition={{ 
          duration: 35, 
          ease: "linear", 
          repeat: Infinity,
        }}
      >
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
          <svg className="w-6 h-6 text-[#1B1D20]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,4c1.5,0,2.9,0.35,4.14,0.97l-2.25,2.25 C13.3,7.07,12.66,7,12,7s-1.3,0.07-1.89,0.22L7.86,4.97C9.1,4.35,10.5,4,12,4z M4.97,7.86l2.25,2.25C7.07,10.7,7,11.34,7,12 s0.07,1.3,0.22,1.89l-2.25,2.25C4.35,14.9,4,13.5,4,12C4,10.5,4.35,9.1,4.97,7.86z M12,20c-1.5,0-2.9-0.35-4.14-0.97l2.25-2.25 C10.7,16.93,11.34,17,12,17s1.3-0.07,1.89-0.22l2.25,2.25C14.9,19.65,13.5,20,12,20z M12,15c-1.66,0-3-1.34-3-3s1.34-3,3-3 s3,1.34,3,3S13.66,15,12,15z M19.03,16.14l-2.25-2.25C16.93,13.3,17,12.66,17,12s-0.07-1.3-0.22-1.89l2.25-2.25 C19.65,9.1,20,10.5,20,12C20,13.5,19.65,14.9,19.03,16.14z"/>
          </svg>
        </div>
      </motion.div>
    </div>
    </GoogleOAuthProvider>

  );
}

export default Login;
