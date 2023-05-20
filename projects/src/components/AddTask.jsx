import PropTypes from 'prop-types';

export const AddTask = ({ tasklist, setTasklist, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.id) {
      const date = new Date();
      const updatedTaskList = tasklist.map((todo) =>
        todo.id === task.id
          ? { id: task.id, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` }
          : { id: todo.id, name: todo.name, time: todo.time }
      );
      setTasklist(updatedTaskList);
      setTask({});
    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      setTasklist([...tasklist, newTask]);
      setTask({});
    }
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={task.name || ""}
          autoComplete="off"
          placeholder="Add task"
          maxLength={60}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button className="add" type="submit">
          {task.id ? "Update" : "Add"}
        </button>
      </form>
    </section>
  );
};

AddTask.propTypes = {
  tasklist: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    })
  ).isRequired,
  setTasklist: PropTypes.func.isRequired,
  task: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    time: PropTypes.string,
  }).isRequired,
  setTask: PropTypes.func.isRequired,
};
