import React, { useState, createContext, useEffect } from 'react';

import apexLogic from '../logic/apexLogic';

export const ApexContext = createContext();

export const ApexProvider = props => {
  const [profile, setProfile] = useState();
  const [errors, setErrors] = useState();

  useEffect(() => {
    return () => {
      setProfile(null);
    };
  }, [profile]);

  const getProfile = (platform, tag) => {
    apexLogic.fetchProfile(platform, tag).then(res => {
      if (res.data) {
        setProfile(res);
        setErrors(null);
      } else {
        setProfile(null);
        setErrors(res.response.data);
      }
    });
  };

  return (
    <ApexContext.Provider
      value={{
        profile,
        errors,
        getProfile
      }}
    >
      {props.children}
    </ApexContext.Provider>
  );
};
