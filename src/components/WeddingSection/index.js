import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
//import ButtonLive from './ButtonLive';
import { styWrapper } from './styles';
import CountContainer from '../WelcomeSection/CountContainer';
import { GOOGLE_CALENDAR_LINK } from '@/constants';
import { styButtonWrapper } from './styles';

import { css } from '@emotion/core';

// eslint-disable-next-line import/no-unresolved
import styled from 'styled-components';

const CustomHr = styled.hr`
  width: 500px;
  border-color: rgb(168, 131, 89);
  margin-top: 80px;

  @media (max-width: 768px) {
    width: 200px;
  }
`;

export const styCenterFlex = css`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
function WeddingSection({ isInvitation }) {
  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font main-font__wedding">Detalji proslave</h2>
              <span className="sub-title sub-title__wedding"></span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-4">
              {/* <WeddingInfoBox
                title="Skup svatova"
                time="19:00"
                date="Subota, 27. srpanj 2024"
                description="Mala rika"
                location1="Get Loaction"
              /> */}
              <WeddingInfoBox
                title="Proslava"
                time="Večera u 20:00"
                time2="Skup ispred restorana ''Žabac'' u 19:30"
                date="Subota, 27. srpanj 2024."
                description="Badžula 1, 20353 Badžula"
                location2="Get Location"
              />
            </div>
          </div>
        </div>
        <div css={[styCenterFlex]}>
          <CountContainer />
        </div>
        <div className="row" css={styButtonWrapper}>
          <div className="col-md-3">
            <a href={GOOGLE_CALENDAR_LINK} title="Add to My Calendar" target="_blank" rel="noreferrer">
              <button className="btn btn-default btn-block">Dodaj u kalendar</button>
            </a>
          </div>
        </div>
      </div>
      <CustomHr />
      {/* <div>
        <hr style={{ width: '500px', borderColor: 'rgb(168, 131, 89)', height: '20px' }}></hr>
      </div> */}
    </Fragment>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
