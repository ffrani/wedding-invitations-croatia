import React from 'react';

import IconMask from './assets/face-mask.png';
import IconSocialDistancing from './assets/social-distancing.png';
import IconGuest from './assets/parents.png';
import IconClock from './assets/clock.png';
import IconQRcode from './assets/qr.png';
import SectionBox from './SectionBox';

function CovidSection() {
  return (
    <div id="fh5co-couple">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2 className="main-font">Information</h2>
            <p className="info" style={{ marginBottom: '-16px' }}>
              fvfsdvb
            </p>
          </div>
        </div>
        {/* BOX INFO */}
        <div className="row">
          <div className="col-md-12">
            <SectionBox icon={IconMask} text="Menggunakan masker." />
            <SectionBox icon={IconSocialDistancing} text="Pembatasan jarak." />
            <SectionBox
              icon={IconGuest}
              text="Satu undangan terdiri dari 1 atau beberapa orang tamu (sesuai nama yang tertulis)."
            />
            <SectionBox icon={IconQRcode} text="QRCode berisi link e-invitation." />
            <SectionBox icon={IconClock} text="Diharapkan hadir sesuai waktu yang sudah ditentukan." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CovidSection;
