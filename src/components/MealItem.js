import { Link } from "react-router-dom"

function MealItem(props) {
    const {strMeal, strMealThumb, idMeal} = props

    return (
        <div className="card">
            <div className="card-image">
            <img src={strMealThumb} alt={strMeal}/>
            <a className="btn-floating halfway-fab waves-effect waves-light red">
            <i className="material-icons">add</i>
            </a>
            </div>
            <div className="card-content">
            <h3 className="card-title"><b>{strMeal}</b></h3>
            </div>
            <div className="card-action">
                <Link to={`/meal/${idMeal}`} className='btn'>
                    Watch Recipe
                </Link>
            </div>
      </div>
    )
}

export default MealItem