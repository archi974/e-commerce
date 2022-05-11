import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box>
            <Container>
                <Row>
                    <Column>
                        <Heading>À PROPOS</Heading>
                        <p>Depuis plus de 25 ans, notre équipe d’herboristes recherche avec soin des ingrédients naturels,
                            en tissant des liens avec un réseau de producteurs fidèles. Nous faisons toujours le choix du bio,
                            de la production la plus locale possible et des produits de la plus belle qualité.</p>
                        <div>
                            <FooterLink href="#">
                                <i style={{ paddingRight: '2rem' }} className="fab fa-facebook-f"></i>
                            </FooterLink>
                            <FooterLink href="#">
                                <i style={{ paddingRight: '2rem' }} className="fab fa-instagram"></i>
                            </FooterLink>
                            <FooterLink href="#">
                                <i style={{ paddingRight: '2rem' }} className="fab fa-twitter"></i>
                            </FooterLink>
                        </div>
                    </Column>
                    <Column style={{ width: '70%' }}>
                        <p style={{ fontWeight: 'bolder' }}>Planteco</p>
                        <p style={{fontSize: '0.8rem'}}>420 chausée d'Ottenbourg<br />
                            1300 Wavre<br />
                            Belgique</p>
                        <p style={{ fontWeight: '500', fontSize: '0.8rem'}}>Planteco n'a pas de magasin physique.</p>
                        <p></p>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default Footer;