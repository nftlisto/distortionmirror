import { Grid, Box, Button, Divider, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { DistortedMirrorEffectSettingsContext } from "../../context/distortedMirrorEffectContext";
import { Widget, CoverImage } from "../Skins";
import "./styles.css";

const ControlMirrorDistortionImage = () => {
  const { image, setImage } = useContext(DistortedMirrorEffectSettingsContext);

  const [imageUrl, setImageUrl] = useState(image);

  return (
    <Widget>
      <Grid container>
        <Grid item xs={8}>
          <Box
            sx={{
              width: "100%",
              maxWidth: "100%"
            }}
          >
            <TextField
              fullWidth
              label="Image Url"
              id="imageUrl"
              value={imageUrl}
              onChange={(event) => {
                setImageUrl(event.target.value);
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            size="large"
            sx={{ marginTop: 1 }}
            onClick={() => {
              if (imageUrl && imageUrl.length > 0) {
                setImage(imageUrl);
              }
            }}
          >
            Load Url Image
          </Button>
        </Grid>
        <Grid item xs={1}>
          <CoverImage>
            <img alt="Image Selected" src={image} />
          </CoverImage>
        </Grid>
        {/* <Grid item xs={12}>
          <br />
          <Divider light />
        </Grid> */}
      </Grid>
    </Widget>
  );
};

export default ControlMirrorDistortionImage;
