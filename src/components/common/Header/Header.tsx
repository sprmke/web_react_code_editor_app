import { useAuth0 } from '@auth0/auth0-react';
import { AppBar, Switch, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { toggleDarkMode } from '../../../store/dark-mode/reducer';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import DarkModeIcon from '@material-ui/icons/Brightness2';

const Header = () => {
  const classes = useStyles();
  const { isAuthenticated } = useAuth0();
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((state) => state.darkMode);

  const onChangeDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Code Editor App
        </Typography>
        <DarkModeIcon />
        <Switch
          onChange={onChangeDarkMode}
          color="default"
          checked={darkMode}
        />
        {isAuthenticated ? (
          <div>Authenticated buttons</div>
        ) : (
          <div>Unauthenticated buttons</div>
        )}
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
  },
}));

export default Header;