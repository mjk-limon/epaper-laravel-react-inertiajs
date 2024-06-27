import { Box, CircularProgress, Dialog, DialogContent } from "@mui/material";
import SoftBox from "@/components/SoftBox";
import ViewerHeader from './ViewerHeader';
import { useEffect, useState } from "react";

function ImageViewer({ image, setImageView }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [image]);

  return (
    <Dialog
      fullScreen
      open={image}
      onClose={() => setImageView(false)}
    >
      <DialogContent>
        <ViewerHeader open={setImageView} />

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
              src={image + '?rand=' + Math.floor(Math.random() * 1000) }
              style={{ maxWidth: '100%' }}
              onLoad={() => setLoaded(true)}
            />
          </SoftBox>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default ImageViewer;