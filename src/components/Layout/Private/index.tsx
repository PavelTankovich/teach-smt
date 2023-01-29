import { Box, Stack, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";

import { Header } from "src/components/Header";

export function PrivateLayout(): JSX.Element {
  return (
    <>
      <Header />
      <Stack
        component="main"
        sx={{
          minHeight: "100vh",
          height: "100%",
        }}
      >
        <Toolbar />
        <Box
          sx={(theme) => ({
            flexGrow: 1,
            paddingTop: theme.spacing(8),
            height: "100%",
          })}
        >
          <Outlet />
        </Box>
      </Stack>
    </>
  );
}
