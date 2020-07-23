import React, { useState, useEffect } from 'react'
import ItemCard from '../components/ItemCard'
import Loader from '../components/Loader'
import ButtonsContainer from './ButtonsContainer';
import { fetchPage } from '../utils.js';
import { useTranslation } from "react-i18next";
import {response, online, resources} from '../assets/data/data-starter.js'


function ItemsContainer(props) {
    const { t } = useTranslation();

    const [ loaded, isLoaded ] = useState(false)
    const [ entries, updateEntries ] = useState([])
    const [ title, updateTitle ] = useState('')
    const [ countries, updateCountries ] = useState([])
    const [ categories, updateCategories ] = useState([])
    const [ chosenCountry, updateChosenCountry ] = useState('All')
    const [ chosenCategory, updateChosenCategory ] = useState('All')


    useEffect( () => {
      sectionTitle()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const sectionTitle = () => {
        let title;
        let data;
        switch (props.location.pathname) {
            case "/response-tracker":
                title = "Response Tracker";
                data = response;
                break
            case "/online-dialogues":
                title = "Online Dialogues"
                data = online;
                break
            case "/resources":
                title = "Resources"
                data = resources;
                break
            default:
                title = ""
        }

        updateEntries(data)
        updateTitle(title)
        getEntries(data)
        updateCountries(["Anglophone Africa", "Argentina", "Australia", "Austria", "Bahrain", "Bangladesh", "Belgium", "Bolivia", "Cambodia", "Canada", "Chile", "China", "Colombia", "Congo", "Costa Rica", "Cuba", "East Timor", "Ecuador", "Egypt", "El Salvador", "France", "Francophone Africa", "Ghana", "Global", "India", "Indonesia", "Iraq", "Jordan", "Kazakhstan", "Kenya", "Kyrgyzstan", "Latin America and the Caribbean", "Lebanon", "Malaysia", "Mexico", "Middle East and North Africa", "Myanmar", "Nicaragua", "Nigeria", "Panama", "Paraguay", "Peru", "Philippines", "Russia", "Rwanda", "Singapore", "South Africa", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Turkey", "Turkmenistan", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam"])
        updateCategories(["SRHR", "childcare", "digital surveillance", "disability", "economy", "education", "food", "gender-based violence", "gendered health impacts", "healthcare", "labor", "misinformation", "punitive", "race", "water"])

        return title;
    }

    const getEntries = async (cachedData) => {
        let location = props.location.pathname
        const data = await fetchPage(location);
        data ? isLoaded(true)  : isLoaded(false);
        let items = data.items
        updateEntries(entries.concat(items))
        let categories = data.available_categories
        updateCategories(categories)
        let countries = data.available_countries
        updateCountries(countries)
    }

    const filterEntriesByCountry = () => {
        let filteredEntries;
        if (chosenCountry !== "All"){

            filteredEntries =  entries.filter(entry => {
                if(entry.countries){
                  return entry.countries.some(country => {/*console.log(country); console.log(chosenCountry);*/ return country === chosenCountry
                     })
                } else {
                  return "unsure location"
                }
            })
        } else {
            filteredEntries = entries
        }
            return filteredEntries
    }

    const filterEntriesByCategory = (filteredEntries) => {
        let finishedFilteredArr;
        if (chosenCategory !== "All"){
            finishedFilteredArr =  filteredEntries.filter(item => {
                if (item.categories) {
                return item.categories.some(category => category === chosenCategory)
                } else {
                return null
                }
            })
        } else {
            finishedFilteredArr = filteredEntries
        }
        return finishedFilteredArr
    }

    return (
        <section className='ItemsContainer'>
          <section className='main-title'>
            <section>
              <h1> {t(title)} </h1>
            </section>
            {
                chosenCountry !== "All" || chosenCategory !== "All"
                ?
                <p className="filters-section"> {t("filters applied")}:&nbsp;
                        {chosenCountry !== "All"
                        ?
                        <span className="filter"
                        onClick={() => updateChosenCountry("All")}
                        >
                            {chosenCountry}
                            <i className="gg-close-r"></i>
                        </span>
                        : null}
                        {chosenCategory !== "All"
                        ?
                        <span className="filter"
                        onClick={() => updateChosenCategory("All")}
                        >
                            {chosenCategory}
                            <i className="gg-close-r"></i>
                        </span>
                        : null}
                </p>
                :
                null
            }
            <section className='buttons-and-items'>
              <aside className='buttons-container'>
                <ButtonsContainer
                    countries={ countries }
                    categories={ categories }
                    updateChosenCountry = { updateChosenCountry }
                    updateChosenCategory = { updateChosenCategory }
                    chosenCountry = { chosenCountry }
                    chosenCategory = { chosenCategory }
                    location={props.location.pathname}
                />
              </aside>

              <section id='policy-content'>

                  <ul>
                    {
                        filterEntriesByCategory(filterEntriesByCountry()).map((item)=>
                        <li key={item.title_en} className="single-item">
                            <ItemCard
                                item={item}
                                location={props.location.pathname}
                                language={props.language}
                            />
                        </li>)
                    }
                  </ul>

                  {
                    loaded

                    ?
                    null
                    :

                  <Loader />
                }
              </section>
            </section>

          </section>
        </section>
    )
}

export default ItemsContainer;
