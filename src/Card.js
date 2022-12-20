import React,{useState} from 'react';
import Button from '@material-ui/core/Button';



export default function Card(props){
  const [Count,SetCount]=useState(0);
  return (
    <div className='productCard'>
           <img src={props.Img} />
            <div>
              <p>{props.Name}</p>
              <p>{props.Price}</p>
              <p>
              <Button color="secondary" onClick={()=>SetCount(Count-1)}>-</Button>
              {Count}
              <Button color="secondary" onClick={()=>SetCount(Count+1)}>+</Button>
              </p>
            </div>
      </div>
  )
  };
