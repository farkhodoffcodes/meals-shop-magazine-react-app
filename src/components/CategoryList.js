import CateegoryItem from "./CategoryItem"

function CategoryList({catalog = []}) {

    return (
        <div className="list">
            {catalog.map(el => (
                <CateegoryItem key={el.idCategory} {...el}/>
            ))}
        </div>
    )
}

export default CategoryList