import './App.css';
import Product1 from './product1/product1.js'
import Navbar from './NavBar/Navbar';
import Home from './Home/Home';
import Info from './Info/Info';
import Footer from './Footer/Footer';
import Contact from './Contact/Contact';
import Collection1 from './Collection1/Collection1'
import Recap from './Recap/Recap'
import product1css from './product1/product1.module.css';
import { Route, Routes } from "react-router-dom";
import shirt1 from "./SHIRTFINAL/shirt-1.jpg"
import shirt2 from "./SHIRTFINAL/shirt-2.jpg"
import shirt3 from "./SHIRTFINAL/shirt-3.jpg"
import shirt4 from "./SHIRTFINAL/shirt-4.jpg"
import shirt5 from "./SHIRTFINAL/shirt-5.jpg"
import shirt6 from "./SHIRTFINAL/shirt-6.jpg"
import shirt7 from "./SHIRTFINAL/shirt-7.jpg"
import shirt8 from "./SHIRTFINAL/shirt-8.jpg"
import shirt9 from "./SHIRTFINAL/shirt-9.jpg"
import shirt10 from "./SHIRTFINAL/shirt-10.jpg"
import shirt11 from "./SHIRTFINAL/shirt-11.jpg"
import shirt12 from "./SHIRTFINAL/shirt-12.jpg"
import shirt13 from "./SHIRTFINAL/shirt-13.jpg"
import shirt14 from "./SHIRTFINAL/shirt-14.jpg"
import shirt15 from "./SHIRTFINAL/shirt-15.jpg"
import shirt16 from "./SHIRTFINAL/shirt-16.jpg"
import pants1 from "./PANTSFINAL/pants-1.jpg"
import pants2 from "./PANTSFINAL/pants-2.jpg"
import pants3 from "./PANTSFINAL/pants-3.jpg"
import pants4 from "./PANTSFINAL/pants-4.jpg"
import pants5 from "./PANTSFINAL/pants-5.jpg"
import pants6 from "./PANTSFINAL/pants-6.jpg"
import pants7 from "./PANTSFINAL/pants-7.jpg"
import pants8 from "./PANTSFINAL/pants-8.jpg"
import pants9 from "./PANTSFINAL/pants-9.jpg"
import pants10 from "./PANTSFINAL/pants-10.jpg"
import pants11 from "./PANTSFINAL/pants-11.jpg"
import pants12 from "./PANTSFINAL/pants-12.jpg"
import pants13 from "./PANTSFINAL/pants-13.jpg"
import pants14 from "./PANTSFINAL/pants-14.jpg"
import pants15 from "./PANTSFINAL/pants-15.jpg"
import pants16 from "./PANTSFINAL/pants-16.jpg"
import glasses1 from "./FINALGLASSES/glasses-1.jpg"
import glasses2 from "./FINALGLASSES/glasses-2.jpg"
import glasses3 from "./FINALGLASSES/glasses-3.jpg"
import glasses4 from "./FINALGLASSES/glasses-4.jpg"
import glasses5 from "./FINALGLASSES/glasses-5.jpg"
import glasses6 from "./FINALGLASSES/glasses-6.jpg"
import glasses7 from "./FINALGLASSES/glasses-7.jpg"
import glasses8 from "./FINALGLASSES/glasses-8.jpg"
import glasses9 from "./FINALGLASSES/glasses-9.jpg"
import glasses10 from "./FINALGLASSES/glasses-10.jpg"
import glasses11 from "./FINALGLASSES/glasses-11.jpg"
import glasses12 from "./FINALGLASSES/glasses-12.jpg"
import glasses13 from "./FINALGLASSES/glasses-13.jpg"
import glasses14 from "./FINALGLASSES/glasses-14.jpg"
import glasses15 from "./FINALGLASSES/glasses-15.jpg"
import glasses16 from "./FINALGLASSES/glasses-16.jpg"


