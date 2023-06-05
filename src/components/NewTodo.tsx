import React, { useRef } from "react";

// onAddTodo: (text: string) => void  --> where void means this funtion is not returning anything
const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = ({
  onAddTodo,
}) => {
  // HTMLButtonElement, HTMLAnchorElement , HTMLParagraphElement etc are few more types

  // useRef<HTMLInputElement>(null) means this ref is connected to input element
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  // for mousevenet like onClick, we use React.MouseEvent
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current?.value;

    if (enteredText?.trim()?.length === 0) {
      //throw an error
      return;
    }

    //TypeScript is telling us that the value we are passing to the function might be undefined, which is not compatible with the type of the function's parameter, which only expects a string.

    // hence using nullish coalescing will remove the error

    onAddTodo(enteredText ?? ""); // nullish coalescing to avoid error

    //  or we can use this too onAddTodo(enteredText || "");;
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;