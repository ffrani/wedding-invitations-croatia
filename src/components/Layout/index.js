import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { node } from 'prop-types';

// import Favicon from '@assets/images/arin-miftah-favicon.png';
//import IMAGE_URL from '@assets/images/khitbahmeta.jpg';
import '@assets/css/icomoon.css';
import '@assets/css/bootstrap.css';
import '@assets/css/style.css';

// const IMAGE_URL = `https://miftahussalam.com/images/khitbahmeta.jpg`;
// const META_DESCRIPTION = `Dengan memohon Rahmat dan Ridho Illahi, teriring niat menjalankan Sunnah Rasulullah ﷺ untuk membentuk rumah tangga yang Sakinah, Mawaddah wa Rahmah, kami mohon do'a agar senantiasa diberikan kelancaran dan keberkahan. - Arin & Miftah`;

function MainLayout({ children }) {
  return (
    <Fragment>
      <Helmet>
        <title>Filip ❤️ Henon</title>

        {/* Favicon */}
        {/* <link rel="icon" type="image/png" href={Favicon} /> */}

        {/* font and SEO tags */}
        {/* <meta property="og:title" content="The Wedding of Arin & Miftah" /> */}
        {/* <meta property="og:image" itemprop="image" content={IMAGE_URL} /> */}
        {/* <meta property="og:url" content="https://arin.miftahussalam.com" /> */}
        {/* <meta property="og:site_name" content="The Wedding of Arin & Miftah" /> */}
        {/* <meta property="og:description" content={META_DESCRIPTION} /> */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1, minimum-scale=1"
        ></meta>
        <meta property="og:type" content="website" />
        {/* <meta name="twitter:title" content="The Wedding of Arin & Miftah" /> */}
        {/* <meta name="twitter:description" content={META_DESCRIPTION} /> */}
        {/* <meta name="twitter:image" content={IMAGE_URL} /> */}
        {/* <meta name="twitter:url" content="https://arin.miftahussalam.com" /> */}
        <meta name="twitter:card" content="summary" />
        {/* <meta name="twitter:creator" content="@mif_salam" /> */}
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/js/fontawesome.min.js"
          integrity="sha512-C8qHv0HOaf4yoA7ISuuCTrsPX8qjolYTZyoFRKNA9dFKnxgzIHnYTOJhXQIt6zwpIFzCrRzUBuVgtC4e5K1nhA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        ></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:400,300,600,400italic,700"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Carattere&family=Great+Vibes&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Kavoon&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      </Helmet>
      <div id="page">{children}</div>
    </Fragment>
  );
}

MainLayout.propTypes = {
  children: node.isRequired,
};

export default MainLayout;