function App() {

  function glassesName(){
    return(
      <>
        <span>&#8220;</span>FREE<span>&#8221;</span> Glasses
      </>
    )
  }

  function pantsDescription(){
    return(
      <>
        <br></br>

        <p className={product1css.headline}> 

          Your pockets on the internet turn out to be transparent. 
          The adoption of mass surveillance makes it impossibly apparent. 
          These pants were made by me to show you how surveilled we truly are. 
          Do you desire "Safety"? "Privacy"? Or just a "Foreign" car?

        </p>

        <p className={product1css.information}>
          <br></br>
          <br></br>
          <br></br>
          One of One Final Piece 
          <br></br>
          (3 Prototypes Made)
          <br></br>
          34' Waist
          <br></br>
          20 Clear 3D Pockets
          <br></br>
          Premium Quality Fabric
          <br></br>
          Pants HANDMADE
          <br></br>
          BY: Richard Kauli
          <br></br>
          IN: Brooklyn, NY
        </p>
      </>
    )
  }

  function shirtDescription(){
    return(
    <>
        <br></br>

        <p className={product1css.headline}> 

          You live in a world where you are always being watched. 
          Whether that's your peers gossiping or conglomerates collecting 
          your data, all eyes are on you. 

        </p>

        <p className={product1css.information}>
          <br></br>
          <br></br>
          <br></br>
          Size LARGE
          <br></br>
          Magnetic, Self-Closing Closures. 
          <br></br>
          250 + Eyes
          <br></br>
          Premium Quality Fabric
          <br></br>
          Shirt HANDMADE
          <br></br>
          BY: Richard Kauli
          <br></br>
          IN: Brooklyn, NY
          <br></br>
        </p>
      </>
    )
  }
  
  function glassesDescription(){
    return(
    <>
        <br></br>

        <p className={product1css.headline}> 

          You live in a world where you are always being watched. 
          Whether that's your peers gossiping or conglomerates collecting 
          your data, all eyes are on you. 

        </p>

        <p className={product1css.information}>
          <br></br>
          <br></br>
          <br></br>
          One Size Fits Most
          <br></br>
          Material Used: Tinted Acrylic  
          <br></br>
          Glasses HAND-CUT
          <br></br>
          BY: Richard Kauli
          <br></br>
          IN: Brooklyn, NY
        </p>
      </>
    )
  }
  
  let shirts = [shirt1, shirt2, shirt3, shirt4, shirt5, shirt6, shirt7, shirt8, shirt9, shirt10, shirt11, shirt12, shirt13, shirt14, shirt15, shirt16];
  let pants = [pants1, pants2, pants3, pants4, pants5, pants6, pants7, pants8, pants9, pants10, pants11, pants12, pants13, pants14, pants15, pants16];
  let glasses = [glasses1, glasses2, glasses3, glasses4, glasses5, glasses6, glasses7, glasses8, glasses9, glasses10, glasses11, glasses12, glasses13, glasses14, glasses15, glasses16];

  const glassesProps = {
    item: "glasses",
    name: glassesName(),
    price: "SOLD OUT",
    images: glasses,
    link: "",
    description: glassesDescription()
  }

  const pantsProps = {
    item: "pants",
    name: "CLEAR POCKET CARGO PANTS",
    price: "$2000",
    images: pants,
    link: "https://freeinquotes.myshopify.com/cart/43688198144283:1?channel=buy_button",
    description: pantsDescription()
  }


  const shirtProps = {
    item: "shirt",
    name: "EYE BUTTON-UP",
    price: "$500",
    images: shirts,
    link: "https://freeinquotes.myshopify.com/cart/43687923843355:1?channel=buy_button",
    description: shirtDescription()
  }

  // let shirts = [shirt1, shirt2, shirt3, shirt4, shirt5, shirt6, shirt7, shirt8, shirt9, shirt10, shirt11, shirt12, shirt13, shirt14, shirt15, shirt16]

  return (
    <div className="App">

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Product2" element={<Product1 props={pantsProps}/>} />
          <Route path="/Product1" element={<Product1 props={glassesProps}/>}/>
          <Route path="/Product3" element={<Product1 props={shirtProps}/>} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Info" element={<Info />} />
          <Route path="/Collection1" element={<Collection1 />} />
          <Route path="/Recap" element={<Recap />} />
        </Routes>

        <Footer />

    </div>
  );
}

export default App;
