import React, {useState, useEffect} from 'react'
import styles from './TodosList.module.css';
import TodosListItem from '../TodosListItem/TodosListItem';


const TodosList = () => {
    const [isLoading,setIsLoading] = useState(false);
    const [todos,setTodos] = useState([]);
    useEffect (()=> {
        const fetchTodos = async () => {
            try{
                setIsLoading(true);

                const res = await fetch('https://jsonplaceholder.typicode.com//todos');
                const data = await res.json();
                setTodos(data);
            } catch {
                console.log('error');
            } finally {
                setIsLoading(false);
            }
            
        }
        fetchTodos();
    },[]);

    if (isLoading) {
        return (
            <div>
                Идет загрузка
            </div>
        )
    }
    
    return (
        <div className={styles.cards}>
            {todos.map(item => (
                <TodosListItem 
                    key={item.id} 
                    title={item.title}
                /> 
            ))}
        </div>
    )
}

export default TodosList