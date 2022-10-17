import React from 'react';
import classes from "./MyModal.module.css";

const MyModal = ({children, modal, setModal}) => {

    const rootClasses = [classes.myModal]

    if (modal) rootClasses.push(classes.active)

    return (
        <div
            className={rootClasses.join(' ')}
            onClick={() => setModal(false)}
        >
            <div
                className={classes.myModalContent}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default MyModal;