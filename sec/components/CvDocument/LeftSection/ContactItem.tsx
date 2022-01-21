import React, {ReactNode} from "react";
import {StyleSheet, View, Link} from "@react-pdf/renderer";
import Text from "../elements/Text";

interface ContactItemProps {
  icon: ReactNode;
  text: ReactNode;
  link: string;
}

const ContactItem: React.FC<ContactItemProps> = ({
  icon,
  text,
  link,
}) => {
  const textElement = <Text contrast>{text}</Text>;

  const textElementToRender = link
    ? (
      <Link src={link}>
        {textElement}
      </Link>
    )
    : textElement;

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        {icon}
      </View>
      {textElementToRender}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2
  },
  icon: {
    width: 14,
    height: 14,
    alignItems: 'center',
    marginRight: 10,
  }
})

export default ContactItem;
