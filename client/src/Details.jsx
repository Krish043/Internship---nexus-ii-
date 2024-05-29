import React from 'react';
import './Details.css';
import img1 from './assets/img6.jpg'
import img2 from './assets/img3.jpg'
import img3 from './assets/img5.jpg'


const Details = ({ isLoggedIn }) => {
  return (
    <div className="details">
      {isLoggedIn ? (
        <>
        <p>Welcome to Flavor Fusion, where culinary mastery transforms every dish into a masterpiece. Embark on a journey through a world of taste, where innovation and tradition converge to redefine the art of dining. Indulge in an unforgettable experience where every bite tells a unique story. Here are the features that set our restaurant apart.</p>
         <div className="cards">
          <div className="card">
            <img src={img1} alt="" /> 
            <p><b><u>Ambiance</u></b></p>
            <p>Flavour Fusion offers a unique dining experience with diverse, innovative dishes crafted from the freshest ingredients in a warm, inviting atmosphere.</p>
          </div>
          <div className="card">
            <img src={img2} alt="" /> 
            <p><b><u>Variety</u></b></p>
            <p>Flavour Fusion offers an eclectic menu featuring a diverse array of expertly crafted dishes from around the world.</p>
          </div>
          <div className="card">
            <img src={img3} alt="" /> 
            <p><b><u>Desserts</u></b></p>
            <p>At Flavour Fusion, explore a diverse menu brimming with expertly crafted global dishes and indulgent desserts.</p>
          </div>
        </div>
        </>
      ) : (
        <>
              <p>"New summer menus available from may 15th"</p>
        <p>
          Login now to experience a realm where gastronomy transcends mere sustenance, where each bite is a revelation and each meal an adventure. Join us as we redefine the art of dining and immerse yourself in a culinary odyssey that will leave you craving more. Welcome to "Gastronomica Delights" – where every meal is a celebration of life's exquisite pleasures.
        </p>
        </>
      )}
    </div>
  );
};

export default Details;
