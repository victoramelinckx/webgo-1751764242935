
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas" subheadline="Transformamos tu negocio con una web rápida y soporte constante, para que vendas sin complicaciones." cta1="Digitaliza Ya" />
<How step1Title="Rellena el formulario" step1Desc="Cuéntanos sobre tu negocio digital." step2Title="Construimos tu web" step2Desc="Creamos tu sitio para ventas online." step3Title="Lanzamiento exprés" step3Desc="Tu web lista en 24 horas." />
<Aboutus headline="WebGo: Digitaliza tus ventas ahora" subheadline="Transformamos tus recomendaciones en ventas online sin complicaciones ni tiempo extra." beneficiotitulo1="Rápida Implementación" beneficio1="Lanzamos tu sitio en días." beneficiotitulo2="Soporte Constante" beneficio2="Nos ocupamos de todo, siempre." />
<Services heading="Impulsa Tu Negocio al Mundo Digital" description="Rapidez, compromiso, innovación. WebGo digitaliza tus ventas eficientemente." services={[{"name":"Diseño Web Express","icon":"rocket","description":"Lanzamos tu web en 24 horas."},{"name":"Soporte 24/7","icon":"headset","description":"Siempre disponibles para ti."},{"name":"Optimización SEO","icon":"search","description":"Haz que te encuentren fácil online."},{"name":"Gestión de Contenido","icon":"pencil","description":"Actualizaciones rápidas y eficaces."},{"name":"Estrategia de Marketing Digital","icon":"chart-line","description":"Atrae y retén clientes potenciales."},{"name":"Análisis de Tráfico Web","icon":"analytics","description":"Conocerás mejor a tus visitantes."}]} />
<BeforeAndAfter subheadline="Transformamos tu visión en impactantes realidades digitales." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudar a digitalizar mi negocio rápidamente?","respuesta":"WebGo se especializa en crear soluciones rápidas y efectivas para llevar tu negocio al mundo digital. Te ayudamos a establecer una presencia en línea que atrae clientes nuevos, permitiéndote concentrarte en lo que haces mejor mientras nosotros cuidamos de tu sitio web."},{"pregunta":"¿Qué beneficios ofrece WebGo para emprendedores que solo venden por recomendación?","respuesta":"WebGo transforma tus ventas recomendadas en una plataforma digital, ampliando tu alcance más allá de tu círculo actual. Aprovecha nuestra experiencia en innovación para generar más ventas incluso cuando tú no estés disponible para gestionar el sitio."},{"pregunta":"¿Por qué debería elegir WebGo si no tengo tiempo para gestionar un sitio web?","respuesta":"En WebGo entendemos que tu tiempo es valioso. Nos encargamos completamente de la gestión de tu sitio web, desde su creación hasta su mantenimiento, para que puedas concentrarte en crecer tu negocio sin preocupaciones."},{"pregunta":"¿Cuáles son los desafíos comunes al vender en línea y cómo los resuelve WebGo?","respuesta":"Muchos negocios enfrentan el desafío de no saber cómo generar ventas en línea. WebGo te guía en cada paso, implementando estrategias probadas para atraer y convertir clientes en el entorno digital, asegurando que tu negocio prospere."},{"pregunta":"¿Qué diferencia a WebGo de otras empresas de digitalización?","respuesta":"WebGo destaca por su compromiso y enfoque en la innovación. No solo digitalizamos tu negocio, sino que también ofrecemos soluciones personalizadas que se adaptan a tus necesidades específicas, asegurando resultados rápidos y efectivos."}]} />
<BookAppointment 
                      heading="Transforma tus Recomendaciones en Ventas Online" 
                      description="Descubre cómo WebGo puede digitalizar tu negocio con rapidez, compromiso e innovación. ¡Actúa ahora y transforma tu presencia online!"
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
