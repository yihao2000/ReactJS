import { useQuery } from "@apollo/client";
import FruitCard from "../FruitCard/FruitCard";
import './FruitList.css'
import { FRUITS_QUERY } from '../../lib/queries/queries'


function FruitList(props) {
    const { favoriteArr = null, setFavoriteArr } = props

    const { loading, error, data } = useQuery(FRUITS_QUERY)

    // console.log(data)

    if (loading)
        return (
            <div className="d-flex justify-content-center mt-5">
                <div className="spinner-border text-light" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    const fruits = data.fruits;
    return (
        <div className="city-container">
            {fruits?.map(f => {
                if (favoriteArr && !favoriteArr.includes(f.id))
                    return ""
                else return < FruitCard fruit={f} key={f.id} setFavoriteArr={setFavoriteArr} />
            })}
        </div>
    )

}

export default FruitList