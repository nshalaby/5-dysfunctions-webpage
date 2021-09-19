import styled from 'styled-components';

export const Box = styled.div`
padding: 40px;
background: #364854;
position: absolute;

bottom: -100px;
width: 98.9vw;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(210px, 1fr));
grid-gap: 20px;
margin-left: -350px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 5px;
margin-left: 0px;
font-size: 12px;
text-decoration: none;

&:hover {
	color: red;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 11px;
color: #fff;
margin-bottom: 10px;
font-weight: bold;

`;

