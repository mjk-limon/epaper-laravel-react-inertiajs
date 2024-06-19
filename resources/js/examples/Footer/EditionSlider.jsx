import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SoftBox from "@/components/SoftBox";
import colors from "@/assets/theme/base/colors";
import { Link, usePage } from '@inertiajs/react'
import axios from "@/api";
import SoftTypography from "@/components/SoftTypography";
import typography from "@/assets/theme/base/typography";

export default function EditionSlider() {
  const { size } = typography;
  const [pageData, setPageData] = useState([]);

  const { filters } = usePage().props;
  const applied = new URLSearchParams(filters);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 14,
    slidesToScroll: 1,
  };

  const editionFilterLink = editionType => {
    applied.set('editionType', editionType);
    return `${location.pathname}?${applied.toString()}`;
  }

  useEffect(() => {
    axios
      .get('/pages')
      .then(r => {
        const supplements = r.data.filter((v) => v.isSupplement || parseInt(v.pageNumber) === 1);
        setPageData(supplements);
      })
  }, []);

  const pages = pageData.map(({ editionId, assetUrl, tnFileName, editionDisplayName, isSupplement }, i) => (
    <SoftBox align="center" key={i}>
      <Link href={editionFilterLink(editionId)}>
        <SoftBox
          sx={{
            maxWidth: '80%',
            display: 'inline-block',
            border: '2px solid',
            borderColor: (filters.editionType == editionId) ? colors.primary.main : 'transparent',
            ":hover": {
              opacity: '0.85',
              borderColor: colors.primary.focus
            }
          }}
        >
          <img
            width="100%"
            src={assetUrl + '/' + tnFileName}
          />
        </SoftBox>
        <SoftTypography noWrap fontSize={size.lg} fontFamily="Shurjo" fontWeight="bold" color="light" >
          {isSupplement ? editionDisplayName : "প্রথম আলো"}
        </SoftTypography>
      </Link>
    </SoftBox>
  ));

  return (
    <SoftBox
      p={1.5}
      mt={2}
      bgColor={colors.grey[600]}
    >
      <Slider {...settings}>
        {pages}
      </Slider>
    </SoftBox>
  );
}