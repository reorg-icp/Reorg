import { Fragment, SyntheticEvent } from "react";
import { Snackbar, IconButton } from "@mui/material";
import { useSnackbar } from "../../context/snackbarctx";
import { CheckIcon, WarningIcon } from "../../assets/icons";

export const SnackBar = (): JSX.Element => {
  const { snackbaropen, snackbarmsg, snacksuccess, hidesnackbar } =
    useSnackbar();

  const handleClose = (_event: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    hidesnackbar();
  };

  const snackAction: JSX.Element = (
    <Fragment>
      <IconButton size="small" aria-label="close">
        {snacksuccess ? <CheckIcon /> : <WarningIcon />}
      </IconButton>
    </Fragment>
  );

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={snackbaropen}
      message={snackbarmsg}
      autoHideDuration={6500}
      onClose={handleClose}
      action={snackAction}
      sx={{ zIndex: 4000 }}
    />
  );
};
