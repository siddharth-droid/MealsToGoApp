import styled from "styled-components/native";

const sizeVariant = {
  small:1,
  medium:2,
  large:3,
}

const positionVariant = {
    top:'marginTop',
    left:'marginLeft',
    right:'marginRight',
    bottom:'marginBottom',
}

const getVariant = (position,size) => `${positionVariant[position]}:${sizeVariant[size]}`;

export const Spacer = styled.View`
${(position,size) => getVariant(position,size)}
`;


Spacer.defaultprops = {
  position = 'top',
  size = 'small'
}