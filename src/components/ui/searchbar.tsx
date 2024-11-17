
import React from 'react';

const Searchbar = () => {
  return (
    <div className="p-4">
    <input 
      placeholder="Search" 
      type="text" 
      name="text" 
      className="w-full max-w-xs h-11 p-3 rounded-lg border border-lightgrey outline-none transition-all duration-300 ease-in-out shadow-[0px_0px_20px_-18px] hover:border-2 hover:border-lightgrey hover:shadow-[0px_0px_20px_-17px] active:scale-95 focus:border-2 focus:border-grey" 
    />
    </div>
  );
};

export default Searchbar;
