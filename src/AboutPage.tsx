import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { useEffect, useState } from 'react';
import {
  Button,
  Card,
  Heading,
  Icon,
  PageContainer,
  Paragraph,
  Round,
  ThemeProvider,
} from '@riedel-wtf/one-sec-ui';

const githubRepositoryUrl = 'https://github.com/OpenResearchKit/OpenResearchKit-Swift';
const mobileNavigationBreakpoint = 780;

type TeamPolaroid = {
  name: string;
  role: string;
  image: string;
  rotation: string;
};

const teamPolaroids: TeamPolaroid[] = [
  {
    name: 'Dr. David J. Grüning',
    role: 'Lead Scientist',
    image: '/images/david-polaroid.webp',
    rotation: '-1.6deg',
  },
  {
    name: 'Frederik Riedel',
    role: 'Founder',
    image: '/images/frederik-polaroid.webp',
    rotation: '1.9deg',
  },
];

const floatIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SiteShell = styled.div`
  min-height: 100vh;
  background:
    radial-gradient(circle at 90% 8%, rgba(255, 185, 130, 0.75) 0%, rgba(255, 185, 130, 0) 42%),
    radial-gradient(circle at 2% 16%, rgba(54, 214, 214, 0.35) 0%, rgba(54, 214, 214, 0) 40%),
    linear-gradient(145deg, #f8f8fc 0%, #f4f6ff 50%, #eef9ff 100%);
`;

const TopNavigation = styled.header`
  position: sticky;
  top: 0;
  z-index: 99;
  width: 100%;
  border-bottom: ${(props) => props.theme.transparentHairlineBorder};
  background-color: ${(props) => props.theme.colors.background.main};
`;

const TopNavigationContent = styled.nav`
  max-width: ${(props) => props.theme.sizes.pageWidth};
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.spaces.double};
  min-height: 62px;
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spaces.standard};

  @media (max-width: ${mobileNavigationBreakpoint}px) {
    min-height: 56px;
    height: 56px;
    padding: 0 ${(props) => props.theme.spaces.standard};
  }
`;

const BrandTitle = styled.a`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  text-decoration: none;
`;

const DesktopNavigation = styled.div`
  display: flex;
  align-items: baseline;
  gap: ${(props) => props.theme.spaces.standard};
  flex: 1;

  @media (max-width: ${mobileNavigationBreakpoint}px) {
    display: none;
  }
`;

const TopNavigationLinks = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
`;

const TopNavigationSpacer = styled.div`
  flex: 1;
`;

const TopNavigationLinkButton = styled(Button.Secondary)`
  height: 38px;
  padding: 0 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const TopNavigationCTA = styled(Button.Primary)`
  height: 38px;
  padding: 0 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const MobileMenuButtonContainer = styled.div<{ open: boolean }>`
  display: none;

  @media (max-width: ${mobileNavigationBreakpoint}px) {
    display: flex;
    margin-left: auto;
    padding: 2px;
    margin-right: 0;
    border-radius: 99px;
    box-sizing: border-box;
    border: 1px solid ${(props) => (props.open ? props.theme.colors.hairline : 'transparent')};
    transition: border-color 0.1s;
  }
`;

const MobileMenuToggle = styled(Button.Secondary)`
  height: 34px;
  min-width: 34px;
  padding: 0 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const MobileNavigationScrim = styled.div<{ open: boolean }>`
  display: none;

  @media (max-width: ${mobileNavigationBreakpoint}px) {
    display: block;
    position: fixed;
    top: 56px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 98;
    background-color: ${(props) => props.theme.modalBackdrop};
    opacity: ${(props) => (props.open ? 1 : 0)};
    pointer-events: ${(props) => (props.open ? 'auto' : 'none')};
    transition: opacity 0.15s;
  }
`;

const MobileNavigationPanel = styled.div<{ open: boolean }>`
  display: none;

  @media (max-width: ${mobileNavigationBreakpoint}px) {
    display: block;
    position: relative;
    z-index: 99;
    background-color: ${(props) => props.theme.colors.background.main};
    border-top: ${(props) => props.theme.transparentHairlineBorder};
    overflow: hidden;
    max-height: ${(props) => (props.open ? '280px' : '0')};
    opacity: ${(props) => (props.open ? 1 : 0)};
    transition: max-height 0.2s ease, opacity 0.18s ease;
  }
`;

const MobileNavigationInner = styled.div`
  width: 100%;
  box-sizing: border-box;
  max-width: ${(props) => props.theme.sizes.pageWidth};
  margin: 0 auto;
  padding: 10px ${(props) => props.theme.spaces.standard} 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MobileNavigationButton = styled(Button.Secondary)`
  width: 100%;
  max-width: 100%;
  min-width: 0;
  height: 38px;
  padding: 0 12px;
  box-sizing: border-box;
  align-self: stretch;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
`;

const MobileNavigationCTA = styled(Button.Primary)`
  width: 100%;
  max-width: 100%;
  min-width: 0;
  height: 38px;
  padding: 0 12px;
  box-sizing: border-box;
  align-self: stretch;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const ContentShell = styled.div`
  padding: 28px 22px 72px;
`;

const PageContent = styled(PageContainer)`
  gap: 54px;
`;

const Hero = styled(Card)`
  animation: ${floatIn} 0.45s ease both;
  gap: 16px;
  padding: clamp(26px, 3vw, 36px);
  background: linear-gradient(145deg, #fff 0%, #fffdf8 43%, #f8ffff 100%);
`;

