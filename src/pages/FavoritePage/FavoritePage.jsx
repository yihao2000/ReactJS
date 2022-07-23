import { useEffect, useState } from "react";
import FruitList from "../../components/CityList/FruitList";
import { getFavoriteFruits } from '../../services/fruitService'

function FavoritePage() {

    const [favoriteArr, setFavoriteArr] = useState(getFavoriteFruits())
    return (
        <div>
            <h1 className="d-flex justify-content-center text-light m-3 mt-5">Favorite 💜</h1>
            <h4 className="d-flex justify-content-center subtilte m-3 mb-5 text-center">Every Fruit🍇 you've marked as your favorite</h4>

            <FruitList favoriteArr={favoriteArr} setFavoriteArr={setFavoriteArr} />
        </div>
    )
}

export default FavoritePage