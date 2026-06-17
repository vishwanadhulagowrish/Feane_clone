import React from 'react';
import Nav_bar from './components/Nav_bar';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';
import BookTable from './components/BookTable';
import Menu from './components/Menu';
const App = () => {
  return <>
  <Nav_bar/>
  <Section1></Section1>
  <Section2></Section2>
  <Menu></Menu>
  <Section3></Section3>
  <BookTable></BookTable>
  <Testimonial></Testimonial>
  <Footer></Footer>
  </>
};
export default App;