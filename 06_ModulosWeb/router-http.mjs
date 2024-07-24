//Creando un servidor web

/*
req: Representa la petición del cliente (información sobre lo que solicita).
res: Representa la respuesta que enviará el servidor al cliente.
*/

import { createServer } from "http";

const server = createServer((req, res) => {

  if (req.url === '/home') {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>Estás en el Home 🏠!</h1>");
  }else if (req.url === '/contacto'){
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>Estás en la zona de información de contacto 📒✍️</h1>");
  }else{
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>Not found 🙁</h1>");
}

});

server.listen(3000, "127.0.0.1", () => {
  console.log("Servidor web en ejecución en http://127.0.0.1:3000");
});