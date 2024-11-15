import { Text, TextStyle } from 'react-native';
import React from 'react';
import { Fonts } from '../../constants/Fonts';

interface ReusableTextProps {
  text: string;
  family?: keyof typeof Fonts;
  size?: number;
  color?: string;
  align?: TextStyle['textAlign'];
  textDecorationLine?: TextStyle['textDecorationLine'];
}

const ReusableText: React.FC<ReusableTextProps> = ({ text, family, size, color, align, textDecorationLine }) => {
  return (
    <Text style={textStyle(family, size, color, align, textDecorationLine)}>{text}</Text>
  );
};

export default ReusableText;

const textStyle = (family?: keyof typeof Fonts, size?: number, color?: string, align?: TextStyle['textAlign'], textDecorationLine?: TextStyle['textDecorationLine']): TextStyle => ({
  fontFamily: family ? Fonts[family] : undefined,
  fontSize: size,
  color: color,
  textAlign: align,
  textDecorationLine: textDecorationLine,
});