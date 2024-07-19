import React from 'react'
import Product from './product'

const Des = ({des}) => {
  return (
    <>
    <div>
        {
            Product.map((x) => {
                return(
                <>
                    <p>{x.des}</p>
                </>
                )
        })
        }
    </div>
    </>
  )
}

export default Des