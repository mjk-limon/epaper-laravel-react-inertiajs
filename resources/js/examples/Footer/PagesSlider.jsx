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

export default function PagesSlider() {
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

  const pageNumberFilterLink = pageNumber => {
    applied.set('pageNumber', pageNumber);
    return `${location.pathname}?${applied.toString()}`;
  }

  useEffect(() => {
    axios
      .get('/pages')
      .then(r => {
        setPageData(r.data);
      })
  }, []);

  const pages = pageData.map(({ pageId, assetUrl, tnFileName, newsProPageTitle }, i) => (
    <SoftBox align="center" key={i}>
      <Link href={pageNumberFilterLink(pageId)}>
        <SoftBox
          sx={{
            maxWidth: '80%',
            display: 'inline-block',
            border: '2px solid',
            borderColor: (filters.pageNumber == pageId) ? colors.primary.main : 'transparent',
            ":hover": {
              opacity: '0.85',
              borderColor: colors.primary.focus
            }
          }}
        >
          <img
            width="100%"
            src={assetUrl + '/' + tnFileName}
            loading="lazy"
          />
        </SoftBox>
        <SoftTypography noWrap fontSize={size.md} fontFamily="Shurjo" fontWeight="bold" color="light">
          {String(++i) + ": "}
          {newsProPageTitle}
        </SoftTypography>
      </Link>
    </SoftBox>
  ));

  return (
    <SoftBox
      p={1.5}
      bgColor={colors.black.softer}
    >
      <Slider {...settings}>
        {pages}
      </Slider>
    </SoftBox>
  );
}