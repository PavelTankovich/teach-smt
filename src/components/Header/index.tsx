import { AppBar, Button, Stack, Toolbar } from "@mui/material";
import { useState } from "react";

// import {useChangeCardsMode} from "src/context/ModeProvider";
// import {Select} from "src/components/Form/Select";
// import {ECardModesList} from "src/consts/enums/cardModesList.enum";

import { NewCardDialog } from "./components/NewCardDialog";

export function Header(): JSX.Element {
  const [createCardDialogOpen, setCreateCardDialogOpen] = useState(false);
  // const onChangeCardsMode = useChangeCardsMode();

  const openCreateCardDialog = () => {
    setCreateCardDialogOpen(true);
  };

  const closeCreateCardDialog = () => {
    setCreateCardDialogOpen(false);
  };

  // const onSelectChange = (value: ECardModesList) => {
  //   onChangeCardsMode(value);
  // };

  return (
    <>
      <AppBar
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar variant="regular">
          <Stack direction="row" justifyContent="flex-end" spacing={2}>
            <Button
              size="small"
              onClick={openCreateCardDialog}
              sx={(theme) => ({
                color: theme.palette.primary.contrastText,
              })}
            >
              Add new card
            </Button>
            {/* <Select */}
            {/*  name="header-change-mode" */}
            {/*  label="Change the mode" */}
            {/*  options={Object.values(ECardModesList).map((value) => ({ */}
            {/*    label: value, */}
            {/*    value, */}
            {/*  }))} */}
            {/*  hasNoneOption={false} */}
            {/*  onChange={onSelectChange} */}
            {/* /> */}
          </Stack>
        </Toolbar>
      </AppBar>
      <NewCardDialog
        open={createCardDialogOpen}
        onClose={closeCreateCardDialog}
      />
    </>
  );
}
