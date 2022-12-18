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

  const glassesProps = {
    item: "glasses",
    name: glassesName(),
    price: "SOLD OUT",
    images: "https://storage.googleapis.com/freeinquotespics/Glasses/FINAL%20GLASSES",
    link: "",
    description: glassesDescription()
  }

  const pantsProps = {
    item: "pants",
    name: "CLEAR POCKET CARGO PANTS",
    price: "$2000",
    images: "https://storage.googleapis.com/freeinquotespics/Pants/PANTS%20FINAL",
    link: "https://freeinquotes.myshopify.com/cart/43688198144283:1?channel=buy_button",
    description: pantsDescription()
  }

  const shirtProps = {
    item: "shirt",
    name: "EYE BUTTON-UP",
    price: "$500",
    images: "https://storage.googleapis.com/freeinquotespics/Shirt/SHIRT%20FINAL",
    link: "https://freeinquotes.myshopify.com/cart/43687923843355:1?channel=buy_button",
    description: shirtDescription()
  }

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
