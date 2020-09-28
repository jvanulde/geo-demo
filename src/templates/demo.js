import { graphql } from "gatsby"
import React from "react"
import Layout from '../components/layout'
import LeafletMap from '../components/leafletmap'

const DemoTemplate = ({ data }) => {
  let theme = data.allGeoFeature.edges[0].node.focusFields;
  let position = [theme.LATITUDE, theme.LONGITUDE];
  return (
    <Layout>
    <h1>{theme.NAME}</h1>
    <p>{theme.NUMBER}</p>
    <p>{theme.TYPE}</p>
    <p>{theme.FOCUS}</p>
    <p>{theme.HIERARCHY}</p>

{/* 
    <button onClick={this.fetchData}>Export</button>
      <Link
        data={this.state.data}
        filename={this.state.name + '.json' }
        className="hidden"
        ref={this.DISBURSEMENT.LINK}
        target="_blank"
      
      /> */}

    {typeof window !== 'undefined' &&
        <LeafletMap
          position={position}
          zoom={13}
          markerText={theme.NAME}
        />
    }
  </Layout>
);
}

export default DemoTemplate

export const query = graphql`
query($url: String!) {
  allGeoFeature(filter: {featureFields: {URL: {eq: $url}}}) {
    edges {
      node {
        id
        featureFields {
          ADDRESS_1
          NAME
          LATITUDE
          LONGITUDE
          URL
          TYPE
          NUMBER
          FOCUS
          HIERARCHY
          ID
        }
      }
    }
  }
}
`