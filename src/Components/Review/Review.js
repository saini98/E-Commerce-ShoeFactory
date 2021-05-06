import React from 'react'
import './Review.css';
import SearchData from '../../data';
function Review() {
    return (<>
    
        {SearchData.products.map((val, key) => {
            return <div className="review-container mt-5" key={key}>
                <div className="left-container">
                    <div className="side-image">
                        <img src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" alt="" height={100} width={100} />
                    </div>
                    <div className="right-side ml-3" key="id">
                        <h1>Sahil Sani</h1>
                        <p>April 29, 2021</p>
                        <p className="ratings"> {val.ratings}</p>
                    </div>

                </div>
                <div className="right-container">
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
                </div>
            </div>
        })}
    </>
    )
}

export default Review
