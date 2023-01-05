import { useState } from "react";
import "./App.css";

// xác dịnh mình làm gì => todo list
/**
 *
 * 1. Xậy dựng UI
 * 2. Xử lý logic để dự án chạy được
 * 3. test lại
 * 4. làm dẹp dự án
 */

function App() {
  const [listTodo, setListTodo] = useState([]);
  let value = { name: "", status: "" };

  const handleSubmit = () => {
    const temp = [...listTodo, value];
    setListTodo(temp);
    console.log(JSON.stringify(temp));
  };

  const handleChangeName = (e, type) => {
    value.name = e.target.value;
  };

  const handleChangeStatus = (e) => {
    value.status = e.target.value;
  };

  return (
    <div className="App">
      <input placeholder="Date" type="date" />
      <input placeholder="job name" onChange={handleChangeName} />
      <input placeholder="job status" onChange={handleChangeStatus} />
      <button onClick={handleSubmit}>Add New</button>
      <div>
        <ul>
          {listTodo.map((item, index) => {
            return (
              <li key={index}>
               20/10/2022 -   {item.name} - {item.status} <a style={{ color: "red" }}>Xóa</a><a style={{ color: "blue" }}>edit</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
