import React from 'react'
import Product from './product'

const Name = ({name}) => {
  return (
    <>
    <div>
        {
            Product.map((x) => {
                return(
                <>
                    <h1>{x.name}</h1>
                </>
                )
        })
        }
    </div>
    </>
  )
}

export default Name