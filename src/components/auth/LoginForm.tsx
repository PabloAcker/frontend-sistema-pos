"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#FEECEC]">
      <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-lg">
        {/* Encabezado */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Bienvenido de nuevo!</h1>
          <div className="flex items-center justify-center mt-3 gap-4">
            <div className="h-px flex-1 bg-gray-300" />
            <span className="text-sm text-gray-500 whitespace-nowrap">Inicia sesión</span>
            <div className="h-px flex-1 bg-gray-300" />
          </div>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700">Correo electrónico</Label>
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden h-12">
              <div className="px-3 text-gray-500 h-full flex items-center justify-center">
                <Mail size={22} />
              </div>
              <input
                id="email"
                type="email"
                placeholder="ejemplo@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-full px-3 text-sm outline-none"
              />
            </div>
          </div>

          {/* Contraseña con ícono a la izquierda */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-700">Contraseña</Label>
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden h-12">
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="px-3 text-gray-500 hover:bg-gray-100 h-full flex items-center justify-center"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full h-full px-3 text-sm outline-none"
              />
            </div>
          </div>

          {/* Recuperación */}
          <div className="text-right text-sm">
            <a href="#" className="text-blue-600 hover:underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          {/* Botón */}
          <Button
            type="submit"
            className="w-full h-12 text-base bg-[#DC2626] hover:bg-[#b91c1c] text-white font-semibold rounded-lg"
          >
            Ingresar
          </Button>
        </form>
      </div>
    </div>
  );
}
