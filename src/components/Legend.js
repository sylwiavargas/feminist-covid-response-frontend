
import React from 'react';
import { useTranslation } from "react-i18next";
import regressive from '../assets/images/mobile-regressive.png';
import progressive from '../assets/images/mobile-progressive.png';
import neutral from '../assets/images/mobile-neutral.png';


export default function Legend() {

    const { t } = useTranslation(['legend']);

    return (
        <aside className="legend-section">
            <p className="legend-types-p">{t("TYPES")}:</p>
            <ul className="legend-ul">
                <li>{t("Observed response")} - {t("observered responses to COVID by people and communities")} </li>
                <li>{t("Temporary measure")} - {t("measures put in place by Governments as a temporary response to COVID")} </li>
                <li>{t("Law or Policy")} - {t("law enacted by a Government in response to COVID")}</li>
            </ul>
            <p className="legend-icons-p">{t("ICONS:")}</p>
            <img src={progressive} className="legend-tracker-doodles" alt="progressive action icon"/><span>{t("Progressive action")}</span><br/>
            <img src={regressive} className="legend-tracker-doodles" alt="regressive action icon"/><span>{t("Regressive action")}</span><br/>
            <img src={neutral} className="legend-tracker-doodles" alt="neutral action icon"/><span>{t("Neutral or 'too early to tell'")}</span><br/>

        </aside>
    )
}
