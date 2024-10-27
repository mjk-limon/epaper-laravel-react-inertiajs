import { Box, Button, Icon, Link, Typography } from "@mui/material";

function ViewHeaderButton({ icon, label, onClick }) {
  return (
    <Link
      component="button"
      sx={{
        py: 1,
        px: 5,
      }}
      onClick={onClick}
    >
      <Box
        component={icon}
        sx={{
          display: 'block',
          margin: '0 auto',
        }}
      />
      <Typography fontSize={14} cursor="pointer">
        {label}
      </Typography>
    </Link>
  );
}

export default ViewHeaderButton;