import type { ReactNode } from "react";

type ParagraphProps = {
  children: ReactNode;  
};

function Paragraph({ children }: ParagraphProps) {
  return (
    <div className="text-gray-700 text-white/50 mb-10">
      {children}
    </div>
  );
}

export default Paragraph;
