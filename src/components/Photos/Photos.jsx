import React, {useState, useEffect}  from 'react'
import { useParams } from 'react-router-dom'
import styles from './Photos.module.css'

const Photos = () => {
    const {id} = useParams();

    const [isLoading,setIsLoading] = useState(false);
    const [photos,setPhotos] = useState([]);
    useEffect (()=> {
        const fetchPhotos = async () => {
            try{
                setIsLoading(true);

                const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
                const data = await res.json();

                const filteredPhotos = data.filter(photo => photo.albumId === parseInt(id));
                setPhotos(filteredPhotos);
            } catch {
                console.log('error');
            } finally {
                setIsLoading(false);
            }
            
        }
        fetchPhotos();
    },[id]);

    if (isLoading) {
        return (
            <div>
                Идет загрузка
            </div>
        )
    }
    
    return (
        <div className={styles.wrapper}>
            {photos.map(photo => (
                    <div key={photo.id}>
                        <h3>{photo.title}</h3>
                        <img src={photo.url} alt={photo.title} />
                    </div>
                ))}
        </div>
    )
}

export default Photos