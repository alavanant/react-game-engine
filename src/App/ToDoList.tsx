export const ToDoList = () => {
  const toDo = new Map([
    ["move bunny around", true],
    ["add collisions with screen", false],
    ["can move between scenes", false],
  ]);
  return (
    <ul>
      {[...toDo].map(([label, checked]) => (
        <li key={label}>
          <input checked={checked} id={label} readOnly type="checkbox" />
          <label htmlFor={label}>{label}</label>
        </li>
      ))}
    </ul>
  );
};
