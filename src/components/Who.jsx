import React, { Suspense } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  line-height: 1.6;
`;

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;

const SkillsTitle = styled.h3`
  color: #da4ea2;
  font-size: 20px;
  margin-bottom: 10px;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Skill = styled.span`
  background-color: rgba(218, 78, 162, 0.2);
  color: #da4ea2;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 14px;
  border: 1px solid #da4ea2;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Who = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section id="about">
      <Container>
        <Left>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </Left>
        <Right>
          <Title>About Me</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Computer Science Student</Subtitle>
          </WhatWeDo>
          <Desc>
            I'm Osagani Perera, a dedicated Computer Science undergraduate with a passion for software development, problem-solving, and emerging technologies. I enjoy building innovative solutions and continuously learning new skills in the ever-evolving world of technology.
          </Desc>
          <Skills>
            <SkillsTitle>Technical Skills</SkillsTitle>
            <SkillsList>
              <Skill>JavaScript</Skill>
              <Skill>React</Skill>
              <Skill>Python</Skill>
              <Skill>Java</Skill>
              <Skill>HTML/CSS</Skill>
              <Skill>Node.js</Skill>
              <Skill>Git</Skill>
              <Skill>Three.js</Skill>
            </SkillsList>
          </Skills>
          <Button onClick={scrollToContact}>Get In Touch</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;