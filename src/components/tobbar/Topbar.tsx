import React from "react";
import styles from './Topbar.module.css';
import Searchbar from '../searchbar/searchbar';
import { ReactComponent as Burger } from '../../assets/burger.svg';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Notifications } from '../../assets/Notifications.svg';
import { ReactComponent as Message } from '../../assets/message.svg';
import { ReactComponent as Setting } from '../../assets/control.svg';
import { ReactComponent as Avatar } from '../../assets/avatar.svg';
import { ReactComponent as LeftIcon } from '../../assets/leftIcon.svg';

const Topbar = () => {
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
            <div className={styles.topbar}>
                <LeftIcon />
                <p className={styles["top-label"]}>Meets</p>
            </div>
        );
      }
    return (        
        <div className={styles.topbar}>
            <div className={styles["topbar-container"]}>
                <div className={styles["topbar-elements-left"]}>
                    <Burger />
                    <div className={styles["topbar-logo"]}>
                        <Logo />
                    </div>
                </div>
                <div className={styles["topbar-elements-right"]}>
                    <div className={styles["topbar-icon"]}>
                        <Searchbar />
                    </div>
                    <div className={styles["topbar-icon"]}>
                        <Notifications />
                    </div>
                    <div className={styles["topbar-icon"]}>
                        <Message />
                    </div>
                    <div className={styles["topbar-icon"]}>
                        <Setting />
                    </div>
                    <div className={styles["topbar-icon"]}>
                        <Avatar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar