import type { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;  
};

function Heading({ children }: HeadingProps) {
  return (
    <h4 className="font-bold text-pink-600">
      {children}
    </h4>
  );
}

export default Heading;
