import { useOutlet } from "react-router-dom";

import { StyledContent } from "./emotion";

const Layout: React.FC = () => {
  const outlet = useOutlet();

  return (
    <>
      Header
      <StyledContent>{outlet}</StyledContent>
      Footer
    </>
  );
};

export { Layout };
