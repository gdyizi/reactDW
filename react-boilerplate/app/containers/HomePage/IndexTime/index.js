import React from 'react';
import styled from 'styled-components';
import Background from './icon_next.png';
import TimeBg from './timeBg.jpg';

const IndexTimeAll = styled.div`
	margin-top: 10px;
	height: 308px;
	background: #fff;
`;

const IndexTimeTit = styled.div`
	padding: 0 10px;
	height: 35px;
	line-height: 35px;
	font-size: 15px;
	color: #3f3f3f;
	backgroundImage: url(${Background});
	backgroundSize: 34px 34px;
	backgroundPosition: right center;
`;

const IndexTimeBg = styled.div`
	position: relative;
	width: 100%;
	height: 180px;
	backgroundImage: url(${TimeBg});
	backgroundSize: 100% 100%;
`;

const IndexTimeClock = styled.div`
	position: absolute;
	top: 15px;
	left: 32%;
	z-index: 100;
`;

const IndexTimeClockH = styled.div`
	float: left;
	width: 30px;
	height: 35px;
	line-height: 35px;
	color: #fff;
	font-size: 20px;
	text-align: center;
	background: #26a2ff;
	border-radius: 5px;
	border: 1px solid #fff;
`;

const IndexTimeClockD = styled.div`
	float: left;
	font-size: 20px;
	color: #26a2ff;
`;

const IndexTimeClickBg = styled.div`
	position: absolute;
	top: 32px;
	left: 16.7%;
	width: 250px;
	height: 55px;
	background: #fff;
	z-index: 1;
	text-align: center;
	line-height: 72px;
	font-size: 13px;
	color: #7c7c7c;
`;

const IndexTimePro = styled.div`
	position: relative;
	bottom: 70px;
	overflow: scroll;
`;

const IndexTimeLs = styled.ul`
	white-space: nowrap;
	font-size: 0;
`;

const IndexTimeLi = styled.li`
	display: inline-block;
	margin-left: 10px;
	width: 110px;
	background: #fff;
`;

const IndexTimeDiv = styled.div`
	margin: 0 auto;
	width: 100px;
	height: 100px;
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

export default class IndexTime extends React.PureComponent {
  render() {
		return (
			<IndexTimeAll>
				<IndexTimeTit>今日特惠</IndexTimeTit>
				<IndexTimeBg>
					<IndexTimeClock>
						<IndexTimeClockH>11</IndexTimeClockH>
						<IndexTimeClockD>：</IndexTimeClockD>
						<IndexTimeClockH>11</IndexTimeClockH>
						<IndexTimeClockD>：</IndexTimeClockD>
						<IndexTimeClockH>11</IndexTimeClockH>
					</IndexTimeClock>
					<IndexTimeClickBg>天天特价 等你来抢</IndexTimeClickBg>
				</IndexTimeBg>
				<IndexTimePro>
					<IndexTimeLs>
						<IndexTimeLi>
							<IndexTimeDiv><IndexTimeImg src={require('./bg.jpg')}/></IndexTimeDiv>
							<IndexTimeName>【2盒装】荷兰Hero Baby美素奶粉3段</IndexTimeName>
							<IndexTimePrice>￥200</IndexTimePrice>
						</IndexTimeLi>
						<IndexTimeLi>
							<IndexTimeDiv><IndexTimeImg src={require('./bg.jpg')}/></IndexTimeDiv>
							<IndexTimeName>【2盒装】荷兰Hero Baby美素奶粉3段</IndexTimeName>
							<IndexTimePrice>￥200</IndexTimePrice>
						</IndexTimeLi>
						<IndexTimeLi>
							<IndexTimeDiv><IndexTimeImg src={require('./bg.jpg')}/></IndexTimeDiv>
							<IndexTimeName>【2盒装】荷兰Hero Baby美素奶粉3段</IndexTimeName>
							<IndexTimePrice>￥200</IndexTimePrice>
						</IndexTimeLi>
						<IndexTimeLi>
							<IndexTimeDiv><IndexTimeImg src={require('./bg.jpg')}/></IndexTimeDiv>
							<IndexTimeName>【2盒装】荷兰Hero Baby美素奶粉3段</IndexTimeName>
							<IndexTimePrice>￥200</IndexTimePrice>
						</IndexTimeLi>
					</IndexTimeLs>
				</IndexTimePro>
			</IndexTimeAll>
		)
	}
} 