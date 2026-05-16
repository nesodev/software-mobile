<style>
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: auto; padding: 20px; }
  h1 { text-align: center; color: #007AFF; border-bottom: 2px solid #007AFF; padding-bottom: 10px; }
  h2 { color: #007AFF; margin-top: 30px; page-break-before: always; }
  h2:first-of-type { page-break-before: auto; }
  .section { page-break-inside: avoid; break-inside: avoid; margin-bottom: 30px; }
  .image-container { text-align: center; margin: 20px 0; }
  img { max-height: 480px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); border: 1px solid #ddd; }
  .caption { font-style: italic; color: #666; margin-top: 8px; font-size: 0.9em; }
  hr { border: 0; border-top: 1px solid #eee; margin: 40px 0; }
</style>

# Evidencia de Implementación
## Taller de Software Móvil (S6-S7)

**Estudiante:** Ever  
**Proyecto:** Ejercicios Integradores S6-S7  

---

<div class="section">
  <h2>1. Ejercicio Integrador: Hooks y Ciclo de Vida</h2>
  <p>Se implementó un contador y un temporizador utilizando <code>useState</code> y <code>useEffect</code>. El sistema gestiona el ciclo de vida del componente, limpiando procesos al desmontar para optimizar el rendimiento.</p>
  
  <div class="image-container">
    <img src="./evidencia_images/hooks_1.png" />
    <div class="caption">Captura 1.1: Estado inicial y montaje del componente.</div>
  </div>

  <div class="image-container">
    <img src="./evidencia_images/hooks_2.png" />
    <div class="caption">Captura 1.2: Actualización de estado tras interacción.</div>
  </div>
</div>

<div class="section">
  <h2>2. Ejercicio Integrador: Navegación Combinada</h2>
  <p>Se integraron tres patrones de navegación: <b>Drawer</b> (menú lateral), <b>Stack</b> (flujo de pantallas) y <b>Tab</b> (pestañas internas), utilizando un árbol de navegación independiente.</p>

  <div class="image-container">
    <img src="./evidencia_images/navigation_1.png" />
    <div class="caption">Captura 2.1: Navegación tipo Stack (Home & Details).</div>
  </div>

  <div class="image-container">
    <img src="./evidencia_images/navigation_2.png" />
    <div class="caption">Captura 2.2: Menú lateral Drawer desplegado.</div>
  </div>

  <div class="image-container">
    <img src="./evidencia_images/navigation_3.png" />
    <div class="caption">Captura 2.3: Navegación interna por pestañas.</div>
  </div>
</div>

<div class="section">
  <h2>3. Ejercicio Integrador: API REST y Paginación</h2>
  <p>Consumo de datos asíncronos con <b>Axios</b>. La interfaz utiliza un <code>FlatList</code> optimizado con scroll infinito y pull-to-refresh.</p>

  <div class="image-container">
    <img src="./evidencia_images/api.png" />
    <div class="caption">Captura 3.1: Renderizado de datos desde la API pública.</div>
  </div>
</div>

---
<p style="text-align: center; color: #999;">Fin del documento de evidencia</p>
