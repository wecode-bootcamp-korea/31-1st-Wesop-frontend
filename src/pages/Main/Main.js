import React from 'react';
// import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import NavMenu from '../../components/Nav/Menu/NavMenu';
import Search from '../../components/Nav/Search/Search';

const Main = () => {
  return (
    <div className="Main">
      <Nav />
      {/* <Search /> */}
      <NavMenu />
      {/* <Footer /> */}
    </div>
  );
};

export default Main;
