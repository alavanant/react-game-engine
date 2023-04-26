import { Game } from "./Game/index";
import { ToDoList } from "./App/ToDoList";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello player</h1>
      <h2>use Z Q S D to move the bunny !</h2>
      <Game />
      <ToDoList />
    </div>
  );
}
