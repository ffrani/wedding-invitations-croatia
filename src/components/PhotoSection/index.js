import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { photos } from './photo-data';
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

function PhotoSection() {
  return (
    <div id="fh5co-testimonial" className="fh5co-section-gray">
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">Foto Galerija</h2>
              <p className="sub-title"></p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <ImageGallery items={photos} showBullets={false} />
            </div>
          </div>
        </div>
      </div>
      <CustomHr />
      {/* <div>
        <hr style={{ width: '500px', borderColor: 'rgb(168, 131, 89)', marginTop: '80px' }}></hr>
      </div> */}
    </div>
  );
}

export default PhotoSection;
