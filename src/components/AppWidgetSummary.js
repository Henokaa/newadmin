// @mui
import PropTypes from 'prop-types';
import { styled } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';
// utils
import { fShortenNumber } from './formatNumber';
import { makeStyles } from '@material-ui/core/styles';

import CardContent from '@material-ui/core/CardContent';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
// components
// import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import { IconButton } from '@material-ui/core';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
    deleteIcon1: {
      '& svg': {
        fontSize: 25
      }
    },
    deleteIcon2: {
      '& svg': {
        fontSize: 50
      }
    },
    deleteIcon3: {
      '& svg': {
        fontSize: 75
      }
    },
    deleteIcon4: {
      '& svg': {
        fontSize: 100
      }
    }
  }));
const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  backgroundColor: "#d1e9fc"
}));

// ----------------------------------------------------------------------

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  sx: PropTypes.object,
};

export default function AppWidgetSummary({ title, total, icon, color = 'primary', sx, ...other }) {
    const classes = useStyles();
  return (
    
    <Card
      sx={{
        py: 5,
        boxShadow: 0,
        textAlign: 'center',
        color: "#d1e9fc",
        bgcolor: "#d1e9fc",
        ...sx,
      }}
      {...other}
      style={{backgroundColor: "#d1e9fc"}}
    >
        <CardContent style={{marginLeft: "40px"}}>
        <IconButton
      className={classes.deleteIcon3}

    >
      <IconWrapperStyle
        sx={{
          color: (theme) => theme.palette[color].dark,
          backgroundImage: (theme) =>
            `linear-gradient(135deg, ${(theme.palette[color].dark, 0)} 0%, ${(
              theme.palette[color].dark,
              0.24
            )} 100%)`,
        }}
      >
        <TrendingUpIcon sx={{ fontSize: "80px" }}/>
        {/* <AutoGraphIcon /> */}
        {/* <Iconify icon={icon} width={24} height={24} /> */}
      </IconWrapperStyle>
      </IconButton>
      

      <Typography variant="h3">{fShortenNumber(total)}</Typography>

      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>
      </CardContent>
    </Card>
  );
}