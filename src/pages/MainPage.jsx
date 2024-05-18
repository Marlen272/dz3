import React from 'react';
import Description from '../components/Description';
import styles from './MainPage.module.css';

const MainPage = () => {
    const data = { title: "Title", description: "description" };

    return (
        <div className={styles.mainPage}>
            <Description data={data} />
        </div>
    );
};

export default MainPage;
