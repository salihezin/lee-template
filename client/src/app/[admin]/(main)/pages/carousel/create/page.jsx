'use client';

import React from 'react';
import {Button} from "primereact/button";
import {InputSwitch} from "primereact/inputswitch";
import {InputTextarea} from "primereact/inputtextarea";
import axios from "axios";
import {useRouter} from "next/navigation";
import { Toast } from 'primereact/toast';

const CarouselCreatePage = () => {
    const router = useRouter();
    const toast = React.useRef(null);
    const [isActive, setIsActive] = React.useState(true);

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const formData = new FormData();
        const fileInput = document.getElementById('image');
        const imageFile = fileInput.files[0];
        formData.append('image', imageFile);
    
        if (!imageFile) {
            tooltip.current.show({severity: 'error', summary: 'Hata', detail: 'Lütfen bir resim seçin.', life: 3000});
            return;
        }
    
        try {
            const uploadResponse = await axios.post('http://localhost:3001/uploadCarousel', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
    
            const uploadedFilePath = uploadResponse.data.file.path.split('public')[1];
            console.log('uploadedFilePath', uploadedFilePath)
            const response = await axios.post('http://localhost:3001/api/carousel', {
                title: document.getElementById('title').value,
                description: document.getElementById('description').value,
                carouselUrl: document.getElementById('carouselUrl').value,
                carouselButtonLabel: document.getElementById('buttonLabel').value,
                image: uploadedFilePath,
                isActive: isActive,

            });
    
            console.log('Başarıyla kaydedildi:', response.data);
            router.push('/admin/pages/carousel/list');
        } catch (error) {
            console.error('Hata oluştu:', error);
            toast.current.show({severity: 'error', summary: 'Hata', detail: 'Kaydedilirken bir hata oluştu.', life: 3000});
        }
    };
    
    return (
        <div className="card input-group-lg">
            <Toast ref={toast} />
            <div className="flex flex-column gap-2">
                <div className="card-header">
                    <h4 className="card-title">Yeni Carousel</h4>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="title">Başlık</label>
                        <input type="text" id="title" className="form-control" placeholder="Başlık"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Kısa Açıklama</label>
                        <InputTextarea id="description" className="form-control" placeholder="Kısa Açıklama" rows={3}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="carouselUrl">URL</label>
                        <input type="text" id="carouselUrl" className="form-control" placeholder="URL"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="buttonLabel">Buton Yazısı</label>
                        <input type="text" id="buttonLabel" className="form-control" placeholder="Buton Yazısı"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Resim</label>
                        <input type="file" id="image" className="form-control"/>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="isActive" className={"mr-3"}>Aktif mi?</label>
                        <InputSwitch checked={isActive} onChange={(e) => setIsActive(e.value)}/>
                    </div>
                    <div className="form-group">
                        <Button className="btn btn-primary w-100" onClick={handleSubmit}>Kaydet</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarouselCreatePage;
