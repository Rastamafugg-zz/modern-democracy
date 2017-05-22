const PropertyClassRates = require('./propertyClassRates');

const TaxRate = `
  # This represents tax rate data for municipal tax purposes
  type TaxRate {
    municipal: PropertyClassRates
    regionalDistrict: PropertyClassRates
    hospital: PropertyClassRates
    school: PropertyClassRates
    other: PropertyClassRates
    total: PropertyClassRates
  }
`;

module.exports = () => [TaxRate, PropertyClassRates];
