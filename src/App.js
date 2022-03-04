import './App.css';
import React from 'react';
import Header from './Header';
import ListContainer from './ListContainer';
import { useState } from 'react';
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";


function Alert(props) {
  return <div className={"backdrop"}>
    <div className="modal">
      Delete All Completed Items?
      <div className="alert-buttons">
        <button className={"alert-button alert-cancel"} type={"button"}
                onClick={() => props.onClose()}>
          No
        </button>
        <button className={"alert-button alert-ok"} type={"button"}
                onClick={() => {
                  props.onOK();
                  props.onClose();
                }}>
          OK
        </button>
      </div>
    </div>
  </div>
}

function App(props) {

  const [isShowCompleted, setIsShowCompleted] = useState(true)
  const [tasks, setTasks] = useState(props.data)
  const [showAlert, setShowAlert] = useState(false);

  function handleToggleShowCompleted() {
    setIsShowCompleted(!isShowCompleted);
    console.log(tasks)
  }

  function handleDeleteCompleted() {
    setTasks(tasks.filter(t => !t.isCompleted));
  }

  function handleChangeField(id, field, value) {
    setTasks(tasks.map(
      t => t.id === id ? {...t, [field]: value} : t))
  }

  function handleToggleItemCompleted(id) {
    handleChangeField(id, "isCompleted", !tasks.find(t => t.id === id).isCompleted)
  }

  function handleAddNewTask(task) {
    // console.log("task: ", task);
    setTasks([...tasks,
      {
        id: generateUniqueID(),
        text: task,
        isCompleted: false
      }
    ]);  
  }

  function toggleModal() {
    setShowAlert(!showAlert)
  }

  function handleDeleteById(id) {
    setTasks(tasks.filter(t => !(t.id === id)))
  }

  return (
    <div className="App">
      <Header
        onToggleShowCompleted={handleToggleShowCompleted}
        onToggleModal={toggleModal}
      ></Header>
      <ListContainer
        items={tasks.filter(t => !t.isCompleted || isShowCompleted)}
        onChangeField={handleChangeField}
        onToggleItemCompleted={handleToggleItemCompleted}
        onAddNewTask={handleAddNewTask}
      />
        {showAlert && <Alert onClose={toggleModal} onOK={handleDeleteCompleted}>
        </Alert>}
    </div>
  );
}

export default App;
