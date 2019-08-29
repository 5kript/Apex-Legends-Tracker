import React, { useState, useContext } from 'react';

import { ApexContext } from '../../context/providers/ApexContext';

const initialState = {
  platform: 'psn',
  gamertag: ''
};

const Search = props => {
  const [{ platform, gamertag }, setState] = useState(initialState);
  const { getProfile } = useContext(ApexContext);

  const onChange = e => {
    const { name, value } = e.target;

    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const onSubmit = async e => {
    e.preventDefault();
    getProfile(platform, gamertag);

    props.history.push(`/profile/${platform}/${gamertag}`);
  };

  return (
    <section className="search">
      <h1>Track Player Stats</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="platform">Platform</label>
          <select
            name="platform"
            value={platform}
            id="platform"
            onChange={onChange}
          >
            <option value="psn">Playstation</option>
            <option value="xbl">Xbox</option>
            <option value="origin">Origin</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="gamertag">Gamertag</label>
          <input
            type="text"
            name="gamertag"
            id="gamertag"
            onChange={onChange}
            value={gamertag}
            placeholder="Origin ID, Xbox Live gamertag, PSN ID"
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Submit" className="btn" />
        </div>
      </form>
    </section>
  );
};

export default Search;
