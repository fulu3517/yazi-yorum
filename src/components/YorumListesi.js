import React from 'react'

 const YorumListesi = (props) => {
    return (
        <>
        <h3>Yorumlar</h3>
        {props.yorumlar?.map((yorum) => {
            return (
                <div key={yorum.id}>
                    <div>
                        <p>{yorum.display_name}</p>
                        <p>{yorum.body}</p>
                        <p>{yorum.created_at}</p>
                    </div>
                    <hr/>
                </div>   
            )
        })}
        </>
    )
}
export default YorumListesi
