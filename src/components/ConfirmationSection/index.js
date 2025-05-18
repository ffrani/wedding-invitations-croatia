import React from 'react';
import { string, bool } from 'prop-types';
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

function ConfirmationSection({ isInvitation, guestName, codeLink }) {
  return (
    <div id="fh5co-started" className="fh5co-bg" css={styWrapper}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2 className="main-font">{`Hvala vam`}</h2>
            <p>
              samo vi možete naš najljepši i najsvečaniji <br /> dan ispuniti s toliko <br /> ljubavi, radosti i veselja
            </p>
            {/* <CustomHr /> */}
            {/* <div>
              <hr style={{ width: '500px', borderColor: 'rgb(168, 131, 89)', marginTop: '80px' }}></hr>
            </div> */}
          </div>
        </div>
        {/* {isInvitation && (
          <div className="row" css={styFlex}>
            <div className="col-md-3">
              <Link to={`e-ticket?${codeLink}`}>
                <button className="btn btn-default btn-block">Lihat e-Ticket</button>
              </Link>
            </div>
          </div>
        )}
        {!isInvitation && (
          <div className="row" css={styFlex}>
            <div className="col-md-3">
              <br></br>
              <br></br>
              <br></br>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}

ConfirmationSection.propTypes = {
  codeLink: string.isRequired,
  isInvitation: bool.isRequired,
  guestName: string.isRequired,
};

export default React.memo(ConfirmationSection);
