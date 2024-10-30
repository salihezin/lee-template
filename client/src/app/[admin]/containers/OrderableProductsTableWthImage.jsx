import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Button} from "primereact/button";
import React from "react";

const OrderableProductsTableWthImage = ({ products }) => {
    const formatCurrency = (value) => {
        return value?.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });
    };

    return (
        <div className="card">
            <h5>Recent Sales</h5>
            <DataTable value={products} rows={5} paginator responsiveLayout="scroll">
                <Column header="Image"
                        body={(data) => <img className="shadow-2" src={`/demo/images/product/${data.image}`}
                                             alt={data.image} width="50"/>}/>
                <Column field="name" header="Name" sortable style={{width: '35%'}}/>
                <Column field="price" header="Price" sortable style={{width: '35%'}}
                        body={(data) => formatCurrency(data.price)}/>
                <Column
                    header="View"
                    style={{width: '15%'}}
                    body={() => (
                        <>
                            <Button icon="pi pi-search" text/>
                        </>
                    )}
                />
            </DataTable>
        </div>
    );
}

export default OrderableProductsTableWthImage;
