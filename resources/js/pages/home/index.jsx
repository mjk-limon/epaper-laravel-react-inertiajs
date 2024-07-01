import { useEffect, useState } from "react";
import SoftBox from "@/components/SoftBox";
import NavigatorRect from '@/layouts/dashboard/components/NavigatorRect';
import PagesSlider from "@/examples/Footer/PagesSlider";
import EditionSlider from "@/examples/Footer/EditionSlider";

function Home({ assetUrl, pageWidth, pageHeight, vmContentDetails }) {
  const [loaded, setLoaded] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [viewportDetails, setViewportDetails] = useState({});

  useEffect(() => {
    const { offsetWidth } = document.getElementById('vpHolder');
    const offsetHeight = (pageHeight * offsetWidth) / pageWidth;

    setViewportDetails({ vpWidth: pageWidth, vpHeight: pageHeight, upWidth: offsetWidth, upHeight: offsetHeight });
  }, []);

  useEffect(() => {
    let timer;

    if (loaded) {
      timer = setTimeout(() => {
        setShowSkeleton(false);
      }, (vmContentDetails.length + 5) * 10);
    }

    return () => clearTimeout(timer);
  }, [loaded]);

  return (
    <>
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
          sx={{ background: 'white' }}
        >
          <img
            src={assetUrl}
            width="100%"
            height="100%"
            style={{ visibility: !loaded ? 'hidden' : 'visible' }}
            onLoad={() => setLoaded(true)} />

          {vmContentDetails.map((v, i) => (
            <NavigatorRect
              id={i}
              key={i}
              src={assetUrl}
              rect={v}
              viewport={viewportDetails}
              loaded={loaded}
              showRootSkeleton={showSkeleton}
            />
          ))}
        </SoftBox>
      </SoftBox>

      <PagesSlider />
      <EditionSlider />
    </>
  );
}

export default Home;
