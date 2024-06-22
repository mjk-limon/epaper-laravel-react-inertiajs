import { useState, useEffect } from "react";


// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "@/components/SoftBox";
import SoftButton from "@/components/SoftButton";

// Soft UI Dashboard React examples
import DefaultNavbarLink from "@/examples/Navbars/DefaultNavbar/DefaultNavbarLink";
import DefaultNavbarMobile from "@/examples/Navbars/DefaultNavbar/DefaultNavbarMobile";

// Soft UI Dashboard React base styles
import breakpoints from "@/assets/theme/base/breakpoints";
import { AppBar, Toolbar } from "@mui/material";
import { navbar, navbarContainer } from "@/examples/Navbars/DashboardNavbar/styles";
import NavbarDatePicker from "@/components/DatePickers/NavbarDatePicker";
import NavbarEditionPicker from "./NavbarEditionPicker";
import { Link } from "@inertiajs/react";

function DefaultNavbar({ transparent = false, absolute = false, light = false, action = false }) {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const openMobileNavbar = ({ currentTarget }) => setMobileNavbar(currentTarget.parentNode);
  const closeMobileNavbar = () => setMobileNavbar(false);

  useEffect(() => {
    // A function that sets the display state for the DefaultNavbarMobile.
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    /** 
     The event listener that's calling the displayMobileNavbar function when 
     resizing the window.
    */
    window.addEventListener("resize", displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

  return (
    <AppBar
      position="sticky"
      color="inherit"
      sx={(theme) => navbar(theme, { transparent, absolute, light })}
    >
      <Toolbar sx={(theme) => navbarContainer(theme)}>
        <SoftBox py={transparent ? 1.5 : 0.55} lineHeight={1} flex={1}>
          <Icon
            fontSize="large"
            sx={{
              color: ({ palette: { white, secondary } }) => (light ? white.main : secondary.main),
              verticalAlign: "middle",
            }}
          >
            menu
          </Icon>
          <NavbarDatePicker />
          <NavbarEditionPicker />
        </SoftBox>
        <SoftBox component={Link} href="/" textAlign="center" preserveState py={transparent ? 1.5 : 0.75} lineHeight={1} flex={1}>
          <img
            src="https://epaper.prothomalo.com/img/logo/logo.png"
            alt="Prothom Alo"
            height={40}
          />
        </SoftBox>
        <SoftBox color="inherit" display={{ xs: "none", lg: "flex" }} justifyContent="flex-end" m={0} p={0} flex={1}>
          <DefaultNavbarLink
            icon="card_membership"
            name="subscribe"
            route="/subscribe"
            light={light}
          />
          <DefaultNavbarLink
            icon="person"
            name="profile"
            route="/profile"
            light={light}
          />
          <DefaultNavbarLink
            icon="key"
            name="sign in"
            route="/authentication/sign-in"
            light={light}
          />
        </SoftBox>
        {action &&
          (action.type === "internal" ? (
            <SoftBox display={{ xs: "none", lg: "inline-block" }}>
              <SoftButton
                component={Link}
                to={action.route}
                variant="gradient"
                color={action.color ? action.color : "info"}
                size="small"
                circular
              >
                {action.label}
              </SoftButton>
            </SoftBox>
          ) : (
            <SoftBox display={{ xs: "none", lg: "inline-block" }}>
              <SoftButton
                component="a"
                href={action.route}
                target="_blank"
                rel="noreferrer"
                variant="gradient"
                color={action.color ? action.color : "info"}
                size="small"
                circular
              >
                {action.label}
              </SoftButton>
            </SoftBox>
          ))}
        <SoftBox
          display={{ xs: "inline-block", lg: "none" }}
          lineHeight={0}
          py={1.5}
          pl={1.5}
          color="inherit"
          sx={{ cursor: "pointer" }}
          onClick={openMobileNavbar}
        >
          <Icon fontSize="default">{mobileNavbar ? "close" : "menu"}</Icon>
        </SoftBox>
      </Toolbar>
      {mobileView && <DefaultNavbarMobile open={mobileNavbar} close={closeMobileNavbar} />}
    </AppBar>
  );
}

// Typechecking props for the DefaultNavbar
DefaultNavbar.propTypes = {
  transparent: PropTypes.bool,
  light: PropTypes.bool,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal"]).isRequired,
      route: PropTypes.string.isRequired,
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light",
      ]),
      label: PropTypes.string.isRequired,
    }),
  ]),
};

export default DefaultNavbar;
