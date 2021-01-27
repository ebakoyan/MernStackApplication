import s from './Card.module.css'

export const Card = ({title, img, body, creator}) => (
    <div className={s.container}>
        <div className={s.title}>
            <h2>{title}</h2>
        </div>
        <div className={s.body}>
            <div className={s.back}>
                <div className ={s.background}></div>
                <img src={img} alt={title}/>
                <div className={s.creator}></div>
            </div>
            <div className={s.creator}>
                <p>
                    {creator}
                </p>
            </div>
        </div>
        <div>
            <p>{body}</p>
        </div>
    </div>
)