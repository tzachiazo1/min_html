import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import {expect} from 'chai';

import Title from './title';

describe('Title Component', () => {

  it('should render an H1 title with a text in it', () => {
    const ILOVEYOU = ReactTestUtils.renderIntoDocument(<Title text="I LOVE YOU!"/>);

    const h1Title = ReactTestUtils.findRenderedDOMComponentWithTag(ILOVEYOU, 'h1');

    expect(h1Title.innerHTML).to.eq('I LOVE YOU!');
  });
});

