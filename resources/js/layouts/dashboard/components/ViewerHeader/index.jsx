import { Box, ButtonGroup } from "@mui/material";
import colors from "@/assets/theme/base/colors";
import ViewHeaderButton from './ViewHeaderButton';
import { Close, EmailOutlined, ImageOutlined } from "@mui/icons-material";
import { router } from '@inertiajs/react'

function ViewerHeader() {
  return (
    <Box
      position='fixed'
      left={0}
      top={0}
      width='100%'
      bgcolor={colors.grey[200]}
      zIndex={2}
    >
      <ButtonGroup
        variant="text"
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '100%',
        }}
      >
        <ViewHeaderButton
          icon={ImageOutlined}
          label="Download Image"
        />
        <ViewHeaderButton
          icon={EmailOutlined}
          label="Email"
        />
        <ViewHeaderButton
          icon={Close}
          label="Close"
          onClick={() => router.visit('/', { preserveState: true })}
        />
      </ButtonGroup>
    </Box>
  );
}

export default ViewerHeader;