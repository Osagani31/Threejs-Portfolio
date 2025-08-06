import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  transition: all 0.3s ease;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 12px 20px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  @media only screen and (max-width: 768px) {
    gap: 20px;
  }
`;

const Logo = styled.img`
  height: 45px;
  border-radius: 50%;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

const List = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media only screen and (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(15px);
    padding: 20px;
    gap: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const MobileToggle = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;
  padding: 8px;

  span {
    width: 25px;
    height: 3px;
    background: white;
    transition: all 0.3s ease;
    transform-origin: center;
  }

  ${props => props.isOpen && `
    span:nth-child(1) {
      transform: rotate(45deg) translate(6px, 6px);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:nth-child(3) {
      transform: rotate(-45deg) translate(6px, -6px);
    }
  `}

  @media only screen and (max-width: 768px) {
    display: flex;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  position: relative;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);

  &:hover {
    color: #da4ea2;
    background: rgba(218, 78, 162, 0.1);
    transform: translateY(-2px);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    width: 0;
    height: 2px;
    background: #da4ea2;
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 80%;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    gap: 15px;
  }
`;

const Icon = styled.img`
  width: 22px;
  height: 22px;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
    filter: brightness(1.2);
  }

  @media only screen and (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

const Button = styled.button`
  padding: 12px 24px;
  background: linear-gradient(135deg, #da4ea2, #b83e87);
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(218, 78, 162, 0.3);

  &:hover {
    background: linear-gradient(135deg, #e55bb3, #c94793);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(218, 78, 162, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  @media only screen and (max-width: 768px) {
    padding: 10px 20px;
    font-size: 13px;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu after navigation
  };

  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.jpg" onClick={() => scrollToSection('home')} />
          <List isOpen={isOpen}>
            <ListItem onClick={() => scrollToSection('home')}>Home</ListItem>
            <ListItem onClick={() => scrollToSection('about')}>About Me</ListItem>
            <ListItem onClick={() => scrollToSection('contact')}>Contact Us</ListItem>
          </List>
          <MobileToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </MobileToggle>
        </Links>
        <Icons>
          <Icon src="./img/search.png" />
          <Button onClick={() => scrollToSection('contact')}>Contact Me</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;