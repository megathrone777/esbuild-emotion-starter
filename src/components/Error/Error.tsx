import { NavLink } from "react-router-dom";

import { StyledWrapper, StyledTitle } from "./emotion";

const Error: React.FC = () => (
  <StyledWrapper>
    <StyledTitle>Page not found.</StyledTitle>
    <NavLink to="/">Main page</NavLink>
  </StyledWrapper>
);

export { Error };
