import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;

export const CategoryTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;