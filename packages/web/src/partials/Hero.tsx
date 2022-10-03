import { MouseEvent, useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  Grid,
  Typography,
  Container,
  Link,
  Button,
  AppBar,
  Toolbar,
  TextField
} from '@material-ui/core'
import Tilt from 'react-parallax-tilt'
import CheckIcon from '@material-ui/icons/Check'
import config from '../../config'
import { ArrowRightAlt, Search } from '@material-ui/icons'
import { useEffect } from 'react'
import { Gradient } from '../utils/gradient'
import Nav from '../components/Nav'
import { useAppContext } from '../context/state'

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  before: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '7vw',
    transform: 'skew(-86deg)',
    transformOrigin: 'top'
    // zIndex: '-1',
  },
  text: {
    order: 1,
    // @ts-ignore
    [theme.breakpoints.down('sm')]: {
      order: 2
    }
  },
  gradient: {
    order: 2,
    // @ts-ignore
    [theme.breakpoints.down('sm')]: {
      order: 1
    }
  },
  secondaryButton: {
    background: '#0089FF',
    color: '#FFF',
    textTransform: 'none',
    borderRadius: '8px !important',
    boxShadow: 'none !important'
  },
  spacer: {
    paddingTop: 100
  },
  icon: {
    marginRight: 8,
    color: '#0066FF',
    height: 16,
    width: 16
  },
  content: {
    paddingTop: '7rem',
    textAlign: 'center'
  }
}))

const values = [
  {
    name: 'Personal or brand NFT'
  },
  {
    name: 'Custom ERC-721 metadata'
  },
  {
    name: 'Gasless edits, forever'
  },
  {
    name: 'Ramp into the web3 eco'
  }
]

const Hero = () => {
  const classes = useStyles()

  const { chainId } = useAppContext()
  const [codeOrAddress, setCodeOrAddress] = useState('')

  function handleLogin (e: MouseEvent<any, any>) {
    e.preventDefault()
    window.location.href =
      'https://us-central1-wapfp-25052.cloudfunctions.net/app/auth/twitter'
  }

  function handleSearch (e) {
    e.preventDefault()

    if (codeOrAddress.startsWith('osmo')) {
      window.location.href = `/search?chainId=${chainId}&contractAddress=${codeOrAddress}`
    } else {
      window.location.href = `/search?chainId=${chainId}&codeId=${codeOrAddress}`
    }
  }

  return (
    <div className={classes.root}>
      <Nav signin twitterLoginHandler={handleLogin} />
      <Container maxWidth='sm' className={classes.content}>
        <Grid container spacing={3} alignItems='center'>
          <Grid
            component='form'
            item
            xs={12}
            // data-aos='fade-up'
            className={classes.text}
            onSubmit={handleSearch}
          >
            <Typography
              paragraph
              style={{
                opacity: 0.85,
                fontFamily:
                  'Comfortaa, Quicksand, Arial, Helvetica, sans-serif !important'
              }}
              variant='h3'
              className={'main-text'}
            >
              CosmWander
            </Typography>
            <Typography
              style={{ opacity: 0.65 }}
              variant='body2'
              paragraph
              className={'detail-text paragraph'}
            >
              Search for a contract address, and account, or a codeid
            </Typography>

            <TextField
              autoFocus
              InputProps={{
                style: { padding: 0, color: '#222222', marginTop: 16 ,},
                classes: {
                  input: 'input-huge',
                  notchedOutline: 'notched-outline-huge',
                  focused: 'input-focused',
                  root: 'input-root-huge'
                },
                // startAdornment: (
                //   <Search style={{ color: '#858fa5', marginLeft: 8 }} />
                // ),
                endAdornment: (
                  <Button
                    type='submit'
                    className='action-button small'
                    onClick={() => {}}
                    style={{
                      backgroundColor: config.PALETTE.BORDER_COLOR,
                      border: 'none',
                      padding: '4px',
                      marginRight: 7,
                      color: '#F5F7FF',
                      fontSize: 14,
                      borderRadius: 4
                    }}
                  >
                    <Search style={{ color: '#8E8E8E'}} />
                  </Button>
                )
              }}
              fullWidth
              placeholder={'Contract address, account, or codeid...'}
              value={codeOrAddress}
              onChange={e => setCodeOrAddress(e.currentTarget.value)}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Hero
