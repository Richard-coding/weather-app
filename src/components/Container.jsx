import React from "react";
const Container = ({ children }) => {
  return (
    <div className="h-screen max-w-screen-xl p-4" >
      {children}
    </div>
  );
};

export default Container;
