import React, {ReactNode} from "react";
import {StyleSheet, View} from "@react-pdf/renderer";
import Text from "../elements/Text";

interface ProjectCardProps {
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
      <View style={styles.leftColumn}>
        <Text style={styles.projectName}>{projectName}</Text>
        <Text style={styles.period}>{from} - {to}</Text>
      </View>
      <View style={rightColumnStyle}>
        <View style={styles.timelineLine} />
        <View style={styles.timelineMarker} />
        <View style={styles.rightHeading}>
          <Text style={styles.title}>{title} | </Text>
          <Text style={styles.company}>{company}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.clientProblem}>{clientProblem}</Text>

          <View style={styles.achievementsContainer}>
            {achievements.map((achievement, key) => (
              <Text key={key} style={styles.achievement}><Text style={styles.bulletPoint}>{' • '}</Text>{achievement}</Text>
            ))}
          </View>

          <View style={styles.skillsContainer}>
            <Text style={styles.skill}><Text style={{fontWeight: 'black'}}>Skills: </Text>{skills.map((skill, key) => `${skill}, `)}</Text>
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
  leftColumn: {
    width: '25%',
    paddingRight: 10,
    alignItems: 'flex-end',
    paddingVertical: 8,
  },
  rightColumn: {
    flex: 1,
    paddingLeft: 10,
    paddingVertical: 8
  },
  timelineLine: {
    position: 'absolute',
    left: 0,
    top: 13,
    bottom: -10,
    width: 1,
    backgroundColor: '#d4d4d4',
  },
  timelineMarker: {
    position: 'absolute',
    width: 11,
    height: 11,
    backgroundColor: 'rgb(74, 74, 74)',
    borderRadius: 16,
    left: -5,
    top: 10,
  },
  projectName: {
    fontSize: 12,
  },
  period: {
    fontSize: 9,
    opacity: 0.8
  },
  rightHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4
  },
  title: {
    fontSize: 14,
  },
  company: {
    fontSize: 9,
  },
  content: {
    minHeight: 100
  },

  clientProblem: {
    opacity: 0.9
  },
  achievementsContainer: {
    marginTop: 14,
    opacity: 0.7
  },
  bulletPoint: {
    letterSpacing: 8
  },
  achievement: {
    marginBottom: 14,
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

