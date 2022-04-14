import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import { useTrail, animated as a } from "react-spring";
import './navbar.css';
const items = [<p className='itemsp'><a href="https://www.w3schools.com" target="_blank">Bruno de O. Santos</a></p>,
<p className='itemsp'><a href="https://www.linkedin.com/in/gabriel-s-de-abreu-a040161b7/" target="_blank">Gabriel S. de Abreu</a></p>,
<p className='itemsp'><a href="https://www.linkedin.com/in/leonardo-d-37328a12a/" target="_blank">Leonardo A. Nizer</a></p>,
<p className='itemsp'><a href="https://www.w3schools.com" target="_blank">Rafael C. Marodin</a></p>];
const config = { mass: 5, tension: 2000, friction: 200 };

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [show, setShow] = useState(false);
  const [toggle, set] = useState(true);
  const trail = useTrail(items.length, {
    config,
    from: { opacity: 1, x:0 },
    to: { opacity: toggle ? 0 : 1, x: toggle ? 0 : 10 }
  });
  function myFunction(){
    set(state => !state);
    setShow(!show);
}

return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt='Isee' />
        </div>
        <div className="gpt3__navbar-links_container" style={{gap:'20px'}}>
            <p><a href="#Header">Caso base</a></p>
            <p><a href="#Brand">Carga alta</a></p>
            <p><a href="#features">Carga baixa</a></p>
            <p><a href="#possibility">Contingências</a></p>
        </div>
    </div>

      <div className="gpt3__navbar-sign">
        <button type="button" onClick={() => myFunction()}>Quem somos?</button>
        
        {show?<form action="" className='funcaonome'>
            {trail.map(({ x, height, ...rest }, index) => (
              <a.div margin='0' padding ='0'
                key={items[index]}
                className="trails-text"
                style={{
                  ...rest,
                  transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
                }}
              >
                <a.div margin='0' padding ='0' left='20vw'>
                 {items[index]}
                </a.div>
              </a.div>
          ))}
        </form>:null};
        </div>
      
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Caso base</a></p>
            <p><a href="#wgpt3">Carga alta</a></p>
            <p><a href="#possibility">Carga baixa</a></p>
            <p><a href="#possibility">Contingências</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
          <button type="button" onClick={()=> setShow(!show)}>Quem somos?</button>
              {show?<p><a href="https://www.w3schools.com" target="_blank">Bruno de O. Santos</a></p>:null}
              {show?<p ><a href="https://www.linkedin.com/in/gabriel-s-de-abreu-a040161b7/" target="_blank">Gabriel S. de Abreu</a></p>:null}
              {show?<p><a href="https://www.linkedin.com/in/leonardo-d-37328a12a/" target="_blank">Leonardo A. Nizer</a></p>:null}
              {show?<p><a href="https://www.w3schools.com" target="_blank">Rafael C. Marodin</a></p>:null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;