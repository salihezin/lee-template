'use client';

import {useEffect} from "react";

export default function RootLayout({children}) {
    useEffect(() => {
        // html deki class  ı siler
        document.documentElement.className = '';
    }, []);

    useEffect(() => {
        console.log('jQuery:', window.jQuery); // Eğer undefined ise jQuery yüklenmemiştir
    }, []);

    return (
        <html>
        <head>
            <meta charSet="UTF-8"/>
            <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
            <title>Techno - IT Solutions Services HTML5 Template</title>
            <meta name="description" content=""/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" type="image/png" sizes="56x56" href="technoIt/assets/images/fav-icon/icon.png"/>
            <link rel="stylesheet" href="technoIt/assets/css/bootstrap.min.css" type="text/css" media="all"/>
            <link rel="stylesheet" href="technoIt/assets/css/owl.carousel.min.css" type="text/css" media="all"/>
            <link rel="stylesheet" href="technoIt/assets/css/nivo-slider.css" type="text/css" media="all"/>
            <link rel="stylesheet" href="technoIt/assets/css/animate.css" type="text/css" media="all"/>
            <link rel="stylesheet" href="technoIt/assets/css/animated-text.css" type="text/css" media="all"/>
            <link type="text/css" rel="stylesheet" href="technoIt/assets/fonts/font-awesome/css/font-awesome.min.css"/>
            <link rel="stylesheet" href="technoIt/assets/css/flaticon.css" type="text/css" media="all"/>
            <link rel="stylesheet" href="technoIt/assets/css/theme-default.css" type="text/css" media="all"/>
            <link rel="stylesheet" href="technoIt/assets/css/meanmenu.min.css" type="text/css" media="all"/>
            <link rel="stylesheet" href="technoIt/style.css" type="text/css" media="all"/>
            <link rel="stylesheet" href="technoIt/assets/css/owl.transitions.css" type="text/css" media="all"/>
            <link rel="stylesheet" href="technoIt/venobox/venobox.css" type="text/css" media="all"/>
            <link rel="stylesheet" href="technoIt/assets/css/widget.css" type="text/css" media="all"/>
            <link rel="stylesheet" href="technoIt/assets/css/settings.css" type="text/css" media="all"/>
            <link rel="stylesheet" href="technoIt/assets/css/responsive.css" type="text/css" media="all"/>
            <script type="text/javascript" src="technoIt/assets/js/vendor/modernizr-3.5.0.min.js"></script>
            <link rel="stylesheet"
                  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"/>
        </head>
        <body>
        {children}
        <script type="text/javascript" src="technoIt/assets/js/vendor/jquery-3.2.1.min.js"></script>
        <script type="text/javascript" src="technoIt/assets/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="technoIt/assets/js/owl.carousel.min.js"></script>
        <script type="text/javascript" src="technoIt/assets/js/jquery.counterup.min.js"></script>
        <script type="text/javascript" src="technoIt/assets/js/waypoints.min.js"></script>
        <script type="text/javascript" src="technoIt/assets/js/wow.js"></script>
        <script type="text/javascript" src="technoIt/assets/js/imagesloaded.pkgd.min.js"></script>
        <script type="text/javascript" src="technoIt/venobox/venobox.js"></script>
        <script type="text/javascript" src="technoIt/assets/js/ajax-mail.js"></script>
        <script type="text/javascript" src="technoIt/assets/js/testimonial.js"></script>
        <script type="text/javascript" src="technoIt/assets/js/animated-text.js"></script>
        <script type="text/javascript" src="technoIt/venobox/venobox.min.js"></script>
        <script type="text/javascript" src="technoIt/assets/js/isotope.pkgd.min.js"></script>
        <script type="text/javascript" src="technoIt/assets/js/jquery.nivo.slider.pack.js"></script>
        <script type="text/javascript" src="technoIt/assets/js/jquery.meanmenu.js"></script>
        <script type="text/javascript" src="technoIt/assets/js/jquery.scrollUp.js"></script>
        <script src="technoIt/assets/js/extensions/revolution.extension.actions.min.js"></script>
        <script src="technoIt/assets/js/extensions/revolution.extension.carousel.min.js"></script>
        <script src="technoIt/assets/js/extensions/revolution.extension.kenburn.min.js"></script>
        <script src="technoIt/assets/js/extensions/revolution.extension.migration.min.js"></script>
        <script src="technoIt/assets/js/extensions/revolution.extension.parallax.min.js"></script>
        <script src="technoIt/assets/js/extensions/revolution.extension.video.min.js"></script>
        <script src="technoIt/assets/js/jquery.themepunch.revolution.min.js"></script>
        <script src="technoIt/assets/js/jquery.themepunch.tools.min.js"></script>
        <script type="text/javascript"
                src="technoIt/assets/js/extensions/revolution.extension.slideanims.min.js"></script>
        <script type="text/javascript"
                src="technoIt/assets/js/extensions/revolution.extension.layeranimation.min.js"></script>
        <script type="text/javascript"
                src="technoIt/assets/js/extensions/revolution.extension.navigation.min.js"></script>
        <script type="text/javascript" src="technoIt/assets/js/theme.js"></script>
        <script type="text/javascript"
                dangerouslySetInnerHTML={{
                    __html: `                        
      jQuery("#rev_slider_1")
        .show()
        .revolution({
          delay: 7000,
          responsiveLevels: [1200, 1140, 778, 480],
          gridwidth: [1140, 920, 700, 380],
          sliderLayout: "fullscreen",
          navigation: {
            arrows: {
              enable: true,
              style: "vor_arrows",
              hide_onleave: false,
              left: {
                container: "slider",
                h_align: "left",
                v_align: "center",
                h_offset: 26,
                v_offset: 0,
              },
              right: {
                container: "slider",
                h_align: "right",
                v_align: "center",
                h_offset: 26,
                v_offset: 0,
              },
            },
            bullets: {
              enable: true,
              style: "vor_bullet",
              hide_onleave: false,
              h_align: "center",
              v_align: "bottom",
              h_offset: 0,
              v_offset: 40,
              space: 12,
            },
          },
        });
      jQuery("#rev_slider_2")
        .show()
        .revolution({
          delay: 7000,
          responsiveLevels: [1200, 1140, 778, 480],
          gridwidth: [1140, 920, 700, 380],
          jsFileLocation: "js/",
          sliderLayout: "auto",
          minHeight: 800,
          navigation: {
            arrows: {
              enable: true,
              style: "vor_arrows",
              hide_onleave: false,
              left: {
                container: "slider",
                h_align: "left",
                v_align: "center",
                h_offset: 26,
                v_offset: 0,
              },
              right: {
                container: "slider",
                h_align: "right",
                v_align: "center",
                h_offset: 26,
                v_offset: 0,
              },
            },
            bullets: {
              enable: true,
              style: "vor_bullet",
              hide_onleave: false,
              h_align: "center",
              v_align: "bottom",
              h_offset: 0,
              v_offset: 23,
              space: 12,
            },
          },
        });
      jQuery("#rev_slider_3")
        .show()
        .revolution({
          delay: 7000,
          responsiveLevels: [1200, 1140, 778, 480],
          gridwidth: [1140, 920, 700, 380],
          sliderLayout: "fullscreen",
          navigation: {
            arrows: {
              enable: false,
            },
            bullets: {
              enable: true,
              style: "vor_bullet",
              hide_onleave: false,
              h_align: "center",
              v_align: "bottom",
              h_offset: 0,
              v_offset: 33,
              space: 12,
            },
          },
        });
    `,
                }}
        />
        </body>
        </html>
    );
}

