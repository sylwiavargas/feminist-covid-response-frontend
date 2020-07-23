import React, { useState } from 'react';
import Button from '../components/Button';
import Legend from '../components/Legend';
import question from '../assets/images/question.png'

export default function ButtonsContainer({countries, categories, updateChosenCountry, updateChosenCategory, chosenCountry, chosenCategory, location}) {
    const [legend, displayLegend] = useState(false);

    return (
        <>
        <aside className='policyButtons'>
            <p>See </p>
            <Button
                text = { "countries" }
                items = { countries }
                updateChoice = { updateChosenCountry }
                chosen = { chosenCountry }
            />
            <Button
                text = { "categories" }
                items = { categories }
                updateChoice = { updateChosenCategory }
                chosen = { chosenCategory }

            />
            {
              location === "/response-tracker"

              ?

              <button
                className='legend-menu-button'
                onClick={ () => displayLegend(!legend) }>
                  See legend
                <img src={question} alt="question icon"/>
              </button>
              :
              null
            }
        </aside>
        {
            location === "/response-tracker" && legend
            ?
            <Legend />
            :
            null
        }
        </>
    )
}
