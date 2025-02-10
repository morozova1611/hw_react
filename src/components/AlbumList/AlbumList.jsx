import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import styles from './AlbumList.module.css'

const AlbumList = () => {
  const [isLoading,setIsLoading] = useState(false);
    const [albums,setAlbums] = useState([]);
    useEffect (()=> {
        const fetchAlbums = async () => {
            try{
                setIsLoading(true);

                const res = await fetch('https://jsonplaceholder.typicode.com/albums');
                const data = await res.json();
                setAlbums(data);
            } catch {
                console.log('error');
            } finally {
                setIsLoading(false);
            }
            
        }
        fetchAlbums();
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
            {albums.map(item => (
                <div key={item.id} className={styles.item}>
                <Link to={`/${item.id}/photos`}>
                <h4 className={styles.item_title}>{item.title}</h4>
                </Link>
            </div>
            ))}
        </div>
    )
}

export default AlbumList