import { useSelector, useDispatch } from "react-redux";
import { addExpense, removeExpense } from "./features/expenses/expensesSlice";

function App() {
  const expenses = useSelector((state) => state.expenses.value);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addExpense({
        name: e.target.children[0].value,
        description: e.target.children[1].value,
      })
    );
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(
      removeExpense({
        name: e.target.children[0].value,
      })
    );
  };

  return (
    <div className="App">
      <h1>Expenses</h1>
      <ul className="expenseContainer">
        {expenses.map((expense, i) => {
          return (
            <li key={i}>
              <p>Name: {expense.name}</p>
              <p>Description: {expense.description}</p>
            </li>
          );
        })}
      </ul>

      <form className="addExpense" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="name" />
        <input type="text" name="description" />

        <input type="submit" />
      </form>

      <form onSubmit={(e) => handleDelete(e)}>
        <input type="text" name="name" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
