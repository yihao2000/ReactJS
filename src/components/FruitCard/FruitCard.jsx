import { Link } from 'react-router-dom'
import './FruitCard.css'
import { isFavorite, changeFavorite, getFavoriteFruits } from '../../services/fruitService'
import { useState } from 'react'


function FruitCard(props) {

    const { fruit, setFavoriteArr = null } = props
    const [favorite, setFavorite] = useState(isFavorite(fruit.id))

    const handleFavoriteButton = (id) => {
        changeFavorite(id);
        setFavorite(isFavorite(id))
        setFavoriteArr && setFavoriteArr(getFavoriteFruits())
    }
    return (
        <div className="card text-dark mb-3 city-card" key={fruit.id}>
            <h2 className="card-header">
                <p>{fruit.fruit_name}, {fruit.id}</p>
                {
                    (!favorite) ?
                        <button className="btn btn-outline-danger" onClick={() => handleFavoriteButton(fruit.id)}><i class="fa-regular fa-heart"></i></button>
                        : <button className="btn btn-danger" onClick={() => handleFavoriteButton(fruit.id)}><i class="fa-solid fa-heart"></i></button>
                }
            </h2>
            <div className="card-body city-content">
                <div className="city-card-body">
                   
                    <div>
                        <p className="card-title"><span className='font-weight-bold text-uppercase'>Scientific name : </span>{fruit.scientific_name}</p>
                        <p className="card-text"><span className='font-weight-bold text-uppercase'>Family : </span>{fruit.family}</p>
                        <p className="card-subtitle"><span className='font-weight-bold text-uppercase'>Origin : </span>{fruit.origin}</p>
                    </div>
                </div>

            </div>
            <Link to={`/detail/${fruit.id}`} className="btn btn-outline-info mt-3">Details</Link>
        </div>
    )
}
export default FruitCard