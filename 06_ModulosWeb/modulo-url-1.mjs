/*En programación, el término "parse" se refiere al proceso de analizar y descomponer un texto o estructura
 de datos para comprender su significado y extraer información relevante. Es como si se estuviera desmontando
 el texto o la estructura en sus partes más pequeñas para entender cómo encajan y qué significan.
*/

import { parse } from "url";

const urlString = "https://www.ejemplo.com:8080/ruta?parametro1=valor1&parametro2=valor2";

const parsedUrl = parse (urlString, true);

console.log("Protocolo:", parsedUrl.protocol);
console.log("Hostname:", parsedUrl.hostname);
console.log("Pathname:", parsedUrl.pathname);
//console.log("Parámetros de consulta:", parsedUrl.query);

console.log("*****************************************************************++++++++++++++++");
console.log(parsedUrl);

