'use client'

import {getPosts} from "../../../../../services/posts";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

const PostListPage = () => {
    const router = useRouter();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(response => {
            setPosts(response);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    const goToPost = id => {
        router.push(`/admin/pages/posts/update/${id}`);
    };
    return (
        <div className="card">
            <DataTable value={posts} className="p-datatable-sm">
                <Column field="title" header="Başlık" className="link-primary"
                        body={
                    rowData => <div onClick={() => goToPost(rowData.id)}>{rowData.title}</div>
                }/>
                <Column field="content" header="İçerik"
                        body={(rowData) => rowData.content.substring(0, 50) + "..."}
                />
            </DataTable>
        </div>
    );
}

export default PostListPage;
