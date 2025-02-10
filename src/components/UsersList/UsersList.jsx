import React, {useState, useEffect} from 'react'
import styles from './UsersList.module.css';
import UsersListItem from '../UsersListItem/UsersListItem';


const UsersList = () => {
    const [isLoading,setIsLoading] = useState(false);
    const [users,setUsers] = useState([]);
    useEffect (()=> {
        const fetchUsers = async () => {
            try{
                setIsLoading(true);

                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await res.json();
                setUsers(data);
            } catch {
                console.log('error');
            } finally {
                setIsLoading(false);
            }
            
        }
        fetchUsers();
    },[]);

    if (isLoading) {
        return (
            <div>
                Идет загрузка
            </div>
        )
    }
    
    return (
        <div className={styles.wrapper}>
            {users.map(item => (
                <UsersListItem 
                    key={item.id} 
                    id = {item.id} 
                    name={item.name}
                    phone={item.phone}
                    website={item.website}
                /> 
                //<UsersListItem {...item}/> // весь объект
            ))}
        </div>
    )
}

export default UsersList