import React from "react";
import { Button, useColorScheme } from "@mui/material";

// Material UI does not provide the toggle interface—you have to build it yourself.
export default () => {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // for server-side rendering
    // learn more at https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
    return null;
  }

  function handleClick() {
    if (mode === "light") {
      setMode("dark");
      document.documentElement.classList.add('dark')
    } else {
      setMode("light");
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <Button variant="outlined" onClick={handleClick}>
      {mode === "light" ? "Dark" : "Light"}
    </Button>
  );
};
