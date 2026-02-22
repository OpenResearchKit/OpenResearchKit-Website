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
  Separator,
  Tag,
  ThemeProvider,
} from '@riedel-wtf/one-sec-ui';

type Study = {
  title: string;
  publisher: string;
  date: string;
  summary: string;
  href: string;
};

type ProductLogoItem = {
  name: string;
  src: string;
  alt: string;
  description: string;
};

type PartnerLogoItem = {
  name: string;
  src: string;
  alt: string;
  darkOnLight?: boolean;
};

type LinkedLogoItem = PartnerLogoItem & {
  href: string;
};

type CompatibilityItem = {
  platform: string;
  summary: string;
  comingSoon?: boolean;
};

const githubRepositoryUrl = 'https://github.com/OpenResearchKit/OpenResearchKit-Swift';
const davidContactLink = 'mailto:david@one-sec.app?subject=OpenResearchKit%20research%20collaboration';
const mobileNavigationBreakpoint = 780;
const sectionContentSpacing = 'clamp(18px, 2.2vw, 26px)';

const studies: Study[] = [
  {
    title: 'Directing smartphone use through the self-nudge app one sec',
    publisher: 'PNAS',
    date: 'Published April 10, 2023',
    summary:
      'Peer-reviewed evidence that one-sec interventions can significantly reduce app use while preserving user agency.',
    href: 'https://www.pnas.org/doi/10.1073/pnas.2213114120',
  },
  {
    title: 'Disrupting social media habits: a field experiment with young Danish consumers',
    publisher: 'Danish Competition and Consumer Authority',
    date: 'Published June 19, 2025',
    summary:
      'A large field experiment on habit disruption and social media behavior among young users in real-world settings.',
    href:
      'https://en.kfst.dk/analyser/kfst/publikationer/engelsk/2025/20250619-disrupting-social-media-habits-a-field-experiment-with-young-danish-consumers',
  },
  {
    title: 'Social Cognition Can Predict Behavioral and Psychological Effects of Digital Interventions',
    publisher: 'SSRN',
    date: 'Posted 2025',
    summary:
      'Preprint examining how social cognition measures can predict behavioral and psychological outcomes of digital interventions.',
    href: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5106520',
  },
  {
    title: 'A longitudinal in-the-wild investigation of design frictions to prevent smartphone overuse',
    publisher: 'CHI Conference (ACM)',
    date: 'Published May 11, 2024',
    summary:
      'Longitudinal in-the-wild analysis of one sec intervention data showing reduced habitual app opening and more intentional usage patterns.',
    href:
      'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Wv83-z8AAAAJ&citation_for_view=Wv83-z8AAAAJ:UeHWp8X0CEIC',
  },
  {
    title: 'A Field Experiment on How Tracking Consumer Streaks Affects Social Media Usage',
    publisher: 'Research Manuscript',
    date: 'Published November 30, 2025',
    summary:
      'Field experiment testing how streak-based feedback changes social media behavior, intervention adherence, and user attitudes.',
    href:
      'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Wv83-z8AAAAJ&citation_for_view=Wv83-z8AAAAJ:YsMSGLbcyi4C',
  },
  {
    title: 'Warum Apps Teil der Lösung für exzessiven digitalen Konsum bei Jugendlichen sind',
    publisher: 'OSF',
    date: 'Published January 16, 2025',
    summary:
      'German-language publication describing digital intervention design and behavior-change framing for adolescents.',
    href:
      'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Wv83-z8AAAAJ&citation_for_view=Wv83-z8AAAAJ:Y0pCki6q_DkC',
  },
];

const usedInProducts: ProductLogoItem[] = [
  {
    name: 'one sec',
    src: 'logos/one-sec.png',
    alt: 'one sec logo',
    description: 'Real-world intervention studies on digital habits and behavior change.',
  },
  {
    name: 'Structured',
    src: 'logos/structured.jpg',
    alt: 'Structured logo',
    description: 'Task-focused intervention research integrated into daily planning workflows.',
  },
];

