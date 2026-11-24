import type { ReactNode } from "react";

type MainheadingProps = {
  children: ReactNode;  
};

function Mainheading({ children }: MainheadingProps) {
  return (
    <h3 className="font-bold text-red-600">
      {children}
    </h3>
  );
}

export default Mainheading;
