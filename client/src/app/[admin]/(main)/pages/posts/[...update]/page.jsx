'use client';

import {Toast} from 'primereact/toast';

import {useParams} from "next/navigation";
import {useEffect, useRef, useState} from "react";

import {getSinglePost, putPost} from "../../../../../services/posts";
import {InputText} from "primereact/inputtext";
import {Editor} from "primereact/editor";
import {Button} from "primereact/button";


const UpdatePostPage = () => {
    const params = useParams();
    const id = params.update[1];
    const ref = useRef();

    const [post, setPost] = useState({});
    const [formState, setFormState] = useState({
        id: '',
        title: '',
        content: '',
        isPublished: false,
        authorId: 1
    });
    const [errorState, setErrorState] = useState({
        title: {
            value: false,
            message: ''
        },
        content: {
            value: false,
            message: ''
        }
    });

    useEffect(() => {
        getSinglePost(id).then(response => {
            setPost(response);
            setFormState({
                id: response.id,
                title: response.title,
                content: response.content,
                isPublished: response.isPublished,
                authorId: response.authorId
            })
        }).catch(error => {
            ref.current.show({severity: 'error', summary: 'Error', detail: error.message});
        });
    }, []);

    const validateThisPost = () => {
        if (formState.title.length < 3 && formState.content.length < 10) {
            setErrorState({
                title: {value: true, message: 'Başlık en az 3 karakter olmalıdır.'},
                content: {value: true, message: 'İçerik en az 10 karakter olmalıdır.'}
            })
        } else if (formState.title.length < 3) {
            setErrorState({...errorState, title: {value: true, message: 'Başlık en az 3 karakter olmalıdır.'}});
        } else if (formState.content.length < 10) {
            setErrorState({...errorState, content: {value: true, message: 'İçerik en az 10 karakter olmalıdır.'}});
        }
    };

    const putThisPost = () => {
        if (errorState.title.value || errorState.content.value) {
            return;
        }
        const postData = {
            title: formState.title,
            content: formState.content,
            isPublished: formState.isPublished,
            authorId: formState.authorId,
        }

        putPost(formState.id, postData).then(response => {
            ref.current.show({severity: 'success', summary: 'Success', detail: 'Güncellendi.'});
        }).catch(error => {
            ref.current.show({severity: 'error', summary: 'Error', detail: error.message});
        });

    };

    const handleSubmit = () => {
        validateThisPost();
        putThisPost();
    };
    return (
        <div className="card">
            <Toast ref={ref}/>
            <InputText placeholder="Başlık" value={formState.title} invalid={errorState.title.value}
                       onFocus={() => setErrorState({...errorState, title: {value: false, message: ''}})}
                       onChange={(e) => setFormState({...formState, title: e.target.value})}/>
            <Editor style={{height: '320px'}} value={formState.content} content={formState.content}
                    onFocus={() => setErrorState({...errorState, content: {value: false, message: ''}})}
                    onTextChange={(e) => setFormState({...formState, content: e.htmlValue})}/>
            <span>
                    {errorState.content.value && <small className="text-danger">{errorState.content.message}</small>}
                </span>
            <Button label="KAYDET" className="p-button-primary mt-3"
                    onClick={() => handleSubmit()}/>
        </div>
    );
}

export default UpdatePostPage;
