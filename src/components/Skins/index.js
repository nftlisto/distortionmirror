import { styled, useTheme } from "@mui/material/styles";

export const Widget = styled("div")(({ theme }) => ({
  padding: 10,
  borderRadius: 5,
  // width: 343,
  // maxWidth: '100%',
  // margin: 'auto',
  // position: 'relative',
  // zIndex: 1,
  //backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
  backgroundColor: "rgba(0,0,0,0.08)",
  backdropFilter: "blur(40px)"
}));

export const CoverImage = styled("div")({
  width: 100,
  // height: 100,
  objectFit: "cover",
  overflow: "hidden",
  flexShrink: 0,
  borderRadius: 5,
  backgroundColor: "rgba(0,0,0,0.08)",
  "& > img": {
    width: "100%"
  }
});
