import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  card: {
    display: "flex",
    marginTop: "7px",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
}));