const researchPartners: PartnerLogoItem[] = [
  {
    name: 'Max-Planck Institute',
    src: 'logos/max-planck-institute.png',
    alt: 'Max-Planck Institute logo',
    darkOnLight: true,
  },
  {
    name: 'Open Science Framework',
    src: 'logos/osf.svg',
    alt: 'Open Science Framework logo',
  },
  {
    name: 'NHS',
    src: 'logos/nhs.svg',
    alt: 'National Health Service logo',
  },
  {
    name: 'Danish Competition and Consumer Authority',
    src: 'logos/dcaca.png',
    alt: 'Danish Competition and Consumer Authority logo',
    darkOnLight: true,
  },
  {
    name: 'German Federal Office for the Protection of Minors',
    src: 'logos/bzkj.svg',
    alt: 'BzKJ logo',
  },
  {
    name: 'Stanford University',
    src: 'logos/stanford.svg',
    alt: 'Stanford University wordmark',
  },
  {
    name: 'University of Cambridge',
    src: 'logos/cambridge.svg',
    alt: 'University of Cambridge wordmark',
  },
  {
    name: 'University of Oxford',
    src: 'logos/oxford.svg',
    alt: 'University of Oxford wordmark',
  },
  {
    name: 'LMU Munich',
    src: 'logos/lmu-munich.svg',
    alt: 'LMU Munich wordmark',
  },
];

const compatibilityItems: CompatibilityItem[] = [
  {
    platform: 'iOS',
    summary:
      'Production-ready support for iPhone-based studies with on-device processing, in-app surveys, and UUID-based data matching.',
  },
  {
    platform: 'Android',
    summary:
      'Planned Android support for cross-platform deployment and synchronized intervention research.',
    comingSoon: true,
  },
  {
    platform: 'Web / Browser Extensions',
    summary:
      'Planned browser and extension support for desktop intervention experiments and telemetry.',
    comingSoon: true,
  },
];

