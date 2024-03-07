import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import socket from '../../config/socket';
import { fetchNotification } from '../../redux/slices/notitifaction.slice';
// import { MdNotificationsActive } from "react-icons/md";


const NotificationBox = () => {
    const icons = {
        notification: (
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clip-path="url(#clip0_101_18156)">
                    <path
                        d="M22.5549 13.6617L20.6549 6.82569C20.098 4.82302 18.8877 3.06398 17.2163 1.82816C15.5449 0.592343 13.5083 -0.0493232 11.4304 0.00515695C9.35244 0.0596371 7.35233 0.807137 5.74798 2.12884C4.14364 3.45054 3.02713 5.27059 2.57592 7.29969L1.10492 13.9147C0.942436 14.6456 0.946193 15.4037 1.11591 16.133C1.28563 16.8623 1.61699 17.5442 2.0855 18.1282C2.55402 18.7123 3.14774 19.1837 3.82283 19.5076C4.49792 19.8316 5.23714 19.9997 5.98592 19.9997H7.09992C7.32944 21.13 7.94265 22.1462 8.83566 22.8761C9.72867 23.606 10.8466 24.0047 11.9999 24.0047C13.1533 24.0047 14.2712 23.606 15.1642 22.8761C16.0572 22.1462 16.6704 21.13 16.8999 19.9997H17.7379C18.5087 19.9997 19.2691 19.8216 19.9597 19.4791C20.6502 19.1367 21.2523 18.6392 21.7187 18.0256C22.1852 17.4119 22.5035 16.6987 22.6487 15.9417C22.794 15.1847 22.7622 14.4044 22.5559 13.6617H22.5549ZM11.9999 21.9997C11.3817 21.9971 10.7793 21.8036 10.2752 21.4456C9.77115 21.0876 9.39 20.5826 9.18392 19.9997H14.8159C14.6098 20.5826 14.2287 21.0876 13.7246 21.4456C13.2206 21.8036 12.6182 21.9971 11.9999 21.9997ZM20.1259 16.8147C19.8473 17.1844 19.4862 17.4839 19.0715 17.6897C18.6568 17.8954 18.1998 18.0015 17.7369 17.9997H5.98592C5.53671 17.9996 5.09324 17.8987 4.68826 17.7043C4.28328 17.5099 3.92713 17.227 3.64608 16.8766C3.36504 16.5261 3.16628 16.1171 3.06448 15.6795C2.96268 15.242 2.96044 14.7872 3.05792 14.3487L4.52792 7.73269C4.88227 6.1389 5.75923 4.70929 7.01938 3.67114C8.27953 2.63298 9.85054 2.04586 11.4827 2.0031C13.1148 1.96035 14.7144 2.46441 16.0272 3.43516C17.34 4.40591 18.2906 5.78764 18.7279 7.36069L20.6279 14.1967C20.7535 14.6421 20.7735 15.1106 20.6863 15.565C20.5992 16.0195 20.4073 16.4473 20.1259 16.8147Z"
                        fill="#331C48"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_101_18156">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        )
    }
    const [notifications, setNotifications] = useState(false);

    const dispatch = useDispatch();
    const allNotification = useSelector((state) => state.notification.data);

    const seenNotitifcation = () => {
        setOpen(!open)
        socket.emit("seen");
        dispatch(fetchNotification());
    };
    console.log(allNotification);
    const [open, setOpen] = useState(false)

    useEffect(() => {
        socket.on("new", (data) => {
            console.log("New notification !!", data);
        dispatch(fetchNotification());

        });

        dispatch(fetchNotification());

        return () => {
            socket.off("new");
        };
    }, []);


    return (
        <div className="notification_box">
            {/* <div className="icon_box" style={{cursor:"pointer"}} onClick={seenNotitifcation}>{icons.notification}</div> */}

            <div className="icon_box" style={{ cursor: "pointer" }} onClick={seenNotitifcation}>
                {icons.notification}
                {/* <MdNotificationsActive style={{color:"gold"}}/> */}
            </div>
            {open &&
                <div className="notification_list" style={{ width: "300px" }}>
                    <button className="close_button" onClick={() => setOpen(false)}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <ul style={{ textAlign: "center", }}>
                        {allNotification.map((notification, index) => (
                            <li key={index} style={{ fontSize: "12px", cursor: "pointer" }}>{notification.title} </li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    );
};

export default NotificationBox;
