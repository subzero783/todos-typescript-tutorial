import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField/InputField";
import { Todo } from "./components/Model/model";

// let name: string;
// let age: number | string;

// age = 31;

// let isStudent: boolean;
// let hobbies: string[];
// let role: [number, string];

// let printName:Function;

// "void" returns undefined
// But "never"
// let printName: (name: string) => never;

// let personName: unknown;

// type Person = {
//   name: string;
//   age?: number;
// };

// let person: Person = {
//   name: "Gus",
// };

// interface Person {
//   name: string;
//   age?: number;
// }

// interface Guy extends Person {
//   profession: string;
// }

// Extends the X type with the Person interface
// type X = Person & {
//   a: string;
//   b: number;
// };

// type X = {
//   a: string;
//   b: number;
// };

// interface Person extends X {
//   name: string;
//   age?: number;
// }

// let lotsOfPeople: Person[];

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          todo: todo,
          isDone: false,
        },
      ]);
      setTodo("");
    }
  };

  console.log(todos);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
};

export default App;
