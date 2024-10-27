import rgba from "@/assets/theme/functions/rgba";
import SoftBox from "@/components/SoftBox";
import { router } from '@inertiajs/react';
import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";


function NavigatorRect({ id, rect, viewport, showRootSkeleton, loaded }) {
  const [showSkeleton, setShowSkeleton] = useState(true);

  const { rectLeft, rectTop, rectRight, rectBottom, assetUrl, objectType, pictureId, storyId } = rect;
  const { vpWidth, vpHeight, upWidth, upHeight } = viewport;

  const getTop = () => {
    return (rectTop * upHeight) / vpHeight;
  };

  const getRight = () => {
    return upWidth - ((rectRight * upWidth) / vpWidth);
  };

  const getBottom = () => {
    return upHeight - ((rectBottom * upHeight) / vpHeight);
  };

  const getLeft = () => {
    return (rectLeft * upWidth) / vpWidth;
  };

  const handleRectClick = () => {
    if (objectType == 4) {
      return router.get(`/image/${pictureId}`, {}, { preserveState: true, preserveScroll: true, });
    }

    return router.get(`/story/${storyId}`, {}, { preserveState: true, preserveScroll: true, })
  };

  useEffect(() => {
    let timer;

    if (loaded) {
      timer = setTimeout(() => {
        setShowSkeleton(false);
      }, id * 10);
    }

    return () => clearTimeout(timer);
  }, [loaded]);

  return !showSkeleton ? (
    <SoftBox
      sx={{
        position: 'absolute',
        top: getTop(),
        right: getRight(),
        bottom: getBottom(),
        left: getLeft(),
        cursor: 'pointer',
        // background: showRootSkeleton ? `url(${assetUrl})` : null,
        // backgroundSize: '100% 100%',
        ":hover": {
          background: rgba([0, 0, 0], 0.2),
        }
      }}
      onClick={handleRectClick}
    />
  ) : (
    <SoftBox
      sx={{
        position: 'absolute',
        top: getTop(),
        right: getRight(),
        bottom: getBottom(),
        left: getLeft(),
      }}>
      <Skeleton
        variant="rectangular"
        animation="wave"
        width="100%"
        height="100%"
      />
    </SoftBox>
  )
}

export default NavigatorRect;