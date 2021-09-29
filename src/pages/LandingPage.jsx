import React from 'react';
import Navigationbar from '../components/Navigationbar';
import Dashboard from '../components/Dashboard';
import Footer from '../components/Footer';

class LandingPage extends React.Component {

   render() {
     return (
       <div>
         <Navigationbar />
         <Dashboard/>
         I am a Landing Page
         <Footer/>
       </div>
     );
   }
 };

 export default LandingPage;