import {
  Tabs,
  Tab,
  Grid,
  Stack,
  Box,
  Slider,
  Button,
  Typography,
  Divider,
  TextField
} from "@mui/material";
import { useContext, useState } from "react";
import {
  DistortedMirrorEffectSettingsContext,
  DEFAULT_SETTINGS
} from "../../context/distortedMirrorEffectContext";
import "./styles.css";

const ControlMirrorDistortion = () => {
  const {
    image,
    setImage,
    timeFactor,
    setTimeFactor,
    timeOffset,
    setTimeOffset,
    imageOffsetFactor1,
    setImageOffsetFactor1,
    imageOffsetFactor2,
    setImageOffsetFactor2,
    imageSinOffset1,
    setImageSinOffset1,
    imageSinOffset2,
    setImageSinOffset2,
    offset1MixA,
    setOffset1MixA,
    offset1MixB,
    setOffset1MixB,
    offset2MixA,
    setOffset2MixA,
    offset2MixB,
    setOffset2MixB,
    upDownFactor,
    setUpDownFactor,
    upDownOffset,
    setUpDownOffset
  } = useContext(DistortedMirrorEffectSettingsContext);

  function valuetext(value) {
    return `${value}`;
  }

  const [imageUrl, setImageUrl] = useState(image);

  return (
    <>
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
        <Grid item xs={4}>
          <Button
            variant="contained"
            size="large"
            onClick={() => {
              imageUrl && imageUrl.length > 0 ? setImage(imageUrl) : null;
            }}
          >
            {" "}
            Change Url{" "}
          </Button>
        </Grid>
        <Grid item xs={12}>
          <br />
          <Divider light />
        </Grid>

        <Grid item xs={3}>
          <Stack sx={{ padding: 2 }}>
            <Typography variant="overline" sx={{ textAlign: "left" }}>
              Time Factor
            </Typography>
            <Slider
              aria-label="Small steps"
              defaultValue={DEFAULT_SETTINGS.timeFactor}
              getAriaValueText={valuetext}
              step={0.000001}
              marks
              min={0.000001}
              max={0.00001}
              valueLabelDisplay="auto"
              onChange={(_, value) => {
                setTimeFactor(value);
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack sx={{ padding: 2 }}>
            <Typography variant="overline" sx={{ textAlign: "left" }}>
              Time Offset
            </Typography>
            <Slider
              aria-label="Small steps"
              defaultValue={DEFAULT_SETTINGS.timeOffset}
              getAriaValueText={valuetext}
              step={0.1}
              marks
              min={0.1}
              max={1.0}
              valueLabelDisplay="auto"
              onChange={(_, value) => {
                setTimeOffset(value);
              }}
            />
          </Stack>
        </Grid>
        {/*   upDownFactor: 0.5,
              upDownOffset: 0.5 
        */}
        <Grid item xs={3}>
          <Stack sx={{ padding: 2 }}>
            <Typography variant="overline" sx={{ textAlign: "left" }}>
              UpDown Factor
            </Typography>
            <Slider
              aria-label="Small steps"
              defaultValue={DEFAULT_SETTINGS.upDownFactor}
              getAriaValueText={valuetext}
              step={0.1}
              marks
              min={0}
              max={1}
              valueLabelDisplay="auto"
              onChange={(_, value) => {
                setUpDownFactor(value);
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack sx={{ padding: 2 }}>
            <Typography variant="overline" sx={{ textAlign: "left" }}>
              upDown Offset
            </Typography>
            <Slider
              aria-label="Small steps"
              defaultValue={DEFAULT_SETTINGS.upDownOffset}
              getAriaValueText={valuetext}
              step={0.1}
              marks
              min={0}
              max={1}
              valueLabelDisplay="auto"
              onChange={(_, value) => {
                setUpDownOffset(value);
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack sx={{ padding: 2 }}>
            <Typography variant="overline" sx={{ textAlign: "left" }}>
              Image Offset Factor1
            </Typography>
            <Slider
              aria-label="Small steps"
              defaultValue={DEFAULT_SETTINGS.imageOffsetFactor1}
              getAriaValueText={valuetext}
              step={1}
              marks
              min={0}
              max={100}
              valueLabelDisplay="auto"
              onChange={(_, value) => {
                setImageOffsetFactor1(value);
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack sx={{ padding: 2 }}>
            <Typography variant="overline" sx={{ textAlign: "left" }}>
              Image Offset Factor2
            </Typography>
            <Slider
              aria-label="Small steps"
              defaultValue={DEFAULT_SETTINGS.imageOffsetFactor2}
              getAriaValueText={valuetext}
              step={1}
              marks
              min={0}
              max={100}
              valueLabelDisplay="auto"
              onChange={(_, value) => {
                setImageOffsetFactor2(value);
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack sx={{ padding: 2 }}>
            <Typography variant="overline" sx={{ textAlign: "left" }}>
              Image Sin Offset1
            </Typography>
            <Slider
              aria-label="Small steps"
              defaultValue={DEFAULT_SETTINGS.imageSinOffset1}
              getAriaValueText={valuetext}
              step={0.1}
              marks
              min={0}
              max={1}
              valueLabelDisplay="auto"
              onChange={(_, value) => {
                setImageSinOffset1(value);
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack sx={{ padding: 2 }}>
            <Typography variant="overline" sx={{ textAlign: "left" }}>
              Image Sin Offset2
            </Typography>
            <Slider
              aria-label="Small steps"
              defaultValue={DEFAULT_SETTINGS.imageSinOffset2}
              getAriaValueText={valuetext}
              step={0.1}
              marks
              min={0}
              max={1}
              valueLabelDisplay="auto"
              onChange={(_, value) => {
                setImageSinOffset2(value);
              }}
            />
          </Stack>
        </Grid>

        {/*  offset1MixA: 6,
             offset1MixB: 20,
             offset2MixA: 6,
             offset2MixB: 20, 
        */}

        <Grid item xs={3}>
          <Stack sx={{ padding: 2 }}>
            <Typography variant="overline" sx={{ textAlign: "left" }}>
              Offset1 MixA
            </Typography>
            <Slider
              aria-label="Small steps"
              defaultValue={DEFAULT_SETTINGS.offset1MixA}
              getAriaValueText={valuetext}
              step={1}
              marks
              min={0}
              max={100}
              valueLabelDisplay="auto"
              onChange={(_, value) => {
                setOffset1MixA(value);
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack sx={{ padding: 2 }}>
            <Typography variant="overline" sx={{ textAlign: "left" }}>
              Offset1 MixB
            </Typography>
            <Slider
              aria-label="Small steps"
              defaultValue={DEFAULT_SETTINGS.offset1MixB}
              getAriaValueText={valuetext}
              step={1}
              marks
              min={0}
              max={100}
              valueLabelDisplay="auto"
              onChange={(_, value) => {
                setOffset1MixB(value);
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack sx={{ padding: 2 }}>
            <Typography variant="overline" sx={{ textAlign: "left" }}>
              Offset2 MixA
            </Typography>
            <Slider
              aria-label="Small steps"
              defaultValue={DEFAULT_SETTINGS.offset2MixA}
              getAriaValueText={valuetext}
              step={1}
              marks
              min={0}
              max={100}
              valueLabelDisplay="auto"
              onChange={(_, value) => {
                setOffset2MixA(value);
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack sx={{ padding: 2 }}>
            <Typography variant="overline" sx={{ textAlign: "left" }}>
              Offset2 MixB
            </Typography>
            <Slider
              aria-label="Small steps"
              defaultValue={DEFAULT_SETTINGS.offset2MixB}
              getAriaValueText={valuetext}
              step={1}
              marks
              min={0}
              max={100}
              valueLabelDisplay="auto"
              onChange={(_, value) => {
                setOffset2MixB(value);
              }}
            />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default ControlMirrorDistortion;
