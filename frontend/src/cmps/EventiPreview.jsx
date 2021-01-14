import React from 'react';
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderRounded from '@material-ui/icons/FavoriteBorderRounded';
import Share from '@material-ui/icons/Share';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Box from '@material-ui/core/Box';


export function EventiPreview({ eventi }) {
    const { title, price, host, cycles, reviews, media, capacity } = eventi
    let total = 0
    const rating = reviews.forEach(review => {
        total += review.rate;
    })

    return (
        <div className={'EventiPreview'}>
            <Card className={'card'}>
                <Box px={2} pb={2} mt={-1}>
                    <IconButton >
                        <Share />
                    </IconButton>
                    <IconButton>
                        <FavoriteBorderRounded />
                    </IconButton>
                </Box>
                <Link style={{ textDecoration: 'none' }} to={`/eventi/${eventi._id}`}>
                    <CardMedia
                        className={'media'}
                        image={
                            media.imgUrls[0]
                        }
                    />

                    <CardContent className={'content'}>
                        <div className="flex space-between "> <div ><StarIcon></StarIcon>{total / reviews.length}({reviews.length}) </div> <CalendarTodayIcon></CalendarTodayIcon></div>
                        <h3>{title} </h3>
                        <div className="flex"><Avatar className={'avatar'} src={host.imgUrl} /><p>{host.fullname}</p></div>
                        <Typography
                            className={'MuiTypography--heading'}
                            variant={'h6'}
                            gutterBottom
                        >

                        </Typography>
                        <Typography
                            className={'MuiTypography--subheading'}
                            variant={'caption'}
                        >
                            <div className="flex space-between"> <p> {price}<AttachMoneyIcon></AttachMoneyIcon></p><div>{cycles[0].members.length} / {cycles[0].capacity}<ConfirmationNumberIcon></ConfirmationNumberIcon></div></div>
                        </Typography>
                        <Divider className='divider' />
                        <div className="flex"> {cycles[0].members.map(member => (
                            <Avatar className={'avatar'} key={member._id} src={member.imgUrl} />
                        ))}</div>

                    </CardContent></Link>
            </Card>

        </div>
    );
}






