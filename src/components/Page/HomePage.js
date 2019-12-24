import React from 'react';
import Directory from '../elements/Directory';
import '../styles/homepage.styles.scss'
//only Homepage have history props passed in by route
const HomePage = () => (
  <div className= 'hompage'>
  <Directory/>
  </div>   
);


export default HomePage;