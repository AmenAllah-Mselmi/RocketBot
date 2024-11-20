import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='h-screen'>
      <Navbar  className=""/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Home
