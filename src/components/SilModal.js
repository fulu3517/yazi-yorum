import React, {useState} from 'react';
import { Button, Modal } from 'semantic-ui-react'
import { api } from '../api';

const SilModal = ({yazi, push}) => {
    const [open, setOpen] = useState(false);
    const [hata, setHata] = useState('');
    const show = () => setOpen(true);
    const close = () => setOpen(false);

    const handleDelete = (id) => {
        api()
        .delete(`/posts/${id}`)
        .then(() =>{
            setHata('');
            // modal ı kapat
            close();
            // anasayfaya push.// push metodunu props ile alabiliriz
            push('/');
        }).catch((err) => {
            setHata('Yazıyı silerken hata oluştu');
        })
    }
    return (
        <React.Fragment>
             <Button color="red" onClick={show}>Sil</Button>
             <Modal size="mini" open={open} onClose={close}>
                 <Modal.Header>Yazıyı Sil</Modal.Header>
                 <Modal.Content>
                     <p> <strong>{yazi.title}</strong>  başlıklı yazıyı Bu Yazıyı Silmek İstediğinize Emin Misinz?</p>
                     {hata && <p>{hata}</p>}
                 </Modal.Content>
                 <Modal.Actions>
                     <Button negative onClick={close}>İptal Et</Button>
                     <Button
                         positive
                         icon="delete"
                         labelPosition="right"
                         content="Evet, sil"
                         onClick={()=> handleDelete(yazi.id)}
                     />
                 </Modal.Actions>
             </Modal>
         </React.Fragment>
    )
}

export default SilModal

// import React, {useState} from 'react';
// import { Button, Modal } from 'semantic-ui-react'
// const SilModal = () => {
//     const [open, setOpen] = useState(false);
//     const show = () => {setOpen(true);}
//     const close = () => {setOpen(false);}
//     return (
//         <React.Fragment>
//             <Button color="red" onClick={show}>Sil</Button>
//             <Modal size="mini" open={open} onClose={close}>
//                 <Modal.Header>Yazıyı Sil</Modal.Header>
//                 <Modal.Content>
//                     <p>Bu Yazıyı Silmek İstediğinize Emin Misinz?</p> 
//                 </Modal.Content>
//                 <Modal.Action>
//                     <Button negative>İptal Et</Button>
//                     <Button
//                         positive
//                         icon="delete"
//                         labelPosition="right"
//                         content="Evet, sil"
//                     />
//                 </Modal.Action>
//             </Modal>
//         </React.Fragment>
//     );
// }
// export default SilModal;