import React from 'react'
import styles from './TodosListItem.module.css'

const TodosListItem = (props) => {
  return (
    <div key={props.id} className={styles.item}>
        <h3>{props.title}</h3>
    </div>
  )
}

export default TodosListItem