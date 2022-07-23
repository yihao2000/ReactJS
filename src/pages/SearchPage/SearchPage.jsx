import './SearchPage.css'
import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import FruitCard from '../../components/FruitCard/FruitCard'
import { FRUITS_QUERY } from '../../lib/queries/queries'


function SearchPage() {

    const [fruits, setFruits] = useState([])
    const [searchedFruits, setSearchedFruits] = useState([])

    const handleSearch = (e) => {
        if (e.target.value === '')
            setSearchedFruits([])
        else {
            const temp = fruits
            setSearchedFruits(temp.filter(fruit => fruit.fruit_name.toLowerCase().startsWith(e.target.value.toLowerCase())))
        }
    }

    const { loading, error, data } = useQuery(FRUITS_QUERY)

    useEffect(() => {
        if (!error && !loading) setFruits(data.fruits)
    }, [data])

    if (loading)
        return (
            <div className="d-flex justify-content-center mt-5">
                <div className="spinner-border text-light" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    return (
        <div>
            <h1 className="d-flex justify-content-center text-light m-3 mt-5">Search 👀</h1>
            <h4 className="d-flex justify-content-center subtilte m-3 mb-5 text-center">Search for any fruit you want to know more about</h4>

            <div className="search-page-container ">
                <div class="row height d-flex justify-content-center align-items-center">
                    <div class="col-md-6">
                        <div class="form">
                            <i class="fa fa-search"></i>
                            <input type="text" class="form-control form-input" placeholder="Search anything..." onChange={(e) => handleSearch(e)} />
                        </div>
                    </div>
                </div>
                <div className="city-container">
                    {searchedFruits.map(f => {
                        return (
                            <FruitCard fruit={f} key={f.id} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SearchPage

