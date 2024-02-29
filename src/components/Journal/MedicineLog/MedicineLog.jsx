import React from "react";
import '../MedicineLog/MedicineLog.scss'
import Modal from "../Modal/Modal";
import { useState } from "react";

const MedicineLog =({ onSelect, isOpen, onClose })  => {

    // const [task, setTask] = useState ([]);
    // const [inputVal, setInputVal] = useState("");

    // function writeTask(e) {
    //     setInputVal(e.target.value)
    //     console.log(inputVal)
    // }

    // function addTask() {
    //     if (inputVal.trim() !== "") { 
    //         setTask((oldTask) => [...oldTask, inputVal]);
    //         setInputVal(""); 
    //     }
    // }

    // function delTask (taskIndex) {
    //     setTask((oldTask)=> 
    //         oldTask.filter((oldIndTask, oldIndTaskIndex ) =>{
    //             return oldIndTaskIndex != taskIndex;
    //         })
    //     );
    //     }

     return (

        <Modal  isOpen={isOpen} onClose={onClose}>


            {/* <div className="LogBox">
                <div className="data">
                    <input className="data__input" type="text" onChange={writeTask}></input>
                    <button className="data__button" type="submit" onClick={addTask}>+ ADD</button>
                </div>

                <div className="container">
               
                {
                    task.map((indTask, index) => {
                        return (
                            <div className="task" key={index}>
                                <p className="task__text">{indTask}</p>
                                <input className="task__checkBox" type="checkbox"></input>
                                <div className="task__action">
                                    <button onClick={() => delTask(index)} className="btn task__btn">Delete</button>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
                <button></button>
            </div> */}

        </Modal>
     )

}

// MedicineLog.propTypes = {
//     onSelect: PropTypes.func.isRequired,
//     isOpen: PropTypes.bool.isRequired,
//     onClose: PropTypes.func.isRequired,
//   };

export default MedicineLog