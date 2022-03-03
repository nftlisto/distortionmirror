import { useState } from "react";
import { Stack, Grid } from "@mui/material";
import DistortedMirrorEffectSettingsContextProvider from "./context/distortedMirrorEffectContext";
import "./styles.css";
import DesignCanvas from "./components/DesignCanvas";
import ControlMirrorDistortion from "./components/ControlMirrorDistortion";

export default function App() {
  return (
    <div className="App">
      <DistortedMirrorEffectSettingsContextProvider>
        <Stack>
          <Grid container>
            <Grid item xs={12}>
              <ControlMirrorDistortion />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <DesignCanvas />
            </Grid>
          </Grid>
        </Stack>
      </DistortedMirrorEffectSettingsContextProvider>
    </div>
  );
}
