import React from 'react';
import styled from 'styled-components';

const IndexNavUl = styled.ul`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
	display: flex;
	padding: 5px 0;
  width: 100%;
  height: 65px;
  line-height: 75px;
  text-align:center;
  background: #fff;
`;

const IndexNavLi = styled.li`
  -webkit-box-flex: 1;      
  -moz-box-flex: 1;         
  -ms-flex: 1;
  flex: 1; 
`;

const IndexNavImg	= styled.img`
	width: 100%;
`;

export default class IndexNav extends React.PureComponent {
  render() {
		return (
			<IndexNavUl>
				<IndexNavLi>
					<IndexNavImg src={require('./nav.png')} alt=""/>
				</IndexNavLi>
				<IndexNavLi>
					<IndexNavImg src={require('./nav.png')} alt=""/>
				</IndexNavLi>
				<IndexNavLi>
					<IndexNavImg src={require('./nav.png')} alt=""/>
				</IndexNavLi>
				<IndexNavLi>
					<IndexNavImg src={require('./nav.png')} alt=""/>
				</IndexNavLi>
				<IndexNavLi>
					<IndexNavImg src={require('./nav.png')} alt=""/>
				</IndexNavLi>
			</IndexNavUl>
		)
	}
} 