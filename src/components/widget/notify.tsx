import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import commomStyle from '../widget/common_style';

const styles = {...commomStyle, ...{
    panel: {
        maxWidth: "700px",
    },
    toast: {
        padding: '10px',
    }
}};

export default function NotifyPlace(){
    return(
        <div>
            <ToastContainer style={styles.panel} toastStyle={styles.toast} />
        </div>
    )
}

const notify = (message: string) => {
    toast(message);
}

export { notify }