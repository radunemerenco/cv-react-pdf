import React from 'react';
import {Page, Text, View, Document, StyleSheet, Image, Font} from '@react-pdf/renderer';
import LeftSection from "./LeftSection/LeftSection";
import RightSection from "./RightSection";
import {enabledProjectsAll, projectsByName} from "../../data";
import {ProjectCardProps} from "./RightSection/ProjectCard";

Font.register({ family: 'Lato', src: '/fonts/Lato/Lato-Regular.ttf', fontStyle: 'normal', fontWeight: 'normal' });
Font.register({ family: 'Lato', src: '/fonts/Lato/Lato-Black.ttf', fontStyle: 'normal', fontWeight: 'black' });


// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
  },
  section: {
    padding: 10
  },
});

// Create Document Component
const CvDocument = () => {
  const projects: ProjectCardProps[] = enabledProjectsAll.map(projectName => projectsByName[projectName]);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <LeftSection/>
        <RightSection
          projects={projects}
          workExperienceTitle="Work Experience"
        />
      </Page>
    </Document>
  );
}

export default CvDocument;
