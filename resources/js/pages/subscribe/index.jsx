import SoftBox from "@/components/SoftBox";
import SoftTypography from "@/components/SoftTypography";
import PackageCardItem from "@/layouts/subscribe/PackageCardItem";
import { Container, Grid } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function Subscribe() {
  const test = value => {
    console.log('value :>> ', value);
  }

  return (
    <Container>
      <SoftBox my={5} py={1}>
        <SoftBox mb={5}>
          <SoftTypography variant="h2" align="center" fontFamily="Shurjo">
            প্রথম আলোর ইলেক্ট্রনিক সংস্করণে স্বাগতম। এখন থেকে ই-পেপারের পাশাপাশি ই-ম্যাগাজিন পড়ার সুবিধা পাবেন।
          </SoftTypography>
          <SoftTypography variant="h4" align="center" fontFamily="Shurjo" my={2}>
            পছন্দের প্যাকেজ সিলেক্ট করে গ্রাহক হোন।
          </SoftTypography>
        </SoftBox>

        <SoftBox className="packages">
          <Grid container spacing={3}>
            <PackageCardItem />
            <PackageCardItem />
            <PackageCardItem />
          </Grid>
        </SoftBox>
      </SoftBox>
    </Container >
  );
}