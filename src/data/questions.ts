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
    id: 100,
    text: "¿Qué es una transacción en SQL?",
    answers: [
      { id: "100a", text: "Una unidad de trabajo que se ejecuta de forma atómica", isCorrect: true },
      { id: "100b", text: "Un tipo de tabla temporal", isCorrect: false },
      { id: "100c", text: "Un método de indexación", isCorrect: false },
      { id: "100d", text: "Un tipo de consulta", isCorrect: false }
    ],
    category: "Control de Datos",
    explanation: "Una transacción es una unidad de trabajo que debe cumplir las propiedades ACID: Atomicidad, Consistencia, Aislamiento y Durabilidad."
  }
];