const StoryGrid = styled.div`
  animation: ${floatIn} 0.45s ease both;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const StoryCard = styled(Card)`
  gap: 14px;
  padding: clamp(22px, 2.6vw, 30px);
  background: #ffffff;
`;

const TeamSection = styled.section`
  animation: ${floatIn} 0.45s ease both;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`;

const TeamCard = styled(Card)`
  align-items: center;
  gap: 18px;
  padding: clamp(22px, 2.6vw, 30px);
  background: #ffffff;
  text-align: center;
`;

const PolaroidFrame = styled.div<{ rotation: string }>`
  width: min(270px, 100%);
  background: #ffffff;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.16);
  padding: 10px 10px 18px;
  transform: rotate(${(props) => props.rotation});
`;

const PolaroidImage = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 697 / 1110;
  object-fit: contain;
  background: #f3f5ff;
`;

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > mobileNavigationBreakpoint) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <ThemeProvider darkMode={false}>
      <SiteShell>
        <TopNavigation>
          <TopNavigationContent>
            <BrandTitle href="/">OpenResearchKit</BrandTitle>

            <DesktopNavigation>
              <TopNavigationLinks>
                <TopNavigationLinkButton asComponent="anchor" href="/#research">
                  Publications
                </TopNavigationLinkButton>
                <TopNavigationLinkButton asComponent="anchor" href="/#partners">
                  Institutions
                </TopNavigationLinkButton>
                <TopNavigationLinkButton asComponent="anchor" href="/about/">
                  About
                </TopNavigationLinkButton>
              </TopNavigationLinks>
              <TopNavigationSpacer />
              <TopNavigationCTA
                asComponent="anchor"
                href={githubRepositoryUrl}
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub →
              </TopNavigationCTA>
            </DesktopNavigation>

            <MobileMenuButtonContainer open={mobileMenuOpen}>
              <MobileMenuToggle
                asComponent="button"
                onClick={() => setMobileMenuOpen((open) => !open)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation-panel"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                <Icon name="Bars" size={20} />
              </MobileMenuToggle>
            </MobileMenuButtonContainer>
          </TopNavigationContent>

          <MobileNavigationScrim open={mobileMenuOpen} onClick={() => setMobileMenuOpen(false)} />

          <MobileNavigationPanel id="mobile-navigation-panel" open={mobileMenuOpen}>
            <MobileNavigationInner>
              <MobileNavigationButton
                asComponent="anchor"
                href="/#research"
                onClick={() => setMobileMenuOpen(false)}
              >
                Publications
              </MobileNavigationButton>
              <MobileNavigationButton
                asComponent="anchor"
                href="/#partners"
                onClick={() => setMobileMenuOpen(false)}
              >
                Institutions
              </MobileNavigationButton>
              <MobileNavigationButton
                asComponent="anchor"
                href="/about/"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </MobileNavigationButton>
              <MobileNavigationCTA
                asComponent="anchor"
                href={githubRepositoryUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                View on GitHub →
              </MobileNavigationCTA>
            </MobileNavigationInner>
          </MobileNavigationPanel>
        </TopNavigation>

        <ContentShell>
          <PageContent>
            <Hero glossBorder>
              <Round.Regular>About OpenResearchKit</Round.Regular>
              <Heading.Huge>
                Built for our own studies in one sec, then shared to accelerate research for everyone.
              </Heading.Huge>
              <Paragraph.Regular>
                OpenResearchKit started as internal infrastructure to run in-the-wild behavioral
                research in one sec. We needed a reliable way to run on-device processing, collect
                in-app surveys, and pseudonymously match app metadata with survey responses.
              </Paragraph.Regular>
            </Hero>

            <StoryGrid>
              <StoryCard glossBorder>
                <Round.Regular>Built for Real Research</Round.Regular>
                <Heading.Large>Purpose-built for longitudinal behavioral studies.</Heading.Large>
                <Paragraph.Regular>
                  Off-the-shelf tooling was not sufficient for our design constraints around
                  privacy, on-device execution, and structured survey workflows. OpenResearchKit
                  was built to support rigorous experiments under those real-world requirements.
                </Paragraph.Regular>
              </StoryCard>

              <StoryCard glossBorder>
                <Round.Regular>Shared Openly</Round.Regular>
                <Heading.Large>Released to make replication and adoption easier.</Heading.Large>
                <Paragraph.Regular>
                  After validating this approach in published studies, we open-sourced the package
                  so researchers and institutions can build comparable study pipelines faster, with
                  less engineering overhead and better reproducibility.
                </Paragraph.Regular>
              </StoryCard>
            </StoryGrid>

            <TeamSection>
              <Round.Regular>People Behind It</Round.Regular>
              <Paragraph.Regular>
                The framework originated from interdisciplinary product and science work around one
                sec.
              </Paragraph.Regular>
              <TeamGrid>
                {teamPolaroids.map((person) => (
                  <TeamCard key={person.name} glossBorder>
                    <PolaroidFrame rotation={person.rotation}>
                      <PolaroidImage src={person.image} alt={person.name} />
                    </PolaroidFrame>
                    <Heading.Regular>{person.name}</Heading.Regular>
                    <Paragraph.Small>{person.role}</Paragraph.Small>
                  </TeamCard>
                ))}
              </TeamGrid>
            </TeamSection>
          </PageContent>
        </ContentShell>
      </SiteShell>
    </ThemeProvider>
  );
}
