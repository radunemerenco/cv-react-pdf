import React, {ReactNode} from "react";
import {StyleSheet, View} from "@react-pdf/renderer";
import Text from "../elements/Text";

export interface ProjectCardProps {
  projectName: string;
  from: string;
  to: string;
  title: string;
  company?: string;
  clientProblem: ReactNode;
  achievements: ReactNode[];
  skills: string[],
  isLastItem?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  from,
  to,
  title,
  company,
  clientProblem,
  achievements,
  skills,
  isLastItem,
}) => {
  const rightColumnStyle = styles.rightColumn //isLastItem
    // ? styles.rightColumn
    // : {...styles.rightColumn, paddingBottom: 16};

  return (
    <View style={styles.container} wrap={false}>
      <View style={rightColumnStyle}>
        <View style={styles.timelineLine} />
        <View style={styles.timelineMarker} />
        <View style={styles.rightHeading}>
          <Text style={styles.title}>{title} </Text>
          <Text style={styles.period}>{from} - {to}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.projectName}>
            {projectName}
            {!!company && ` | ${company}`}
          </Text>

          <Text style={styles.clientProblem}>{clientProblem}</Text>

          <View style={styles.achievementsContainer}>
            {achievements.map((achievement, key) => (
              <Text key={key} style={styles.achievement}><Text style={styles.bulletPoint}>{' • '}</Text>{achievement}</Text>
            ))}
          </View>

          <View style={styles.skillsContainer}>
            <Text style={styles.skill}>Skills: {skills.join(', ')}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  // leftColumn: {
  //   width: '25%',
  //   paddingRight: 10,
  //   alignItems: 'flex-end',
  //   paddingVertical: 8,
  // },
  rightColumn: {
    flex: 1,
    paddingLeft: 10,
    paddingVertical: 8
  },
  timelineLine: {
    position: 'absolute',
    left: 0,
    top: 13,
    bottom: -12,
    width: 1,
    backgroundColor: '#d4d4d4',
  },
  timelineMarker: {
    position: 'absolute',
    width: 9,
    height: 9,
    backgroundColor: 'rgb(74, 74, 74)',
    borderRadius: 9,
    left: -4,
    top: 12,
  },
  projectName: {
    fontSize: 10,
    marginBottom: 5
  },
  period: {
    fontSize: 10,
    opacity: 0.8
  },
  rightHeading: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 4,
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 14,
  },
  // company: {
  //   fontSize: 9,
  // },
  content: {
    minHeight: 100
  },

  clientProblem: {
    opacity: 0.7
  },
  achievementsContainer: {
    marginTop: 14,
    opacity: 0.7
  },
  bulletPoint: {
    letterSpacing: 8
  },
  achievement: {
    marginBottom: 5,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    opacity: 0.7,
  },
  skill: {

  }
});

export default ProjectCard;

