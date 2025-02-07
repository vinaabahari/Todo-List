import React from 'react';
import { FaTrash } from 'react-icons/fa';

function TodoListTugas({
    daftarTodoList,
    isSembunyikanTugasChecked,
    setDaftarTodoList,
}) {

    const handleDeleteTugas = (id) => {
        setDaftarTodoList(daftarTodoList.filter((tugas) => tugas.id !== id));
    };

    return (
        <section id='list'>
            {daftarTodoList.map((tugas) => {
                return ( 
                    <div 
                        className='row'
                        key={tugas.id}
                        style={{
                            display: isSembunyikanTugasChecked && tugas.checked ? "none" : "",
                        }}>
                        <div className='col-8 d-flex align-item-center ms-5'>
                            <input 
                                type='checkbox' 
                                className='form-check-input'
                                checked={tugas.checked}
                                onChange={() => {
                                    const handleUpdateTugasSelesai = () =>
                                        daftarTodoList.map((id) => 
                                            id.id === tugas.id ? {...id, checked: !id.checked} : id
                                        );
                                    setDaftarTodoList(handleUpdateTugasSelesai);
                                }} 
                            />
                            <label className={`ms-2 ${tugas.checked ? "done" : ""}`}>
                                {tugas.namaTugas}
                            </label>
                        </div>
                        <div className='col-2 text-center p-0'>
                            <button 
                                className='btn'
                                onClick={() => handleDeleteTugas(tugas.id)}                        
                            >
                                <FaTrash />
                            </button>
                        </div>
                    </div>
                )
            })}
        </section>
    );
}

export default TodoListTugas;