
// Soft UI Dashboard React Base Styles
import colors from "@/assets/theme/base/colors";

const { info, dark } = colors;

const globals = {
  html: {
    scrollBehavior: "smooth",
  },
  "*, *::before, *::after": {
    margin: 0,
    padding: 0,
  },
  "a, a:link, a:visited": {
    textDecoration: "none !important",
  },
  "a.link, .link, a.link:link, .link:link, a.link:visited, .link:visited": {
    color: `${dark.main} !important`,
    transition: "color 150ms ease-in !important",
  },
  "a.link:hover, .link:hover, a.link:focus, .link:focus": {
    color: `${info.main} !important`,
  },
  ".slick-slider .slick-track": {
    marginLeft: 0,
  },
  ".slick-prev, .slick-next": {
    width: 'auto',
    height: 'auto',
    zIndex: 2,
  },
  ".slick-prev": {
    left: -15,
  },
  ".slick-next": {
    right: -15,
  },
  ".slick-disabled": {
    display: 'none!important'
  },
  ".slick-prev::before, .slick-next::before": {
    color: 'red',
    fontSize: 50,
  },
  "#nprogress .bar": {
    zIndex: '1301!important'
  },
  "@font-face": [
    {
      fontFamily: 'Shurjo',
      src: `local('Shurjo'), local('Shurjo-Regular'), url(https://epaper.prothomalo.com/fonts/ShurjoWeb/ShurjoWebBN_400_v2.woff2) format('woff2')`
    }
  ],
};

export default globals;
