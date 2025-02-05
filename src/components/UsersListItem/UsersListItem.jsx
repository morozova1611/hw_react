import React from 'react'
import styles from './UsersListItem.module.css'

const UsersListItem = (props) => {
  return (
    <div key={props.id} className={styles.item}>
        <h4 className={styles.item_title}>{props.name}</h4>
        <ul>
            <li>{props.phone}</li>
            <li>{props.website}</li>
        </ul>
    </div>
  )
}

export default UsersListItem