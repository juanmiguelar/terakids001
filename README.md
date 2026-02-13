# TheraKids - Centro Terapéutico Infantil

Sitio web para TheraKids, centro terapéutico infantil especializado en terapia de lenguaje en Costa Rica.

## Stack Técnico

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4
- **Formularios**: React Hook Form + Zod
- **Deploy**: Vercel

## Inicio Rápido

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Estructura del Proyecto

```
src/
├── app/                    # Rutas (App Router)
│   ├── page.tsx           # Home (/)
│   ├── servicios/         # /servicios
│   ├── nosotros/          # /nosotros
│   ├── blog/              # /blog y /blog/[slug]
│   ├── contacto/          # /contacto (formulario con validación)
│   ├── feed.xml/          # RSS feed
│   ├── sitemap.ts         # Sitemap XML dinámico
│   ├── robots.ts          # robots.txt
│   ├── layout.tsx         # Layout raíz con SEO global
│   ├── not-found.tsx      # Página 404
│   ├── loading.tsx        # Estado de carga
│   └── error.tsx          # Manejo de errores
├── components/
│   ├── ui/                # MaterialIcon
│   ├── sections/          # HeroSection, ServicesPreview, TeamPreview, etc.
│   └── layout/            # Header, Footer, WhatsAppButton
├── lib/
│   ├── data/              # Datos mock tipados (services, team, blog, sedes)
│   └── jsonLd.ts          # JSON-LD structured data
└── public/
    └── images/            # Assets estáticos
stitch_assets/             # Mockups HTML de referencia (NO modificar)
```

## Páginas

| Ruta | Descripción |
|------|------------|
| `/` | Home con hero, historia, servicios, equipo y blog |
| `/servicios` | Listado de 6 servicios terapéuticos |
| `/nosotros` | Historia, misión y equipo completo |
| `/blog` | Blog con filtrado por categorías |
| `/blog/[slug]` | Detalle de artículo con compartir y relacionados |
| `/contacto` | Formulario validado e info de sedes |

## SEO Implementado

- Metadata por página (title, description, OpenGraph, Twitter Cards)
- JSON-LD: Organization, MedicalClinic, BlogPosting, BreadcrumbList, Person
- `sitemap.xml` dinámico
- `robots.txt`
- RSS feed en `/feed.xml`
- HTML semántico (article, section, nav, header, footer)
- Canonical URLs

## Mockups de Referencia

Los diseños de Stitch están en `/stitch_assets/`:
- `home_mobile.html` / `.png`
- `about_us_mobile.html` / `.png`
- `services_list_mobile.html` / `.png`
- `blog_list_mobile.html` / `.png`
- `contact_mobile.html` / `.png`

## Conectar Formulario a Servicio de Email

El formulario de contacto está preparado para conectarse a un servicio de email. En `src/app/contacto/ContactForm.tsx`, reemplazar el `onSubmit` simulado:

```typescript
// Ejemplo con Resend
import { Resend } from 'resend';

// Crear API route en src/app/api/contact/route.ts
export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const data = await request.json();
  await resend.emails.send({
    from: 'TheraKids <noreply@therakids.com>',
    to: ['info@therakids.com'],
    subject: `Nuevo contacto: ${data.name}`,
    text: data.message,
  });
  return Response.json({ success: true });
}
```

## Integrar CMS (Próximos Pasos)

Los datos están en `src/lib/data/` con interfaces TypeScript. Para migrar a un CMS headless:

1. Reemplazar las importaciones de datos mock por llamadas al CMS
2. Las interfaces en `src/lib/data/types.ts` sirven como contrato
3. Compatible con Sanity, Strapi o Contentful

## Variables de Entorno

```env
NEXT_PUBLIC_SITE_URL=https://therakids.com
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=
RESEND_API_KEY=
```

## Scripts

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run start    # Servir build de producción
npm run lint     # Verificar código
```

## Deploy en Vercel

1. Conectar repositorio en [vercel.com](https://vercel.com)
2. Configurar variables de entorno
3. Deploy automático en cada push
