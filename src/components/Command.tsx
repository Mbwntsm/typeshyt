import type { ReactNode } from "react";

type CommandProps = {
  children: ReactNode;  
};

function Command({ children }: CommandProps) {
  return (
    <h4 className="font-bold text-green-600">
      {children}
    </h4>
  );
}

export default Command;
