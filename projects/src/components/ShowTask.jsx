import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
export const ShowTask = ({ tasklist, setTasklist, task, setTask }) => {

    const handleEdit = (id) =>{
     const selectedTask = tasklist.find ( todo => todo.id === id );
     setTask(selectedTask);
    }

    const handleDelete = (id) => {
        const updatedTaskList = tasklist.filter(todo => todo.id !== id);
        setTasklist(updatedTaskList)
    }

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{tasklist.length}</span>
        </div>
        <button className="clear" onClick={() => setTasklist([])}>Clear all</button>
      </div>
      <hr />
      <div className="tasks">
        <ul>
          {tasklist.map((todo) => (
            <li key={todo.id}>
              <p className="tasklists">
                <span className="name">{todo.name}</span>
                <span className="time">{todo.time}</span>
              </p>
              <div className="icons">
                <i onClick={() => handleEdit(todo.id)} className="bi bi-pen-fill"></i>
                <i  onClick={() => handleDelete(todo.id)} className="bi bi-trash"></i>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

ShowTask.propTypes = {
  tasklist: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    })
  ).isRequired,
  setTasklist: PropTypes.func.isRequired,
  setTask: PropTypes.func.isRequired, // Add this line
  task: PropTypes.shape({}).isRequired, // Add this line
};
