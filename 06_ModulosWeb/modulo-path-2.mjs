//En BackEnd necesitamos aveces trabajar con rutas absolútas. Dada una rula relativa, poder construir una ruta absoluta

import { resolve } from "path";

const rutaRelativa = "../carpeta/archivo.txt";

const rutaAbsoluta = resolve(rutaRelativa);

console.log("rutaAbsoluta", rutaAbsoluta);