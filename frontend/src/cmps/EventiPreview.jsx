import React from 'react';

export function EventiPreview({eventi}) {
    const { title, price, imgUrls, host, reviews, cycles, members } = eventi
    // let total = 0
    // const rating = reviews.forEach(review => {
    //     total += review.rating;
    // });
    
    return (
        <div>
            {/* <img src={imgUrls[0]}></img> */}
            <div>{title}</div>
            <div>{price}</div>
            <div>{host.fullname}</div>
            {/* <div>{cycles[0].members.length}/{cycles[0].capacity}</div>
            <div>{reviews.length}</div>
            <div>{total / reviews.length}</div> */}
        </div>
    
    );
}



