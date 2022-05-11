import styled from 'styled-components';

export const Box = styled.div`
padding: 3rem;
background: #F5E8E3;
width: 100%;
font-size: 0.85rem;

@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	margin: 0 auto;
}
`

export const Column = styled.div`
display: flex;
flex-direction: column;
margin-right: 4rem;
background: #F5E8E3;
`;

export const Row = styled.div`
display: flex;
background: #F5E8E3;
`;

export const FooterLink = styled.a`
color: rgb(48, 57, 57);
margin-bottom: 0.8rem;
font-size: 0.85rem;
font-family: 'Roboto', sans-serif;
text-decoration: none;
&:hover {
	color: rgb(48, 57, 57);
}
`;

export const Heading = styled.p`
font-size: 1.2rem;
color: rgb(48, 57, 57);
margin-bottom: 1rem;
font-weight: bold;
font-family: 'Roboto', sans-serif;			
`;