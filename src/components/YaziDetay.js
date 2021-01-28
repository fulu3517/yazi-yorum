import React, {useEffect, useState} from 'react'
import axios from 'axios';
import YaziYorumlari from './YaziYorumlari';

const YaziDetay = (props) => {
    const {id} = props.match.params;
    const [yaziDetayi, setYaziDetayi] = useState({});
    const [yorumlar, setYorumlar] = useState([]);
    // const [yorum, setYorum] = useState(YORUM_BASLANGIC)

    const handleCommentSubmit = (e, yorum)  => {
        e.preventDefault();
        axios
        .post(`https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`, 
            yorum
        )
        .then((response) => {
                setYorumlar([...yorumlar, response.data]); // önceki yorumları kaybetmemek için ...yorumları koyduktan sonra yeni datayı ekledik
        })
    }

    useEffect(() => {
        axios.all([ // aynı anda iki tane get i yaptık. Bu şekilde toplayabilir ve tek bir then altında state i set edebiliriz
            axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`),
            axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`)
        ]).then(responses => {
            console.log("responses",responses)
            setYaziDetayi(responses[0].data) // yazılardan ve yorumlardan gelen dataları ayırdık
            setYorumlar(responses[1].data)
        }).catch(error=> {
            console.log(error)
        })
    },[]);
    return <>
        <h2 className="ui header">{yaziDetayi.title}</h2>
        <p>{yaziDetayi.created_at}</p>
        <p>{yaziDetayi.content}</p>
        <YaziYorumlari yorumlar={yorumlar} handleSubmit={handleCommentSubmit}/>
       
    </>
}
export default YaziDetay;
