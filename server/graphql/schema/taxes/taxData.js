const AssessedValue = require('./assessedValue');
const TaxRate = require('./taxRate');
const TaxTotals = require('./taxTotals');
const RepresentativeHouse = require('./representativeHouse');
const TaxBurden = require('./taxBurden');

const TaxData = `
  # This represents a municipality's tax data for one year
  type TaxData {
        _id: String!
        municipality: String!
        type: String!
        year: Int!
        regionalDistrict: String!
        populationEstimate: Float
        assessedValue: AssessedValue
        taxRate: TaxRate
        taxTotals: TaxTotals
        representativeHouse: RepresentativeHouse
        taxBurden: TaxBurden
  }
`;

module.exports = () => [TaxData, AssessedValue, TaxRate, TaxTotals, RepresentativeHouse, TaxBurden];
