
import { Grid } from '@mui/material';
import List from '../../../components/reusables/AuthList';
import { colors } from '../../../assets/colors';
import Button from '@mui/material/Button';
import {useMediaQuery,useTheme} from "@mui/material"
import { ArrowForward } from '@mui/icons-material';
const GetStartedBusiness = ({handleConnectWallet}:{ handleConnectWallet: () => void }): JSX.Element => {
  const theme=useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid  direction={isMobile ? 'column' : 'row'} container spacing={0} sx={{padding:"10px"}} >
      <Grid item xs={8}>
   <CreateAccount handleConnectWallet={handleConnectWallet}/>
      </Grid>
      <Grid item xs={4}>
        <ChooseAccount/>
      </Grid>
    </Grid>
  );
};

const CreateAccount = ({handleConnectWallet}:{ handleConnectWallet: () => void }): JSX.Element => {
  return (
    <>
  <List items={["Get started by creating an account", "Sign in to Reorg with", "Connect Wallet"]} handleConnectWallet={handleConnectWallet} />
    <p className="desc">
     Plug is a crypto wallet for the Internet Computer that allows you to hold, send, and swap ICP, Cycles,NFTs, and other tokens. 
     <br></br>
    
  
     <a style={{ color:colors.textPrimary}} href='https://plugwallet.ooo/'>Learn more</a>
     <br></br>
     NFID is the easiest and most secure digital identity for the modern world. 
     <br></br>
       <a style={{ color:colors.textPrimary}} href='https://nfid.one/'>Learn more</a>
        </p>
<Button
              variant='contained'
              endIcon={
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    border: `2px solid ${colors.divider}`,
                  }}
                >
                  <ArrowForward />
                </div>
              }
              sx={{
                height: "26px",
              width:"100px",
                background: colors.primary,
                margin: "0 10px",
                display: 'flex',
                marginTop:"10px",
                alignItems: 'center',
                justifyContent: 'space-between',
                '&:hover': {
                  background: colors.primary,
                }
              }}
            >
              <span >Next</span>
            </Button>
    </>
  );
};

const ChooseAccount = (): JSX.Element => {
  return (
    <>
      <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>Reorg</h1>
      <h2 style={{ textAlign: 'center' }}>for Startups</h2>
      <p style={{ textAlign: 'center' }} className='desc'>
        Reorg empowers Web3 startups, dApps, protocols, and DAOs, to seamlessly raise funds by leveraging the power of tokenization.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
     <Button
              variant='contained'
              endIcon={
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    border: `2px solid ${colors.divider}`,
                  }}
                >
                  <ArrowForward />
                </div>
              }
              sx={{
                height: "26px",
          
                background: colors.primary,
                margin: "0 10px",
                display: 'flex',
                marginTop:"10px",
                alignItems: 'center',
                justifyContent: 'space-between',
                '&:hover': {
                  background: colors.primary,
                }
              }}
            >
              <span >Investor</span>
            </Button>
       <p>or</p>
       <Button
              variant='contained'
              endIcon={
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    border: `2px solid ${colors.divider}`,
                  }}
                >
                  <ArrowForward />
                </div>
              }
              sx={{
                height: "26px",
          
                background: colors.primary,
                margin: "0 10px",
                display: 'flex',
                marginTop:"10px",
                alignItems: 'center',
                justifyContent: 'space-between',
                '&:hover': {
                  background: colors.primary,
                }
              }}
            >
              <span >Sign in </span>
            </Button>
      </div>
    </>
  );
};

export default GetStartedBusiness;
