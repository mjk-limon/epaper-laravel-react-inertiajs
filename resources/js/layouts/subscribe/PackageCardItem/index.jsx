import { Card, CardContent, Chip, Divider, Grid, List, ListItem, ListItemText } from "@mui/material";

import pxToRem from "@/assets/theme/functions/pxToRem";
import SoftBox from "@/components/SoftBox";
import SoftButton from "@/components/SoftButton";
import SoftTypography from "@/components/SoftTypography";

function PackageCardItem() {
  return (
    <Grid item xs>
      <Card>
        <CardContent sx={{ padding: pxToRem(25) + ' !important' }}>
          <SoftBox align="center" mb={2}>
            <SoftTypography fontWeight="bold">
              Prothom Alo
            </SoftTypography>
            <SoftTypography color="secondary" fontSize="medium">
              E-edition of Prothom Alo Paper
            </SoftTypography>
            <SoftTypography fontSize={50} mt={3} mb={1}>
              ৳158
              <SoftTypography component="span" fontSize="medium" display="inline">/month</SoftTypography>
            </SoftTypography>
            <SoftTypography>
              <Chip label="Billed Amount:₹3798" color="secondary" variant="outlined" />
            </SoftTypography>
            <SoftTypography my={3}>
              <SoftButton color="primary" fullWidth sx={{ fontSize: 18, borderRadius: 20 }}>Continue</SoftButton>
            </SoftTypography>
          </SoftBox>
          <SoftBox my={5}>
            <List sx={{ '& .MuiTypography-root': { fontSize: 18 } }}>
              <Divider />
              <ListItem>
                <ListItemText>Ad-free Experience</ListItemText>
              </ListItem>

              <Divider />
              <ListItem>
                <ListItemText>300+ Exclusive Stories & Expert Opinions</ListItemText>
              </ListItem>

              <Divider />
              <ListItem>
                <ListItemText>Times Special Podcasts</ListItemText>
              </ListItem>

              <Divider />
              <ListItem>
                <ListItemText>6 Weekly Newsletters</ListItemText>
              </ListItem>
              <Divider />
            </List>
          </SoftBox>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default PackageCardItem;