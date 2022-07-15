import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'  
import { getFilterCategory } from '../Api'
import { Loader } from '../components/Loader'
import MeaList from '../components/MeaList'


export default function Category() {
    const {name} = useParams()
    const [meals, setMeals] = useState([])
   
    useEffect(() => {     
        getFilterCategory(name).then(data => setMeals(data.meals)) 
        },[name])

    return (
        <>
           {!meals.length ? <Loader /> : <MeaList meals={meals}/>}
        </>
    )
}