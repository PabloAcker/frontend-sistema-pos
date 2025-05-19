"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
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
            {/* Línea izquierda */}
            <div className="h-px w-24 text-blue-600" />
            <span className="text-sm text-gray-500">Inicia sesión</span>
            {/* Línea derecha */}
            <div className="h-px w-24 text-blue-600" />
          </div>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700">Correo electrónico</Label>
            <Input
              id="email"
              type="email"
              placeholder="ejemplo@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 text-sm w-full"
            />
          </div>

          {/* Contraseña */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-700">Contraseña</Label>
            <div className="relative w-full">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="pr-12 h-12 text-sm w-full"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
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
