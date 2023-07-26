import React from 'react'
import IndexNavbar from '../Navbar/IndexNavbar'
import IndexHeader from '../Header/IndexHeader'
import DarkFooter from '../Footer/DarkFooter'
import About from '../About/About'
const Index = () => {
  function setScrollVar() {
    const htmlElement = document.documentElement;
    const percentageOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
    htmlElement.style.setProperty("--scroll", Math.min(percentageOfScreenHeightScrolled*100, 100));
    console.log(Math.min(percentageOfScreenHeightScrolled*100, 100))
  }
  window.addEventListener("scroll", setScrollVar)
  window.addEventListener("resize", setScrollVar)
  setScrollVar()
  return (
    <>
    <IndexNavbar />
    <div className="wrapper">
    <IndexHeader />
    <About />
    <DarkFooter />
    </div>
    </>
  )
}

export default Index