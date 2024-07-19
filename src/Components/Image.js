import React from 'react'
import Product from './product'

const Image = ({img, name}) => {
  return (
    <>
    <div>
        {
            Product.map((x) => {
                return(
                <>
                    <img src={x.img} alt={name}></img>
                </>
                )
        })
        }
    </div>
    </>
  )
}

export default Image