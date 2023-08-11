import  React, { useState }  from 'react'
import Module from './Module.jsx'
import Navbar from './Navbar'
import Head from './Head.jsx'
import  './Main.css'
import Footer from './Footer.jsx'

function Home() {
  
  const [cart,setCart]=useState([]);

  
  return (
    <>
    <Navbar size={cart.length}/>
  <Head></Head> 

<div className="m1">
<Module 
img="https://thumbs.dreamstime.com/b/indian-saree-design-19704685.jpg"
name="Fancy Product"
price="$40.00 - $80.00"
/>

<Module 
img="https://i.pinimg.com/originals/98/61/42/9861420e2beb964c227011d9e11cd201.jpg"
name="Special Item"
price="$20.00"

/>
<Module
img="https://images.meesho.com/images/products/273546927/2rdep_512.webp"
name="Sale Item"
price="$25.00"
/>


<Module
img="https://www.kollybollyethnics.com/image/magictoolbox_cache/8c95d73fec130487c102a73bf1ab42ce/1/2/12374/thumb400x800/2669064752/Bollywood-model-off-white-georgette-lehenga-choli-kf1230.jpg"
name="Popular Item"
price="$40.00"
/>
</div>

<div className="m2">
<Module
img="https://assets.ajio.com/medias/sys_master/root/20230714/5Osd/64b06497a9b42d15c952fadb/-473Wx593H-466357080-multi-MODEL.jpg"
name="Sale Item"
price="$25.00"
/>
<Module
img="https://assets.ajio.com/medias/sys_master/root/20230519/u500/64677c2b42f9e729d79c0c11/-473Wx593H-466168870-red-MODEL.jpg"
name="Fancy Product"
price="$120.00 - $280.00"
/>


<Module
img="https://assets.ajio.com/medias/sys_master/root/20221103/BBJW/6362b744aeb269659c6c034c/-473Wx593H-441288689-green-MODEL.jpg"
name="Special Item"
price="$18.00"
/>


<Module
img="https://assets.ajio.com/medias/sys_master/root/20230802/jH4v/64c9f335eebac147fc9fb260/-473Wx593H-465194133-multi-MODEL.jpg"
name="Popular Item"
price="$40.00"
/>
</div>
<Footer/>
    </>
  )
}

export default Home