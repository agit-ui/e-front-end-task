import * as React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './scope.module.css'

const Scope = () => {
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
            <div className={styles.scopebar}>
                    <div className={styles["inActive"]}>
                        <p>All</p>
                    </div>
                    <div className={styles["inActive"]}>
                        <p>Upcoming Meet</p>
                        <p className={styles["sum-notif"]}>1</p>
                    </div>
                    <div className={styles["isActive"]}>
                        <p>Pending Meets</p>
                        <p className={styles["sum-notif"]}>3</p>
                    </div>
                    <div className={styles["inActive"]}>
                        <p>Post Meets</p>
                    </div>
            </div>
        );
      }
    return (
        <Card className={styles.scopebar}>
                <div className={styles["inActive"]}>
                    <p>All</p>
                </div>
                <span className={styles["divider"]}></span>
                <div className={styles["inActive"]}>
                    <p>Upcoming Meet</p>
                    <p className={styles["sum-notif"]}>1</p>
                </div>
                <span className={styles["divider"]}></span>
                <div className={styles["isActive"]}>
                    <p>Pending Meets</p>
                    <p className={styles["sum-notif"]}>3</p>
                </div>
                <span className={styles["divider"]}></span>
                <div className={styles["inActive"]}>
                    <p>Post Meets</p>
                </div>
        </Card>
    )
}

export default Scope