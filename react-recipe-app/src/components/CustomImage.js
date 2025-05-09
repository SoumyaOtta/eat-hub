export default function CustomImage({imgSrc, pt}){
    // Only add /eat-hub prefix if it's not already present
    const fullImagePath = imgSrc.startsWith('/eat-hub/') ? imgSrc : 
                         imgSrc.startsWith('/') ? `/eat-hub${imgSrc}` : 
                         `/eat-hub/${imgSrc}`;
    return (
        <div className="custom-image" style={{paddingTop: pt}}>
            <img src={fullImagePath} alt="" />
        </div>
    )
}