import ApolloClient from 'apollo-client';

import { IntrospectionFragmentMatcher } from 'react-apollo';

const myFragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: {
    __schema: {
      types: [
        {
          kind: 'OBJECT',
          name: 'Query',
          possibleTypes: null,
        },
        {
          kind: 'SCALAR',
          name: 'String',
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: 'Bylaw',
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: 'BylawDivision',
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: 'BylawSection',
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: 'LawDocument',
          possibleTypes: null,
        },
        {
          kind: 'SCALAR',
          name: 'Boolean',
          possibleTypes: null,
        },
        {
          kind: 'SCALAR',
          name: 'Int',
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: 'Act',
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: 'Part',
          possibleTypes: null,
        },
        {
          kind: 'UNION',
          name: 'PartContent',
          possibleTypes: [
            {
              name: 'Division',
            },
            {
              name: 'Section',
            },
          ],
        },
        {
          kind: 'OBJECT',
          name: 'Division',
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: 'Section',
          possibleTypes: null,
        },
        {
          kind: 'UNION',
          name: 'SectionContent',
          possibleTypes: [
            {
              name: 'SubSection',
            },
            {
              name: 'Paragraph',
            },
          ],
        },
        {
          kind: 'OBJECT',
          name: 'SubSection',
          possibleTypes: null,
        },
        {
          kind: 'ENUM',
          name: 'ContentType',
          possibleTypes: null,
        },
        {
          kind: 'UNION',
          name: 'SubSectionContent',
          possibleTypes: [
            {
              name: 'Definition',
            },
            {
              name: 'Paragraph',
            },
          ],
        },
        {
          kind: 'OBJECT',
          name: 'Definition',
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: 'Link',
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: 'Paragraph',
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: 'SubParagraph',
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: 'TaxData',
          possibleTypes: null,
        },
        {
          kind: 'SCALAR',
          name: 'Float',
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: 'AssessedValue',
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: 'TaxRate',
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: 'PropertyClassRates',
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: 'TaxTotals',
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: 'RepresentativeHouse',
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: 'TaxBurden',
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: 'PropertyClassStats',
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: 'Property',
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: '__Schema',
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: '__Type',
          possibleTypes: null,
        },
        {
          kind: 'ENUM',
          name: '__TypeKind',
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: '__Field',
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: '__InputValue',
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: '__EnumValue',
          possibleTypes: null,
        },
        {
          kind: 'OBJECT',
          name: '__Directive',
          possibleTypes: null,
        },
        {
          kind: 'ENUM',
          name: '__DirectiveLocation',
          possibleTypes: null,
        },
      ],
    },
  },
});

const client = new ApolloClient({
  // networkInterface,
  reduxRootSelector: (state) => state.get('apollo'),
  shouldBatch: true,
  fragmentMatcher: myFragmentMatcher,
});

export default client;
