import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import TextField from '@material-ui/core/TextField';

export function EventiFeaturPost(props) {
    // const { post } = props;

    return (
        <Paper className={"eventiFeaturedPost"}>
            {/* Increase the priority of the hero background image */}

            <div className="overlay" />
            <Grid container>
                <Grid item md={6}>
                    <div className="eventiFeaturedPostContent">
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            {props.eventi.title}
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            time: {props.eventi.durationMinutes} minuts
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            * {props.eventi.reviews[0].rate} ({props.eventi.reviews.length})
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            {props.eventi.description}
                        </Typography>
                        <Link variant="subtitle1" href="#">
                            link tahton
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
}
export function HostFeaturPost(props) {
    // const { post } = props;

    return (
        <Paper className={"hostFeaturedPost"}>
            {/* Increase the priority of the hero background image */}

            <div className="overlay" />
            <img className="rev-img" src={props.eventi.host.imgUrl} />
                    <div className="hostFeaturedPostContent">
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            Meet your host: {props.eventi.host.fullname}
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            {props.eventi.host.about}
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            Reviews {props.eventi.reviews[0].rate} ({props.eventi.reviews.length})
                        </Typography>
                        <Link variant="subtitle1" href="#">
                            link tahton
                        </Link>
                    </div>
        </Paper>
    );
}
export function ReviewsFeaturPost(props) {
    // const { post } = props;

    return (
        <Paper className={"reviewsFeaturedPost"}>
            {/* Increase the priority of the hero background image */}

            <div className="overlay" />
                    <div className="reviewsFeaturedPostContent">
                        <Typography component="h4" variant="h4" color="inherit" gutterBottom>
                            {props.eventi.reviews[0].byUser.fullname}
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            {props.eventi.reviews[0].rate} / 5
                        {/* {props.eventi.reviews.byUser.rate} */}
                        </Typography>
                        <img className="rev-img" src={props.eventi.reviews[0].byUser.imgUrl} />
                        <img className="rev-img" src={props.eventi.host.imgUrl} />

                    </div>
        </Paper>
    );
}


export function CyclesCard(props) {

    return (
        <Card className={"root"}>
            <div className={"details"}>
                <CardContent className={"content"}>
                    <Typography component="h5" variant="h5">
                    <span>From {props.eventi.price}₪</span>/ person
          </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        show all
          </Typography>
                </CardContent>
            </div>
            <CardMedia
                className={"cover"}
                image="/static/images/cards/live-from-space.jpg"
                title="Live from space album cover"
            />
        </Card>
    );
}

export function DatePickers() {

  return (
    <form className="container noValidate">
      <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        className="textField"
        InputLabelProps={{
          shrink: true
        }}
      />
    </form>
  );
}