import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import UsersListItem from '../../components/UsersListItem/UsersListItem';

const User = () => {
    const {id} = useParams();

    const [isLoading,setIsLoading] = useState(false);
    const [user,setUser] = useState([]);
    useEffect (()=> {
        const fetchUser = async () => {
            try{
                setIsLoading(true);

                const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
                const data = await res.json();
                setUser(data);
            } catch {
                console.log('error');
            } finally {
                setIsLoading(false);
            }
            
        }
        fetchUser();
    },[id]);

    if (isLoading) {
        return (
            <div>
                Идет загрузка
            </div>
        )
    }
    
    return (
        <UsersListItem 
            key={user.id} 
            id = {user.id} 
            name={user.name}
            phone={user.phone}
            website={user.website}
        /> 
    )

}

export default User