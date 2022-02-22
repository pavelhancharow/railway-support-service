import { createContext, FC, ReactNode, useState } from 'react';

interface ITicketContext {
  isDetails: boolean;
  toggleDetails: () => void;
}

const initialState = {
  isDetails: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleDetails: () => {},
};

export const TicketContext = createContext<ITicketContext>(initialState);

interface ITicketContextProvider {
  children: ReactNode;
}

export const TicketContextProvider: FC<ITicketContextProvider> = ({
  children,
}) => {
  const [isDetails, setIsDetails] = useState<boolean>(true);

  const toggleDetails = () => setIsDetails((state) => !state);

  return (
    <TicketContext.Provider
      value={{
        isDetails,
        toggleDetails,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};
