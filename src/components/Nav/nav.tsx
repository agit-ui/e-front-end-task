import React from 'react';
import styles from './nav.module.css';
import { ReactComponent as Home } from '../../assets/home.svg';
import { ReactComponent as Explore } from '../../assets/explore.svg';
import { ReactComponent as Feed } from '../../assets/feed.svg';
import { ReactComponent as Schedule } from '../../assets/schedule.svg';

const Nav = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 800;
    React.useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
         window.addEventListener("resize", handleResizeWindow);
         return () => {
           window.removeEventListener("resize", handleResizeWindow);
         };
       }, []);
       if (width < breakpoint) {
        return (
            <div className={styles.navbar}>
                <div className={styles["navbar-link"]}>
                    <Home />
                    <Explore />
                    <Feed />
                    <Schedule />
                </div>
            </div>
        );
      }
    return (
        <div className={styles.navbar}>
            <div className={styles["navbar-link"]}>
                <div className={styles["inActive"]}>
                    <p>Home</p>
                </div>
                <div className={styles["inActive"]}>
                    <p>Explore</p>
                </div>
                <div className={styles["inActive"]}>
                    <p>Feed</p>
                </div>
                <div className={styles["isActive"]}>
                    <p>Scheduled</p>
                </div>
            </div>
        </div>
    )
}

export default Nav
