import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaYoutubeSquare, FaFax, FaPhone } from "react-icons/fa";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "red",
				textAlign: "center",
				marginTop: "100px" }}>
	
	</h1>
	<Container style={{clear:'both'}}>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Offering</FooterLink>
			<FooterLink href="#">Managing</FooterLink>
			<FooterLink href="#">Requesting</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#"><FaPhone/> 032-2221118</FooterLink>
			<FooterLink href="#"><FaFax/> Fax-8885968</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#"><FaFacebookSquare/> Facebook</FooterLink>
			<FooterLink href="#"><FaInstagram/> Instagram</FooterLink>
			<FooterLink href="#"><FaTwitterSquare/> Twitter</FooterLink>
			<FooterLink href="#"><FaYoutubeSquare/> Youtube</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;