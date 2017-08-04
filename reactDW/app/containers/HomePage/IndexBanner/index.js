import React from 'react';
import styled from 'styled-components';

const IndexBan = styled.div`
	width: 100%;
	height: 175px;
`;

const IndexBanImg = styled.img`
	width: 100%;
	height: 100%;
`;

export default class IndexBanner extends React.PureComponent {
  render() {
		return (
			<IndexBan>
				<IndexBanImg src={require('./banner.jpg')}  alt=""/>
			</IndexBan>
		)
	}
} 