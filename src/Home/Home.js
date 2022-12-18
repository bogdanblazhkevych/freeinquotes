import Homecss from './Home.module.css';
import loadingImage from './FEELFREE.png'
import { Link } from "react-router-dom";

export default function Home(){

    const onImageLoad = () => {

        async function delay(duration) {
            return new Promise((resolve) => {
              setTimeout(resolve, duration);
            });
          }
      
        async function loadText() { 

            const targetPageLoader = document.getElementById('pageloader');
            const body = document.querySelector("body");

            body.style.overflow = "hidden";
            body.style.position = "fixed";

            await delay(1500)

            targetPageLoader.style.opacity = "0%";

            await delay(1500);
            
            targetPageLoader.style.display = "none";
            body.style.position = "static";
            body.style.overflow = "auto";
        }
    
        loadText();
    }

    return(
        <div className={Homecss.homecontainer}>

            <div className={Homecss.pageloader} id="pageloader">

                <img className={Homecss.loadingimage} src={loadingImage} onLoad={onImageLoad} alt="Feel Free"></img>

            </div>

            <div className={Homecss.home} id="home">

                <Link to='./Product3' className={Homecss.box}>

                    <img className={Homecss.pic} src="https://storage.googleapis.com/freeinquotespics/Shirt/SHIRT%20FINAL/shirt-1.jpg" alt="Shirt"></img>

                </Link>

                <Link to='./Product2' className={Homecss.box}>

                    <img className={Homecss.pic} src="https://storage.googleapis.com/freeinquotespics/Pants/PANTS%20FINAL/pants-1.jpg" alt="Pants"></img>

                </Link>

                <Link to='./Product1' className={Homecss.box}>

                    <img className={Homecss.pic} src="https://storage.googleapis.com/freeinquotespics/Glasses/FINAL%20GLASSES/glasses-1.jpg" alt="shirt"></img>
                    
                </Link>

            </div>

        </div>
    )
}