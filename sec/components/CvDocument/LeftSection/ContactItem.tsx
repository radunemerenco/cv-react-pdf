import React, {ReactNode} from "react";
import {StyleSheet, View} from "@react-pdf/renderer";
import Text from "../elements/Text";

interface ContactItemProps {
  icon: ReactNode;
  text: string;
}

const ContactItem: React.FC<ContactItemProps> = ({
  icon,
  text,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        {icon}
      </View>
      <Text contrast>{text}</Text>
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
