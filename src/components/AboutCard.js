import React, {useState} from 'react';
import { useTranslation } from "react-i18next";


export default function PrincipleCardTranslated() {
    const { t } = useTranslation(["about"]);

    const [isActive, updateIsActive] = useState(false)

    const toggleClass = () => {
        updateIsActive(!isActive)
    }

    return (
        <div className="accordion-item" onClick={()=>toggleClass()}>
            <section className="blob-principle">
              <img src={require('../assets/images/orange-blob.png')} className="orange-blob" alt=""/>
              <a className={`${isActive ? "active" : null}`}>{t("subtitle")}</a>
            </section>
            <div className={`content ${isActive ? "active" : null}`}>
               <p className="principle-description"> {t("paragraph1")}</p>
               <p className="principle-description"> {t("paragraph2")}</p>
               <p className="principle-description"> {t("paragraph3")}</p>
            </div>
        </div>
    )
}
