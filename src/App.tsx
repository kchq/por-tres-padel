// Trigger deployment
import type { FC } from 'react';
import { StrictMode } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: #333;
    background: url('/images/club_rendering.jpeg') no-repeat center center fixed;
    background-size: cover;
    position: relative;
    
    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(248, 250, 252, 0.75);
      z-index: -1;
    }
  }

  @media (max-width: 768px) {
    body {
      background-attachment: scroll;
    }
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  padding: 1.5rem 2rem;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  backdrop-filter: blur(5px);
  z-index: 1;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

const Logo = styled.img`
  max-width: 140px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    max-width: 100px;
  }
`;

const Content = styled.main`
  flex: 1;
  text-align: left;
  padding: 3rem 2rem 0;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 20px;
  margin: -3rem 1rem 0;
  backdrop-filter: blur(10px);
  position: relative;
  z-index: 2;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 2rem 0 0;
    margin: -1rem 0 0;
    border-radius: 0;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4rem;
  margin: 2rem 0;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    padding: 0;
    margin: 0;
    background: none;
  }
`;

const TextContent = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    order: 2;
    width: 100%;
    padding: 0 1rem;
  }
`;

const ImageContent = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    order: 1;
    width: 100%;
    margin: 0;
    padding: 0 1rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
  color: #1a1a1a;
  font-weight: 800;
  letter-spacing: -0.5px;
  background: linear-gradient(45deg, #1a1a1a, #4a4a4a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-top: 0.5rem;
  }
`;

const SubTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #2d3748;
  font-weight: 500;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
  color: #4a4a4a;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
`;

const ComingSoon = styled.div`
  background: linear-gradient(135deg, rgba(248, 249, 250, 0.9), rgba(233, 236, 239, 0.9));
  padding: 2rem;
  border-radius: 12px;
  margin: 2.5rem auto;
  font-size: 1.4rem;
  font-weight: 600;
  color: #2d3748;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  max-width: 800px;
  backdrop-filter: blur(5px);

  @media (max-width: 768px) {
    padding: 1.25rem 1rem;
    margin: 1.25rem 1rem;
    font-size: 1.1rem;
    border-radius: 8px;
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 2rem;
  margin-top: 4rem;
  background: rgba(30, 30, 30, 0.95);
  color: #ffffff;
  font-size: 1rem;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-bottom: 0;
  backdrop-filter: blur(5px);
  
  p {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-top: 2rem;
    font-size: 0.9rem;
  }
`;

const ClubImage = styled.img`
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: block;
    
    &:hover {
      transform: none;
    }
  }
`;

const ImageStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 2px;
  }
`;

const App: FC = () => {
  return (
    <StrictMode>
      <GlobalStyle />
      <Container>
        <Header>
          <Logo src="/images/logo.png" alt="Por Tres Padel Club Logo" />
        </Header>
        
        <Content>
          <Title>Por Tres Padel Club</Title>
          <SubTitle>Boyle Heights, Los Angeles</SubTitle>
          
          <ComingSoon>Coming Soon - Q4 2025</ComingSoon>
          
          <FlexContainer>
            <TextContent>
              <Paragraph style={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                Opening in Q4 2025, Por Tres Padel Club is bringing world-class padel to the heart of Los Angeles.
              </Paragraph>
              
              <Paragraph>
                Nestled in the vibrant downtown district, our state-of-the-art facility will feature four pristine courts, 
                purpose-built to create an unmatched playing experience for beginners and seasoned players alike. 
                Whether you're looking for casual play, high-level training, or community events, Por Tres offers a modern, 
                welcoming environment designed for connection, competition, and fun.
              </Paragraph>
              
              <Paragraph>
                At Por Tres, padel is more than a game — it's a lifestyle. Our club is designed to be a social hub for 
                LA's growing padel community, with curated programming, special events, and future plans for memberships 
                that elevate your experience on and off the court. Get ready to rally — Los Angeles, padel just found its new home.
              </Paragraph>
            </TextContent>
            
            <ImageContent>
              <ImageStack>
                <ClubImage src="/images/club_rendering.jpeg" alt="Por Tres Padel Club Rendering" />
                <ClubImage src="/images/rendering_2.png" alt="Por Tres Padel Club Additional Rendering" />
              </ImageStack>
            </ImageContent>
          </FlexContainer>
        </Content>
        
        <Footer>
          <p>© 2025 Por Tres Padel Club. All rights reserved.</p>
        </Footer>
      </Container>
    </StrictMode>
  );
};

export default App;
