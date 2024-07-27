import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate()
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${input}`);
    }
    return (
        <>
            <div className="nav">
                <div className="left">
                    <Link to='/' className='link'>
                        <h2>RecipeFinder</h2>
                    </Link>
                </div>
                <div className="search">
                    <form onSubmit={handleSubmit} className='search-name'>
                       
                        <input
                            onChange={(e) => setInput(e.target.value)}
                            type="text"
                            name='search'
                            placeholder="Search for recipes..."
                            required
                        />
                         <label htmlFor="search">Search</label>
                    </form>
                </div>
                <div className="right">
                    <Link to={`/category/indian`} className="linkn">
                        <div>Indian</div>
                    </Link>
                    <Link to={`/category/american`} className="linkn">
                        <div>American</div>
                    </Link>
                    <Link to={`/category/british`} className="linkn" >
                        <div>British</div>
                    </Link>
                    <Link to={`/category/chinese`} className="linkn">
                        <div>Chinese</div>
                    </Link>
                    <Link to={`/category/thai`} className="linkn">
                        <div>Thai</div>
                    </Link>


                </div>
            </div>
        </>
    )
}

export default Navbar