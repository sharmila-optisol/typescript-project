const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void }> = ({
    text,
    onRemoveTodo,
  }) => {
    return (
      <>
        <li>{text}</li>
        <button onClick={onRemoveTodo}>Delete</button>
      </>
    );
  };
  
  export default TodoItem;