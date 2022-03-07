import { Stack, Grid } from "@mui/material";
import DistortedMirrorEffectSettingsContextProvider from "./context/distortedMirrorEffectContext";
import "./styles.css";
import DesignCanvas from "./components/DesignCanvas";
import ControlMirrorDistortion from "./components/ControlMirrorDistortion";
import ControlMirrorDistortionImage from "./components/ControlMirrorDistortion/image";
export default function App() {
  return (
    <div className="App">
      <DistortedMirrorEffectSettingsContextProvider>
        <Stack>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <ControlMirrorDistortionImage />
            </Grid>
            <Grid item xs={5}>
              <ControlMirrorDistortion />
            </Grid>
            <Grid item xs={7}>
              <DesignCanvas />
            </Grid>
          </Grid>
        </Stack>
      </DistortedMirrorEffectSettingsContextProvider>
    </div>
  );
}
