import React from 'react'
import { NavLink } from "react-router-dom";

function Jobs({ jobs }) {



    return (
        <div>{
            jobs.map(items => {
                return (
                    <div className="main__block" key={items.id}>
                        <div className="main__cloumn">
                            <img className="main__avatar" src={items.pictures[1]} alt="avatar" />
                            <div className="main_text-block">
                                <h1><NavLink className="main__title" to={`/${items.id}`}>{items.title}</NavLink></h1>
                                <h2 className="main__name">Name company: {items.name}</h2>
                                <div className="main__block-location">
                                    <img src='img/Location.svg' alt="location" /><h2 className="main__location"> Address: {items.address}</h2>
                                </div>
                            </div>
                        </div>

                        <div className="main__block-end">
                            <img className="main__rating" src="img/Rating.svg" alt="rating" />

                            <div className="main__block-save">
                                <img className="main__save" src="img/Save.svg" alt="save" />
                                <p className="main__posted">Posted 2 day ago</p>
                            </div>

                        </div>

                        
                    </div>

                );
            })
        }</div>
    )
}

export default Jobs