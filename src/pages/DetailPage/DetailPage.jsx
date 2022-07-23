import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './DetailPage.css'
import { isFavorite, changeFavorite } from '../../services/fruitService'
import { useQuery } from '@apollo/client'
import { FRUIT_QUERY } from '../../lib/queries/queries'
import FruitList from '../../components/CityList/FruitList'


function DetailPage() {
    let { id } = useParams()

    const { loading, error, data } = useQuery(FRUIT_QUERY, { variables: { i: id } })


    if (loading)
        return (
            <div className="d-flex justify-content-center mt-5">
                <div className="spinner-border text-light" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )


    const fruit = data.fruit;
    console.log(data)
    return (
        <div className="detail-container container">
            <div className="card text-dark">
                <div className="card-header detail-title">
                    <h2>{fruit.fruit_name}, {fruit.id}</h2>
                </div>
                <div className="card-body">
                    <h5 className="card-subtitle mb-4 text-muted">{fruit.description}</h5>
                    <p className='text-muted'> <span className='text-dark font-weight-bold text-uppercase'>Scientific name</span> : {fruit.scientific_name}</p>
                    <p className='text-muted'> <span className='text-dark font-weight-bold text-uppercase'>Family</span> : {fruit.family}</p>
                    <p className='text-muted'> <span className='text-dark font-weight-bold text-uppercase'>Ogirin</span> : {fruit.origin}</p>
                    <p className='text-dark font-weight-bold text-uppercase'> Producing countries :</p>
                    {fruit.producing_countries.map(c => (
                        < div className="btn btn-outline-info m-2" > {c.country}</div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default DetailPage