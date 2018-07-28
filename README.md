# Patzom

Platzom s un idioma inventado para el curso de [Fundamentos de JavaScript](https://platzi.com.js)
de platzi [Plati](https://plazi.com), el mejor lugar de educación online


## Descripción del idioma

- si la palabra termina en ar se le quitan los dos caracteres
- si la pallabra inicia con Z se le añade 'pe al final'
- si la palabra traducida tiene mas de 10 letras se debe partir a la mitad y unir con guion
- si la palabra original es un palindromo , ninguna de las reglas anteriores cuenta y se 
  regresa la misma palabra intercalando mayusculas y minusculas.

## Instalación
```
npm install platzom
```

## Uso 
```
Import platzom from 'platzom'

platzom("Programar") // Program
platzom("Zorro") // Zorrope
platzom("Zarpar") // Zarppe
platzom("abecedeario") // abece-dario
platzom("sometemos") // SoMeTeMoS

```

## Licencia

[MIT](https://opensource.org/licenses/MIT)

