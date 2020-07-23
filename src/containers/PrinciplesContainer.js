import React, {useState} from "react"
import { useTranslation } from "react-i18next";
import openFile from '../assets/images/open-file.png'

export default function PrinciplesContainer({language}) {

    const { t } = useTranslation('princ');

    const [isActive1, updateIsActive1] = useState(false)
    const [isActive2, updateIsActive2] = useState(false)
    const [isActive3, updateIsActive3] = useState(false)
    const [isActive4, updateIsActive4] = useState(false)
    const [isActive5, updateIsActive5] = useState(false)
    const [isActive6, updateIsActive6] = useState(false)

    const toggleClass = (num) => {
        switch (num) {
            case 1:
                updateIsActive1(!isActive1)
                break
            case 2:
                updateIsActive2(!isActive2)
                break
            case 3:
                updateIsActive3(!isActive3)
                break
            case 4:
                updateIsActive4(!isActive4)
                break
            case 5:
                updateIsActive5(!isActive5)
                break
            case 6:
                updateIsActive6(!isActive6)
                break
            default:
                return null
            }
        }

        const getUrl = () => {
          if(language === 'es' || language === 'en' || language === 'fr' || language === 'en-US' ) {
            return (
            <a href={require(`../assets/files/principles-${language}.pdf`)} target="_blank" rel="noopener noreferrer">
                <img id='openFile' src={openFile} alt='open-file-icon'/>
                <p>Open in PDF</p>
            </a>
            )
          } else {
            return (
            <a href={require(`../assets/files/principles-en.pdf`)} target="_blank" rel="noopener noreferrer">
              <img id='openFile' src={openFile} alt='open-file-icon'/>
              <p>Open in PDF</p>
            </a>
          )
          }
        }

    return (
        <section className="main-content">
            <h1 className="principles-title">{t("title")}</h1>
            <p className="principles-intro"><strong>{t("intro-strong")}</strong> {t("intro")}</p>
            {/* // eslint-disable-next-line */}
              <section className='openFileLink'>
              { getUrl()}
              </section>
            <div className="accordion">
    {/******************************* FIRST PRINCIPLE ******************************* */}
                <div className="accordion-item" onClick={()=>toggleClass(1)}>
                    <section className="blob-principle">
                        <img src={require("../assets/images/orange-blob.png")} className="orange-blob" alt=""/>
                        <a className={`${isActive1 ? "active" : null}`}>{t("first")}</a>
                    </section>
                    <div className={`content ${isActive1 ? "active" : null}`}>
                        <p className="principle-description">{t("first-description")}</p>
                            <ul>
                                <li className="principle-item">{t("first-1")}</li>
                                <li className="principle-item">{t("first-2")}</li>
                                <li className="principle-item">{t("first-3")}</li>
                                <li className="principle-item">{t("first-4")}</li>
                                <li className="principle-item">{t("first-5")}</li>
                                <li className="principle-item">{t("first-6")}</li>
                            </ul>
                    </div>
                </div>
{/******************************* SECOND PRINCIPLE ******************************* */}
                <div className="accordion-item" onClick={()=>toggleClass(2)}>
                    <section className="blob-principle">
                        <img src={require("../assets/images/orange-blob.png")} className="orange-blob" alt=""/>
                        <a className={`${isActive2 ? "active" : null}`}>{t("second")}</a>
                    </section>
                    <div className={`content ${isActive2 ? "active" : null}`}>
                        <p className="principle-description">{t("second-description")}</p>
                            <ul>
                                <li className="principle-item">{t("second-1")}</li>
                                <li className="principle-item">{t("second-2")}</li>
                                <li className="principle-item">{t("second-3")}</li>
                                <li className="principle-item">{t("second-4")}</li>
                                <li className="principle-item">{t("second-5")}</li>
                                <li className="principle-item">{t("second-6")}</li>
                                <li className="principle-item">{t("second-7")}</li>
                                <li className="principle-item">{t("second-8")}</li>
                            </ul>
                    </div>
                </div>
{/******************************* THIRD PRINCIPLE ******************************* */}
                <div className="accordion-item" onClick={()=>toggleClass(3)}>
                    <section className="blob-principle">
                        <img src={require("../assets/images/orange-blob.png")} className="orange-blob" alt=""/>
                        <a className={`${isActive3 ? "active" : null}`}>{t("third")}</a>
                    </section>
                    <div className={`content ${isActive3 ? "active" : null}`}>
                        <p className="principle-description">{t("third-description")}</p>
                        <p className="principle-description">{t("third-description-1")}</p>
                            <ul>
                                <li className="principle-item">{t("third-1")}</li>
                                <li className="principle-item">{t("third-2")}</li>
                                <li className="principle-item">{t("third-3")}</li>
                                <li className="principle-item">{t("third-4")}</li>
                                <li className="principle-item">{t("third-5")}</li>
                                <li className="principle-item">{t("third-6")}</li>
                                <li className="principle-item">{t("third-7")}</li>
                            </ul>
                    </div>
                </div>
{/******************************* FOURTH PRINCIPLE ******************************* */}
                <div className="accordion-item" onClick={()=>toggleClass(4)}>
                    <section className="blob-principle">
                        <img src={require("../assets/images/orange-blob.png")} className="orange-blob" alt=""/>
                        <a className={`${isActive4 ? "active" : null}`}>{t("fourth")}</a>
                    </section>
                    <div className={`content ${isActive4 ? "active" : null}`}>
                        <p className="principle-description">{t("fourth-description")}</p>
                        <p className="principle-description">{t("fourth-description-second")}</p>
                            <ul>
                                <li className="principle-item">{t("fourth-1")}</li>
                                <li className="principle-item">{t("fourth-2")}</li>
                                <li className="principle-item">{t("fourth-3")}</li>
                            </ul>
                    </div>
                </div>
{/******************************* FIFTH PRINCIPLE ******************************* */}
                <div className="accordion-item" onClick={()=>toggleClass(5)}>
                    <section className="blob-principle">
                        <img src={require("../assets/images/orange-blob.png")} className="orange-blob" alt=""/>
                        <a className={`${isActive5 ? "active" : null}`}>{t("fifth")}</a>
                    </section>
                    <div className={`content ${isActive5 ? "active" : null}`}>
                        <p className="principle-description">{t("fifth-description")}</p>
                            <ul>
                                <li className="principle-item">{t("fifth-1")}</li>
                                <li className="principle-item">{t("fifth-2")}</li>
                                <li className="principle-item">{t("fifth-3")}</li>
                                <li className="principle-item">{t("fifth-4")}</li>
                                <li className="principle-item">{t("fifth-5")}</li>
                            </ul>
                    </div>
                </div>
{/******************************* SIXTH PRINCIPLE ******************************* */}
                <div className="accordion-item" onClick={()=>toggleClass(6)}>
                    <section className="blob-principle">
                        <img src={require("../assets/images/orange-blob.png")} className="orange-blob" alt=""/>
                        <a className={`${isActive6 ? "active" : null}`}>{t("sixth")}</a>
                    </section>
                    <div className={`content ${isActive6 ? "active" : null}`}>
                        <p className="principle-description">{t("sixth-description")}</p>
                            <ul>
                                <li className="principle-item">{t("sixth-1")}</li>
                                <li className="principle-item">{t("sixth-2")}</li>
                                <li className="principle-item">{t("sixth-3")}</li>
                            </ul>
                    </div>
                </div>
{/* END OF PRINCIPLES */}
            </div>
        </section>
    )
}