const fundedByOrganizations: LinkedLogoItem[] = [
  {
    name: 'one sec',
    src: 'logos/one-sec.png',
    alt: 'one sec logo',
    href: 'https://one-sec.app/',
  },
  {
    name: 'NHS',
    src: 'logos/nhs.svg',
    alt: 'National Health Service logo',
    href: 'https://www.nhs.uk/',
  },
  {
    name: 'Bundeszentrale',
    src: 'logos/bzkj.svg',
    alt: 'Bundeszentrale logo',
    href: 'https://www.bzkj.de/',
  },
  {
    name: 'Stanford',
    src: 'logos/stanford.svg',
    alt: 'Stanford University wordmark',
    href: 'https://www.stanford.edu/',
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

const ContentShell = styled.div`
  padding: 28px 22px 80px;
`;

const LandingContainer = styled(PageContainer)`
  gap: 36px;
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

const BrandTitle = styled.span`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
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
    display: block;
    margin-left: auto;
    padding: ${(props) => props.theme.spaces.minimal};
    margin-right: -${(props) => props.theme.spaces.minimal};
    border-radius: 99px;
    box-sizing: content-box;
    border: 1px solid ${(props) => (props.open ? props.theme.colors.hairline : 'transparent')};
    transition: border-color 0.1s;
  }
`;

const MobileMenuToggle = styled(Button.Secondary)`
  height: 38px;
  min-width: 38px;
  padding: 0 8px;
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
  max-width: ${(props) => props.theme.sizes.pageWidth};
  margin: 0 auto;
  padding: 10px ${(props) => props.theme.spaces.standard} 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MobileNavigationButton = styled(Button.Secondary)`
  width: 100%;
  height: 38px;
  padding: 0 12px;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
`;

const MobileNavigationCTA = styled(Button.Primary)`
  width: 100%;
  height: 38px;
  padding: 0 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const Hero = styled(Card)`
  position: relative;
  overflow: hidden;
  padding: 34px;
  background: linear-gradient(145deg, #fff 0%, #fffdf8 43%, #f8ffff 100%);

  &::before {
    content: '';
    position: absolute;
    top: -65px;
    right: -65px;
    width: 220px;
    height: 220px;
    border-radius: 999px;
    background: radial-gradient(circle at 30% 30%, #ffd59d, #ff8f7a);
    opacity: 0.32;
    pointer-events: none;
  }
`;

const HeroLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 340px;
  gap: 24px;
  align-items: center;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const HeroCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const HeroSummary = styled(Paragraph.Regular)`
  max-width: 760px;
`;

const HeroActions = styled.div`
  margin-top: 4px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const HeroPrimaryCTA = styled(Button.Primary)`
  height: 40px;
  padding: 0 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const HeroSecondaryCTA = styled(Button.Secondary)`
  height: 40px;
  padding: 0 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 99px;
  border: 1px solid ${(props) => props.theme.colors.hairline};
  background-color: ${(props) => props.theme.colors.background.overlay};
`;

const HeroVideoFrame = styled.div`
  width: 100%;
`;

const HeroVideo = styled.video`
  width: 100%;
  display: block;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  background: transparent;
  mask-image: url('images/one-sec-demo-mask.webp');
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
  mask-mode: alpha;
  -webkit-mask-image: url('images/one-sec-demo-mask.webp');
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
`;

const Section = styled.section`
  scroll-margin-top: 90px;
  animation: ${floatIn} 0.45s ease both;
`;

const SectionHeadingRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ResearchGrid = styled.div`
  margin-top: ${sectionContentSpacing};
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ResearchCard = styled(Card)`
  gap: 12px;
  background: #ffffff;
`;

const Meta = styled(Paragraph.Small)`
  color: rgba(15, 23, 42, 0.76);
`;

const CTA = styled(Button.Tertiary)`
  align-self: flex-start;
`;

const LogoGrid = styled.div`
  margin-top: ${sectionContentSpacing};
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const ProductLogoCard = styled(Card)`
  gap: 12px;
  align-items: flex-start;
`;

const ProductLogo = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 16px;
  object-fit: cover;
`;

const PartnerGrid = styled.div`
  margin-top: ${sectionContentSpacing};
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const PartnerCard = styled(Card)`
  height: 112px;
  justify-content: center;
  align-items: center;
  background: #ffffff;
`;

const PartnerLogo = styled.img<{ darkOnLight?: boolean }>`
  max-width: 100%;
  max-height: 54px;
  object-fit: contain;
  filter: ${(props) => (props.darkOnLight ? 'brightness(0) saturate(100%)' : 'none')};
`;

const LinkedLogoCard = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
  border-radius: 12px;

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.tint.purple};
    outline-offset: 2px;
  }
`;

const FundedByScroller = styled.div`
  margin-top: ${sectionContentSpacing};
  display: flex;
  gap: 12px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 6px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
`;

const FundedByItem = styled(LinkedLogoCard)`
  flex: 0 0 clamp(210px, 27vw, 290px);
  min-width: 210px;
  scroll-snap-align: start;
`;

const CompatibilityGrid = styled.div`
  margin-top: ${sectionContentSpacing};
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const CompatibilityCard = styled(Card)`
  gap: 10px;
  background: #ffffff;
`;

const CompatibilityHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

const HeroBadgeWrap = styled.div`
  display: inline-flex;
  width: fit-content;
  align-self: flex-start;
  white-space: nowrap;
`;

const ContactCard = styled(Card)`
  margin-top: ${sectionContentSpacing};
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;

  @media (max-width: 780px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ContactImage = styled.img`
  width: 170px;
  height: auto;
  max-width: 100%;
  border-radius: 0;
  object-fit: contain;
  flex-shrink: 0;
  align-self: center;

  @media (max-width: 780px) {
    align-self: flex-start;
  }
`;

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ContactLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const ContactLink = styled.a`
  color: ${(props) => props.theme.colors.text.tint.purple};
  text-decoration: underline;
  font-size: 15px;
`;

const ContactCTA = styled(Button.Tertiary)`
  align-self: flex-start;
`;

type HeroSectionProps = {
  onContactClick: () => void;
};

function HeroSection({ onContactClick }: HeroSectionProps) {
  return (
    <Hero glossBorder>
      <HeroLayout>
        <HeroCopy>
          <HeroBadgeWrap>
            <Tag color="purple" variant="default">
              Open Source
            </Tag>
          </HeroBadgeWrap>
          <Heading.Huge as="h1">
            Run intervention studies in the wild, not only in the lab.
          </Heading.Huge>
          <HeroSummary>
            OpenResearchKit provides open-source data collection and study infrastructure with
            cutting-edge research techniques for on-device processing, in-app surveys, and
            UUID-based matching between app metadata and survey responses.
          </HeroSummary>
          <HeroActions>
            <HeroPrimaryCTA
              asComponent="anchor"
              href={githubRepositoryUrl}
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub →
            </HeroPrimaryCTA>
            <HeroSecondaryCTA asComponent="button" onClick={onContactClick}>
              Contact us →
            </HeroSecondaryCTA>
          </HeroActions>
        </HeroCopy>

        <HeroVideoFrame>
          <HeroVideo
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="images/one-sec-demo-mask.webp"
          >
            <source src="videos/one-sec-demo.mp4" type="video/mp4" />
            <source src="videos/one-sec-demo.webm" type="video/webm" />
          </HeroVideo>
        </HeroVideoFrame>
      </HeroLayout>
    </Hero>
  );
}

function ResearchSection() {
  return (
    <Section id="research">
      <SectionHeadingRow>
        <Round.Regular>Research conducted with OpenResearchKit</Round.Regular>
        <Paragraph.Regular>
          These studies show how OpenResearchKit supports rigorous, real-world intervention
          research. Use them as reference points for your own experiments and replications.
        </Paragraph.Regular>
      </SectionHeadingRow>

      <ResearchGrid>
        {studies.map((study) => (
          <ResearchCard key={study.href} glossBorder>
            <Heading.Large>{study.title}</Heading.Large>
            <Meta>
              {study.publisher} · {study.date}
            </Meta>
            <Paragraph.Regular>{study.summary}</Paragraph.Regular>
            <CTA asComponent="anchor" href={study.href} target="_blank" rel="noreferrer">
              Read Publication
            </CTA>
          </ResearchCard>
        ))}
      </ResearchGrid>
    </Section>
  );
}

function OpenSourceSection() {
  return (
    <Section id="open-source">
      <ResearchCard glossBorder>
        <Round.Regular>Open Source</Round.Regular>
        <Heading.Large>Transparent infrastructure for reproducible digital studies.</Heading.Large>
        <Paragraph.Regular>
          OpenResearchKit is open source. Use the public repository for audits, forks, and
          cross-site replications of study infrastructure.
        </Paragraph.Regular>
        <CTA asComponent="anchor" href={githubRepositoryUrl} target="_blank" rel="noreferrer">
          View on GitHub →
        </CTA>
      </ResearchCard>
    </Section>
  );
}

function PrivacySection() {
  return (
    <Section id="privacy">
      <SectionHeadingRow>
        <Round.Regular>Privacy & Security</Round.Regular>
        <Paragraph.Regular>
          Privacy-preserving study infrastructure with security-conscious data handling and
          ethics-ready documentation.
        </Paragraph.Regular>
      </SectionHeadingRow>

      <ResearchGrid>
        <ResearchCard glossBorder>
          <Heading.Large>Anonymous, UUID-linked study data.</Heading.Large>
          <Paragraph.Regular>
            App metadata events and survey responses can be pseudonymously linked via UUIDs for
            longitudinal analysis without storing personal information.
          </Paragraph.Regular>
        </ResearchCard>

        <ResearchCard glossBorder>
          <Heading.Large>Ethics approval ready.</Heading.Large>
          <Paragraph.Regular>
            Data minimization, consent-oriented flows, and exportable study records support
            IRB/ethics reviews and compliance documentation.
          </Paragraph.Regular>
          <CTA asComponent="anchor" href={davidContactLink}>
            Discuss ethics setup →
          </CTA>
        </ResearchCard>
      </ResearchGrid>
    </Section>
  );
}

function CompatibilitySection() {
  return (
    <Section id="compatibility">
      <SectionHeadingRow>
        <Round.Regular>Compatibility</Round.Regular>
        <Paragraph.Regular>
          Use a shared study infrastructure across platforms as support expands.
        </Paragraph.Regular>
      </SectionHeadingRow>

      <CompatibilityGrid>
        {compatibilityItems.map((item) => (
          <CompatibilityCard key={item.platform} glossBorder>
            <CompatibilityHeader>
              <Heading.Large>{item.platform}</Heading.Large>
              {item.comingSoon ? (
                <Tag color="gray" variant="tonal">
                  In Development
                </Tag>
              ) : null}
            </CompatibilityHeader>
            <Paragraph.Regular>{item.summary}</Paragraph.Regular>
          </CompatibilityCard>
        ))}
      </CompatibilityGrid>
    </Section>
  );
}

function UsedInSection() {
  return (
    <Section>
      <SectionHeadingRow>
        <Round.Regular>Used In</Round.Regular>
        <Paragraph.Regular>
          OpenResearchKit workflows are integrated into active behavioral research around{' '}
          <strong>one sec</strong> and <strong>Structured</strong>.
        </Paragraph.Regular>
      </SectionHeadingRow>

      <LogoGrid>
        {usedInProducts.map((item) => (
          <ProductLogoCard key={item.name} glossBorder>
            <ProductLogo src={item.src} alt={item.alt} />
            <Heading.Regular>{item.name}</Heading.Regular>
            <Paragraph.Small>{item.description}</Paragraph.Small>
          </ProductLogoCard>
        ))}
      </LogoGrid>
    </Section>
  );
}

function PartnerSection() {
  return (
    <Section id="partners">
      <SectionHeadingRow>
        <Round.Regular>Used By</Round.Regular>
        <Paragraph.Regular>
          Selected institutions and organizations where OpenResearchKit-related research has been
          conducted or published.
        </Paragraph.Regular>
      </SectionHeadingRow>

      <PartnerGrid>
        {researchPartners.map((partner) => (
          <PartnerCard key={partner.name} glossBorder>
            <PartnerLogo src={partner.src} alt={partner.alt} darkOnLight={partner.darkOnLight} />
          </PartnerCard>
        ))}
      </PartnerGrid>
    </Section>
  );
}

function FundedBySection() {
  return (
    <Section id="funded-by">
      <SectionHeadingRow>
        <Round.Regular>Funded By</Round.Regular>
        <Paragraph.Regular>Organizations supporting OpenResearchKit development and studies.</Paragraph.Regular>
      </SectionHeadingRow>

      <FundedByScroller>
        {fundedByOrganizations.map((organization) => (
          <FundedByItem
            key={organization.name}
            href={organization.href}
            target="_blank"
            rel="noreferrer"
            aria-label={organization.name}
            title={organization.name}
          >
            <PartnerCard glossBorder>
              <PartnerLogo
                src={organization.src}
                alt={organization.alt}
                darkOnLight={organization.darkOnLight}
              />
            </PartnerCard>
          </FundedByItem>
        ))}
      </FundedByScroller>
    </Section>
  );
}

function ContactSection() {
  return (
    <Section id="contact">
      <SectionHeadingRow>
        <Round.Regular>Contact Us</Round.Regular>
        <Paragraph.Regular>
          For research collaborations and behavioral data projects, feel free to get in touch.
        </Paragraph.Regular>
      </SectionHeadingRow>

      <ContactCard glossBorder>
        <ContactImage src="images/david.png" alt="Dr. David J. Grüning" />
        <ContactContent>
          <Heading.Large>Dr. David J. Grüning</Heading.Large>
          <Paragraph.Small>Lead scientist at one sec</Paragraph.Small>
          <Paragraph.Regular>
            Researcher affiliated with Max Planck and the Stanford Center for Biodesign.
          </Paragraph.Regular>
          <Paragraph.Regular>
            If you are interested in working with behavioral data from one sec or running
            experiments, please get in touch.
          </Paragraph.Regular>
          <ContactLinks>
            <ContactLink href="https://orcid.org/0000-0002-9274-5477" target="_blank" rel="noreferrer">
              ORCID
            </ContactLink>
            <ContactLink href="https://scholar.google.com/citations?user=a2QfCl4AAAAJ" target="_blank" rel="noreferrer">
              Google Scholar
            </ContactLink>
            <ContactLink href="https://x.com/GruningJ" target="_blank" rel="noreferrer">
              @GruningJ
            </ContactLink>
          </ContactLinks>
          <ContactCTA asComponent="anchor" href={davidContactLink}>
            Get in touch →
          </ContactCTA>
        </ContactContent>
      </ContactCard>
    </Section>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) {
      return;
    }

    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileMenuOpen(false);
  };

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
            <BrandTitle>OpenResearchKit</BrandTitle>
            <DesktopNavigation>
              <TopNavigationLinks>
                <TopNavigationLinkButton asComponent="button" onClick={() => scrollToSection('research')}>
                  Publications
                </TopNavigationLinkButton>
                <TopNavigationLinkButton asComponent="button" onClick={() => scrollToSection('partners')}>
                  Institutions
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
                <Icon name="Bars" size={22} />
              </MobileMenuToggle>
            </MobileMenuButtonContainer>
          </TopNavigationContent>

          <MobileNavigationScrim open={mobileMenuOpen} onClick={() => setMobileMenuOpen(false)} />

          <MobileNavigationPanel id="mobile-navigation-panel" open={mobileMenuOpen}>
            <MobileNavigationInner>
              <MobileNavigationButton asComponent="button" onClick={() => scrollToSection('research')}>
                Publications
              </MobileNavigationButton>
              <MobileNavigationButton asComponent="button" onClick={() => scrollToSection('partners')}>
                Institutions
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
          <LandingContainer>
            <HeroSection onContactClick={() => scrollToSection('contact')} />
            <Separator transparent />
            <OpenSourceSection />
            <Separator transparent />
            <PrivacySection />
            <Separator transparent />
            <CompatibilitySection />
            <Separator transparent />
            <ResearchSection />
            <Separator transparent />
            <UsedInSection />
            <Separator transparent />
            <PartnerSection />
            <Separator transparent />
            <FundedBySection />
            <Separator transparent />
            <ContactSection />
          </LandingContainer>
        </ContentShell>
      </SiteShell>
    </ThemeProvider>
  );
}
