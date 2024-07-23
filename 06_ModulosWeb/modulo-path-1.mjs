/*Para construir rutas y unir todos los segmentos empleando el separador específico de la plataforma,
utilizamos el método join. Este método no solo une los segmentos, sino que también normaliza el resultado según
la plataforma en la que se esté ejecutando el código. join se encarga de manejar los detalles específicos de la plataforma,
 asegurando que la ruta resultante sea coherente y compatible independientemente del sistema operativo.
*/

import { join } from "path";

const directorio = "/ruta/principal";
const archivo = "archivo.txt";

const rutaCompleta = join(directorio, archivo);

console.log("Ruta completa", rutaCompleta);