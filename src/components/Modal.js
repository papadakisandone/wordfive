import {useState} from "react";
import styles from "./modal.module.css";
import {AiOutlineCloseCircle} from "react-icons/ai";


const Modal = (props)=>{
    const [showModal, setShowModal]=useState(props.showModal)

    const closeModalHandler = ()=>{
        setShowModal(false);
    }

    return <div className={`${styles.containerModal} ${showModal && styles.activeModal}` }>
    <div className={styles.content}>
        <div className={styles.xContainer}>
            <span className={styles.x} onClick={closeModalHandler}><AiOutlineCloseCircle/></span>
        </div>
        <div className={styles.title}><h2>{props.title}</h2></div>
        <div><p>{props.message}<span className={styles.solution}>{props.solution}</span></p></div>
        <div className={styles.btnContainer}><button className ={styles.btnClose} onClick={closeModalHandler}>Close</button></div>
    </div>
        
    </div>
}
export default Modal;