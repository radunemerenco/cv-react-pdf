import {StyleSheet, View} from "@react-pdf/renderer";
import React from "react";
import Text from "../elements/Text";
import Hr from "./Hr";
import ProjectCard, {ProjectCardProps} from "./ProjectCard";
import {EnabledProjects, projectsByName} from "../../../data";

const titleItems = [
  'Senior ReactJS Developer',
  'Contractor',
  'Freelancer',
];

// "JavaScript, NodeJS, PostgreSQL, ReactJS, Redux, Docker, AWS, Jenkins CI/CD, GitHub, Jira".split(', ').map(i => `'${i}'`).join(', ')

export interface RightSectionProps {
  projects: ProjectCardProps[],
}

const RightSection: React.FC<RightSectionProps> = ({ projects }) => {
  return (
    <View style={[styles.container]}>
      <View style={styles.header}>
        <Text style={styles.name}>Radu Nemerenco</Text>
        <View style={styles.titleContainer}>
          {titleItems.map((titleItem, index) => {
            return (
              <View key={titleItem} style={styles.titleItemContainer}>
                {!!index && <Text style={styles.titleSeparator}>•</Text>}
                <Text style={styles.titleItem}>{titleItem}</Text>
              </View>
            )
          })}
        </View>
      </View>

      <Hr />

      <Text style={styles.aboutMeTitle}>About Me</Text>
      <Text style={styles.aboutMeDescription}>I am a developer / contractor / freelancer with <Text style={{fontWeight: 'black'}}>8+ years of experience</Text></Text>
      <Text style={styles.aboutMeDescription}>I use my expertise, skills and passion to identify and implement clients’ needs with regards to their software solutions.</Text>
      <Text style={styles.aboutMeDescription}>Drop me a message if you think my expertise could help your organization!</Text>

      <Hr />

      <Text style={styles.workExperience}>Work Experience</Text>

      {projects.map(project => <ProjectCard key={project.projectName} {...project} />)}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1
  },
  header: {
    alignItems: 'center'
  },
  name: {
    fontSize: 32,
    textTransform: 'uppercase',
    marginTop: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center'
  },
  titleItemContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleItem: {
    fontSize: 12,
  },
  titleSeparator: {
    paddingHorizontal: 2
  },

  aboutMeTitle: {
    textTransform: 'uppercase',
    fontSize: 14,
    marginBottom: 5
  },
  aboutMeDescription: {
    fontSize: 11,
    opacity: 0.7,
    marginTop: 2,
    marginBottom: 3,
  },

  workExperience: {
    textTransform: 'uppercase',
    fontSize: 14,
  },

})

export default RightSection;
