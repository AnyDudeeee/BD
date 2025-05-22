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
  }
];