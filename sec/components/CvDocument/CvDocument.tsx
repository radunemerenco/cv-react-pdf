import React from 'react';
import {Page, Text, View, Document, StyleSheet, Image, Font} from '@react-pdf/renderer';
import LeftSection from "./LeftSection/LeftSection";
import RightSection from "./RightSection";

Font.register({ family: 'Lato', src: '/fonts/Lato/Lato-Regular.ttf', fontStyle: 'normal', fontWeight: 'normal' });
Font.register({ family: 'Lato', src: '/fonts/Lato/Lato-Black.ttf', fontStyle: 'normal', fontWeight: 'black' });


// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    padding: 10
  },
});

// Create Document Component
const CvDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <LeftSection />
      <RightSection />
    </Page>
  </Document>
);

export default CvDocument;
