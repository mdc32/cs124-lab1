import './App.css';
import React from 'react';
import Header from './Header';
import ListContainer from './ListContainer'
import { useState } from 'react';
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";


function App(props) {

  const [isShowCompleted, setIsShowCompleted] = useState(true)
  const [tasks, setTasks] = useState(props.data)

  function handleToggleShowCompleted() {
    setIsShowCompleted(!isShowCompleted);
  }
  function handleDeleteCompleted() {
    setTasks(tasks.filter(t => !t.isCompleted));
  };

  function handleChangeField(id, field, value) {
    setTasks(tasks.map(
      t => t.id === id ? {...t, [field]: value} : t))
  }

  function handleToggleItemCompleted(id) {
    handleChangeField(id, "isCompleted", !tasks.find(t => t.id === id).isCompleted)
  }

  function handleAddNewTask() {
    setTasks([...tasks,
      {
        id: generateUniqueID(),
        text: "",
        isCompleted: false
      }
    ]);  
  }

  return (
    <div className="App">
      <Header
        onToggleShowCompleted={handleToggleShowCompleted}
        onDeleteCompleted={handleDeleteCompleted}
      ></Header>
      <ListContainer
        items={tasks.filter(t => !t.isCompleted || isShowCompleted)}
        onChangeField={handleChangeField}
        onToggleItemCompleted={handleToggleItemCompleted}
        onAddNewTask={handleAddNewTask}
      />
    </div>
  );
}

export default App;
