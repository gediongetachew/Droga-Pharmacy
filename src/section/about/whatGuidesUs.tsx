import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import React from 'react'


export default function whatGuidesUs() {
  return (
    <Grid container sx={{ 
      width: '100%', 
      background: 'white',
      
      paddingLeft:{xs:0, lg:10}
    }}>
      <Grid item xs={12} sx={{
        display: 'flex', 
        flexDirection: { xs: 'column', lg: 'row' },
        justifyContent: 'space-between',
        gap: { xs: 3, lg: 5 },
        marginBottom: { xs: 4, lg: 5 },
        margin: { xs: 2, sm: 4, lg: 4 },
      }}>
        <Typography sx={{
          fontSize: { xs: '24px', sm: '30px',md:'40px', lg: '45px' }, 
          fontFamily: 'Plus Jakarta Sans', 
          fontWeight: 600, 
          color: 'black',
          width: { xs: '100%', lg: '50%' }
        }}>
          What Guides Us
        </Typography>
        <Typography sx={{
          fontSize: { xs: '14px', sm: '16px',md:'20px', lg: '18px',xl:'20px' }, 
          fontFamily: 'Plus Jakarta Sans', 
          fontWeight: 600, 
          color: '#777777',
          width: { xs: '100%', lg: '60%',xl:'65%' },
        
        }}>
          We are committed to delivering accessible healthcare, sustainable solutions, and professional services that prioritize the well-being of our communities.
        </Typography>
      </Grid>

      <Grid item xs={12} sx={{
        display: 'flex', 
        flexDirection: { xs: 'column', lg: 'row' },
        marginBottom: { xs: 3, lg: 8,xl:9 },
        gap: { xs: 3, lg: 10,xl:10 },
        margin: { xs: 2, sm: 4, md:1, lg:0 },
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: { xs: 3, lg: 2 },
          width: { xs: '100%', lg: '40%' },
          height: { xs: 'auto', lg: '280px' },
          minHeight: { xs: '200px', lg: '250px' },
          border: '1px solid #737373',
          borderRadius: '12px'
        }}>
          <Typography sx={{
            fontSize: { xs: '22px', sm: '28px',md:'30px', lg: '36px' },
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 600,
            color: 'black',
            marginBottom: { xs: 2, lg: 3 }
          }}>
            Humanity
          </Typography>
          <Typography sx={{
            fontSize: { xs: '14px', sm: '16px',md:'20px', lg: '18px',xl:'20px' },
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 400,
            color: '#737373',
            width: { xs: '100%', lg: '90%' }
          }}>
            We are committed enough to achieve our target to protect the health of the people through supplying on time delivery of service and products.
          </Typography>
        </Box>

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: { xs: 3, lg: 2 },
          width: { xs: '100%', lg: '40%' },
          height: { xs: 'auto', lg: '280px' },
          minHeight: { xs: '200px', lg: '250px' },
          border: '1px solid #737373',
          borderRadius: '12px'
        }}>
          <Typography sx={{
            fontSize: { xs: '22px', sm: '28px',md:'30px', lg: '36px' },
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 600,
            color: 'black',
            marginBottom: { xs: 2, lg: 3 }
          }}>
            Integrity
          </Typography>
          <Typography sx={{
            fontSize: { xs: '14px', sm: '16px',md:'20px', lg: '18px',xl:'20px' },
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 400,
            color: '#737373',
            width: { xs: '100%', lg: '90%' }
          }}>
            We keep our promise to protect the health of the people. We are honest to ourselves, to our customers and to our society in delivering quality product and service to the healthcare facility of the country.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sx={{
        display: 'flex', 
        flexDirection: { xs: 'column', lg: 'row' },
        marginLeft: { xs: 0, lg: 10 },
        marginBottom: { xs: 3, lg: 5 },
        gap: { xs: 3,lg: 10 },
        margin: { xs: 2, sm: 4, md:1, lg:4 },
      }}>
        
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: { xs: 3, lg: 2 },
          width: { xs: '100%', lg: '45%' },
          height: { xs: 'auto', lg: '280px' },
          minHeight: { xs: '200px', lg: '250px' },
          border: '1px solid #737373',
          borderRadius: '12px'
        }}>
          <Typography sx={{
            fontSize: { xs: '22px', sm: '28px',md:'30px', lg: '36px' },
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 600,
            color: 'black',
            marginBottom: { xs: 2, lg: 3 }
          }}>
            Commitment
          </Typography>
          <Typography sx={{
            fontSize: { xs: '14px', sm: '16px',md:'20px', lg: '18px',xl:'20px' },
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 400,
            color: '#737373',
            width: { xs: '100%', lg: '90%' }
          }}>
            We are committed enough to achieve our target to protect the health of the people through supplying on time delivery of service and products. Our commitment will last long till we achieve our goals as a company as well as individually
          </Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: { xs: 3, lg: 2 },
          width: { xs: '100%', lg: '45%' },
          height: { xs: 'auto', lg: '250px' },
          minHeight: { xs: '200px', lg: '280px' },
          border: '1px solid #737373',
          borderRadius: '12px'
        }}>
          <Typography sx={{
            fontSize: { xs: '22px', sm: '28px',md:'30px', lg: '36px' },
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 600,
            color: 'black',
            marginBottom: { xs: 2, lg: 3 }
          }}>
            Customer Centric
          </Typography>
          <Typography sx={{
            fontSize: { xs: '14px', sm: '16px',md:'20px', lg: '18px',xl:'20px' },
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 400,
            color: '#737373',
            width: { xs: '100%', lg: '90%' }
          }}>
            Our success as a team will be achieved in the fulfillment of the customer demand. We respect human being, honest to ourselves and committed to satisfy our customer needs.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}
