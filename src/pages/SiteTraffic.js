import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Box from '@material-ui/core/Box';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Grid, Container } from '@material-ui/core';
import  { fShortenNumber }  from '../components/formatNumber'
import Paper from '@material-ui/core/Paper';
function SiteTraffic() {
    return ( 
        <Card>
      <CardHeader title="Traffic by Site" />

      <CardContent>
        <Box
          sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}
        >
          
            {/* <Paper key={site.name} variant="outlined" sx={{ py: 2.5, textAlign: 'center' }}> */}
            <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6}>
              <GitHubIcon/>
              <Typography variant="h6">{fShortenNumber(3000)}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                GitHub
              </Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
              <GitHubIcon/>
              <Typography variant="h6">{fShortenNumber(3000)}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                GitHub
              </Typography>
              </Grid>
            

            <Grid item xs={12} sm={6} md={6}>
              <GitHubIcon/>
              <Typography variant="h6">{fShortenNumber(3000)}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                GitHub
              </Typography>
              </Grid>
            
              <Grid item xs={12} sm={6} md={6}>
              <GitHubIcon/>
              <Typography variant="h6">{fShortenNumber(3000)}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                GitHub
              </Typography>
              </Grid>
            </Grid>

            {/* </Paper> */}
         
        </Box>
      </CardContent>
    </Card>
     );
}

export default SiteTraffic;