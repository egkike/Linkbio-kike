## Proyecto LinkBio de Kike Garcia:
Este es un proyecto de una página LinkBio para Kike Garcia desarrollado en Vite-React-TypeScrip utilizando Tailwind CSS. La página tiene una foto de perfil, nombre con icono de verificación, una sección de Proyectos y Herramientas con dos botones (Github y Financial-Tools), una sección de Mis Redes Sociales con los botones a cada red social y un pié de página. 
Utiliza el archivo /public/assets/sprite.svg y la librería react-icons para mostrar los Iconos.
Importa fuente Inter del archivo /src/assets/inter.woff2.

### Puedes ver funcionando la app en el siguiente link:
https://kikegarcia-link-bio.netlify.app/


## Pasos realizados para crear y configurar el proyecto:

### Paso 1: Configurar el proyecto

1.1. Crear el proyecto con Vite-React-TypeScrip

Ejecuta este comando para iniciar un proyecto React con TypeScript:

```bash
npm create vite@latest -- Con React y TypeScrip SWC
cd Linkbio-kike
npm install
```

1.2. Instalar Tailwind CSS y otras dependencias

```bash
npm install -D typescript @types/node @types/react @types/react-dom
npm install react-router-dom @types/react-router-dom react-icons
npm install tailwindcss @tailwindcss/cli
npm install -D @tailwindcss/vite@4.1.5
npm install @midudev/tailwind-animations
```

### Paso 2: Crear un archivo .vscode/settings.json y asociar Tailwind con archivos de tipo css:
{
  "files.associations": {
    "*.css": "tailwindcss"
  }
}

### Paso 3: Modificar el archivo vite.config.ts y agregar esto:
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});

### Paso 4: Para compilar a un archivo css que podamos importar:
1- Crear el archivo input.css con los import y librerias de Tailwind a utilizar.

2- Agregar este scrip en package.json:
"build:styles": "npx @tailwindcss/cli -i ./input.css -o ./src/styles/output.css"

3- Ejecutar el scrip para compilar y generar el archivo output.css:
npm run build:styles

4- Ejecutar la app en ambiente de desarrollo:
npm run dev

5- Compila y construye la app en la carpeta dist:
npm run build

6- Utiliza la carpeta dist para hacer el Deploy en el sitio de preferencia.
