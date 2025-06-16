
# 📝 Aplicación Todo con React

## 📦 Descripción General

Aplicación simple de tareas (*Todo App*) construida con **React** y animaciones de **Framer Motion**. Incluye tres componentes principales y un archivo de estilos centralizado en `App.css`.

---

## 🧱 Estructura del Proyecto

```
/src
├── components
│   ├── AddTodo.js
│   ├── TodoList.js
│   ├── TodoItem.js
├── App.js
├── App.css   ← Estilos principales
├── index.js
```

---

## ⚙️ Componentes

### 📥 AddTodo

Formulario para agregar nuevas tareas.

```js
<AddTodo onAdd={handleAdd} />
```

- Usa `useState` para controlar el campo de texto.
- Llama a `onAdd(text)` y limpia el input tras agregar.

---

### 📋 TodoList

Muestra la lista de tareas usando `TodoItem`.

```js
<TodoList
  todos={todos}
  onToggle={handleToggle}
  onDelete={handleDelete}
/>
```

---

### ✅ TodoItem

Muestra una tarea individual. Utiliza `framer-motion` para animaciones.

```js
<TodoItem
  todo={{ id: 1, text: 'Ejemplo', completed: false }}
  onToggle={handleToggle}
  onDelete={handleDelete}
/>
```

---

## 🎨 Estilos (`App.css`)

Los estilos se encuentran en `App.css` y controlan el diseño completo de la aplicación:

```css
body {
  font-family: 'Arial', sans-serif;
  background-color: #f0f0f0;
  ...
}

.app {
  background: white;
  padding: 20px;
  ...
}

.add-todo input, .add-todo button {
  padding: 10px;
  ...
}

.todo-item {
  display: flex;
  align-items: center;
  ...
}
```

Para modificar la apariencia, edita directamente este archivo.

---

## 🧪 Ejemplo completo en App.js

```js
import React, { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

let nextId = 1;

function App() {
  const [todos, setTodos] = useState([]);

  const handleAdd = (text) => {
    setTodos([...todos, { id: nextId++, text, completed: false }]);
  };

  const handleToggle = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>Lista de Tareas</h1>
      <AddTodo onAdd={handleAdd} />
      <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
}

export default App;
```

---

## 🔧 Recomendaciones

- Usa PropTypes si deseas validar las props de tus componentes.
- Puedes extender funcionalidades: filtros, edición, almacenamiento en localStorage, etc.
- Considera agregar pruebas unitarias con `Jest` o `React Testing Library`.
