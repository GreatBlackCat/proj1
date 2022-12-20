import React from 'react'
import SendForm from "./SendFormComponent";
import { Button } from '@material-ui/core';
export default function DropMenu(props) {
  return (
    <div className='overlay'>
    <div onClick={props.cartClick} className='drawerShadow'></div>
    <div className='drawer'>
      <span>
        <h2>Корзина</h2>
        <Button color="secondary" onClick={props.cartClick} className='exit'>Назад</Button>
      </span>
      <div className='CartForm'>
        <h4>Количество</h4>
          <h4>Сумма : 190000 Р.</h4>
         <SendForm/>
      </div>
    </div>
  </div>
  )
}
