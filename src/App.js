import './App.css';
import React from 'react';
import Header from './Header';
import ListContainer from './ListContainer';
import { useState } from 'react';
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";


function DeleteDialog(props) {
  return <div className={"backdrop"}>
    <div className="modal">
      Delete all completed items?
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
          Delete
        </button>
      </div>
    </div>
  </div>
}

function App(props) {

  const [isShowCompleted, setIsShowCompleted] = useState(true)
  const [tasks, setTasks] = useState(props.data)
  const [isShowDeleteDialog, setShowDeleteDialog] = useState(false);

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
    setTasks([...tasks,
      {
        id: generateUniqueID(),
        text: task,
        isCompleted: false
      }
    ]);  
  }

  function toggleModal() {
    setShowDeleteDialog(!isShowDeleteDialog)  
  }

  function handleDeleteById(id) {
    setTasks(tasks.filter(t => !(t.id === id)))
  }

  return (
    <div className="App">
      <Header
        onToggleShowCompleted={handleToggleShowCompleted}
        onToggleModal={toggleModal}
        onDeleteCompleted={handleDeleteCompleted}
        isShowCompleted={isShowCompleted}
      ></Header>
      <ListContainer
        items={tasks.filter(t => !t.isCompleted || isShowCompleted)}
        onChangeField={handleChangeField}
        onToggleItemCompleted={handleToggleItemCompleted}
        onAddNewTask={handleAddNewTask}
        onDeleteById={handleDeleteById}
      />
        {isShowDeleteDialog && <DeleteDialog onClose={toggleModal} onOK={handleDeleteCompleted}/>}
    </div>
  );
}

export default App;
