import '../scss/SimpleCard.scss';

export default function SimpleCard({data}) {
    return(
        <div className="simpleCard">
            <div className="simpleCard__image">
                <img src={data.imageUrl} alt="Placeholder" />
            </div>
            <div className="simpleCard__text__wrapper">
                <div className="simpleCard__text__header">
                    <span>{data.header}</span>
                </div>
                <div className="simpleCard__text__body">
                    <span>
                        {data.bodytext}
                    </span>
                </div>
            </div>
        </div>
    )
}