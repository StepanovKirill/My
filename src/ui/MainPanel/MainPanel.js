import React, {useState} from 'react';
import PropsTypes from 'prop-types';
import styles from './MainPanel.module.css';

const MainPanel = ({title, children}) => {
    const [collapsed, setCollapsed] = useState(true);

    const handleClick = () => {
        setCollapsed((prevState) => !prevState);
    };

    return (
        <div className={!collapsed ? styles.container : styles.containerCollapsed}>
            <div className={styles.caption} onClick={handleClick}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.toggle}/>
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};

MainPanel.propsType = {
    title: PropsTypes.string,
    children: PropsTypes.node,
};

export default MainPanel;