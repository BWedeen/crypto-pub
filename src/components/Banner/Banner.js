import { Container, makeStyles, Typography, Fade } from "@material-ui/core";
import Carousel from "./Carousel";

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: "url(./retro.gif)",
    backgroundSize: "1800px",
    backgroundRepeat: "no-repeat",
    backgroundPositionY: "-453px",
    backgroundPositionX: "center",
    position: "relative",
  },
  bannerContent: {
    height: 500,
    display: "flex",
    flexDirection: "column",
    paddingTop: 5,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
}));

function Banner() {
  const classes = useStyles();

  return (
    <Fade in={true} style={{transitionDelay:'300ms'}}>
    <div className={classes.banner}>
      <Container className={classes.bannerContent} >
        <div className={classes.tagline}>
          <Fade in={true} style={{transitionDelay:'400ms'}}>
            <Typography
              variant="h2"
              style={{
                fontWeight: "bold",
                marginBottom: 12,
                fontFamily: "Montserrat",
              }}
            >
              Crypto Hub
            </Typography>
          </Fade>
          <Fade in={true} style={{transitionDelay:'580ms'}}>
            <Typography
              variant="subtitle2"
              style={{
                paddingBottom: 6,
                color: "white",
                fontFamily: "Montserrat",
              }}
            >
              Keep track of every major cryptocurrency, all in one place.
            </Typography>
          </Fade>
        </div>
        <Carousel />
      </Container>
    </div>
    </Fade>
  );
}

export default Banner;