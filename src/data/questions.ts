import { Question } from '../types/types';

export const quizQuestions: Question[] = [
  {
    id: 1,
    text: "¿Cuál es el orden correcto de las cláusulas en una consulta SQL?",
    answers: [
      { id: "1a", text: "SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY", isCorrect: true },
      { id: "1b", text: "FROM, SELECT, WHERE, GROUP BY, HAVING, ORDER BY", isCorrect: false },
      { id: "1c", text: "SELECT, WHERE, FROM, GROUP BY, HAVING, ORDER BY", isCorrect: false },
      { id: "1d", text: "FROM, WHERE, SELECT, GROUP BY, HAVING, ORDER BY", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "GREATEST devuelve el valor más grande de una lista de valores. Por ejemplo, GREATEST(5, 10, 3) devuelve 10."
  },
  {
    id: 42,
    text: "¿Qué hace la función LEAST?",
    answers: [
      { id: "42a", text: "Devuelve el menor valor de una lista", isCorrect: true },
      { id: "42b", text: "Devuelve el mayor valor de una lista", isCorrect: false },
      { id: "42c", text: "Promedia todos los valores", isCorrect: false },
      { id: "42d", text: "Cuenta los valores únicos", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "LEAST devuelve el valor más pequeño de una lista de valores. Por ejemplo, LEAST(5, 10, 3) devuelve 3."
  },
  {
    id: 43,
    text: "¿Qué hace la función IF en MySQL?",
    answers: [
      { id: "43a", text: "Evalúa una condición y devuelve un valor u otro según el resultado", isCorrect: true },
      { id: "43b", text: "Cuenta valores que cumplan una condición", isCorrect: false },
      { id: "43c", text: "Agrupa registros", isCorrect: false },
      { id: "43d", text: "Ordena resultados condicionalmente", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "IF evalúa una condición y devuelve un valor si es verdadera o otro si es falsa. Sintaxis: IF(condición, valor_si_verdadero, valor_si_falso)."
  },
  {
    id: 44,
    text: "¿Cuál es la ventaja de usar CASE sobre IF?",
    answers: [
      { id: "44a", text: "CASE permite evaluar múltiples condiciones, IF solo una", isCorrect: true },
      { id: "44b", text: "CASE es más rápido que IF", isCorrect: false },
      { id: "44c", text: "IF no funciona con texto", isCorrect: false },
      { id: "44d", text: "No hay diferencia real", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "CASE permite evaluar múltiples condiciones en una sola expresión, mientras que IF solo puede evaluar una condición binaria."
  },
  {
    id: 45,
    text: "¿Qué devuelve un RIGHT JOIN?",
    answers: [
      { id: "45a", text: "Todas las filas de la tabla derecha y las coincidentes de la izquierda", isCorrect: true },
      { id: "45b", text: "Todas las filas de la tabla izquierda y las coincidentes de la derecha", isCorrect: false },
      { id: "45c", text: "Solo las filas con coincidencias en ambas tablas", isCorrect: false },
      { id: "45d", text: "Todas las filas de ambas tablas", isCorrect: false }
    ],
    category: "Consultas Multi-tabla",
    explanation: "RIGHT JOIN devuelve todas las filas de la tabla derecha y los registros coincidentes de la tabla izquierda. Si no hay coincidencias, los campos de la tabla izquierda contendrán NULL."
  },
  {
    id: 46,
    text: "¿Qué es un producto cartesiano en SQL?",
    answers: [
      { id: "46a", text: "La combinación de todas las filas de una tabla con todas las filas de otra", isCorrect: true },
      { id: "46b", text: "Una operación de suma entre tablas", isCorrect: false },
      { id: "46c", text: "Una función matemática", isCorrect: false },
      { id: "46d", text: "Un tipo especial de JOIN", isCorrect: false }
    ],
    category: "Consultas Multi-tabla",
    explanation: "El producto cartesiano ocurre cuando se combinan tablas sin condiciones de unión, generando todas las combinaciones posibles entre las filas de ambas tablas."
  },
  {
    id: 47,
    text: "¿Por qué se debe evitar el producto cartesiano?",
    answers: [
      { id: "47a", text: "Genera conjuntos de resultados muy grandes sin relación lógica", isCorrect: true },
      { id: "47b", text: "Es muy lento siempre", isCorrect: false },
      { id: "47c", text: "No funciona en MySQL", isCorrect: false },
      { id: "47d", text: "Causa errores de sintaxis", isCorrect: false }
    ],
    category: "Consultas Multi-tabla",
    explanation: "El producto cartesiano debe evitarse porque genera combinaciones sin relación lógica y conjuntos de resultados enormes que rara vez son útiles."
  },
  {
    id: 48,
    text: "¿Cuál es la diferencia entre COUNT(*) y COUNT(columna)?",
    answers: [
      { id: "48a", text: "COUNT(*) cuenta todas las filas, COUNT(columna) excluye valores NULL", isCorrect: true },
      { id: "48b", text: "No hay diferencia", isCorrect: false },
      { id: "48c", text: "COUNT(columna) es más rápido", isCorrect: false },
      { id: "48d", text: "COUNT(*) solo funciona con números", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "COUNT(*) cuenta todas las filas incluyendo NULL, mientras que COUNT(columna) cuenta solo los valores no nulos de esa columna específica."
  },
  {
    id: 49,
    text: "¿Qué operador lógico representa XOR en MySQL?",
    answers: [
      { id: "49a", text: "XOR", isCorrect: true },
      { id: "49b", text: "OR", isCorrect: false },
      { id: "49c", text: "AND", isCorrect: false },
      { id: "49d", text: "NOT", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "XOR es el operador de disyunción exclusiva que devuelve verdadero cuando solo una de las condiciones es verdadera, pero no ambas."
  },
  {
    id: 50,
    text: "¿Cuál es la sintaxis alternativa para el operador AND en MySQL?",
    answers: [
      { id: "50a", text: "&&", isCorrect: true },
      { id: "50b", text: "||", isCorrect: false },
      { id: "50c", text: "&", isCorrect: false },
      { id: "50d", text: "!!", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "En MySQL, && es la sintaxis alternativa para el operador AND lógico."
  },
  {
    id: 51,
    text: "¿Cuál es la sintaxis alternativa para el operador OR en MySQL?",
    answers: [
      { id: "51a", text: "||", isCorrect: true },
      { id: "51b", text: "&&", isCorrect: false },
      { id: "51c", text: "|", isCorrect: false },
      { id: "51d", text: "++", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "En MySQL, || es la sintaxis alternativa para el operador OR lógico."
  },
  {
    id: 52,
    text: "¿Qué comodín representa un solo carácter en LIKE?",
    answers: [
      { id: "52a", text: "_", isCorrect: true },
      { id: "52b", text: "%", isCorrect: false },
      { id: "52c", text: "*", isCorrect: false },
      { id: "52d", text: "?", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "El carácter _ (guión bajo) representa exactamente un carácter en patrones LIKE."
  },
  {
    id: 53,
    text: "¿Qué comodín representa cualquier secuencia de caracteres en LIKE?",
    answers: [
      { id: "53a", text: "%", isCorrect: true },
      { id: "53b", text: "_", isCorrect: false },
      { id: "53c", text: "*", isCorrect: false },
      { id: "53d", text: "+", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "El carácter % representa cualquier secuencia de caracteres (incluido ninguno) en patrones LIKE."
  },
  {
    id: 54,
    text: "¿Para qué se utiliza la sentencia DROP USER?",
    answers: [
      { id: "54a", text: "Para eliminar un usuario de la base de datos", isCorrect: true },
      { id: "54b", text: "Para modificar un usuario", isCorrect: false },
      { id: "54c", text: "Para crear un usuario", isCorrect: false },
      { id: "54d", text: "Para cambiar la contraseña de un usuario", isCorrect: false }
    ],
    category: "Control de Datos",
    explanation: "DROP USER elimina completamente un usuario de la base de datos junto con todos sus permisos."
  },
  {
    id: 55,
    text: "¿Qué significa WITH GRANT OPTION en la sentencia GRANT?",
    answers: [
      { id: "55a", text: "Permite al usuario conceder esos permisos a otros usuarios", isCorrect: true },
      { id: "55b", text: "Otorga permisos permanentes", isCorrect: false },
      { id: "55c", text: "Requiere confirmación adicional", isCorrect: false },
      { id: "55d", text: "Aplica los permisos inmediatamente", isCorrect: false }
    ],
    category: "Control de Datos",
    explanation: "WITH GRANT OPTION permite que el usuario que recibe los permisos pueda a su vez conceder esos mismos permisos a otros usuarios."
  },
  {
    id: 56,
    text: "¿Cuáles son las tres operaciones fundamentales que permite SELECT?",
    answers: [
      { id: "56a", text: "Proyección, Selección y Asociación", isCorrect: true },
      { id: "56b", text: "Inserción, Actualización y Eliminación", isCorrect: false },
      { id: "56c", text: "Creación, Modificación y Eliminación", isCorrect: false },
      { id: "56d", text: "Ordenación, Agrupación y Filtrado", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "SELECT permite: Proyección (seleccionar columnas), Selección (filtrar filas) y Asociación (combinar tablas con joins)."
  },
  {
    id: 57,
    text: "¿Qué significa que solo SELECT y FROM son obligatorias en una consulta?",
    answers: [
      { id: "57a", text: "Las demás cláusulas (WHERE, GROUP BY, etc.) son opcionales", isCorrect: true },
      { id: "57b", text: "No se pueden usar otras cláusulas", isCorrect: false },
      { id: "57c", text: "FROM también es opcional", isCorrect: false },
      { id: "57d", text: "WHERE es obligatorio cuando hay FROM", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "En una consulta SQL, solo SELECT y FROM son obligatorias. WHERE, GROUP BY, HAVING, ORDER BY y LIMIT son opcionales."
  },
  {
    id: 58,
    text: "¿Qué hace la cláusula LIMIT?",
    answers: [
      { id: "58a", text: "Restringe el número de filas devueltas por la consulta", isCorrect: true },
      { id: "58b", text: "Limita el número de columnas mostradas", isCorrect: false },
      { id: "58c", text: "Establece un tiempo máximo de ejecución", isCorrect: false },
      { id: "58d", text: "Limita el uso de memoria", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "LIMIT restringe el número de filas que devuelve una consulta. Por ejemplo, LIMIT 10 devuelve solo las primeras 10 filas."
  },
  {
    id: 59,
    text: "¿Cuál es el orden de evaluación por defecto en ORDER BY?",
    answers: [
      { id: "59a", text: "Ascendente (ASC)", isCorrect: true },
      { id: "59b", text: "Descendente (DESC)", isCorrect: false },
      { id: "59c", text: "Aleatorio", isCorrect: false },
      { id: "59d", text: "Según el tipo de datos", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "Por defecto, ORDER BY ordena los resultados en orden ascendente (ASC). Se debe especificar DESC para orden descendente."
  },
  {
    id: 60,
    text: "¿Qué consulta SELECT puede ejecutarse sin la cláusula FROM?",
    answers: [
      { id: "60a", text: "SELECT con expresiones o funciones que no requieren tablas", isCorrect: true },
      { id: "60b", text: "Ninguna consulta SELECT", isCorrect: false },
      { id: "60c", text: "Solo SELECT *", isCorrect: false },
      { id: "60d", text: "Solo consultas con WHERE", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "Se puede usar SELECT sin FROM para expresiones que no requieren tablas, como SELECT 1+1, SELECT CURDATE(), o SELECT 'Hola Mundo'."
  }
]; Básico",
    explanation: "El orden correcto es: SELECT (qué columnas queremos), FROM (de qué tablas), WHERE (qué condiciones), GROUP BY (agrupación), HAVING (filtros de grupos) y ORDER BY (ordenamiento)."
  },
  {
    id: 2,
    text: "¿Qué hace la siguiente consulta? SELECT COUNT(*) FROM ventas WHERE cantidad > (SELECT AVG(cantidad) FROM ventas);",
    answers: [
      { id: "2a", text: "Cuenta las ventas con cantidad mayor al promedio", isCorrect: true },
      { id: "2b", text: "Cuenta todas las ventas", isCorrect: false },
      { id: "2c", text: "Calcula el promedio de ventas", isCorrect: false },
      { id: "2d", text: "Suma las cantidades de todas las ventas", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "La consulta cuenta cuántas ventas tienen una cantidad mayor al promedio de todas las cantidades vendidas."
  },
  {
    id: 3,
    text: "¿Para qué se utiliza la cláusula GROUP BY?",
    answers: [
      { id: "3a", text: "Para ordenar los resultados", isCorrect: false },
      { id: "3b", text: "Para filtrar registros", isCorrect: false },
      { id: "3c", text: "Para agrupar filas con valores iguales en las columnas especificadas", isCorrect: true },
      { id: "3d", text: "Para unir tablas", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "GROUP BY se utiliza para agrupar filas que tienen los mismos valores en las columnas especificadas, permitiendo realizar cálculos agregados para cada grupo."
  },
  {
    id: 4,
    text: "¿Qué diferencia hay entre WHERE y HAVING?",
    answers: [
      { id: "4a", text: "No hay diferencia, son sinónimos", isCorrect: false },
      { id: "4b", text: "WHERE filtra antes de agrupar y HAVING después de agrupar", isCorrect: true },
      { id: "4c", text: "WHERE es para números y HAVING para texto", isCorrect: false },
      { id: "4d", text: "HAVING es más rápido que WHERE", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "WHERE filtra registros individuales antes de cualquier agrupación, mientras que HAVING filtra grupos después de que se ha aplicado GROUP BY."
  },
  {
    id: 5,
    text: "¿Qué hace la función COUNT(*)?",
    answers: [
      { id: "5a", text: "Cuenta solo los valores no nulos", isCorrect: false },
      { id: "5b", text: "Cuenta todas las filas, incluyendo duplicados y nulos", isCorrect: true },
      { id: "5c", text: "Cuenta solo los valores únicos", isCorrect: false },
      { id: "5d", text: "Cuenta solo los valores numéricos", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "COUNT(*) cuenta todas las filas en el resultado, independientemente de si contienen valores nulos o duplicados."
  },
  {
    id: 6,
    text: "¿Qué tipo de JOIN devuelve solo las filas que tienen coincidencias en ambas tablas?",
    answers: [
      { id: "6a", text: "LEFT JOIN", isCorrect: false },
      { id: "6b", text: "RIGHT JOIN", isCorrect: false },
      { id: "6c", text: "INNER JOIN", isCorrect: true },
      { id: "6d", text: "FULL OUTER JOIN", isCorrect: false }
    ],
    category: "Consultas Multi-tabla",
    explanation: "INNER JOIN devuelve solo las filas donde hay coincidencia en los campos relacionados entre ambas tablas."
  },
  {
    id: 7,
    text: "¿Qué devuelve un LEFT JOIN?",
    answers: [
      { id: "7a", text: "Solo las filas con coincidencias en ambas tablas", isCorrect: false },
      { id: "7b", text: "Todas las filas de la tabla izquierda y las coincidentes de la derecha", isCorrect: true },
      { id: "7c", text: "Todas las filas de la tabla derecha y las coincidentes de la izquierda", isCorrect: false },
      { id: "7d", text: "Todas las filas de ambas tablas", isCorrect: false }
    ],
    category: "Consultas Multi-tabla",
    explanation: "LEFT JOIN devuelve todas las filas de la tabla izquierda y los registros coincidentes de la tabla derecha. Si no hay coincidencias, los campos de la tabla derecha contendrán NULL."
  },
  {
    id: 8,
    text: "¿Qué hace la función AVG?",
    answers: [
      { id: "8a", text: "Calcula la suma de valores", isCorrect: false },
      { id: "8b", text: "Calcula el promedio de valores numéricos", isCorrect: true },
      { id: "8c", text: "Cuenta el número de valores", isCorrect: false },
      { id: "8d", text: "Encuentra el valor más común", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "AVG calcula el promedio aritmético de un conjunto de valores numéricos, ignorando los valores NULL."
  },
  {
    id: 9,
    text: "¿Para qué se utiliza la sentencia GRANT?",
    answers: [
      { id: "9a", text: "Para crear usuarios", isCorrect: false },
      { id: "9b", text: "Para conceder permisos a usuarios", isCorrect: true },
      { id: "9c", text: "Para crear tablas", isCorrect: false },
      { id: "9d", text: "Para modificar datos", isCorrect: false }
    ],
    category: "Control de Datos",
    explanation: "GRANT se utiliza para conceder permisos específicos (como SELECT, INSERT, UPDATE) a usuarios sobre objetos de la base de datos."
  },
  {
    id: 10,
    text: "¿Qué hace la sentencia REVOKE?",
    answers: [
      { id: "10a", text: "Elimina usuarios", isCorrect: false },
      { id: "10b", text: "Retira permisos a usuarios", isCorrect: true },
      { id: "10c", text: "Elimina tablas", isCorrect: false },
      { id: "10d", text: "Cancela consultas", isCorrect: false }
    ],
    category: "Control de Datos",
    explanation: "REVOKE se utiliza para retirar permisos previamente concedidos a usuarios sobre objetos de la base de datos."
  },
  {
    id: 11,
    text: "¿Qué hace la función SUM?",
    answers: [
      { id: "11a", text: "Cuenta el número de valores", isCorrect: false },
      { id: "11b", text: "Calcula el promedio", isCorrect: false },
      { id: "11c", text: "Suma valores numéricos", isCorrect: true },
      { id: "11d", text: "Encuentra el valor máximo", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "SUM calcula la suma total de un conjunto de valores numéricos, ignorando los valores NULL."
  },
  {
    id: 12,
    text: "¿Para qué se usa la cláusula ORDER BY?",
    answers: [
      { id: "12a", text: "Para filtrar resultados", isCorrect: false },
      { id: "12b", text: "Para ordenar los resultados", isCorrect: true },
      { id: "12c", text: "Para agrupar resultados", isCorrect: false },
      { id: "12d", text: "Para unir tablas", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "ORDER BY se utiliza para ordenar los resultados de una consulta según una o más columnas, ya sea en orden ascendente (ASC) o descendente (DESC)."
  },
  {
    id: 13,
    text: "¿Qué hace la función MAX?",
    answers: [
      { id: "13a", text: "Calcula el promedio", isCorrect: false },
      { id: "13b", text: "Encuentra el valor más grande", isCorrect: true },
      { id: "13c", text: "Suma todos los valores", isCorrect: false },
      { id: "13d", text: "Cuenta los valores", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "MAX encuentra el valor más grande en un conjunto de valores, ignorando los valores NULL."
  },
  {
    id: 14,
    text: "¿Qué hace la función MIN?",
    answers: [
      { id: "14a", text: "Calcula el promedio", isCorrect: false },
      { id: "14b", text: "Encuentra el valor más pequeño", isCorrect: true },
      { id: "14c", text: "Resta todos los valores", isCorrect: false },
      { id: "14d", text: "Cuenta los valores", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "MIN encuentra el valor más pequeño en un conjunto de valores, ignorando los valores NULL."
  },
  {
    id: 15,
    text: "¿Para qué se usa la sentencia CREATE USER?",
    answers: [
      { id: "15a", text: "Para crear un nuevo usuario en la base de datos", isCorrect: true },
      { id: "15b", text: "Para crear una nueva tabla", isCorrect: false },
      { id: "15c", text: "Para crear un índice", isCorrect: false },
      { id: "15d", text: "Para crear una vista", isCorrect: false }
    ],
    category: "Control de Datos",
    explanation: "CREATE USER se utiliza para crear un nuevo usuario en la base de datos, permitiéndole posteriormente asignar permisos específicos."
  },
  {
    id: 16,
    text: "¿Qué hace la cláusula DISTINCT?",
    answers: [
      { id: "16a", text: "Ordena los resultados", isCorrect: false },
      { id: "16b", text: "Elimina duplicados del resultado", isCorrect: true },
      { id: "16c", text: "Filtra valores nulos", isCorrect: false },
      { id: "16d", text: "Agrupa resultados", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "DISTINCT elimina las filas duplicadas del conjunto de resultados, devolviendo solo valores únicos."
  },
  {
    id: 17,
    text: "¿Qué hace el operador BETWEEN?",
    answers: [
      { id: "17a", text: "Compara dos valores", isCorrect: false },
      { id: "17b", text: "Verifica si un valor está dentro de un rango", isCorrect: true },
      { id: "17c", text: "Busca patrones en texto", isCorrect: false },
      { id: "17d", text: "Une tablas", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "BETWEEN verifica si un valor está dentro de un rango específico, incluyendo los valores límite. Por ejemplo: precio BETWEEN 10 AND 20."
  },
  {
    id: 18,
    text: "¿Para qué se usa el operador LIKE?",
    answers: [
      { id: "18a", text: "Para comparar números", isCorrect: false },
      { id: "18b", text: "Para buscar patrones en texto", isCorrect: true },
      { id: "18c", text: "Para ordenar resultados", isCorrect: false },
      { id: "18d", text: "Para agrupar datos", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "LIKE se usa para buscar patrones en texto usando comodines como % (cualquier secuencia de caracteres) y _ (un solo carácter)."
  },
  {
    id: 19,
    text: "¿Qué hace el operador IN?",
    answers: [
      { id: "19a", text: "Compara rangos de valores", isCorrect: false },
      { id: "19b", text: "Verifica si un valor está en una lista de valores", isCorrect: true },
      { id: "19c", text: "Busca texto", isCorrect: false },
      { id: "19d", text: "Ordena resultados", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "IN verifica si un valor está contenido en una lista de valores especificada. Por ejemplo: ciudad IN ('Madrid', 'Barcelona', 'Valencia')."
  },
  {
    id: 20,
    text: "¿Qué significa NULL en SQL?",
    answers: [
      { id: "20a", text: "Un valor cero", isCorrect: false },
      { id: "20b", text: "Un valor desconocido o no disponible", isCorrect: true },
      { id: "20c", text: "Una cadena vacía", isCorrect: false },
      { id: "20d", text: "Un error en la base de datos", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "NULL representa la ausencia de un valor o un valor desconocido. No es lo mismo que cero o una cadena vacía."
  },
  {
    id: 21,
    text: "¿Qué hace la función POWER en SQL?",
    answers: [
      { id: "21a", text: "Eleva un número a una potencia específica", isCorrect: true },
      { id: "21b", text: "Calcula la raíz cuadrada", isCorrect: false },
      { id: "21c", text: "Redondea un número", isCorrect: false },
      { id: "21d", text: "Calcula el valor absoluto", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "La función POWER o POW eleva un número a una potencia específica. Por ejemplo, POWER(2, 3) devuelve 8."
  },
  {
    id: 22,
    text: "¿Qué diferencia hay entre TRUNCATE y ROUND?",
    answers: [
      { id: "22a", text: "TRUNCATE elimina decimales sin redondear, ROUND redondea al decimal más cercano", isCorrect: true },
      { id: "22b", text: "Son sinónimos, hacen exactamente lo mismo", isCorrect: false },
      { id: "22c", text: "TRUNCATE solo funciona con números enteros", isCorrect: false },
      { id: "22d", text: "ROUND solo funciona con números decimales", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "TRUNCATE simplemente elimina los decimales después del punto especificado, mientras que ROUND redondea al valor más cercano."
  },
  {
    id: 23,
    text: "¿Qué hace la función CONCAT en SQL?",
    answers: [
      { id: "23a", text: "Une dos o más cadenas de texto", isCorrect: true },
      { id: "23b", text: "Divide una cadena en partes", isCorrect: false },
      { id: "23c", text: "Cuenta el número de caracteres", isCorrect: false },
      { id: "23d", text: "Convierte texto a mayúsculas", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "CONCAT une dos o más cadenas de texto en una sola. Por ejemplo, CONCAT('Hola', ' ', 'Mundo') devuelve 'Hola Mundo'."
  },
  {
    id: 24,
    text: "¿Cuál es la diferencia entre UNION y UNION ALL?",
    answers: [
      { id: "24a", text: "UNION elimina duplicados, UNION ALL mantiene todos los registros", isCorrect: true },
      { id: "24b", text: "No hay diferencia, son sinónimos", isCorrect: false },
      { id: "24c", text: "UNION ALL solo funciona con números", isCorrect: false },
      { id: "24d", text: "UNION solo funciona con texto", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "UNION combina resultados de dos consultas eliminando duplicados, mientras que UNION ALL mantiene todos los registros, incluyendo duplicados."
  },
  {
    id: 25,
    text: "¿Qué es una clave foránea (FOREIGN KEY)?",
    answers: [
      { id: "25a", text: "Un campo que referencia la clave primaria de otra tabla", isCorrect: true },
      { id: "25b", text: "La clave principal de una tabla", isCorrect: false },
      { id: "25c", text: "Un campo que no puede contener valores nulos", isCorrect: false },
      { id: "25d", text: "Un campo que debe ser único", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "Una clave foránea es un campo que establece una relación con la clave primaria de otra tabla, manteniendo la integridad referencial."
  },
  {
    id: 26,
    text: "¿Qué hace la función SQRT en SQL?",
    answers: [
      { id: "26a", text: "Calcula la raíz cuadrada de un número", isCorrect: true },
      { id: "26b", text: "Eleva un número al cuadrado", isCorrect: false },
      { id: "26c", text: "Calcula el valor absoluto", isCorrect: false },
      { id: "26d", text: "Redondea al entero más cercano", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "SQRT calcula la raíz cuadrada de un número. Por ejemplo, SQRT(16) devuelve 4."
  },
  {
    id: 27,
    text: "¿Qué hace la función ABS?",
    answers: [
      { id: "27a", text: "Calcula el valor absoluto de un número", isCorrect: true },
      { id: "27b", text: "Calcula la raíz cuadrada", isCorrect: false },
      { id: "27c", text: "Redondea un número", isCorrect: false },
      { id: "27d", text: "Calcula el resto de una división", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "ABS devuelve el valor absoluto de un número, es decir, el número sin su signo. Por ejemplo, ABS(-5) devuelve 5."
  },
  {
    id: 28,
    text: "¿Qué hace la función MOD?",
    answers: [
      { id: "28a", text: "Calcula el resto de una división", isCorrect: true },
      { id: "28b", text: "Calcula el cociente de una división", isCorrect: false },
      { id: "28c", text: "Multiplica dos números", isCorrect: false },
      { id: "28d", text: "Eleva un número a una potencia", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "MOD devuelve el resto de la división entre dos números. Por ejemplo, MOD(10, 3) devuelve 1."
  },
  {
    id: 29,
    text: "¿Qué hace la función UPPER?",
    answers: [
      { id: "29a", text: "Convierte texto a mayúsculas", isCorrect: true },
      { id: "29b", text: "Convierte texto a minúsculas", isCorrect: false },
      { id: "29c", text: "Cuenta caracteres en una cadena", isCorrect: false },
      { id: "29d", text: "Elimina espacios en blanco", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "UPPER convierte todos los caracteres de una cadena a mayúsculas. Por ejemplo, UPPER('hola') devuelve 'HOLA'."
  },
  {
    id: 30,
    text: "¿Qué hace la función LOWER?",
    answers: [
      { id: "30a", text: "Convierte texto a minúsculas", isCorrect: true },
      { id: "30b", text: "Convierte texto a mayúsculas", isCorrect: false },
      { id: "30c", text: "Elimina espacios", isCorrect: false },
      { id: "30d", text: "Invierte una cadena", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "LOWER convierte todos los caracteres de una cadena a minúsculas. Por ejemplo, LOWER('HOLA') devuelve 'hola'."
  },
  {
    id: 31,
    text: "¿Qué hace la función TRIM?",
    answers: [
      { id: "31a", text: "Elimina espacios al inicio y final de una cadena", isCorrect: true },
      { id: "31b", text: "Elimina todos los espacios de una cadena", isCorrect: false },
      { id: "31c", text: "Convierte a mayúsculas", isCorrect: false },
      { id: "31d", text: "Cuenta el número de caracteres", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "TRIM elimina los espacios en blanco al principio y al final de una cadena de texto."
  },
  {
    id: 32,
    text: "¿Qué hace la función SUBSTR?",
    answers: [
      { id: "32a", text: "Extrae una subcadena de una cadena", isCorrect: true },
      { id: "32b", text: "Une dos cadenas", isCorrect: false },
      { id: "32c", text: "Cuenta caracteres", isCorrect: false },
      { id: "32d", text: "Reemplaza texto", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "SUBSTR extrae una porción específica de una cadena basándose en la posición inicial y la longitud especificada."
  },
  {
    id: 33,
    text: "¿Qué hace la función REPLACE?",
    answers: [
      { id: "33a", text: "Reemplaza un texto por otro dentro de una cadena", isCorrect: true },
      { id: "33b", text: "Elimina caracteres de una cadena", isCorrect: false },
      { id: "33c", text: "Añade texto al final de una cadena", isCorrect: false },
      { id: "33d", text: "Invierte el orden de los caracteres", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "REPLACE busca todas las ocurrencias de un texto específico y las reemplaza por otro texto dentro de una cadena."
  },
  {
    id: 34,
    text: "¿Qué hace la función CURDATE?",
    answers: [
      { id: "34a", text: "Devuelve la fecha actual", isCorrect: true },
      { id: "34b", text: "Devuelve la hora actual", isCorrect: false },
      { id: "34c", text: "Devuelve la fecha y hora actual", isCorrect: false },
      { id: "34d", text: "Formatea una fecha", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "CURDATE devuelve la fecha actual del sistema en formato YYYY-MM-DD."
  },
  {
    id: 35,
    text: "¿Qué hace la función CURTIME?",
    answers: [
      { id: "35a", text: "Devuelve la hora actual", isCorrect: true },
      { id: "35b", text: "Devuelve la fecha actual", isCorrect: false },
      { id: "35c", text: "Calcula la diferencia entre dos horas", isCorrect: false },
      { id: "35d", text: "Añade tiempo a una fecha", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "CURTIME devuelve la hora actual del sistema en formato HH:MM:SS."
  },
  {
    id: 36,
    text: "¿Qué hace la función YEAR?",
    answers: [
      { id: "36a", text: "Extrae el año de una fecha", isCorrect: true },
      { id: "36b", text: "Extrae el mes de una fecha", isCorrect: false },
      { id: "36c", text: "Extrae el día de una fecha", isCorrect: false },
      { id: "36d", text: "Calcula la edad", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "YEAR extrae el componente año de una fecha. Por ejemplo, YEAR('2024-05-15') devuelve 2024."
  },
  {
    id: 37,
    text: "¿Qué hace la función MONTH?",
    answers: [
      { id: "37a", text: "Extrae el mes de una fecha", isCorrect: true },
      { id: "37b", text: "Extrae el año de una fecha", isCorrect: false },
      { id: "37c", text: "Extrae el día de una fecha", isCorrect: false },
      { id: "37d", text: "Cuenta los meses entre dos fechas", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "MONTH extrae el componente mes de una fecha. Por ejemplo, MONTH('2024-05-15') devuelve 5."
  },
  {
    id: 38,
    text: "¿Qué hace la función DAY?",
    answers: [
      { id: "38a", text: "Extrae el día de una fecha", isCorrect: true },
      { id: "38b", text: "Extrae el mes de una fecha", isCorrect: false },
      { id: "38c", text: "Extrae el año de una fecha", isCorrect: false },
      { id: "38d", text: "Calcula días entre fechas", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "DAY extrae el componente día de una fecha. Por ejemplo, DAY('2024-05-15') devuelve 15."
  },
  {
    id: 39,
    text: "¿Qué hace la función DATEDIFF?",
    answers: [
      { id: "39a", text: "Calcula la diferencia en días entre dos fechas", isCorrect: true },
      { id: "39b", text: "Suma días a una fecha", isCorrect: false },
      { id: "39c", text: "Resta días a una fecha", isCorrect: false },
      { id: "39d", text: "Formatea una fecha", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "DATEDIFF calcula la diferencia en días entre dos fechas. Por ejemplo, DATEDIFF('2024-05-15', '2024-05-10') devuelve 5."
  },
  {
    id: 40,
    text: "¿Qué hace la función DATE_ADD?",
    answers: [
      { id: "40a", text: "Añade un intervalo de tiempo a una fecha", isCorrect: true },
      { id: "40b", text: "Resta un intervalo de tiempo a una fecha", isCorrect: false },
      { id: "40c", text: "Calcula la diferencia entre fechas", isCorrect: false },
      { id: "40d", text: "Formatea una fecha", isCorrect: false }
    ],
    category: "SQL Básico",
    explanation: "DATE_ADD añade un intervalo específico a una fecha. Por ejemplo, DATE_ADD('2024-01-01', INTERVAL 30 DAY)."
  },
  {
    id: 41,
    text: "¿Qué hace la función GREATEST?",
    answers: [
      { id: "41a", text: "Devuelve el mayor valor de una lista", isCorrect: true },
      { id: "41b", text: "Devuelve el menor valor de una lista", isCorrect: false },
      { id: "41c", text: "Suma todos los valores", isCorrect: false },
      { id: "41d", text: "Cuenta los valores", isCorrect: false }
    ],
    category: "SQL