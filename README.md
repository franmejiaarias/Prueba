# Mi Negocio — Página web

Página web estática (HTML, CSS y JavaScript) para un negocio o servicio.
Lista para publicar gratis con GitHub + Vercel.

## Archivos

- `index.html` — estructura y contenido de la página
- `styles.css` — estilos y diseño responsive
- `script.js` — menú móvil y validación del formulario

## Ver la página en tu ordenador

Abre `index.html` haciendo doble clic. No necesita instalación.

## Personalizar

Edita estos textos en `index.html`:
- El nombre `MiNegocio` (logo) y el `<title>`
- Los servicios, la sección "Sobre nosotros" y las estadísticas
- El email y las redes sociales del pie de página

Cambia los colores en `styles.css` (variable `--brand` arriba del todo).

## Publicar en GitHub + Vercel

### 1. Subir a GitHub
1. Crea un repositorio nuevo en https://github.com/new (por ejemplo `mi-negocio`).
2. En esta carpeta, ejecuta en la terminal:

   ```bash
   git init
   git add .
   git commit -m "Primera versión de la web"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/mi-negocio.git
   git push -u origin main
   ```

### 2. Conectar con Vercel
1. Entra en https://vercel.com e inicia sesión con tu cuenta de GitHub.
2. Pulsa **Add New → Project** e importa el repositorio `mi-negocio`.
3. Vercel detecta que es un sitio estático. Deja la configuración por defecto
   (sin framework, sin build command) y pulsa **Deploy**.
4. En unos segundos tendrás tu web online con una URL `https://mi-negocio.vercel.app`.

### Actualizaciones automáticas
Cada vez que hagas `git push`, Vercel publicará los cambios automáticamente.
