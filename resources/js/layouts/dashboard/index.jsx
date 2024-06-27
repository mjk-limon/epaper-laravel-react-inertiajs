// Data
import { useEffect, useRef, useState } from "react";
import axios from "@/api";
import SoftBox from "@/components/SoftBox";
import NavigatorRect from './components/NavigatorRect';
import StoryViewer from './components/StoryViewer'
import ImageViewer from './components/ImageViewer'

function Dashboard() {
  const [asset, setAsset] = useState('');
  const [viewportDetails, setViewportDetails] = useState({});
  const [contentDetails, setContentDetails] = useState([]);

  const [storyView, setStoryView] = useState(false);
  const [imageView, setImageView] = useState(false);

  useEffect(() => {
    axios
      .get('/contents')
      .then(r => {
        const { assetUrl, pageWidth, pageHeight, vmContentDetails } = r.data;

        const { offsetWidth } = document.getElementById('vpHolder');
        const offsetHeight = (pageHeight * offsetWidth) / pageWidth;

        setAsset(assetUrl);
        setViewportDetails({ vpWidth: pageWidth, vpHeight: pageHeight, upWidth: offsetWidth, upHeight: offsetHeight });
        setContentDetails(vmContentDetails);
      })
  }, []);

  return (
    <SoftBox
      my={3}
      mb={1}
      mx={7}
    >
      <SoftBox
        m="0 auto"
        width={viewportDetails.upWidth ? viewportDetails.upWidth : '100%'}
        height={viewportDetails.upHeight ? viewportDetails.upHeight : '100%'}
        position="relative"
        id="vpHolder"
      >
        <img
          src={asset}
          width="100%"
          height="100%" />

        {contentDetails.map((v, i) => (
          <NavigatorRect
            key={i}
            rect={v}
            setStoryView={setStoryView}
            setImageView={setImageView}
            viewport={viewportDetails}
          />
        ))}
      </SoftBox>
      <StoryViewer
        story={storyView}
        setStoryView={setStoryView}
      />
      <ImageViewer
        image={imageView}
        setImageView={setImageView}
      />
    </SoftBox>
  );
}

export default Dashboard;
