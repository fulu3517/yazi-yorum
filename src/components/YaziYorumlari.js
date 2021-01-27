import React from 'react';
import YorumListesi from './YorumListesi'
const YaziYorumlar = (props) => {
    return (
        <YorumListesi yorumlar={props.yorumlar}/>
    )
}

export default YaziYorumlar;