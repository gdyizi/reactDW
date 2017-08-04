import React from 'react';
import styled from 'styled-components';

const IndexActAll = styled.div`
	position: relative;
	margin-top: 10px;
	min-height: 35px;
	background: #fff;
	overflow: hidden;
`;

const IndexActTop = styled.div`
	margin: 0 auto;
	width: 100%;
	height: 175px;
	overflow: hidden;
	position: relative;
`;

const IndexActImg = styled.img`
	width: 100%;
	height: 100%;
`;

const IndexActJian = styled.div`
	position: absolute;
	top: 160px;
	left: 46%;
	width: 20px;
	height: 15px;
`;

const IndexActList = styled.div`
	margin: 5px 0 5px 5px;
	overflow: auto;
`;

const IndexActUl = styled.ul`
	white-space: nowrap;
  font-size: 0;
`;

const IndexActLi = styled.li`
	margin-right: 5px;
	display: inline-block;
  text-align: center;
  width: 110px;
  vertical-align: top;
`;

const IndexTimeDiv = styled.div`
	margin: 0 auto;
	width: 100px;
	height: 100px;
	border: 1px solid #e3e3e3;
`;

const IndexTimeImg = styled.img`
	width: 100%;
	height: 100%;
`;

const IndexTimeName = styled.div`
	padding: 0 10px;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
	white-space: pre-wrap;
	font-size: 12px;
	color: #3f3f3f;
`;

const IndexTimePrice = styled.div`
	margin-top: 5px;
	font-size: 12px;
	color: #ff4357;
	line-height: 15px;
	text-align: center;
`;

export default class IndexActive extends React.PureComponent {
  render() {
		return (
			<IndexActAll>
				<IndexActTop><IndexActImg src={require('../IndexTime/timeBg.jpg')} /></IndexActTop>
				<IndexActJian><IndexActImg src={require('./index_jian.png')} /></IndexActJian>
				<IndexActList>
					<IndexActUl>
						<IndexActLi>
							<IndexTimeDiv><IndexTimeImg src={require('./bg.jpg')}/></IndexTimeDiv>
							<IndexTimeName>【2盒装】荷兰Hero Baby美素奶粉3段</IndexTimeName>
							<IndexTimePrice>￥200</IndexTimePrice>
						</IndexActLi>
						<IndexActLi>
							<IndexTimeDiv><IndexTimeImg src={require('./bg.jpg')}/></IndexTimeDiv>
							<IndexTimeName>【2盒装】荷兰Hero Baby美素奶粉3段</IndexTimeName>
							<IndexTimePrice>￥200</IndexTimePrice>
						</IndexActLi>
						<IndexActLi>
							<IndexTimeDiv><IndexTimeImg src={require('./bg.jpg')}/></IndexTimeDiv>
							<IndexTimeName>【2盒装】荷兰Hero Baby美素奶粉3段</IndexTimeName>
							<IndexTimePrice>￥200</IndexTimePrice>
						</IndexActLi>
						<IndexActLi>
							<IndexTimeDiv><IndexTimeImg src={require('./bg.jpg')}/></IndexTimeDiv>
							<IndexTimeName>【2盒装】荷兰Hero Baby美素奶粉3段</IndexTimeName>
							<IndexTimePrice>￥200</IndexTimePrice>
						</IndexActLi>
						<IndexActLi>
							<IndexTimeDiv><IndexTimeImg src={require('./bg.jpg')}/></IndexTimeDiv>
							<IndexTimeName>【2盒装】荷兰Hero Baby美素奶粉3段</IndexTimeName>
							<IndexTimePrice>￥200</IndexTimePrice>
						</IndexActLi>
					</IndexActUl>
				</IndexActList>
			</IndexActAll>
		)
	}
};