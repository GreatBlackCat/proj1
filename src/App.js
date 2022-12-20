
import './Header.css';
import React,{ useState} from 'react';
import Card from "./Card";
import Header from './Header';
import DropMenu from './DropMenu';

let mail="";

function App() {
  const [DropMenuOpened,SetDropMenu]=useState(false);
 

  return (
    <div>
    
    {DropMenuOpened ? <DropMenu cartClick={()=>SetDropMenu(false)}/> :null}
    <div className="Rect1">

    
    <header><Header cartClick={()=>SetDropMenu(true)}/>
    
    </header>
      
      <body >
      <div className='DIVCAT'>
        <h5 className='Catalog'>КАТАЛОГ</h5>
        </div>
        
        <div className='Cards'>
          <Card Img="./icons/1.jpg" Name="Принтер 1" Price={8999}/>
          <Card Img="./icons/2.jpg" Name="МФУ 1" Price={82999}/>
          <Card Img="./icons/3.jpg" Name="Принтер 2" Price={2999}/>
          <Card Img="./icons/4.webp" Name="Принтер 3" Price={13467}/>
          </div>
          <div className='Cards'>
          <Card Img="./icons/5.webp" Name="Принтер 4" Price={11700}/>
          <Card Img="./icons/6.jpg" Name="МФУ 2" Price={27000}/>
          <Card Img="./icons/7.jpg" Name="Принтер 5" Price={2554}/>
          <Card Img="./icons/8.jpg" Name="Принтер 6" Price={8009}/>
          </div>
          <div className='Cards'>
          <Card Img="./icons/9.jpg" Name="МФУ 3" Price={18499}/>
          <Card Img="./icons/10.jpg" Name="Принтер 7" Price={3450}/>
          <Card Img="./icons/11.jpg" Name="Принтер 8" Price={2300}/>
          <Card Img="./icons/12.jpg" Name="Принтер 9" Price={23600}/> 
          </div>
          <div className='Cards'>
          <Card Img="./icons/13.webp" Name="МФУ 4" Price={7000}/>
          <Card Img="./icons/14.webp" Name="Картридж 1" Price={675}/>
          <Card Img="./icons/15.jpg" Name="Картридж 2" Price={1500}/>
          <Card Img="./icons/16.jpg" Name="Картридж 3" Price={899}/> 
          </div>
          <div className='Cards'>
          <Card Img="./icons/17.jpg" Name="Картридж 4" Price={700}/>
          <Card Img="./icons/18.jpg" Name="Картридж 5" Price={1200}/>
          <Card Img="./icons/19.jpg" Name="Бумага 1" Price={300}/>
          <Card Img="./icons/20.jpg" Name="Бумага 2" Price={450}/>
        </div>
      </body>
    </div>
  </div>
  );
}

export default App;
