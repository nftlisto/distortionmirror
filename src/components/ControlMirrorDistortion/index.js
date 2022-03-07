import {
  Grid,
  Stack,
  Slider,
  Typography,
  Button,
  Divider
} from "@mui/material";
import { useContext } from "react";
import {
  DistortedMirrorEffectSettingsContext,
  DEFAULT_SETTINGS
} from "../../context/distortedMirrorEffectContext";

import { Widget } from "../Skins";
import "./styles.css";

const ControlMirrorDistortion = () => {
  const {
    time,
    setTime,
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
  function resetToDefaultSettings() {
    setTime(DEFAULT_SETTINGS.time);
    setTimeFactor(DEFAULT_SETTINGS.timeFactor);
    setTimeOffset(DEFAULT_SETTINGS.timeOffset);

    setUpDownFactor(DEFAULT_SETTINGS.setUpDownFactor);
    setUpDownOffset(DEFAULT_SETTINGS.setUpDownOffset);

    setImageOffsetFactor1(DEFAULT_SETTINGS.imageOffsetFactor1);
    setImageOffsetFactor2(DEFAULT_SETTINGS.imageOffsetFactor2);

    setOffset1MixA(DEFAULT_SETTINGS.offset1MixA);
    setOffset1MixB(DEFAULT_SETTINGS.offset1MixB);

    setOffset2MixA(DEFAULT_SETTINGS.offset2MixA);
    setOffset2MixB(DEFAULT_SETTINGS.offset2MixB);

    setImageSinOffset1(DEFAULT_SETTINGS.imageSinOffset1);
    setImageSinOffset2(DEFAULT_SETTINGS.imageSinOffset2);
  }
  return (
    <Widget>
      <Grid container>
        {/*   upDownFactor: 0.5,
              upDownOffset: 0.5 
        */}
        <Grid item xs={6}>
          <Stack sx={{ padding: 2 }}>
            <Typography variant="overline" sx={{ textAlign: "left" }}>
              UpDown Factor
            </Typography>
            <Slider
              key={`slider-upDownFactor`}
              aria-label="Small steps"
              value={upDownFactor}
              getAriaValueText={valuetext}
              step={0.1}
              min={0}
              max={10}
              valueLabelDisplay="auto"
              onChange={(_, value) => {
                setUpDownFactor(value);
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack sx={{ padding: 2 }}>
            <Typography variant="overline" sx={{ textAlign: "left" }}>
              upDown Offset
            </Typography>
            <Slider
              key={`slider-upDownOffset`}
              aria-label="Small steps"
              value={upDownOffset}
              getAriaValueText={valuetext}
              step={0.1}
              min={0}
              max={10}
              valueLabelDisplay="auto"
              onChange={(_, value) => {
                setUpDownOffset(value);
              }}
            />
          </Stack>
        </Grid>
        {/* imageOffsetFactor1,imageOffsetFactor2  */}
        <Grid item xs={6}>
          <Stack sx={{ padding: 2 }}>
            <Typography variant="overline" sx={{ textAlign: "left" }}>
              Image Offset Factor1
            </Typography>
            <Slider
              key={`slider-imageOffsetFactor1`}
              aria-label="Small steps"
              value={imageOffsetFactor1}
              getAriaValueText={valuetext}
              step={1}
              min={-200}
              max={200}
              valueLabelDisplay="auto"
              onChange={(_, value) => {
                setImageOffsetFactor1(value);
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack sx={{ padding: 2 }}>
            <Typography variant="overline" sx={{ textAlign: "left" }}>
              Image Offset Factor2
            </Typography>
            <Slider
              key={`slider-imageOffsetFactor2`}
              aria-label="Small steps"
              value={imageOffsetFactor2}
              getAriaValueText={valuetext}
              step={1}
              min={-200}
              max={200}
              valueLabelDisplay="auto"
              onChange={(_, value) => {
                setImageOffsetFactor2(value);
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack sx={{ padding: 2 }}>
            <Typography variant="overline" sx={{ textAlign: "left" }}>
              Image Sin Offset1
            </Typography>
            <Slider
              key={`slider-imageSinOffset1`}
              aria-label="Small steps"
              value={imageSinOffset1}
              getAriaValueText={valuetext}
              step={0.01}
              min={0}
              max={1}
              valueLabelDisplay="auto"
              onChange={(_, value) => {
                setImageSinOffset1(value);
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack sx={{ padding: 2 }}>
            <Typography variant="overline" sx={{ textAlign: "left" }}>
              Image Sin Offset2
            </Typography>
            <Slider
              key={`slider-imageSinOffset2`}
              aria-label="Small steps"
              value={imageSinOffset2}
              getAriaValueText={valuetext}
              step={0.01}
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

        <Grid item xs={6}>
          <Stack sx={{ padding: 2 }}>
            <Typography variant="overline" sx={{ textAlign: "left" }}>
              Offset1 MixA
            </Typography>
            <Slider
              key={`slider-offset1MixA`}
              aria-label="Small steps"
              value={offset1MixA}
              getAriaValueText={valuetext}
              step={1}
              min={0}
              max={100}
              valueLabelDisplay="auto"
              onChange={(_, value) => {
                setOffset1MixA(value);
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack sx={{ padding: 2 }}>
            <Typography variant="overline" sx={{ textAlign: "left" }}>
              Offset1 MixB
            </Typography>
            <Slider
              key={`slider-offset1MixB`}
              aria-label="Small steps"
              value={offset1MixB}
              getAriaValueText={valuetext}
              step={1}
              min={0}
              max={100}
              valueLabelDisplay="auto"
              onChange={(_, value) => {
                setOffset1MixB(value);
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack sx={{ padding: 2 }}>
            <Typography variant="overline" sx={{ textAlign: "left" }}>
              Offset2 MixA
            </Typography>
            <Slider
              key={`slider-offset2MixA`}
              aria-label="Small steps"
              value={offset2MixA}
              getAriaValueText={valuetext}
              step={1}
              min={0}
              max={100}
              valueLabelDisplay="auto"
              onChange={(_, value) => {
                setOffset2MixA(value);
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack sx={{ padding: 2 }}>
            <Typography variant="overline" sx={{ textAlign: "left" }}>
              Offset2 MixB
            </Typography>
            <Slider
              key={`slider-offset2MixB`}
              aria-label="Small steps"
              value={offset2MixB}
              getAriaValueText={valuetext}
              step={1}
              min={0}
              max={100}
              valueLabelDisplay="auto"
              onChange={(_, value) => {
                setOffset2MixB(value);
              }}
            />
          </Stack>
        </Grid>
        {/* timeFactor, timeOffset, time  */}
        <Grid item xs={6}>
          <Stack sx={{ padding: 2 }}>
            <Typography variant="overline" sx={{ textAlign: "left" }}>
              Time Factor
            </Typography>
            <Slider
              key={`slider-timeFactor`}
              aria-label="Small steps"
              value={timeFactor}
              getAriaValueText={valuetext}
              step={0.000001}
              min={0.000001}
              max={0.00001}
              valueLabelDisplay="auto"
              onChange={(_, value) => {
                setTimeFactor(value);
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack sx={{ padding: 2 }}>
            <Typography variant="overline" sx={{ textAlign: "left" }}>
              Time Offset
            </Typography>
            <Slider
              key={`slider-timeOffset`}
              aria-label="Small steps"
              value={timeOffset}
              getAriaValueText={valuetext}
              step={0.1}
              min={0.1}
              max={1.0}
              valueLabelDisplay="auto"
              onChange={(_, value) => {
                setTimeOffset(value);
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack sx={{ padding: 2 }}>
            <Typography variant="overline" sx={{ textAlign: "left" }}>
              Time
            </Typography>
            <Slider
              key={`slider-time`}
              aria-label="Small steps"
              value={time}
              getAriaValueText={valuetext}
              step={1000}
              min={0}
              max={500000}
              valueLabelDisplay="auto"
              onChange={(_, value) => {
                setTime(value);
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Divider light />
          <br />
          <Button
            variant="contained"
            onClick={() => {
              resetToDefaultSettings();
            }}
          >
            Reset to Defaults{" "}
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Divider light />
          <br />
          <pre>
            {JSON.stringify(
              {
                time,

                timeFactor,

                timeOffset,

                imageOffsetFactor1,

                imageOffsetFactor2,

                imageSinOffset1,

                imageSinOffset2,

                offset1MixA,

                offset1MixB,

                offset2MixA,

                offset2MixB,

                upDownFactor,

                upDownOffset
              },
              null,
              2
            )}
          </pre>
        </Grid>
      </Grid>

      <br />
    </Widget>
  );
};

export default ControlMirrorDistortion;
