import React from 'react';
import initialState from '../../data';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { IoIosCart } from "react-icons/io";
import { Link } from 'react-router-dom'
import './Search.css';

function Search() {

    let [searchItem, setSearchItem] = useState('')
    const { id } = useParams();
    const [quantity] = useState(1);

    const dispatch = useDispatch();
    const { product } = useSelector(state => state.ProductReducer);

    useEffect(() => {
        dispatch({ type: 'PRODUCT_DETAILS', id })
    }, [id])
    return (
        <div>

            <div>
                {/* <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8565d428314945.5637301ac6d63.png" width={1300} height={400} /> */}
                <div className="w-100 shoe">
                <div className="input-group w-50 mt-5  mx-auto  ">

                    <input type="text" className="form-control search-text " placeholder="🔎 Search...." aria-label="Recipient's username" aria-describedby="button-addon2" onChange={event => { setSearchItem(event.target.value) }} />

                    </div>
                </div>
                

                <div className="main-container ml-5" >
                    {initialState.products.filter((product) => {

                        if (searchItem === "") {
                            return product;
                        }
                        else if
                            (product.title.toLowerCase().includes(searchItem.toLowerCase())) {
                            return product
                        }
                    }).map((product, key) => {
                        return (




                            <div className="container1 ml-3" key={key}>
                                <div className="img-product">
                                    <img src={product.image} alt="" className="image" height={150} width={150} />
                                    <button className="button" onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } })} ><IoIosCart /><span>Add-to-Cart</span></button>
                                </div>

                                <div className="text-product">
                                    <Link to={`/product-details/${product.id}`} className="title-link">
                                        <h1 className="title">{product.title}</h1>
                                    </Link>
                                    <span className="ratings">{product.ratings}</span>
                                    {/* <span className = "fa fa-star text-warning"><IoIosStarOutline /></span>   */}
                                    <p>₹ {product.price}</p>
                                </div>
                            </div>
                       


                )
                         
                })}
             </div>

            </div>
        </div>
    )
}

export default Search
