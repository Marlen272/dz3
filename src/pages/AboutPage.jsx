import React from 'react';
import Description from '../components/Description';
import styles from './AboutPage.module.css';

const AboutPage = () => {
    const data = { title: "Title 2", description: "description 2" };

    return (
        <div className={styles.aboutPage}>
            <Description data={data} />
        </div>
    );
};

export default AboutPage;
