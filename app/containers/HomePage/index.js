/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { HomeWrapper } from './styles';
// import 'antd/lib/button/style/css';

export default function HomePage() {
  return (
    <HomeWrapper>
      <div className="loginregs">
        <h2>XYZ Admin</h2>
        <h1>Lorem ipsum dolor sit, amet consectetur</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel soluta
          nesciunt voluptatibus saepe repellat aut obcaecati rerum atque
          numquam, libero quam architecto sapiente magni, iste quo magnam earum
          provident itaque!
        </p>
        <div>
          <Link to="/login">
            <Button type="primary" size="large">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button size="large" className="register">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </HomeWrapper>
  );
}
