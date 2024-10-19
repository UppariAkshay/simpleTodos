// Write your code here
import './index.css'

const Todoitem = props => {
  const {todoDetails, deleteTodo} = props
  const {title, id} = todoDetails

  function onDeleteTodo() {
    deleteTodo(id)
  }

  return (
    <li className="todoItem">
      <p>{title}</p>
      <button onClick={onDeleteTodo} className="deleteButton">
        Delete
      </button>
    </li>
  )
}

export default Todoitem
