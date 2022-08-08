import { useRef, useState } from "react";
import { addTodo } from "../redux/todoSlice";
import { useDispatch, useSelector } from "react-redux";

function Layout() {
    const [ valueInput, setValueInput ] = useState('')
    const inputRef = useRef()
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)

    const handleAddTodo = () => {
        dispatch(addTodo(valueInput))
        setValueInput('')
        inputRef.current.focus()
    }

    return (
        <div className='todo'>
            <h3 className='todo__title'>Todo App</h3>
            <div className='todo__group'>
                <input 
                    type='text' 
                    className='mr-05' 
                    placeholder='Nhập tên công việc' 
                    value={valueInput}
                    onChange={ (e) => setValueInput(e.target.value)}
                    ref={inputRef}
                />
                <div 
                    className='todo__btn todo__btn--add'
                    onClick={handleAddTodo}
                >
                    <i className="fas fa-plus"></i>
                    Thêm
                </div>
            </div>
            <div className='todo__list'>
                {
                    todos.map((todo, index) => {
                        return (
                            <div className='todo__item' key={index}>
                                <input type='checkbox' />
                                <p className='todo__item__name'>{todo}</p>
                                <div className='todo__actions'>
                                    <div className='todo__btn todo__btn--update mr-05'>
                                        <i className="fas fa-pen"></i>
                                        Sửa
                                    </div>
                                    <div className='todo__btn todo__btn--delete'>
                                        <i className="fas fa-trash-alt"></i>
                                        Xóa
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Layout;
