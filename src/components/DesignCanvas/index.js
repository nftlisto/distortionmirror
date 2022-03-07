import { useEffect, useContext } from "react";
import { Grid } from "@mui/material";
import { DistortedMirrorEffectSettingsContext } from "../../context/distortedMirrorEffectContext";

import "./styles.css";

const DesignCanvas = () => {
  const {
    time,
    image,
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
  } = useContext(DistortedMirrorEffectSettingsContext);
  // https://webglfundamentals.org/webgl/webgl-qna-create-image-warping-effect-in-webgl-example-1.html

  useEffect(() => {
    // console.log({
    //   image,
    //   timeFactor,
    //   timeOffset,
    //   imageOffsetFactor1,
    //   imageOffsetFactor2,
    //   imageSinOffset1,
    //   imageSinOffset2,
    //   offset1MixA,
    //   offset1MixB,
    //   offset2MixA,
    //   offset2MixB,
    //   upDownFactor,
    //   upDownOffset
    // });

    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    const mix = (a, b, l) => {
      return a + (b - a) * l;
    };

    const upDown = (v) => {
      return Math.tan(v) * upDownFactor + upDownOffset;
    };

    const resize = (canvas) => {
      var width = canvas.clientWidth;
      var height = canvas.clientHeight;
      if (width !== canvas.width || height !== canvas.height) {
        canvas.width = width;
        canvas.height = height;
      }
    };
    const renderCanvas = (time) => {
      resize(canvas);
    };
    const renderDistortion = (time) => {
      time *= timeFactor;
      var t1 = time;
      var t2 = time * timeOffset;

      // for each line in the canvas
      for (var dstY = 0; dstY < canvas.height; ++dstY) {
        // v is value that goes 0 to 1 down the canvas
        var v = dstY / canvas.height;

        // compute some amount to offset the src
        var off1 =
          Math.sin(
            (v + imageSinOffset1) * mix(offset1MixA, offset1MixB, upDown(t1))
          ) * imageOffsetFactor1;
        var off2 =
          Math.sin(
            (v + imageSinOffset2) * mix(offset2MixA, offset2MixB, upDown(t2))
          ) * imageOffsetFactor2;
        var off = off1 + off2;

        // compute what line of the source image we want
        // NOTE: if off = 0 then it would just be stretching
        // the image down the canvas.
        var srcY = (dstY * img.height) / canvas.height + off;

        // clamp srcY to be inside the image
        srcY = Math.max(0, Math.min(img.height + 1, srcY));

        // draw a single line from the src to the canvas
        ctx.drawImage(img, 0, srcY, img.width, 1, 0, dstY, canvas.width, 1);
      }
    };

    const animate = () => {
      requestAnimationFrame(renderDistortion);
      renderCanvas();
    };

    // Load Image & Animate
    const img = new Image();
    img.onload = animate;
    img.src = image;
  }, [
    time,
    image,
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
  ]);

  return (
    <Grid container>
      <Grid item>
        <canvas></canvas>
      </Grid>
    </Grid>
  );
};

export default DesignCanvas;
