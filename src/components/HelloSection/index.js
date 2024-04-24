import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import Bride from '@assets/images/henon-avatar4.jpg';
import Groom from '@assets/images/filip-avatar1.jpg';
import { styWrapper } from './styles';

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

function HelloSection({ isInvitation }) {
  // const finalSubtitle = 'Minggu, 11 September 2022';

  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">
                Filip Franičević <br /> & <br /> Henon Ogbazion Franičević
              </h2>
              <h3 className="sub-title hs">
                Pozvani ste na proslavu našeg vjenčanja <br /> 27. srpnja 2024.
              </h3>
            </div>
          </div>
          <div className="couple-wrap">
            <div className="couple-half">
              <div className="groom">
                <img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-groom">
                <h3 className="main-font">Henon</h3>
                <p className="parent-name parent-name__top">
                  Roditelji: <br /> Gosp. Ogbazion Hadgu <br /> & <br /> Gđa. Hiwet Hagos
                </p>
                <a href="https://www.instagram.com/henon.h/" target="_blank">
                  <i class="fa-brands fa-instagram" style={{ fontSize: '40px', color: 'white' }}></i>
                </a>
              </div>
            </div>
            <p className="heart text-center">
              <i className="icon-heart2"></i>
            </p>
            <div className="and-love"></div>
            <div className="couple-half">
              <div className="bride">
                <img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-bride">
                <h3 className="main-font">Filip</h3>
                <p className="parent-name">
                  Roditelji: <br></br>
                  Gosp. Tonći Franičević <br />& <br />
                  Gđa. Marijana Mataga Franičević
                </p>
                <a href="https://www.instagram.com/flikas22/" target="_blank">
                  <i class="fa-brands fa-instagram" style={{ fontSize: '40px', color: 'white' }}></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomHr />
      {/* <div>
        <hr style={{ width: '500px', borderColor: 'rgb(168, 131, 89)' }}></hr>
      </div> */}
    </Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
