import Todo from "./models/todo";
import TodoItem from "./TodoItem";

// React.FC<{ items: string[] }> will tell that we are expecting arrary of strings only
//  React.FC<{ items: Todo[] }> will tell that we are expecting arrary of Todo which is defined in "./models/todo" only
const Todos: React.FC<{
  items: Todo[];
  onRemoveTodo: (id: string) => void;
}> = ({ items, onRemoveTodo }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <TodoItem
            key={item.id}
            text={item.text}
            onRemoveTodo={onRemoveTodo.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );
};

export default Todos;