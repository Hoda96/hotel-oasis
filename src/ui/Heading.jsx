import styled, {css} from "styled-components";

const Heading = styled.h1`
  ${(props) => props.as === "h1" &&
          css`
            font-size: 2rem;
            font-weight: 700;
            color: var(--color-yellow-700);`
  };
  ${(props) => props.as === "h2" &&
          css`
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--color-green-700);
         &:hover{
           text-decoration: underline;
           font-size: 2rem;
           transition: 1s ease-in-out;
         }
          `
  };
  line-height: 5rem;
`;

export default Heading;