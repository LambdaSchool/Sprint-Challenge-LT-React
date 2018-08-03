import styled from "styled-components";

export const TopBarComp = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: none;
	flex-direction: row;
	position: fixed;
	height: 44px;
	background-color: #333;
`;

export const TopBar__container = styled.div`
	width: 100%;
	display: flex;
	justify-content: none;
	align-items: none;
	flex-direction: row;
	color: #fff;
	letter-spacing: 1px;
	padding: 0 10px;
	@media (min-width: 1280px) {
		width: 1280px;
	}
`;

export const TopBar__containerContainerLeft = styled.div`
	display: flex;
	justify-content: none;
	align-items: center;
	flex-direction: row;
	flex: 1;
	font-size: 11px;
`;

export const TopBar__containerContainerLeftSpan = styled.span`
	cursor: pointer;
	margin-right: 25%;
	font-weight: bold;
`;

export const TopBar__containerContainerCenter = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	flex: 3;
	font-size: 9px;
`;

export const TopBar__centerSpan = styled.span`
	cursor: pointer;
	margin-right: 5%;
`;
//   .top-bar .container .container-center span:last-child {
//     margin-right: 0;
//   }
//   .top-bar .container .container-center span:hover {
//     text-decoration: underline;
//   }

export const TopBar__containerRight = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	flex-direction: row;
	flex: 1;
	font-size: 11px;
	font-weight: bold;
`;

export const TopBar__rightSpan = styled.span`
	cursor: pointer;
`;
export const HeaderComp = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	background-color: #fff;
	border-bottom: 1px solid lightgrey;
	width: 100%;
	height: 120px;
	margin-top: 44px;
	padding-bottom: 15px;
	@media (min-width: 1280px) {
		width: 1280px;
	}
`;
export const HeaderH1 = styled.h1`
	font-size: 60px;
	font-family: Didot, serif;
	font-weight: bold;
	flex: 8;
	text-align: center;
	color: #000;
`;
export const HeaderDate = styled.span`
	align-self: flex-end;
	font-size: 11px;
	font-weight: bold;
	letter-spacing: 1px;
	margin-left: 25px;
	flex: 1;
`;
export const HeaderTemp = styled.span`
	align-self: flex-end;
	font-size: 11px;
	font-weight: bold;
	letter-spacing: 1px;
	text-align: right;
	margin-right: 25px;
`;
//     flex: 1;
//   .content-container {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }
//   .tabs {
//     border-bottom: 1px solid lightgrey;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: row;
//     width: 100%;
//     height: 47px;
//     background-color: #fff;
//   }
//   @media (min-width: 1280px) {
//     .tabs {
//       width: 1280px;
//     }
//   }
//   .tabs .topics {
//     display: flex;
//     justify-content: none;
//     align-items: center;
//     flex-direction: row;
//   }
//   .tabs .topics .title {
//     font-size: 12px;
//     letter-spacing: 1px;
//     font-weight: bold;
//   }
//   .tabs .topics .tab {
//     display: flex;
//     justify-content: none;
//     align-items: center;
//     flex-direction: row;
//     color: #fff;
//     background-color: #333;
//     margin: 0 5px;
//     padding: 2px 10px;
//     font-size: 12px;
//     letter-spacing: 2px;
//     cursor: pointer;
//     font-weight: bold;
//   }
//   .tabs .topics .tab:hover {
//     text-decoration: underline;
//   }
//   .tabs .topics .active-tab {
//     background-color: #fff;
//     color: #333;
//     border: 2px solid #333;
//   }
//   .cards-container {
//     display: flex;
//     justify-content: space-evenly;
//     align-items: none;
//     flex-direction: row;
//     width: 100%;
//     margin-top: 16px;
//     flex-wrap: wrap;
//   }
//   @media (min-width: 1200px) {
//     .cards-container {
//       width: 1200px;
//     }
//   }
//   .cards-container .card {
//     border-bottom: 1px solid lightgrey;
//     display: flex;
//     justify-content: space-between;
//     align-items: none;
//     flex-direction: column;
//     background-color: #fff;
//     width: 380px;
//     margin-bottom: 16px;
//     padding: 24px;
//   }
//   .cards-container .card .headline {
//     font-size: 25px;
//     font-family: Didot, serif;
//   }
//   .cards-container .card .author {
//     display: flex;
//     justify-content: none;
//     align-items: center;
//     flex-direction: row;
//     margin-top: 15px;
//   }
//   .cards-container .card .author .img-container {
//     padding-right: 10px;
//     border-right: 1px solid lightgrey;
//     height: 40px;
//   }
//   .cards-container .card .author .img-container img {
//     width: 40px;
//   }
//   .cards-container .card .author span {
//     padding-left: 10px;
//     font-size: 12px;
//     letter-spacing: 1px;
//     font-weight: bold;
//   }
//   .carousel {
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: row;
//     height: 500px;
//     position: relative;
//     overflow: hidden;
//     margin-top: 16px;
//   }
//   @media (min-width: 1200px) {
//     .carousel {
//       width: 1200px;
//     }
//   }
//   .carousel .left-button,
//   .carousel .right-button {
//     display: flex;
//     justify-content: center;
//     align-items: none;
//     flex-direction: row;
//     color: #fff;
//     background-color: #333;
//     font-size: 40px;
//     border-radius: 50%;
//     position: absolute;
//     width: 50px;
//     height: 50px;
//     cursor: pointer;
//   }
//   .carousel .left-button:hover,
//   .carousel .right-button:hover {
//     color: #333;
//     background-color: #fff;
//     border: 2px solid #333;
//   }
//   .carousel .left-button {
//     top: 50%;
//     left: 25px;
//     transform: translate(0, -50%);
//   }
//   .carousel .right-button {
//     top: 50%;
//     right: 25px;
//     transform: translate(0, -50%);
//   }
//   .carousel img {
//     width: 100%;
//     display: none;
//   }
