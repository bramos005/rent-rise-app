import "./homepage.css";
import streetEasy from './images/streeteasy-img.png'
const Introduction = () => {
  return (
    <div className="introduction">
      <div className='intro-info'> 
        <h2 className="intro-heading">Understanding Gentrification in NYC</h2>
        <p className="intro-text">
          Through careful analysis of extensive StreetEasy data, we've extracted
          compelling insights into gentrification in NYC. See at a glance where
          the most significant changes are happening. Our visualizations bring
          data to life, highlighting key trends and providing a clear picture of
          the city's transformation.
              </p>{" "}
              
          </div>
          <figure style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <img className="street-easy" src={streetEasy} alt="streetEasyData" /> 
              <figcaption>*StreetEasy chart</figcaption>
            </figure>
          
      
    </div>
  );
};

export default Introduction;
