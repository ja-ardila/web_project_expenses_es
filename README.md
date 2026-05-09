# TripleTen web_project_expenses
# Proyecto Sprint 5 - Aplicación de Presupuesto

Este proyecto es una aplicación sencilla para gestionar un presupuesto y registrar gastos por categoría.

## Descripción

La aplicación permite asignar un presupuesto, registrar gastos y calcular información importante sobre el estado del presupuesto.

Entre sus funcionalidades principales se encuentran:

- Calcular el total de gastos.
- Calcular el saldo disponible.
- Calcular el gasto promedio.
- Calcular gastos por categoría.
- Identificar la categoría con mayor gasto.
- Cambiar el color del saldo según su estado.

## Tecnologías utilizadas

- HTML
- CSS
- JavaScript

## Estructura del proyecto

```text
.
├── index.html
├── scripts
│   ├── calculations.js
│   ├── handle-html.js
│   └── index.js
├── blocks
├── pages
└── images
```

## Funcionalidades principales

### Asignación de presupuesto

El usuario puede ingresar un presupuesto inicial. A partir de este valor, la aplicación calcula el saldo disponible.

### Registro de gastos

El usuario puede agregar nuevos gastos indicando la categoría y el valor correspondiente.

### Cálculo del saldo

La aplicación calcula el saldo restando el total de gastos al presupuesto asignado.

### Estado del saldo

El saldo cambia de color según su estado:

- Verde: el saldo se encuentra en buen estado.
- Naranja: queda menos del 25% del presupuesto.
- Rojo: el saldo es negativo.

### Cálculo de estadísticas

La aplicación también permite calcular:

- El gasto promedio.
- El total gastado por categoría.
- La categoría con mayor gasto.

## Archivo principal de lógica

La lógica principal del proyecto se encuentra en el archivo:

```text
scripts/calculations.js
```

En este archivo se manejan las variables principales del presupuesto, los gastos y las funciones necesarias para realizar los cálculos.

## Cómo ejecutar el proyecto

Puedes ver la página desplegada en GitHub Pages desde el siguiente enlace:

[Ver aplicación](https://ja-ardila.github.io/web_project_expenses_es/)

También puedes ejecutarla localmente siguiendo estos pasos:

1. Descarga o clona el proyecto.
2. Abre el archivo `index.html` en tu navegador.
3. Asigna un presupuesto.
4. Agrega gastos desde la aplicación.
5. Revisa el saldo, el promedio de gastos y la categoría con mayor gasto.

## Autor

Proyecto realizado por Juan Andrés Ardila.
