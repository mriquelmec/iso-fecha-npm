# Fecha NPM

This project is a small utility for formatting dates using the `dayjs` library. It provides functions to format dates in different formats.

## Requirements

- Node.js
- NPM

## Installation

First, clone the repository:

```bash
git clone https://github.com/mriquelmec/iso-fecha-npm.git
```


Then, navigate to the project directory and run:
```bash
npm install
```
This will install the necessary dependencies.

This project exports three functions for formatting dates: 'formatearFecha', 'fechaLarga', and 'fechaCorta'.

### Example Usage

```javascript
import { formatearFecha, fechaCorta, fechaLarga } from './utils/formatearFecha.js';

const fecha = new Date();

console.log(formatearFecha(fecha)); // Format: DD-MM-YYYY
console.log(fechaLarga(fecha)); // Format: MMMM, dddd D, [of the year] YYYY
console.log(fechaCorta(fecha)); // Format: DD/MM/YYYY
```
### Functions

##### *formatearFecha(fecha)*
Formats the date in the DD-MM-YYYY format.

##### *fechaLarga(fecha)*
Formats the date in the MMMM, dddd D, [of the year] YYYY format.

##### *fechaCorta(fecha)*
Formats the date in the DD/MM/YYYY format.

##### *Dependencies:*
dayjs: ^1.11.11
date-time-formatter-dayjs: ^1.0.1
lodash: ^4.17.21 (Indirect dependency)


#### -License
This project is licensed under the ISC License.

```css
This `README.md` provides an overview of your project, how to install it, how to use it, and lists the dependencies. Feel free to adjust any details as needed!
```