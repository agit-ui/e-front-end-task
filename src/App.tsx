import React, {useEffect, useState} from 'react';
import Topbar from './components/tobbar/Topbar';
import Nav from './components/Nav/nav';
import Scopebar from './components/scopebar/scope';
import Button from './components/button/customButton';
import Card from './components/card/card';
import styles from './App.module.css';

function App() {
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
            <div className={styles.body}>
                <Topbar />
                <Scopebar />
                <div className={styles["body-content"]}>
                  <p className={styles["body-title"]}> Pending Meets </p>
                  <div className={styles["button-container"]}>
                    <Button label = "All" state = "isActive"/>
                    <Button label = "Accepted" state = "inActive"/>
                    <Button label = "Rejected" state = "inActive"/>
                    <Button label = "Rescheduled" state = "inActive"/>
                  </div>
                  <div className={styles["card-holder"]}>
                    <Card 
                    name="Huixian"
                    date="23 May 2022"
                    time="7.00 pm - 10.00 pm"
                    location="Skai bar & lounge"
                    activity="Dinner"
                    remarks="Smart casual attire"
                    status="accept"/>
                  <Card 
                    name="Chloe"
                    date="23 May 2022"
                    time="7.00 pm - 10.00 pm"
                    location="Skai bar & lounge"
                    activity="Dinner"
                    remarks="Smart casual attire"
                    status="rejected"/>
                  <Card 
                    name="Cassia"
                    date="28 May 2022"
                    time="4.00 pm - 7.00 pm"
                    location="USS"
                    activity="Amusement Park"
                    remarks="Casual attire"
                    status="rescheduled"/>
                  </div>
                </div>
                <Nav />
            </div>
        );
    }

  return (
    <div className={styles.body}>
      <Topbar />
      <Nav />
      <div className={styles["body-content"]}>
        <Scopebar />
        <p className={styles["body-title"]}> Pending Meets </p>
        <div className={styles["button-container"]}>
          <Button label = "All" state = "isActive"/>
          <Button label = "Accepted" state = "inActive"/>
          <Button label = "Rejected" state = "inActive"/>
          <Button label = "Rescheduled" state = "inActive"/>
        </div>
        <div className={styles["card-holder"]}>
          <Card 
            name="Huixian"
            date="23 May 2022"
            time="7.00 pm - 10.00 pm"
            location="Skai bar & lounge"
            activity="Dinner"
            remarks="Smart casual attire"
            status="accept"/>
          <Card 
            name="Chloe"
            date="23 May 2022"
            time="7.00 pm - 10.00 pm"
            location="Skai bar & lounge"
            activity="Dinner"
            remarks="Smart casual attire"
            status="rejected"/>
          <Card 
            name="Cassia"
            date="28 May 2022"
            time="4.00 pm - 7.00 pm"
            location="USS"
            activity="Amusement Park"
            remarks="Casual attire"
            status="rescheduled"/>
        </div>
      </div>      
    </div>
  );
}

export default App;
