import React, { useState } from 'react';
import TodoTitle from './todoTitle';
import TodoInput from './todoInput';
import TodoListTugas from './todoListTugas';
import TodoHideList from './todoHideList';


function Container() {
    const[daftarTodoList, setDaftarTodoList] = useState([]);
    const [tugasBaru, setTugasBaru] = useState();
    const[isSembunyikanTugasChecked, setisSembunyikanTugasChecked] = useState(false); 
     
      
    return (
        <div className= "container">
            <TodoTitle/>
            <TodoInput 
            daftarTodoList={daftarTodoList} 
            setDaftarTodoList={setDaftarTodoList} 
            tugasBaru={tugasBaru} 
            setTugasBaru={setTugasBaru}/>
            <TodoListTugas
            daftarTodoList={daftarTodoList}
            isSembunyikanTugasChecked={isSembunyikanTugasChecked}
            setDaftarTodoList={setDaftarTodoList}
            />
            <TodoHideList
            daftarTodoList={daftarTodoList}
            isSembunyikanTugasChecked={isSembunyikanTugasChecked}
            setisSembunyikanTugasChecked={setisSembunyikanTugasChecked}
            />
        </div>
    );
}

export default Container;
