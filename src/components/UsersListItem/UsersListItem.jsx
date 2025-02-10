import React from 'react'
import styles from './UsersListItem.module.css'
import { Link } from 'react-router-dom'

const UsersListItem = (props) => {
  return (
    <div key={props.id} className={styles.item}>
        <Link to={`/user/${props.id}`}>
        <h4 className={styles.item_title}>{props.name}</h4>
        </Link>
        <ul>
            <li>{props.phone}</li>
            <li>{props.website}</li>
        </ul>
    </div>
  )
}

export default UsersListItem