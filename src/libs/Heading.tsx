import { VFC, ReactNode } from "react";
import styled from "styled-components";

type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type Props = {
  chidren: ReactNode;
  tag: HeadingType;
};

export const Heading: VFC<Props> = ({ chidren, tag }) => {
  return <Wapper as={tag}>{chidren}</Wapper>;
};

const Wapper = styled.h1`
  margin: 0;
`;
