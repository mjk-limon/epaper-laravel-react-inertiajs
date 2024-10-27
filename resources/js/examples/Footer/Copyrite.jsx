
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Link from "@mui/material/Link";

// Soft UI Dashboard React components
import SoftBox from "@/components/SoftBox";
import SoftTypography from "@/components/SoftTypography";

// Soft UI Dashboard React base styles
import typography from "@/assets/theme/base/typography";
import { Container, Fab } from "@mui/material";
import { Email, Phone } from "@mui/icons-material";
import colors from "@/assets/theme/base/colors";

function Copyright() {
  const { size } = typography;

  return (
    <SoftBox
      bgColor={colors.black.soft}>
      <SoftBox
        color="light"
        width="100%"
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        alignItems="center"
        px={8}
        py={4.5}
      >
        <SoftBox
          px={1.5}
          flex="1"
        >
          <SoftTypography fontSize={size.lg} fontFamily="Shurjo" fontWeight="bold" display="block">
            &copy; স্বত্ব প্রথম আলো ২০২৪. সম্পাদক ও প্রকাশক: মতিউর রহমান
          </SoftTypography>
          <SoftTypography variant="button" fontFamily="Shurjo" fontWeight="medium">
            প্রগতি ইনস্যুরেন্স ভবন, ২০-২১ কারওয়ান বাজার , ঢাকা ১২১৫
          </SoftTypography>
        </SoftBox>
        <SoftBox
          sx={({ breakpoints }) => ({
            flex: 1,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            mt: 3,
            mb: 0,
            p: 0,
            [breakpoints.up("lg")]: {
              mt: 0,
            },
          })}

        >
          <SoftBox
            display="flex"
            alignItems="center"
            px={2}>
            <Fab size="small"><Phone fontSize="medium" /></Fab>
            <SoftBox px={2} >
              <SoftTypography fontSize={size.md} fontWeight="bold" display="block">
                01708-411997
              </SoftTypography>
              <SoftTypography fontSize={size.md} fontWeight="medium">
                (10am-6pm, Phone & WhatsApp)
              </SoftTypography>
            </SoftBox>
          </SoftBox>
          <SoftBox
            display="flex"
            alignItems="center"
          >
            <Fab size="small"><Email fontSize="medium" /></Fab>
            <SoftBox px={2} >
              <SoftTypography fontSize={size.md} fontWeight="medium">
                epaper@prothomalo.com
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </SoftBox>
    </SoftBox>
  );
}

// Typechecking props for the Copyright
Copyright.propTypes = {
  company: PropTypes.objectOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.object),
};

export default Copyright;
