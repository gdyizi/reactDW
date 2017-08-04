/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import IndexBanner from './IndexBanner';
import IndexNav from './IndexNav';
import IndexTime from './IndexTime';
import IndexActive from './IndexActive';

const Footer = styled.ul`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align:center;
  background: #fff;
`;

const FooterLi = styled.li`
  -webkit-box-flex: 1;      
  -moz-box-flex: 1;         
  -ms-flex: 1;
  flex: 1; 
`;

const FooterNull = styled.div`
  height: 65px;
`;

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <IndexBanner />
        <IndexNav />
        <IndexTime/>
        <IndexActive/>
        <FooterNull/>
        <Footer>
          <FooterLi>首页</FooterLi>
          <FooterLi>分类</FooterLi>
          <FooterLi>实体店</FooterLi>
          <FooterLi>购物车</FooterLi>
          <FooterLi>我的</FooterLi>
        </Footer>
      </div>
    );
  }
}
