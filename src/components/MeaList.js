import MealItem from "./MealItem"

function MeaList ({meals}) {
    return (
        <div className="list">
            {meals.map(meal => (
                <MealItem key={meal.idMeal} {...meal}/>
            ))}
        </div>
    )
}
export default MeaList