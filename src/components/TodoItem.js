import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

/**
 * Componente TodoItem
 * Representa un ítem de una lista de tareas con animación.
 * Props:
 * - todo: objeto con { id, text, completed }
 * - onToggle: función para marcar/desmarcar tarea
 * - onDelete: función para eliminar tarea
 */
const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <motion.div
      className="todo-item"
      initial={{ opacity: 0, y: 20 }}      // Animación de entrada
      animate={{ opacity: 1, y: 0 }}       // Estado animado
      exit={{ opacity: 0, y: -20 }}        // Animación de salida
      transition={{ duration: 0.3 }}       // Duración de animación
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          marginLeft: '8px'
        }}
      >
        {todo.text}
      </span>

      <button onClick={() => onDelete(todo.id)} style={{ marginLeft: 'auto' }}>
        Eliminar
      </button>
    </motion.div>
  );
};

// Documentación de props esperadas
TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoItem;
