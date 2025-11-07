// src/config/swagger.config.js
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Ecommerce API',
      version: '1.0.0',
      description: 'Documentación de la API de Ecommerce'
    },
    servers: [
      {
        url: 'http://localhost:8080/api',
        description: 'Servidor local'
      }
    ]
  },
  apis: ['./src/routes/*.js', './src/models/*.js'], // Aquí se documentan rutas y modelos
};

export const swaggerSpecs = swaggerJsdoc(options);
export { swaggerUi };



