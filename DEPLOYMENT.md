# Despliegue Ganatech

## 1. Vincular con el repositorio nuevo de GitHub

Este proyecto esta preparado para subirlo a una cuenta nueva de GitHub sin mezclarlo con la cuenta de Vena Digital.

1. Crea un repositorio vacio en la nueva cuenta de GitHub.
2. Copia la URL HTTPS del repositorio, por ejemplo:

```bash
https://github.com/NUEVA-CUENTA/ganatech-web.git
```

3. Desde esta carpeta ejecuta:

```bash
git init
git branch -M main
git add .
git commit -m "Implement Ganatech landing page"
git remote add origin https://github.com/NUEVA-CUENTA/ganatech-web.git
git push -u origin main
```

Si el proyecto ya tuviera un remote anterior, reemplazalo con:

```bash
git remote remove origin
git remote add origin https://github.com/NUEVA-CUENTA/ganatech-web.git
git push -u origin main
```

## 2. Desplegar en Hostinger como Node.js

Configuracion recomendada en Hostinger:

- Node.js: `20` o superior.
- Build command: `npm install && npm run build`
- Start command: `npm start`
- Startup file: `server.js`
- Carpeta raiz de la app: la carpeta donde esta `package.json`.

El servidor usa `process.env.PORT`, por lo que se adapta al puerto que Hostinger asigne automaticamente.

## 3. Comandos utiles

Desarrollo local:

```bash
npm run dev
```

Build de produccion:

```bash
npm run build
```

Probar produccion local:

```bash
npm start
```
