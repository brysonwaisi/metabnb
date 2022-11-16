import MetaMask from "../assets/metamask.svg"
import WallectConnect from "../assets/wallet-connect.svg"
import styles from "./Modal.css";
import { RiCloseLine } from "react-icons/ri";
export default function Modal({ setIsOpen }) {
    return (
        <div className="modal">
            <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
            <div className={styles.centered}>
                <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <h3 className={styles.heading}>Connect Wallet</h3>
                    </div>
                    <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                        <RiCloseLine style={{ marginBottom: "-3px" }} />
                    </button>
                    <hr />
                    <div className={styles.modalContent}>
                        <p>Choose preferred Wallet</p>

                        <div className={styles.modalContent}>
                            <div className={styles.modal__choices}>
                                <img src={MetaMask} alt="" />
                                <p>Metamask</p>
                            </div>
                            <div className={styles.modal__choices}>
                                <img src={WallectConnect} alt="" />
                                <p>Metamask</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}