import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Country, State, City } from "country-state-city";
import logo from "/images/LogoIQ.png";

const Registro: React.FC = () => {
  const [step, setStep] = useState(1);
  const [form1, setForm1] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "" 
  });
  const [form2, setForm2] = useState({
    age: "",
    country: "",
    state: "",
    city: "",
    birthDate: "",
    cedula: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange1 = e =>
    setForm1(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleChange2 = e =>
    setForm2(f => ({ ...f, [e.target.name]: e.target.value }));

  const nextStep = () => {
    if (step === 1) {
      if (form1.password.length < 6) {
        setErrors({ password: "La contraseña debe tener al menos 6 caracteres." });
        return;
      }
      if (form1.password !== form1.confirmPassword) {
        setErrors({ confirmPassword: "Las contraseñas no coinciden." });
        return;
      }
      setErrors({});
    }
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setErrors({});
    setStep(prev => prev - 1);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (form2.age < 18) {
      setErrors({ age: "Debes ser mayor de 18 años." });
      return;
    }
    setErrors({});
    console.log("Enviando datos:", { ...form1, ...form2 });
  };

  const renderStep = () =>
    step === 1 ? (
      <StepOne form={form1} onChange={handleChange1} errors={errors} />
    ) : (
      <StepTwo form={form2} onChange={handleChange2} error={errors.age} />
    );

  const ballVariants = {
    animate: {
      y: [-100, -90, -20, -50, -20],
      opacity: [1, 1, 1, 1, 0],
      transition: { duration: 3, times: [0, 0.2, 0.5, 0.8, 1], ease: "easeInOut" }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-screen flex bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-500"
    >
      <div className="w-1/2 relative flex flex-col justify-center items-center p-12 text-white overflow-hidden">
        <motion.div
          className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-black text-xl absolute top-1/3 filter drop-shadow-lg"
          variants={ballVariants}
          animate="animate"
        >
          ⚽
        </motion.div>
        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">IQScore</h1>
        <p className="text-center max-w-xs text-lg leading-relaxed opacity-90">
          Plataforma de análisis predictivo de fútbol. Regístrate para ganar con Big Data.
        </p>
      </div>
      <div className="w-1/2 flex flex-col justify-between p-10">
        <div className="w-full max-w-md mx-auto bg-white/40 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/30">
          <img
            src={logo}
            alt="IQSports Logo"
            className="w-32 h-auto mx-auto mb-6"
          />
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Registro
          </h2>
          <div className="flex justify-center space-x-4 mb-6">
            {["Cuenta", "Datos personales"].map((label, i) => (
              <div
                key={i}
                className={`px-4 py-1 rounded-full border ${
                  step === i + 1 ? "bg-indigo-500 text-white" : "border-white text-white/80"
                }`}
              >
                {label}
              </div>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-between mt-8 max-w-md mx-auto space-x-4">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="flex-1 px-4 py-3 bg-indigo-700 text-white rounded-xl hover:bg-indigo-800 transition border-2 border-white"
            >
              Regresar
            </button>
          )}
          {step < 2 ? (
            <button
              type="button"
              onClick={nextStep}
              disabled={form1.password.length < 6}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl hover:from-indigo-600 hover:to-purple-600 transition disabled:opacity-50"
            >
              Siguiente
            </button>
          ) : (
            <button
              type="submit"
              className="flex-1 px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl hover:from-indigo-600 hover:to-purple-600 transition"
            >
              Enviar
            </button>
          )}
        </div>
      </div>
    </form>
  );
}

function StepOne({ form, onChange, errors }) {
  return (
    <div className="space-y-4">
      {[
        { label: "Usuario", name: "username", type: "text", placeholder: "Nombre de usuario" },
        { label: "Nombre", name: "firstName", type: "text", placeholder: "Nombre" },
        { label: "Apellido", name: "lastName", type: "text", placeholder: "Apellido" },
        { label: "Correo Electrónico", name: "email", type: "email", placeholder: "correo@ejemplo.com" },
        { label: "Contraseña", name: "password", type: "password", placeholder: "********" },
        { label: "Repetir Contraseña", name: "confirmPassword", type: "password", placeholder: "********" }
      ].map(field => (
        <div key={field.name}>
          <label className="block text-white/90 mb-1">{field.label}</label>
          <input
            name={field.name}
            type={field.type}
            value={form[field.name]}
            onChange={onChange}
            required
            minLength={field.name.includes("password") ? 6 : undefined}
            className="w-full px-4 py-3 rounded-xl bg-white/50 placeholder-white/70 text-black font-medium focus:outline-none focus:ring-2 focus:ring-indigo-300 border border-white/50"
            placeholder={field.placeholder}
          />
        </div>
      ))}
      {errors.password && <p className="text-red-400 text-sm">{errors.password}</p>}
      {errors.confirmPassword && <p className="text-red-400 text-sm">{errors.confirmPassword}</p>}
    </div>
  );
}

function StepTwo({ form, onChange, error }) {
  const countries = Country.getAllCountries();
  const states = form.country ? State.getStatesOfCountry(form.country) : [];
  const cities = form.state ? City.getCitiesOfState(form.country, form.state) : [];

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-white/90 mb-1">Edad</label>
        <input
          name="age"
          type="number"
          value={form.age}
          onChange={onChange}
          required
          min={18}
          className="w-full px-4 py-3 rounded-xl bg-white/30 placeholder-white/70 text-black font-medium focus:outline-none focus:ring-2 focus:ring-indigo-300"
        />
        {error && <p className="text-red-400 text-sm">{error}</p>}
      </div>
      {[
        { label: "País", name: "country", options: countries.map(c => ({ value: c.isoCode, label: c.name })) },
        { label: "Estado/Provincia", name: "state", options: states.map(s => ({ value: s.isoCode, label: s.name })), disabled: !form.country },
        { label: "Ciudad", name: "city", options: cities.map(c => ({ value: c.name, label: c.name })), disabled: !form.state }
      ].map(field => (
        <div key={field.name}>
          <label className="block text-white/90 mb-1">{field.label}</label>
          <select
            name={field.name}
            value={form[field.name]}
            onChange={onChange}
            disabled={field.disabled}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/30 text-black font-medium focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            <option value="">
              {field.disabled
                ? `Elige primero ${field.name === "state" ? "un país" : "un estado"}`
                : `Selecciona ${field.label.toLowerCase()}`}
            </option>
            {field.options.map(opt => (
              <option key={opt.value} value={opt.value} className="text-black">
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      ))}
      {[
        { label: "Fecha de nacimiento", name: "birthDate", type: "date" },
        { label: "Cédula de ciudadanía", name: "cedula", type: "text", placeholder: "Número de cédula" }
      ].map(field => (
        <div key={field.name}>
          <label className="block text-white/90 mb-1">{field.label}</label>
          <input
            name={field.name}
            type={field.type}
            value={form[field.name]}
            onChange={onChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/30 placeholder-white/70 text-black font-medium focus:outline-none focus:ring-2 focus:ring-indigo-300"
            placeholder={field.placeholder}
          />
        </div>
      ))}
    </div>
  );
}

export default Registro;