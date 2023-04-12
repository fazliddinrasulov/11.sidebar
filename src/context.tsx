import { createContext, useState } from "react";

export const AppContext = createContext<any>(null);
const AppProvider = ({ children }: any) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        closeModal,
        closeSidebar,
        openSidebar,
        openModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
