jest.unmock('../../components/PropertyCard');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import PropertyCard from '../../components/PropertyCard';
import AgencyBanner from '../../components/AgencyBanner';
import PropertyActions from '../../actions/PropertyActions';

describe('PropertyCard', () => {
  const property = {
    id: '1',
    price: '$950,000',
    agency: {
      brandingColors: {
        primary: 'rgb(255, 229, 18)',
      },
      logo: 'logo.png',
    },
    mainImage: 'image.png',
  };

  function renderPropertyCard(isSaved = false) {
    return TestUtils.renderIntoDocument(
      <PropertyCard
        id={property.id}
        price={property.price}
        agency={property.agency}
        image={property.mainImage}
        isSaved={isSaved}
      />
    );
  }

  it('displays the property image', () => {
    const propertyCard = renderPropertyCard();
    const imgNode = TestUtils.findRenderedDOMComponentWithTag(propertyCard, 'img');
    expect(imgNode.src).toEqual(property.mainImage);
  });

  it('displays the property price', () => {
    const propertyCard = renderPropertyCard();
    const priceNode = TestUtils.findRenderedDOMComponentWithTag(propertyCard, 'p');
    expect(priceNode.textContent).toEqual(property.price);
  });

  it('displays the agency banner', () => {
    const propertyCard = renderPropertyCard();
    const agencyBannerNode = TestUtils.findRenderedComponentWithType(propertyCard, AgencyBanner);
    expect(agencyBannerNode).toBeDefined();
  });

  it('displays the save button', () => {
    const propertyCard = renderPropertyCard();
    const buttonNode = TestUtils.findRenderedDOMComponentWithTag(propertyCard, 'button');
    expect(buttonNode.textContent).toEqual('Save property');
  });

  it('displays the remove button', () => {
    const propertyCard = renderPropertyCard(true);
    const buttonNode = TestUtils.findRenderedDOMComponentWithTag(propertyCard, 'button');
    expect(buttonNode.textContent).toEqual('Remove property');
  });

  it('saves the property when the save button is clicked', () => {
    const propertyCard = renderPropertyCard();
    const buttonNode = TestUtils.findRenderedDOMComponentWithTag(propertyCard, 'button');
    TestUtils.Simulate.click(buttonNode);
    expect(PropertyActions.saveProperty.mock.calls.length).toEqual(1);
    expect(PropertyActions.saveProperty.mock.calls[0][0]).toBe(property.id);
  });

  it('removes the property when the remove button is clicked', () => {
    const propertyCard = renderPropertyCard(true);
    const buttonNode = TestUtils.findRenderedDOMComponentWithTag(propertyCard, 'button');
    TestUtils.Simulate.click(buttonNode);
    expect(PropertyActions.removeProperty.mock.calls.length).toEqual(1);
    expect(PropertyActions.removeProperty.mock.calls[0][0]).toBe(property.id);
  });
});
