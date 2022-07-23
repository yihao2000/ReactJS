import FruitList from '../../components/CityList/FruitList'
import './HomePage.css'

function HomePage() {

    return (
        <div>
            <h1 className="d-flex justify-content-center text-light m-3 mt-5">Andrew Fruit Dictionary🍇</h1>
            <FruitList />

        </div>
    )
}

export default HomePage