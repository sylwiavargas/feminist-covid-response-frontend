import React, { useState } from 'react';
import AboutCard from './AboutCard.js'
import { useTranslation } from "react-i18next";
import {orgs, coordination, database} from "../assets/data/appreciation.js"

export default function About(props){
    const { t } = useTranslation(["about"]);

    const [isActive, updateIsActive] = useState(false)

    const toggleClass = () => {
        updateIsActive(!isActive)
    }

    return (
      <section className='main-content'>
          <h1>{t("title")}</h1>
          <div className="about-section">
            <p className="about-intro">{t("intro")} </p>
            <img className="doodle-about" src={require('../assets/images/feminism-blob.png')} alt=""/>
          </div>
          <p className="about-intro intro-small">{t("second-intro")} </p>
{/* FIRST BULLET POINT  */}
          <div className="accordion">
              <AboutCard />
          </div>
{/* SECOND BULLET POINT  */}
          <div className="accordion">
            <div className="accordion-item" onClick={()=>toggleClass()}>
              <section className="blob-principle thanks">
                <img src={require('../assets/images/orange-blob.png')} className="orange-blob" alt=""/>
                <a className={`${isActive ? "active" : null}`}>{t("thanks")}</a>
              </section>
              <div className={`content ${isActive ? "active" : null}`}>
              <p className="about-intro">{t("app-intro")} </p>
          <section className='appreciation-section'>
            <ul>
              <h2>{t("devs")}</h2>
              <li><a href="https://github.com/luanesouza" target="_blank" rel="noopener noreferrer" className="dev-link">Annie Souza</a></li>
              <li><a href="https://github.com/sylwiavargas" target="_blank" rel="noopener noreferrer" className="dev-link">Sylwia Vargas</a></li>
            </ul>
            <ul>
              <h2>{t("database")}</h2>
              {
                database.map((d) => <li key={d}>{d}</li>)
              }
            </ul>
            <ul>
              <h2>{t("coordinators")}</h2>
              {
                coordination.map((c) => <li key={c}>{c}</li>)
              }
            </ul>
            <ul className='organizations'>
              <h2>{t("organizations")}</h2>
              {
                orgs.map((o) => <li key={o}>{o}</li>)
              }
            </ul>
          </section>
              </div>
        </div>
          </div>
      </section>
  )
}
