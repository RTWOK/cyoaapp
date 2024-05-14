import '../scss/SimpleCard.scss'

export default function SimpleCard() {
    return(
        <div className="simpleCard">
            <div className="simpleCard__image">
                <img src="https://picsum.photos/300/300" alt="Placeholder" />
            </div>
            <div className="simpleCard__text__wrapper">
                <div className="simpleCard__text__header">
                    <span>Lorem Ipsum</span>
                </div>
                <div className="simpleCard__text__body">
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A excepturi quaerat et voluptatibus. Veritatis, voluptatum repellat odio fugiat aut odit, optio eos minus non quia ipsa eum quo. Laboriosam, obcaecati!
                    </span>
                </div>
            </div>
        </div>
    )
}