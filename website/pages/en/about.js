/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: `Supervisor <div></div> Institute of Molecular Bioscience`,
      title: 'Dr. Quan Nguyen',
    },
    {
      content: 'PhD Student <div></div> Institute of Molecular Bioscience',
      title: 'Duy Pham',
    },
    {
      content: "Research Assistant <div></div> Institute of Molecular Bioscience",
      title: 'Jon Xu',
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Contributors of stLearn:</h1>
          </header>
          <p>We are Biomedical Machine Learning Group - Institute Molecular Science - The University of Queensland.</p>
          <GridBlock contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
