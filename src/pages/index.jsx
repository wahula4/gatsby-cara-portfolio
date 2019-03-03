import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Tony Wahula.
        </BigTitle>
        <Subtitle>I'm a front-end web developer based in Charlotte, NC.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Neighborhood Map"
            link="https://tricky-substance.surge.sh/"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            This project focuses on using React.js, the Google Maps API, and the FourSquare API. The user is
            shown a map of Charlotte, NC that displays the top 20 pizza places chosen by FourSquare. They can be
            filtered by name using the side navigation.
          </ProjectCard>
          <ProjectCard
            title="MyReads Bookshelf"
            link="https://http://gray-flesh.surge.sh/"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            MyReads is a bookshelf React app that allows you to select and categorize books you have read, are currently
            reading, or want to read. I learned how to manage state and when I should use class components vs stateless functional
            components. React Router is used to navigate between the homepage, search page, and 404 page.
          </ProjectCard>
          <ProjectCard
            title="Memory Game"
            link="https://wahula4.github.io/MemoryGame/"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Memory Game is a fun flip card matching game that uses jQuery to manipulate the DOM.
          </ProjectCard>
          <ProjectCard
            title="Giphy"
            link="https://wahula4.github.io/GiphyAPI/"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            A gif app that uses jQuery and ajax to get data from the Giphy API. Handles user input to update the DOM. The Gifs can be stopped and started by clicking on them.
          </ProjectCard>
        </ProjectsWrapper> 
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Tony Wahula" />
          <AboutSub>
            I focus on writing clean and efficicent code as well as creating a user-friendly expericence with responsive design.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          As a web developer my skills are include HTML, CSS, and JavaScript. I have expericence with jQuery, React.js and utilizing API's to fetch data. I have a passion for learning and problem solving. When I'm not coding, you can find my playing pick-up soccer, hiking, or winning at Super Smash Bros. 
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:mawahula4@gmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://github.com/wahula4">Github</a> &{' '}
            <a href="https://www.linkedin.com/in/tony-wahula/">LinkedIn</a>
          </ContactText>
        </Inner>
        <Footer>&copy; 2019 by Gatsby Starter Portfolio Cara. </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
