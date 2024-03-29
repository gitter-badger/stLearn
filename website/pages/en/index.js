/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>

        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href="/docs/introduction">Get Started</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );



    const LearnHow = () => (

      <Block background="light">
        {[
          {
            content:
              '<div class="command"><div class="label">Run this command:</div><div class="text">conda install -c stlearn stlearn=0.1.0 python=3.6</div></div>',
            image: `${baseUrl}img/install.png`,
            imageAlign: 'left',
            title: 'Installation',

          },
        ]}

      </Block>

    );


    const Features = () => (
      <Block layout="twoColumn">
        {[
          {
            content: 'Using Spatial Weight to construct Pseudo-time-space',
            image: `${baseUrl}img/pseudo-time-space.png`,
            imageAlign: 'top',
            title: 'Pseudo-time-space Trajectory Inference',
          },
          {
            content: 'Analysis of DE based on region extracted from pseudo-time',
            image: `${baseUrl}img/Transition-DEA.png`,
            imageAlign: 'top',
            title: 'Transition Differential Expression Analysis',
          },
          {
            content: 'Analysis of DE based on region of interest',
            image: `${baseUrl}img/Brain1_volcano_control.png`,
            imageAlign: 'top',
            title: 'Differential Expression Analysis',
          },
        ]}
      </Block>
    );


    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <LearnHow />

          <Features />

        </div>
      </div>
    );
  }
}

module.exports = Index;
