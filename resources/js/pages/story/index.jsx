import { Box, Dialog, DialogContent } from "@mui/material";
import SoftBox from "@/components/SoftBox";
import ViewerHeader from "@/layouts/dashboard/components/ViewerHeader";
import SoftTypography from "@/components/SoftTypography";
import typography from "@/assets/theme/base/typography";
import { router } from "@inertiajs/react";

function StoryViewer({ storyHeadLine, storyTexts, storyMediaUrls, storyMediaCaptions }) {
  const HtmlParser = ({ htmlString }) => {
    const { size } = typography;
    const doc = (new window.DOMParser()).parseFromString(htmlString, "text/html");
    const langElements = doc.querySelectorAll('lang');

    const transformedHtml = Array.from(langElements).map((lang) => {
      const fontStyle = lang.getAttribute('fontStyle');
      const fontSize = lang.getAttribute('size') == 8 ? size.lg : size.md;

      const style = {
        fontFamily: '"Shurjo"',
        fontWeight: fontStyle.toLowerCase(),
        fontSize: fontSize,
      };

      return (
        <span style={style}>
          {lang.textContent}
        </span>
      );
    });

    return (
      <div style={{ lineHeight: 1.4 }}>
        {transformedHtml}
      </div>
    );
  }

  return (
    <Dialog
      fullScreen
      open={true}
      onClose={() => router.get('/')}
    >
      <DialogContent>
        <ViewerHeader />

        <Box
          noValidate
          sx={{
            flexGrow: 1,
            // display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'center',
            padding: '5rem 0',
            minHeight: '100%',
            position: 'relative'
          }}
        >
          <SoftBox>
            <SoftTypography variant="h2" mb={2} fontFamily="Shurjo">
              {storyHeadLine}
            </SoftTypography>
            <SoftTypography fontFamily="Shurjo" fontSize={22} display="flex">
              <SoftBox>
                {storyTexts.map((v, i) => (
                  <HtmlParser htmlString={v} key={i} />
                ))}
              </SoftBox>
              <SoftBox pl={2} maxWidth="25%">
                {storyMediaUrls.map((v, i) => (
                  <SoftBox mb={3} key={i}>
                    <img src={v} width="100%" />
                    <HtmlParser htmlString={storyMediaCaptions[i]} />
                  </SoftBox>
                ))}
              </SoftBox>
            </SoftTypography>
          </SoftBox>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default StoryViewer;