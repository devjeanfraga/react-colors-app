import React, { useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { withStyles } from '@mui/styles'; 
import CssBaseline from '@mui/material/CssBaseline'; 
import MuiAppBar from '@mui/material/AppBar'; 
import Toolbar from '@mui/material/Toolbar'; 
import Typography from '@mui/material/Typography'; 
import IconButton from '@mui/material/IconButton'; 
import MenuIcon from '@mui/icons-material/Menu'; 
import Button from '@mui/material/Button';
// import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import PaletteMetaForm from './PaletteMettaForm';

const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: 'flex'
  },
  navBtns: {

  }
}); 

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
    flexDirection: "row",
    justifyContent: "space-between",
    height: "64px",
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function PaletteFormNav (props) {
  const {palettes, handleSubmitSavePalette, handleDrawerOpen, classes, open} = props;
  // const [paletteName, setPaletteName] = React.useState('');
  
  // useEffect(()=> {
  //   ValidatorForm.addValidationRule("isPaletteNameUnique", value => 
  //   palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
  //   );
  // });

  // const handleChangePaletteName = (evt) => {
  //   setPaletteName(evt.target.value); 
  // };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" color='default' open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
          <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Create a Palette
          </Typography>
        </Toolbar>
          <div classeName={classes.navBtns}>
            <PaletteMetaForm
              palettes={palettes}
              handleSubmit={handleSubmitSavePalette}
            />
            {/* <ValidatorForm onSubmit={ () => handleSubmitSavePalette(paletteName) }>
              <TextValidator
                label='Palette Name'
                value={paletteName}
                name='newPaletteName'
                onChange={handleChangePaletteName}
                validators={['required', 'isPaletteNameUnique']}
                errorMessages={['Enter Palette Name', 'Name already used']}
              />
              <Button type='submit'variant='contained' color='primary'>
                Save Palette
              </Button>
            </ValidatorForm> */}
            <Link to='/'>
              <Button variant='contained' color='secondary'>
                Go Back
              </Button>
            </Link>
          </div>
      </AppBar>
    </div> 
  );
};

export default withStyles(styles, {withTheme: true})(PaletteFormNav); 