# Usar la imagen oficial de Node.js
FROM node:20-alpine

# Crear directorio de la app
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install --production

# Copiar el resto del proyecto
COPY . .

# Exponer el puerto que usa la app
EXPOSE 8080

# Definir variables de entorno (opcional, si no usas .env)
# ENV PORT=8080

# Comando para correr la app
CMD ["node", "src/server.js"]


