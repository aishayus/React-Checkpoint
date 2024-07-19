import React from 'react'
import Product from './product'

const Price = ({price}) => {
  return (
    <>
    <div>
        {
            Product.map((x) => {
                return(
                <>
                    <h2>${x.price}</h2>
                </>
                )
        })
        }
    </div>
    </>
  )
}

export default Price