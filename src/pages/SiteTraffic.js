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
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
function SiteTraffic() {
    return ( 
        <div>
        <Card>
      <CardHeader title="Traffic by Site" />

      <CardContent>
        <Box
          sx={{
            display: 'grid',
            gap: 10,
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}
        >
          
            {/* <Paper key={site.name} variant="outlined" sx={{ py: 2.5, textAlign: 'center' }}> */}
            <Paper  variant="outlined" sx={{ py: 2.5, textAlign: 'center' }} style={{textAlign: "center", padding: "10.5px"}}>
              <Box sx={{ mb: 0.5 }}><GitHubIcon/></Box>

              <Typography variant="h6">{fShortenNumber(3000)}</Typography>

              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Facebook
              </Typography>
            </Paper>
            <Paper  variant="outlined" sx={{ py: 2.5, textAlign: 'center' }} style={{textAlign: "center", padding: "10.5px"}}>
              <Box sx={{ mb: 0.5 }}><FacebookIcon/></Box>

              <Typography variant="h6">{fShortenNumber(3000)}</Typography>

              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Google
              </Typography>
            </Paper>

            <Paper  variant="outlined" sx={{ py: 2.5, textAlign: 'center' }} style={{textAlign: "center", padding: "10.5px"}}>
              <Box sx={{ mb: 0.5 }}><LinkedInIcon/></Box>

              <Typography variant="h6">{fShortenNumber(3000)}</Typography>

              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                LinkedIn
              </Typography>
            </Paper>

            <Paper  variant="outlined" sx={{ py: 2.5, textAlign: 'center' }} style={{textAlign: "center", padding: "10.5px"}}>
              <Box sx={{ mb: 0.5 }}><TwitterIcon /></Box>

              <Typography variant="h6">{fShortenNumber(3000)}</Typography>

              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Twitter
              </Typography>
            </Paper>
            </Box>

            </CardContent>
    </Card>    
         
            {/* </Paper> */}
         
       
      
    </div>
     );
}

export default SiteTraffic;