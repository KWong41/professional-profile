import React from 'react';
import Navigationbar from '../components/Navigationbar';
import DashBoard from '../components/Dashboard';
import Footer from '../components/Footer';

class Blog extends React.Component {

   render() {
     return (
       <div>
         <Navigationbar />
         <DashBoard/>
         I am a Blog
         <Footer/>
       </div>
     );
   }
 };

 export default Blog;