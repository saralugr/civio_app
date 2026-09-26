# Cívico · Observatorio Legislativo

Aplicación Angular para consultar iniciativas legislativas y marcos normativos por tema, radicar iniciativas ciudadanas y explorar el directorio de congresistas.

## Desarrollo

Desde esta carpeta:

```bash
npm install
npm start
```

Abre `http://localhost:4200/`. El servidor de desarrollo recarga la aplicación al guardar cambios.

## Rutas

- `/inicio`: módulos e iniciativas destacadas.
- `/salud`, `/economia`, `/ambiente`, `/elecciones`: registros legales del tema y fuentes oficiales.
- `/congreso`: perfiles, búsqueda, filtros por corporación, partido y comisión, y ficha de perfil.
- `/nueva-iniciativa`: formulario de registro para Salud, Economía y Ambiente.

## Datos

- `public/data/leyes.json` contiene 14 normas e iniciativas con los campos del formulario: módulo, tipo, expediente, fecha, título, autoría, detalles, estado, fuente y cita.
- `public/data/congresistas.json` alimenta el directorio y el panel de perfiles del Congreso, incluyendo trayectoria pública, estudios, métricas y proyectos destacados cuando esos datos están disponibles.
- Las iniciativas nuevas se guardan en `localStorage` bajo `civico.iniciativas.v1`; el catálogo JSON permanece como conjunto inicial de datos.

## Verificación

```bash
npm run build
npm test -- --watch=false
```
