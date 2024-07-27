import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from './Navbar'
import TrendingSlider from './TredingSlider'


const Category = () => {
    const {name} = useParams()
    // console.log(useParams())

    const [data, setData] = useState([])

    useEffect(() => {
  
      const fetchData = async () => {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`)
        const data = await api.json();
  
        // console.log(data);
        setData(data.meals)
        // console.log(data)
      }
  
      fetchData();
    }, [name])
    

  return (
 <>
 <Navbar />
<div style={{
    width:'90%',
    margin:'auto',
    display:'grid',
    gridTemplateColumns:'repeat(auto-fit, minmax(15rem, 1fr))',
    gridGap:'1rem',
    marginTop:'2rem'

}}>


 {
    data.map((d)=>{
        return(
            <Link to={`/${d.idMeal}`} className='link'>
            <div style={{textAlign:'center'}}>
                <div className="img">
                    <img src={d.strMealThumb} style={{width:'13rem',boxShadow:'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}} />
                </div>
                 <h3>{d.strMeal}</h3>
            </div>
            </Link>
        )
    })
 }
 </div>

 <TrendingSlider />
 </>
  )
}

export default Category