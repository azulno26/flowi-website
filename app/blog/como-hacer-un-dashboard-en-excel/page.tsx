import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, CheckCircle } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import type { ReactNode } from "react"

const URL = "https://www.flowisolutions.com/blog/como-hacer-un-dashboard-en-excel"
const TITULO = "Cómo hacer un dashboard en Excel paso a paso (y cuándo conviene uno con IA)"
const DESCRIPCION =
  "Guía práctica para crear un dashboard en Excel con tablas dinámicas, gráficos y segmentaciones, sin fórmulas complicadas. Y cuándo vale la pena pasar a un tablero de control con IA."
const FECHA = "2026-11-11"
const whatsappDashboard =
  "https://api.whatsapp.com/send/?phone=525623194635&text=Hola%2C%20le%C3%AD%20la%20gu%C3%ADa%20del%20dashboard%20en%20Excel%20y%20quiero%20el%20m%C3%ADo"

export const metadata: Metadata = {
  title: "Cómo hacer un dashboard en Excel paso a paso | Flowi Solutions",
  description: DESCRIPCION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITULO,
    description: DESCRIPCION,
    url: URL,
    siteName: "Flowi Solutions",
    locale: "es_MX",
    type: "article",
    publishedTime: FECHA,
  },
}

const pasos = [
  "Ordena tus datos en una sola tabla",
  "Convierte el rango en tabla de Excel",
  "Crea una tabla dinámica por cada indicador",
  "Agrega gráficos dinámicos",
  "Conecta segmentaciones y escala de tiempo",
  "Arma la hoja del tablero",
  "Actualiza con un clic",
]

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: TITULO,
      description: DESCRIPCION,
      datePublished: FECHA,
      dateModified: FECHA,
      inLanguage: "es-MX",
      mainEntityOfPage: URL,
      author: { "@type": "Organization", name: "Flowi Solutions", url: "https://www.flowisolutions.com" },
      publisher: { "@type": "Organization", name: "Flowi Solutions", url: "https://www.flowisolutions.com" },
    },
    {
      "@type": "HowTo",
      name: "Cómo hacer un dashboard en Excel",
      step: pasos.map((p, i) => ({ "@type": "HowToStep", position: i + 1, name: p })),
    },
  ],
}

function H2({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h2 id={id} className="font-heading text-2xl sm:text-3xl font-extrabold mt-14 mb-5 scroll-mt-28">
      {children}
    </h2>
  )
}

function P({ children }: { children: ReactNode }) {
  return <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-5">{children}</p>
}

function Ruta({ children }: { children: ReactNode }) {
  return <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-100 text-[0.95em] whitespace-nowrap">{children}</span>
}

