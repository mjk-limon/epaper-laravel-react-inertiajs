import { Box, CircularProgress, Dialog, DialogContent } from "@mui/material";
import SoftBox from "@/components/SoftBox";
import ViewerHeader from "@/layouts/dashboard/components/ViewerHeader";
import { useEffect, useState } from "react";
import { router } from "@inertiajs/react";
import Home from "../home";

function ImageViewer({ assetUrl }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [assetUrl]);

  return (
    <Dialog
      // fullScreen
      open={true}
      onClose={() => router.get('/')}
    >
      <DialogContent>
        <ViewerHeader />

        <Box
          noValidate
          sx={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '3rem 0',
            position: 'relative'
          }}
        >
          <SoftBox align="center">
            {!loaded && <CircularProgress sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }} />}

            <img
              src={assetUrl}
              style={{ maxWidth: '100%' }}
              onLoad={() => setLoaded(true)}
            />
          </SoftBox>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

// ImageViewer.layout = page => <Home children={page} />
// 

export default ImageViewer;