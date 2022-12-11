import * as React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './searchbar.module.css'
import { ReactComponent as Search } from '../../assets/search.svg';

const searchbar = () => {
    return (
        <Card className={styles.searchbar}>
            <div className={styles["searchbar-container"]}>
                <Search />
                <p className={styles["searchbar-label"]}>Search</p>
            </div>
        </Card>
    )
}

export default searchbar