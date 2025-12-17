import Header from "../../layout/Header/index";
import Main from "../../layout/Main/index";
import Footer from "../../layout/Footer/index";

import styles from "./Default.module.css";
import { Outlet } from "react-router-dom";

function DefaultTemplate() {
    return (
        <div className={styles.DefaultTemplate}>
            <Header />
            <Main><Outlet /></Main>
            <Footer />
        </div>
    )
}

export default DefaultTemplate
