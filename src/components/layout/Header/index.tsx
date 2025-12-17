import styleHeader from "./Header.module.css";
import styleGlobalNavi from "./GlobalNavi.module.css";

import { useRef, useState } from "react";
import gsap from "gsap";

function Header() {

    const menuContentRef = useRef<HTMLDivElement>(null);
    const menuOverlayRef = useRef<HTMLDivElement>(null);
    const menuContentInnerRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        const menuContent = menuContentRef.current;
        const menuOverlay = menuOverlayRef.current;
        const menuContentInner = menuContentInnerRef.current;
        if (!menuContent || !menuOverlay || !menuContentInner) return;

        if(!isOpen){
            //  開く
            const menuTimeLine = gsap.timeline();
            menuTimeLine
            .to(menuOverlay,{display: "block"},"<")
            .to(menuOverlay,{autoAlpha: 1},"<")
            .to(menuContent, {display: "block"},"<")
            .to(menuContent,{autoAlpha: 1},"<")

            document.body.style.overflow = "hidden";
            setIsOpen(true);
        }else{
            //  閉じる
            const menuTimeLine = gsap.timeline();
            menuTimeLine
            .to(menuContent,{autoAlpha: 0},"<")
            .to(menuContent,{display: "none"},"<")
            .to(menuOverlay,{autoAlpha: 0},"<")
            .to(menuOverlay,{display: "none"},"<")

            document.body.style.overflow = "auto";
            setIsOpen(false);
        }
    }


    return (
        <header className={styleHeader.Header}>
            <div className={styleHeader.Header__Inner}>
                <div className={styleHeader.Header__Heading}>
                    <h1>introduction</h1>
                </div>
                <nav className={styleGlobalNavi.GlobalNavi}>
                    <button className={styleGlobalNavi.GlobalNavi__OpenButton} onClick={toggleMenu}><img src="/portfolio-1215/icon/menu.svg" alt="" /></button>
                    <div ref={menuContentRef} className={styleGlobalNavi.GlobalNavi__MenuContent}>
                        <div ref={menuOverlayRef} className={styleGlobalNavi.GlobalNavi__MenuContent__Overlay} onClick={toggleMenu}></div>
                        <div ref={menuContentInnerRef} className={styleGlobalNavi.GlobalNavi__MenuContent__Inner}>
                            <p ref={menuContentInnerRef} className={styleGlobalNavi.GlobalNavi__MenuContent__Close} onClick={toggleMenu}><img src="/portfolio-1215/icon/close.svg" alt="" /></p>
                            <ul className={styleGlobalNavi.GlobalNavi__List}>
                                <li><a href="#profile" className={styleGlobalNavi.GlobalNavi__Link} onClick={toggleMenu}>プロフィール</a></li>
                                <li><a href="#skill" className={styleGlobalNavi.GlobalNavi__Link} onClick={toggleMenu}>スキル</a></li>
                                <li><a href="#record" className={styleGlobalNavi.GlobalNavi__Link} onClick={toggleMenu}>作品</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
