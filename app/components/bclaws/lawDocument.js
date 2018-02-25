import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import Part from './part';

function BCLawsDocument(props) {
  const { data: { lawsDocument = [] } } = props;

  let documentParts;
  if (lawsDocument.parts) {
    documentParts = lawsDocument.parts.map((part) => <Part part={part} />);
  }
  return (
    <div className="row">
      <table className="small-6 offset-3 columns">
        <tbody>
          <tr>
            <td><strong>Id</strong></td>
            <td>{lawsDocument.id}</td>
          </tr>
          <tr>
            <td><strong>Title</strong></td>
            <td>{lawsDocument.title}</td>
          </tr>
          <tr>
            <td><strong>Chapter</strong></td>
            <td>{lawsDocument.chapter}</td>
          </tr>
          <tr>
            <td><strong>Year Enacted</strong></td>
            <td>{lawsDocument.yearEnacted}</td>
          </tr>
          <tr>
            <td><strong>Assented To</strong></td>
            <td>{lawsDocument.assentedTo}</td>
          </tr>
        </tbody>
      </table>
      <br />
      {documentParts}
      <br />
      <p> These materials contain information that has been derived from information originally made available by the Province of British Columbia
        at: <a href="http://www.bclaws.ca/">http://www.bclaws.ca/</a> and this information is being used in accordance with the Queen's Printer License – British Columbia available
        at: <a href="http://www.bclaws.ca/standards/2014/QP-License_1.0.html">http://www.bclaws.ca/standards/2014/QP-License_1.0.html</a>. They have not, however, been produced in affiliation with, or with the endorsement of, the Province of British Columbia and THESE MATERIALS ARE NOT AN OFFICIAL VERSION.
      </p>
    </div>
  );
}

BCLawsDocument.propTypes = {
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  loadLawIndex: () => (dispatch({ type: 'LAWS_INDEX_FETCH_REQUESTED' })),
});


const query = gql`
  query LawsDocument($path: [String]) {
    lawsDocument(path: $path) {
      id,
      title,
      chapter,
      yearEnacted,
      assentedTo,
      parts {
        id,
        postfix,
        num,
        text,
        content {
          ... on Division {
            ...divisionFields
          }
          ... on Section {
            id,
            marginalNote,
            num
            content {
              ... on SubSection {
                  ...subSectionFields
              }
              ... on Paragraph {
                  ...paragraphFields
              }
            }
          }
        }
      }
      }
  }
  fragment divisionFields on Division {
    id,
    text,
    num,
    sections {
      id,
      marginalNote,
      num
    }
  }

  fragment subSectionFields on SubSection {
    id,
    type,
    text,
    num,
    content {
      ... on Paragraph {
        ...paragraphFields
      }
      ... on Definition {
        ...definitionFields
      }
    }
  }

  fragment paragraphFields on Paragraph {
    id,
    type,
    text,
    description,
    num
  }

  fragment definitionFields on Definition {
    id,
    type,
    term,
    text,
    content {
      ...paragraphFields
    }
  }
`;

export default compose(
    graphql(query),
    connect(mapStateToProps, mapDispatchToProps)
)(BCLawsDocument);
