import * as React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './card.module.css';
import Button from '../button/customButton';
import { ReactComponent as ImageA } from '../../assets/image.svg';
import { ReactComponent as ImageB } from '../../assets/image63.svg';
import { ReactComponent as ImageC } from '../../assets/image193.svg';
import { ReactComponent as Accept } from '../../assets/accept.svg';
import { ReactComponent as Reject } from '../../assets/reject.svg';
import { ReactComponent as Reschedule } from '../../assets/reschedule.svg';

interface Detail {
    name: string;
    date: string;
    time: string;
    location: string;
    activity: string;
    remarks: string;
    status: string;
}
const card: React.FC<Detail> = ({name, date, time, location, activity, remarks, status}) => {
        const str: string = status;
    return (
        <Card className={styles["cardHolder"]}>
            <div className={styles["cardTitle-container"]}>
                {(str === "accept" ) ? 
                <div>
                    <Accept />
                </div> :  (str === "rescheduled") ? 
                <div>
                    <Reschedule />
                </div> : <div>
                    <Reject />
                </div>}
                <p className={styles["cardTitle"]}>{name} {status} the meet-up request</p>
            </div>
            <div className={styles["cardInfo"]}>
                <div className={styles["cardPicture"]}>
                    {(str === "accept" ) ? 
                    <div>
                        <ImageA />
                    </div> :  (str === "rescheduled") ? 
                    <div>
                        <ImageB />
                    </div> : <div>
                        <ImageC />
                    </div>}
                </div>
                <div>
                    <p>Date</p>
                    <p>Time</p>
                    <p>Location</p>
                    <p>Activity</p>
                    <p>Remarks</p>
                </div>
                <div className={styles["cardDetail"]}>
                    <p>{date}</p>
                    <p>{time}</p>
                    <p>{location}</p>
                    <p>{activity}</p>
                    <p>{remarks}</p>
                </div>
            </div>
            {(str === "accept" || str === "rescheduled") ? 
            <div className={styles["button-holder"]}>
                <Button label = "Confirm and Pay" state = "confirm"/>
            <div className={styles["bottom-button"]}>
                <Button label = "reschedule" state = "reschedule_cancel"/>
                <Button label = "Cancel Request" state = "reschedule_cancel"/>
            </div>
            </div> : 
            <div>
                <div className={styles["button-holder"]}>
                    <Button label = "OK" state = "ok"/>
                </div>
            </div>}
        </Card>
    )
}

export default card