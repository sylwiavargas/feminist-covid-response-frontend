import React from 'react';
import { useTranslation } from "react-i18next";


export default function Button({text, items, updateChoice, chosen}) {    

    const { t } = useTranslation();

    const handleChoice = (e) => {        
        updateChoice(e.target.value)
    }    

    return (
        <>
          <select value={chosen} className='policyOption' onChange={(e) => handleChoice(e)}>
            <option  value="All"> {t("choose")} {t(`${text}`)} </option>
              {
                  items.map(item =>  <option value={item} key={item}>{t(`${item}`)}
                    </option>)
              }
          </select>
        </>
    )

}
