"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Ingresa un correo electrónico válido"),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[+]?[\d\s-]{7,15}$/.test(val),
      "Ingresa un número de teléfono válido"
    ),
  consultType: z.string().optional(),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    // Simulate API call - ready to connect to Resend, SendGrid, etc.
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form data:", data);
    setSubmitted(true);
    reset();
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <MaterialIcon name="check_circle" className="text-green-600 text-3xl" />
        </div>
        <h3 className="font-display font-bold text-lg text-text-main mb-2">
          ¡Mensaje enviado!
        </h3>
        <p className="text-text-muted text-sm mb-4">
          Nos pondremos en contacto contigo pronto.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-primary font-bold text-sm hover:underline"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-text-muted mb-1 ml-1"
        >
          Nombre Completo
        </label>
        <div className="relative">
          <input
            {...register("name")}
            id="name"
            type="text"
            placeholder="Ej. María Pérez"
            className="w-full bg-background-light border border-transparent focus:border-primary focus:ring-1 focus:ring-primary rounded-xl py-3 px-4 text-text-main placeholder-gray-400 transition-shadow"
          />
          <MaterialIcon
            name="person"
            className="absolute right-3 top-3 text-gray-400"
          />
        </div>
        {errors.name && (
          <p className="text-red-500 text-xs mt-1 ml-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-text-muted mb-1 ml-1"
        >
          Correo Electrónico
        </label>
        <div className="relative">
          <input
            {...register("email")}
            id="email"
            type="email"
            placeholder="hola@ejemplo.com"
            className="w-full bg-background-light border border-transparent focus:border-primary focus:ring-1 focus:ring-primary rounded-xl py-3 px-4 text-text-main placeholder-gray-400 transition-shadow"
          />
          <MaterialIcon
            name="alternate_email"
            className="absolute right-3 top-3 text-gray-400"
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-xs mt-1 ml-1">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-semibold text-text-muted mb-1 ml-1"
        >
          Teléfono (opcional)
        </label>
        <div className="relative">
          <input
            {...register("phone")}
            id="phone"
            type="tel"
            placeholder="+506 8888-8888"
            className="w-full bg-background-light border border-transparent focus:border-primary focus:ring-1 focus:ring-primary rounded-xl py-3 px-4 text-text-main placeholder-gray-400 transition-shadow"
          />
          <MaterialIcon
            name="phone"
            className="absolute right-3 top-3 text-gray-400"
          />
        </div>
        {errors.phone && (
          <p className="text-red-500 text-xs mt-1 ml-1">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="consultType"
          className="block text-sm font-semibold text-text-muted mb-1 ml-1"
        >
          Tipo de Consulta (opcional)
        </label>
        <select
          {...register("consultType")}
          id="consultType"
          className="w-full bg-background-light border border-transparent focus:border-primary focus:ring-1 focus:ring-primary rounded-xl py-3 px-4 text-text-main transition-shadow"
        >
          <option value="">Seleccionar...</option>
          <option value="terapia-lenguaje">Terapia de Lenguaje</option>
          <option value="terapia-ocupacional">Terapia Ocupacional</option>
          <option value="psicologia">Psicología Infantil</option>
          <option value="lactancia">Asesoría de Lactancia</option>
          <option value="evaluacion">Evaluación del Desarrollo</option>
          <option value="talleres">Talleres para Padres</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-text-muted mb-1 ml-1"
        >
          Mensaje
        </label>
        <textarea
          {...register("message")}
          id="message"
          placeholder="¿En qué podemos ayudarte?"
          rows={4}
          className="w-full bg-background-light border border-transparent focus:border-primary focus:ring-1 focus:ring-primary rounded-xl py-3 px-4 text-text-main placeholder-gray-400 transition-shadow resize-none"
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1 ml-1">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-200 transform transition hover:-translate-y-1 active:scale-95 flex justify-center items-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          "Enviando..."
        ) : (
          <>
            Enviar Mensaje
            <MaterialIcon
              name="send"
              className="group-hover:translate-x-1 transition-transform"
            />
          </>
        )}
      </button>
    </form>
  );
}
