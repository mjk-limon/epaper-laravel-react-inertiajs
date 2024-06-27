import { Box, Dialog, DialogContent } from "@mui/material";
import SoftBox from "@/components/SoftBox";
import ViewerHeader from "./ViewerHeader";
import { useState } from "react";
import axios from "@/api";
import SoftTypography from "@/components/SoftTypography";
import typography from "@/assets/theme/base/typography";

function StoryViewer({ story, setStoryView }) {
  const [storyHeadLine, setStoryHeadLine] = useState([]);
  const [storyText, setStoryText] = useState([]);
  const [storyMediaUrls, setStoryMediaUrls] = useState([]);
  const [storyMediaCaptions, setStoryMediaCaptions] = useState([]);

  useState(() => {
    axios
      .get('/contentdetail_story_ex2')
      .then(r => {
        const { storyHeadline, storyTexts, storyMediaUrls, storyMediaCaptions } = r.data;

        setStoryText(storyTexts);
        setStoryHeadLine(storyHeadline);
        setStoryMediaUrls(storyMediaUrls);
        setStoryMediaCaptions(storyMediaCaptions);
      })
  }, [story]);


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
      open={story}
      onClose={() => setStoryView(false)}
    >
      <DialogContent>
        <ViewerHeader open={setStoryView} />

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
                {storyText.map((v, i) => (
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