import ReactPDF, {StyleSheet, Text as PdfText} from '@react-pdf/renderer';
import React from "react";

interface TextProps extends ReactPDF.TextProps {
  contrast?: boolean;
}

const Text: React.FC<TextProps> = ({ contrast, style, ...props}) => {
  const defaultStylesInternal = {...defaultStyle.text};

  if (contrast) {
    defaultStylesInternal.color = '#FFF';
  }

  const styles = style
    ? { ...defaultStylesInternal, ...style}
    : defaultStylesInternal;

  return <PdfText style={styles} {...props} />
}

const defaultStyle = StyleSheet.create({
  text: {
    fontFamily: 'Lato',
    color: '#242424',
    fontSize: 10
  },
});
export default Text;
