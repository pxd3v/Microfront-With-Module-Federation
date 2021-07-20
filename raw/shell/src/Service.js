import * as React from "react";

export const Context = React.createContext(undefined);

function useService() {
  const [title, setTitle] = React.useState("App");

  return {
    title,
    setTitle
  };
}

export function useServiceContext() {
  const context = React.useContext(Context);

  if (context === undefined) {
    throw new Error(
      "ServiceContext value is undefined. Make sure you use the ServiceProvider before using the context."
    );
  }

  return context;
}

export function ServiceProvider(props) {
  const value = useService();
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}
