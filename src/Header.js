import React ,{ useState }from 'react'
import { Button } from '@material-ui/core';

export default function Header(props) {



  return (
    <div>
        <div className='cap'>
      <h1>SHOP</h1>
      <h3>магазин оргтехники</h3>
        </div>
        
        <div className='HeadSum'>
          <p >{} руб.
          <Button className='ButtonCart' variant="contained" onClick={props.cartClick} color="primary">CART</Button>
          </p>
        </div>
        </div>
  )
}