function Lista({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-3 mb-6">
      {items.map((it, i) => (
        <li key={i} className="flex items-start gap-3 text-zinc-300 text-base sm:text-lg leading-relaxed">
          <CheckCircle className="w-5 h-5 text-[#4f8ef7] shrink-0 mt-1" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  )
}

function Paso({ n, titulo, children }: { n: number; titulo: string; children: ReactNode }) {
  return (
    <section className="mt-10">
      <h3 className="font-heading text-xl sm:text-2xl font-extrabold mb-4">
        <span className="text-[#4f8ef7] mr-2">{n}.</span>
        {titulo}
      </h3>
      {children}
    </section>
  )
}

export default function ArticuloDashboardExcel() {
  return (
    <article className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-12 pt-32 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-3xl mx-auto">
        <nav className="text-sm text-zinc-500 mb-6" aria-label="Ruta">
          <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
        </nav>

        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.05] mb-6 text-balance">
          Cómo hacer un dashboard en Excel paso a paso{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f8ef7] to-[#7c6ff7]">(y cuándo conviene uno con IA)</span>
        </h1>
        <p className="text-zinc-500 text-sm mb-10">
          Flowi Solutions · <time dateTime={FECHA}>11 de noviembre de 2026</time> · 8 min de lectura
        </p>

        <P>
          Un dashboard en Excel es una hoja que reúne en un solo vistazo los indicadores clave de tu negocio: ventas,
          productos más vendidos, inventario o clientes. En lugar de revisar varias tablas, ves todo en gráficas que se
          filtran con un clic. Puedes armarlo con tablas dinámicas y sin fórmulas complicadas, en menos de una hora.
        </P>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 mb-6">
          <p className="font-heading font-extrabold mb-3">En esta guía</p>
          <ol className="list-decimal list-inside space-y-1 text-zinc-300">
            {pasos.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ol>
        </div>

        <H2 id="antes">Antes de empezar: qué necesitas</H2>
        <Lista
          items={[
            "Excel para Microsoft 365 o Excel 2016 o más reciente (las segmentaciones y la escala de tiempo existen desde esas versiones).",
            "Tus datos en un solo archivo: por ejemplo, un registro de ventas con fecha, producto, cantidad, precio, sucursal y cliente.",
            "Tener claro qué preguntas quieres responder: ¿cuánto vendí este mes?, ¿qué producto vende más?, ¿qué sucursal va mejor?",
          ]}
        />

        <H2 id="pasos">Los 7 pasos</H2>

        <Paso n={1} titulo="Ordena tus datos en una sola tabla">
          <P>
            Este es el paso que más errores evita. Tus datos deben tener una sola fila de encabezados, un registro por fila
            (una venta, un movimiento) y una columna por dato. Sin celdas combinadas, sin filas de subtotales en medio y sin
            renglones vacíos.
          </P>
          <P>
            Si tus ventas están repartidas en una hoja por mes, júntalas en una sola y agrega una columna de fecha. Una
            tabla larga es mucho más fácil de analizar que muchas tablas cortas.
          </P>
        </Paso>

        <Paso n={2} titulo="Convierte el rango en tabla de Excel">
          <P>
            Selecciona cualquier celda de tus datos y presiona <Ruta>Ctrl + T</Ruta> (o <Ruta>Insertar → Tabla</Ruta>).
            Marca la casilla "La tabla tiene encabezados". Después, en la pestaña <Ruta>Diseño de tabla</Ruta>, ponle un
            nombre claro, por ejemplo <Ruta>Ventas</Ruta>.
          </P>
          <P>
            La ventaja: cuando agregues filas nuevas, la tabla crece sola y tu dashboard las tomará al actualizar.
          </P>
        </Paso>

        <Paso n={3} titulo="Crea una tabla dinámica por cada indicador">
          <P>
            Con una celda de la tabla seleccionada, ve a <Ruta>Insertar → Tabla dinámica</Ruta> y elige "Nueva hoja de
            cálculo". Crea una tabla dinámica por cada pregunta que quieras responder. Por ejemplo:
          </P>
          <Lista
            items={[
              "Ventas por mes: fecha en Filas (agrupada por meses) e importe en Valores.",
              "Top de productos: producto en Filas e importe en Valores, ordenado de mayor a menor.",
              "Ventas por sucursal: sucursal en Filas e importe en Valores.",
              "Total del periodo: solo el importe en Valores, para tu indicador principal.",
            ]}
          />
          <P>Pon todas estas tablas dinámicas en una hoja auxiliar llamada, por ejemplo, "Cálculos".</P>
        </Paso>

        <Paso n={4} titulo="Agrega gráficos dinámicos">
          <P>
            Selecciona cada tabla dinámica y ve a <Ruta>Analizar tabla dinámica → Gráfico dinámico</Ruta>. Usa líneas
            para lo que cambia en el tiempo (ventas por mes), barras para comparar categorías (productos, sucursales) y
            evita los pasteles con más de cinco partes.
          </P>
          <P>
            Quita lo que no aporta: botones de campo, leyendas innecesarias y líneas de cuadrícula. Un buen dashboard se
            entiende en cinco segundos.
          </P>
        </Paso>

        <Paso n={5} titulo="Conecta segmentaciones y escala de tiempo">
          <P>
            Las segmentaciones son botones para filtrar. Con una tabla dinámica seleccionada, ve a{" "}
            <Ruta>Analizar tabla dinámica → Insertar segmentación de datos</Ruta> y elige, por ejemplo, sucursal o
            categoría. Para filtrar por fechas, usa <Ruta>Insertar escala de tiempo</Ruta>.
          </P>
          <P>
            Para que un mismo botón filtre todas tus gráficas a la vez, haz clic derecho sobre la segmentación, elige{" "}
            <Ruta>Conexiones de informe</Ruta> y marca todas las tablas dinámicas. Esto funciona porque todas salen de la
            misma tabla.
          </P>
        </Paso>

        <Paso n={6} titulo="Arma la hoja del tablero">
          <P>
            Crea una hoja nueva llamada "Dashboard" y mueve ahí los gráficos y las segmentaciones. Arriba, coloca tus
            indicadores principales en celdas grandes. Puedes traerlos de las tablas dinámicas con la función{" "}
            <Ruta>IMPORTARDATOSDINAMICOS</Ruta>, que se genera sola si escribes <Ruta>=</Ruta> y haces clic en el total de
            una tabla dinámica.
          </P>
          <P>
            Para que se vea limpio, quita las líneas de cuadrícula en <Ruta>Vista → Líneas de cuadrícula</Ruta>, usa pocos
            colores y alinea los elementos en una cuadrícula.
          </P>
        </Paso>

        <Paso n={7} titulo="Actualiza con un clic">
          <P>
            Cuando agregues datos nuevos a tu tabla, ve a <Ruta>Datos → Actualizar todo</Ruta> (o <Ruta>Ctrl + Alt + F5</Ruta>)
            y todas las tablas dinámicas y gráficas se recalculan.
          </P>
        </Paso>

        <H2 id="errores">Errores comunes al hacer un dashboard en Excel</H2>
        <Lista
          items={[
            "Fechas guardadas como texto: Excel no las puede agrupar por mes. Revisa que estén en formato de fecha.",
            "Celdas combinadas o subtotales dentro de los datos: rompen las tablas dinámicas.",
            "Demasiadas gráficas: si todo es importante, nada lo es. Empieza con cuatro o cinco.",
            "Olvidar actualizar: el dashboard no cambia solo si los datos vienen de otro archivo o se copian a mano.",
          ]}
        />

        <H2 id="limites">Cuándo un dashboard de Excel se queda corto</H2>
        <P>Excel es excelente para empezar, pero hay señales claras de que tu negocio ya necesita algo más:</P>
        <Lista
          items={[
            "Tus datos se acercan al límite de Excel (1,048,576 filas por hoja) o el archivo se vuelve lento.",
            "Cada pregunta nueva te obliga a armar otra tabla dinámica.",
            "Varias personas necesitan ver el tablero y circulan copias distintas del archivo.",
            "Los datos vienen de varios lados (punto de venta, hojas de cálculo, CRM) y los juntas copiando y pegando.",
            "Necesitas ver la información desde el celular.",
          ]}
        />

        <H2 id="comparativa">Excel, Power BI o un dashboard con IA</H2>
        <div className="overflow-x-auto mb-6 rounded-xl border border-zinc-800">
          <table className="w-full text-left text-sm sm:text-base">
            <thead className="bg-zinc-900 text-zinc-200">
              <tr>
                <th className="p-3 font-heading font-extrabold"> </th>
                <th className="p-3 font-heading font-extrabold">Excel</th>
                <th className="p-3 font-heading font-extrabold">Power BI</th>
                <th className="p-3 font-heading font-extrabold">Dashboard con IA</th>
              </tr>
            </thead>
            <tbody className="text-zinc-300 divide-y divide-zinc-800">
              <tr>
                <td className="p-3 text-zinc-400">Ideal para</td>
                <td className="p-3">Empezar, pocos datos, una persona</td>
                <td className="p-3">Equipos con alguien que lo sepa usar</td>
                <td className="p-3">Negocios que quieren respuestas sin aprender una herramienta</td>
              </tr>
              <tr>
                <td className="p-3 text-zinc-400">Preguntas nuevas</td>
                <td className="p-3">Otra tabla dinámica</td>
                <td className="p-3">Otro visual o medida</td>
                <td className="p-3">Se escriben en español</td>
              </tr>
              <tr>
                <td className="p-3 text-zinc-400">Compartir</td>
                <td className="p-3">Enviar el archivo</td>
                <td className="p-3">Licencias por usuario</td>
                <td className="p-3">Liga privada con usuario y contraseña</td>
              </tr>
              <tr>
                <td className="p-3 text-zinc-400">Desde el celular</td>
                <td className="p-3">Limitado</td>
                <td className="p-3">Con app</td>
                <td className="p-3">En el navegador</td>
              </tr>
            </tbody>
          </table>
        </div>
        <P>
          En un dashboard con IA escribes, por ejemplo, "¿qué clientes dejaron de comprar en los últimos 60 días?" y
          recibes la respuesta en una tabla o una gráfica, calculada con tus datos reales. Sigue existiendo la parte
          visual de siempre (gráficas, filtros, tablas dinámicas), pero ya no dependes de rehacer reportes para cada
          pregunta.
        </P>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8 mt-12">
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold mb-3">¿Prefieres que te lo armemos?</h2>
          <p className="text-zinc-400 text-base sm:text-lg mb-6">
            Mándanos tu Excel y te regresamos una muestra de tu dashboard con IA, sin costo y sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="rounded-full bg-[#25D366] hover:bg-[#25D366]/90 text-white font-medium px-8">
              <Link href={whatsappDashboard} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Quiero mi dashboard
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-[#4f8ef7] text-[#4f8ef7] hover:bg-[#4f8ef7] hover:text-white font-medium px-8 bg-transparent">
              <Link href="/servicios/dashboards">
                Ver dashboards con IA
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}
