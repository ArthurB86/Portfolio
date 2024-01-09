import React from 'react';
import { useTheme, Typography, Box, Link, } from '@mui/material';
import StyledBox from '../../Components/StyledBox';
import useMediaQuery from '@mui/material/useMediaQuery';



const Information = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery('(max-width:900px)');

  const titleStyleh2 = {
    color: theme.palette[theme.palette.mode].primary,
    fontWeight: 700,
    letterSpacing: '1px',
    lineHeight: 1,
    fontSize: isSmallScreen ? '2rem' : '4rem',
    marginBottom: '30px',
  };

  const phoneNumberStyle = {
    color: theme.palette.mode === 'dark' ? theme.palette.dark.primary : theme.palette.light.primary,
  };

  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    alignItems: 'center',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <Box
      sx={{
        ...containerStyle,
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.dark.background : theme.palette.light.background,
        color: theme.palette.mode === 'dark' ? theme.palette.dark.text : theme.palette.light.text,
      }}
    >
      <StyledBox sx={sectionStyle}>
        <Typography style={titleStyleh2}>À propos</Typography>
        <Typography>
          <strong>Nom :</strong> BIET Arthur (AB)
        </Typography>
        <Typography>
          <strong>Addresse :</strong> 24 rue Marcellin Berthelot
        </Typography>
        <Typography>
          <strong>Ville :</strong> Chatellerault 86100
        </Typography>
        <Box>
          <Typography>
            <strong>Email : </strong>
            <Link href="mailto:arthur.biet1@gmail.com" style={phoneNumberStyle}>
              arthur.biet1@gmail.com
            </Link>
          </Typography>
        </Box>
        <Typography>
          <strong>Téléphone : </strong>
          <Link href="tel:+1234567890" style={phoneNumberStyle}>
            +33 6 28 76 71 92
          </Link>
        </Typography>
      </StyledBox>

    

      <StyledBox >
        <Typography style={titleStyleh2}>Hébergeur</Typography>
        <Typography>
        <strong> Nom : </strong>Netlify, Inc.
          </Typography>
          <Typography>
          <strong> Addresse : </strong>44 Montgomery Street, Suite 300
          </Typography>
          <Typography>
          <strong> Ville : </strong>San Francisco, California 94104
          </Typography>
          <Typography>
            <strong> Email : </strong> 
            <Link href="mailto:arthur.biet1@gmail.com" style={phoneNumberStyle}>  
                support@netlify.com
          </Link>
          </Typography>
          <Typography>
          <strong>Support : </strong> 
          <Link href="https://www.netlify.com/support" style={phoneNumberStyle}>
            https://www.netilify.com/support
        </Link>
        </Typography>
      </StyledBox>
    </Box>
  );
};

export default Information;
