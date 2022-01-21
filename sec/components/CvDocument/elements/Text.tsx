import ReactPDF, {StyleSheet, Text as PdfText} from '@react-pdf/renderer';
import type {Style} from '@react-pdf/types';
import React from "react";

interface TextProps extends ReactPDF.TextProps {
  contrast?: boolean;
  isBold?: boolean;
}

const Text: React.FC<TextProps> = ({ contrast, isBold, style, ...props}) => {
  const defaultStylesInternal: Style = {...defaultStyle.text};

  if (contrast) {
    defaultStylesInternal.color = '#FFF';
  }

  if (isBold) {
    defaultStylesInternal.fontWeight = 'black'
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
    fontSize: 9
  },
});

export default Text;
