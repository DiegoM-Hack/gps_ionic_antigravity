# Comparación de la Implementación de GPS en Ionic y Flutter utilizando Codex y Antigravity

## Descripción

Este proyecto tiene como objetivo comparar la implementación de la funcionalidad de geolocalización (GPS) en aplicaciones móviles desarrolladas con **Ionic** y **Flutter**, utilizando herramientas de Inteligencia Artificial (**Codex** y **Antigravity**) para la generación del código.

Se desarrollaron cuatro aplicaciones:

- Ionic + Codex
- Ionic + Antigravity
- Flutter + Codex
- Flutter + Antigravity

Todas las aplicaciones permiten obtener la ubicación actual del dispositivo y mostrar las coordenadas geográficas (latitud y longitud).

---

## Objetivos

- Implementar el acceso al GPS en Ionic.
- Implementar el acceso al GPS en Flutter.
- Comparar la facilidad de desarrollo entre ambas tecnologías.
- Comparar el código generado por Codex y Antigravity.
- Analizar el comportamiento de las aplicaciones y la calidad del código generado.

---

## Funcionalidades

- Solicitud de permisos de ubicación.
- Obtención de la ubicación actual mediante GPS.
- Visualización de:
  - Latitud
  - Longitud
- Manejo de errores:
  - Permisos denegados.
  - GPS desactivado.
  - Errores durante la obtención de la ubicación.

---

## Tecnologías utilizadas

### Ionic

- Ionic Framework
- Angular
- TypeScript
- Capacitor Geolocation

### Flutter

- Flutter
- Dart
- Geolocator

---

## Herramientas de Inteligencia Artificial

### Codex (OpenAI)

Se utilizó para generar código, resolver errores y asistir en la implementación de las aplicaciones.

**Características observadas:**

- Código claro y organizado.
- Generación enfocada en los requisitos solicitados.
- Menor cantidad de errores.
- Fácil comprensión y mantenimiento.

### Antigravity (Google)

Se utilizó para generar versiones alternativas de las aplicaciones.

**Características observadas:**

- Generó aplicaciones más completas.
- Incluyó interfaces más atractivas.
- Agregó funcionalidades adicionales no solicitadas.
- Produjo una mayor cantidad de código.
- Requirió más correcciones debido a errores derivados de la complejidad adicional.

---

## Comparación entre Ionic y Flutter

| Característica | Ionic | Flutter |
|----------------|--------|---------|
| Lenguaje | TypeScript | Dart |
| Acceso al GPS | Capacitor Geolocation | Geolocator |
| Facilidad de implementación | Alta | Media |
| Rendimiento | Bueno | Muy bueno |
| Integración con Android | Mediante plugins | Nativa |
| Experiencia de usuario | Buena | Muy fluida |

---

## Comparación entre Codex y Antigravity

| Aspecto | Codex | Antigravity |
|---------|--------|-------------|
| Precisión del código | Alta | Media-Alta |
| Cantidad de código | Moderada | Alta |
| Funcionalidades adicionales | Pocas | Varias |
| Diseño de la interfaz | Básico | Más interactivo |
| Errores encontrados | Pocos | Mayor cantidad |
| Facilidad de mantenimiento | Alta | Media |

---

## Funcionamiento del GPS

Las aplicaciones obtienen la ubicación únicamente cuando el usuario presiona el botón **"Obtener GPS"**.

No se implementó seguimiento de ubicación en segundo plano, ya que el objetivo del proyecto fue demostrar el acceso al GPS y comparar las tecnologías utilizadas.

---

## Ejecución del proyecto

### Ionic

Instalar dependencias:

```bash
npm install
```

Ejecutar:

```bash
ionic serve
```

Compilar para Android:

```bash
ionic build
npx cap sync
npx cap open android
```

### Flutter

Instalar dependencias:

```bash
flutter pub get
```

Ejecutar:

```bash
flutter run
```

Generar APK:

```bash
flutter build apk
```

---

## Resultados

Las cuatro aplicaciones obtuvieron correctamente las coordenadas geográficas del dispositivo y gestionaron adecuadamente los permisos y errores relacionados con el GPS.

Durante las pruebas se observó que Flutter ofrece un mejor rendimiento y una integración más cercana al sistema operativo, mientras que Ionic facilita el desarrollo gracias al uso de tecnologías web.

En cuanto a las herramientas de IA, Codex produjo código más preciso y alineado con los requisitos solicitados, mientras que Antigravity generó proyectos más completos e interactivos, aunque con una mayor cantidad de código y algunos errores que requirieron ajustes manuales.

---

## Conclusiones

- Ionic y Flutter permiten implementar funcionalidades de geolocalización de manera eficiente.
- Flutter ofrece una mejor integración con las capacidades nativas del dispositivo y un mayor rendimiento.
- Ionic resulta una excelente opción para desarrolladores con experiencia en tecnologías web.
- Codex destacó por generar soluciones más precisas y fáciles de mantener.
- Antigravity aportó interfaces más elaboradas y funcionalidades adicionales, aunque esto incrementó la complejidad del proyecto.

---

## Autor

**Diego Montaluisa**

Universidad: ______________________

Materia: Desarrollo de Aplicaciones Móviles

Docente: ______________________

Período académico: 2026
