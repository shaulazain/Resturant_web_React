import React from 'react'
import Layout from '../Components/layout/Layout'
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpeg";
import "../Styles/HomeStyles.css"
const Home = () => {
  return (

    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food In Pakistan</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>

    
    </Layout>
  )
}

export default Home