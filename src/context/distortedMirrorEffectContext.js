import React, { useState } from "react";

export const DEFAULT_SETTINGS = {
  time: 0,
  image: "https://images.unsplash.com/photo-1494697536454-6f39e2cc972d",
  timeFactor: 0.000005,
  timeOffset: 0.57,
  imageOffsetFactor1: 45,
  imageOffsetFactor2: 45,
  imageSinOffset1: 0.5,
  imageSinOffset2: 0.5,
  offset1MixA: 6,
  offset1MixB: 20,
  offset2MixA: 6,
  offset2MixB: 20,
  upDownFactor: 0.5,
  upDownOffset: 0.5
};

export const DistortedMirrorEffectSettingsContext = React.createContext({});

export const DistortedMirrorEffectSettingsContextProvider = ({ children }) => {
  const [image, setImage] = useState(DEFAULT_SETTINGS.image);
  const [time, setTime] = useState(DEFAULT_SETTINGS.time);
  const [timeFactor, setTimeFactor] = useState(DEFAULT_SETTINGS.timeFactor);
  const [timeOffset, setTimeOffset] = useState(DEFAULT_SETTINGS.timeOffset);
  const [imageOffsetFactor1, setImageOffsetFactor1] = useState(
    DEFAULT_SETTINGS.imageOffsetFactor1
  );
  const [imageOffsetFactor2, setImageOffsetFactor2] = useState(
    DEFAULT_SETTINGS.imageOffsetFactor2
  );
  const [imageSinOffset1, setImageSinOffset1] = useState(
    DEFAULT_SETTINGS.imageSinOffset1
  );
  const [imageSinOffset2, setImageSinOffset2] = useState(
    DEFAULT_SETTINGS.imageSinOffset2
  );
  const [offset1MixA, setOffset1MixA] = useState(DEFAULT_SETTINGS.offset1MixA);
  const [offset1MixB, setOffset1MixB] = useState(DEFAULT_SETTINGS.offset1MixB);
  const [offset2MixA, setOffset2MixA] = useState(DEFAULT_SETTINGS.offset2MixA);
  const [offset2MixB, setOffset2MixB] = useState(DEFAULT_SETTINGS.offset2MixB);
  const [upDownFactor, setUpDownFactor] = useState(
    DEFAULT_SETTINGS.upDownFactor
  );
  const [upDownOffset, setUpDownOffset] = useState(
    DEFAULT_SETTINGS.upDownOffset
  );

  return (
    <DistortedMirrorEffectSettingsContext.Provider
      value={{
        image,
        setImage,
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
      }}
    >
      {children}
    </DistortedMirrorEffectSettingsContext.Provider>
  );
};

export default DistortedMirrorEffectSettingsContextProvider;
