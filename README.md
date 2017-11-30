# historial

**[See the demo](http://github.com/diego-asterisk/historial/demo.html)**

## Problema:

Tenemos que agregar elementos `div` dentro de un contenedor. Estos `div` tienen que agregarse siempre encima (push) o siempre por debajo (queue). Además dentro de los `div` se colocarán párrafos en el orden usual, uno debajo del otro. Utilizaremos un objeto que realice esta tarea de manejo del **DOM** con una sintaxis sencilla. Con métodos push() y queue() para agregar elementos `div` y un método say() para agregar un elemento `p` al último `div` agregado. El método say recibe un texto, crea un elemento `p` y lo coloca como último párrafo del último `div` agregado al contenedor.

### Ejemplo de uso:

Tenemos un conjunto de historias y cada historia se compone de varios párrafos que se generan dinámicamente. Cada historia va en un `div` aparte y lo queremos encima de los demás para que el usuario vea la última historia siempre en primer orden. Nuestro contenedor tiene el `id` '*container*'

```js
var c = document.getElementById('container'); 
var MyHistory = new Historial(c);
// agregar una historia
MyHistory.push();
MyHistory.say('1 Abril: Carlos, Maria');
MyHistory.say('28 Abril: Leticia, Gerardo');
// agregar otra historia al inicio
MyHistory.push();
MyHistory.say('14 Marzo: Elena, Mauricio');
MyHistory.say('23 Marzo: Alfredo, Alicia');
```

Este podría ser el resultado:

```html
<div id="container">
<div>
<p>
  14 Marzo: Elena, Mauricio
</p>
<p>
  23 Marzo: Alfredo, Alicia
</p>
</div>
<div>
<p>
  1 Abril: Carlos, Maria
</p>
<p>
  28 Abril: Leticia, Gerardo
</p>
</div>
</div>
```


## Instalación

Descargue el último [historial.js](https://github.com/diego-asterisk/historial/blob/master/src/historial.js) e inclúyalo como un `<script>` en su página.

### API / Uso

`push` no toma argumentos, agrega un elemento `div` al tope del contenedor.

`queue` no toma argumentos, agrega un elemento `div` al fondo del contenedor.

`say` recibe un texto como argumento y agrega un elemento `p` al último `div` agregado.


### License

```
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>
```
