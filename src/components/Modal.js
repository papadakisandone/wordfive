import styles from "./modal.module.css";
import {AiOutlineCloseCircle} from "react-icons/ai";
const Modal = (props)=>{

    const closeMOdalHandler = ()=>{
        props.onClose();
    }

    return <div className={styles.containerModal}>
    <div className={styles.content}>
        <div className={styles.xContainer}>
            <span className={styles.x} onClick={closeMOdalHandler}><AiOutlineCloseCircle/></span>
        </div>
        
        <div><h2>{props.title}</h2></div>
        <div><p>{props.message}</p></div>
        <div className={styles.btnContainer}><button className ={styles.btnClose} onClick={closeMOdalHandler}>Close</button></div>
    </div>
        
    </div>
}
export default Modal;