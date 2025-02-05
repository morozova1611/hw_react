import styles from './FirstComponent.module.css'

const FirstComponent = ({ userName }) => {

    return (
        <div className={styles.container}>
            {userName}
        </div>
    );
};

export default FirstComponent;