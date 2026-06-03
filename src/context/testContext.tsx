import { createContext, useContext, type ReactNode, useState } from "react";

interface TextContext {
  name: string;
  setName: (name: string) => void;
}

const TestContext = createContext<TextContext | null>(null);

export const TestProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState<string>("Ram");
  return (
    <TestContext
      value={{
        name,
        setName,
      }}
    >
      {children}
    </TestContext>
  );
};

const useTestContext = () => {
  const context = useContext(TestContext);
  if (!context)
    throw new Error("useTestContext must be use inside TestProvider");

  return context;
};

export default useTestContext;
