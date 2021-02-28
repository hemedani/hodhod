import { useLocation } from "react-router";
import { Path } from "../routes/Path";
export const useNav = () => {
  const { pathname } = useLocation();

  switch (pathname) {
    case Path.sellerdatainput:
      return 1;
    case Path.client:
      return 2;

    default:
      return 0;
  }
};
