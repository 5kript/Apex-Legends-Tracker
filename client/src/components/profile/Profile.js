import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { ApexContext } from '../../context/providers/ApexContext';

import style from './Profile.module.scss';

import Spinner from '../spinner/Spinner';

const Profile = () => {
  const { profile, errors } = useContext(ApexContext);

  const [profileData, setProfileData] = useState();
  const [errorMsg, setErrorMsg] = useState();

  useEffect(() => {
    if (profile) {
      setProfileData(profile.data);
    }
  }, [profile]);

  useEffect(() => {
    if (errors) {
      setErrorMsg(errors.msg);
    }
  }, [errors]);

  const isContent = () => {
    if (profileData) {
      return (
        <div className={style.container}>
          <h1 className={style.gamertag}>
            <img
              src={profileData.platformInfo.avatarUrl}
              className={style.platformAvatar}
              alt="Avatar"
            />
            {profileData.platformInfo.platformUserId}
          </h1>
          <div className={style.grid}>
            <div>
              <img
                src={profileData.segments[1].metadata.imageUrl}
                alt="legend"
              />
            </div>
            <div>
              <ul>
                <li className={style.activeLegend}>
                  <h4>Active Legend</h4>
                  <p>{profileData.metadata.activeLegendName}</p>
                </li>
                {profileData.segments[0].stats.season2Wins ? (
                  <li>
                    <h4>Season 2 Wins</h4>
                    <p>
                      {profileData.segments[0].stats.season2Wins.displayValue}
                      <span>
                        &nbsp;(
                        {profileData.segments[0].stats.season2Wins.percentile})
                      </span>
                    </p>
                  </li>
                ) : null}

                {profileData.segments[0].stats.level ? (
                  <li>
                    <h4>Apex Level</h4>
                    <p>
                      {profileData.segments[0].stats.level.displayValue}
                      <span>
                        &nbsp;({profileData.segments[0].stats.level.percentile}
                        %)
                      </span>
                    </p>
                  </li>
                ) : null}

                {profileData.segments[0].stats.kills ? (
                  <li>
                    <h4>Lifetime Kills</h4>
                    <p>
                      {profileData.segments[0].stats.kills.displayValue}
                      <span>
                        &nbsp;({profileData.segments[0].stats.kills.percentile}
                        %)
                      </span>
                    </p>
                  </li>
                ) : null}

                {profileData.segments[0].stats.damage ? (
                  <li>
                    <h4>Damage Done</h4>
                    <p>
                      {profileData.segments[0].stats.damage.displayValue}
                      <span>
                        &nbsp;({profileData.segments[0].stats.damage.percentile}
                        %)
                      </span>
                    </p>
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
          <ul className={style.grid}>
            {profileData.segments[1].stats.kills ? (
              <li>
                <h4>{profileData.metadata.activeLegendName} kills</h4>
                <p>
                  {profileData.segments[1].stats.kills.displayValue}
                  <span>
                    &nbsp;({profileData.segments[1].stats.kills.percentile}%)
                  </span>
                </p>
              </li>
            ) : null}

            {profileData.segments[1].stats.season2Wins ? (
              <li>
                <h4>{profileData.metadata.activeLegendName} Season 2 Wins</h4>
                <p>
                  {profileData.segments[1].stats.season2Wins.displayValue}
                  <span>
                    &nbsp;(
                    {profileData.segments[1].stats.season2Wins.percentile})
                  </span>
                </p>
              </li>
            ) : null}
          </ul>
          <Link to="/">Go Back</Link>
        </div>
      );
    }

    if (errorMsg) {
      return (
        <>
          <h1>{errorMsg}</h1>
          <Link to="/">Go Back</Link>
        </>
      );
    }
  };

  return <div>{isContent() ? isContent() : <Spinner />}</div>;
};

export default Profile;
