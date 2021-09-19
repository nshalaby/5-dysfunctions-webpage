import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles.js";

const Footer = () => {
    return (
        <Box>
            <Container>
                <Row>
                    <Column>
                        <Heading>Verafin Inc</Heading>
                        <FooterLink>18 Hebron Way St. John’s, NL, Canada</FooterLink>
                        <FooterLink>&copy; Copyright {new Date().getFullYear()}, Group 3</FooterLink>
                    </Column>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="#">Daniel Godden</FooterLink>
                        <FooterLink href="#">Nadia Shalaby</FooterLink>
                        <FooterLink href="#">Kelvin Bagthariya</FooterLink>
                        <FooterLink href="#">Nazanin Rezajooei</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">daniel.godden@verafin.com</FooterLink>
                        <FooterLink href="#">nadia.shalaby@verafin.com</FooterLink>
                        <FooterLink href="#">kelvin.bagthariya@verafin.com</FooterLink>
                        <FooterLink href="#">nazanin.rezajooei@verafin.com</FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};

export default Footer;

