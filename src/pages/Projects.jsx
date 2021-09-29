import React from 'react';
import Navigationbar from '../components/Navigationbar';
import Dashboard from '../components/Dashboard';
import Footer from '../components/Footer';

class Projects extends React.Component {

   render() {
     return (
       <div>
         <Navigationbar />
         I am a Project
         <Dashboard/>
         <Footer/>
       </div>
     );
   }
 };

 export default Projects;