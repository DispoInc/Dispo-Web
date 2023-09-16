import { MDBCol } from "mdb-react-ui-kit";
import React, { useState } from "react";

import Datagrid from "../../../components/structured/datatable/Datatable";   
import RegisterPanel from "../../../layouts/panel/register/classic/RegisterPanel";

import { TextArea } from "../../../components/ui/inputs/textarea/TextArea";
import { CurrencyField}  from "../../../components/ui/inputs/currency/CurrencyField";
import { UseFieldsStepTwo } from "./UseFields";
import { Step } from "../../../components/structured/stepper/Stepper";
import { TextField } from "../../../components/ui/inputs/textfield/TextField";
import { SelectWithFilter } from "../../../components/ui/inputs/select/SelectField";

function StepTwo(props){
    const [fields, order, setOrder, handleFieldChange, handleExistsRequiredFieldsNotAnswered, handleExistsDuplicateFields] = UseFieldsStepTwo();
    const [selectedOrder, setSelectedOrder] = useState(null);

    const deleteRows = (rowToDelete) => {
        const newOrder = order.filter(row => row !== rowToDelete);

        setOrder(newOrder);
    };

    const products = [
        { value: "Laranja", label: "Laranja"},
        { value: "Carne", label: "Carne"},
        { value: "Batata", label: "Batata"},
        { value: "Coca-Cola", label: "Coca-Cola"}
    ];

    const columns = [
        { field: "product", header: "Produto" },
        { field: "quantity", header: "Quantidade" },
        { field: "totalPurchaseValue", header: "Valor total" },
        { field: "shipping", header: "Frete" },
        { field: "DeliveryTimeFrame", header: "Tempo de entrega" },
        { field: "description", header: "Descrição" }
    ];
    

    const handleNextStep = () => {
        if (handleExistsRequiredFieldsNotAnswered()) {
          props.alertPanel(
            "warning",
            "Existem campos obrigatórios não respondidos"
          );
          return;
        }
  
        props.entityCallback(order);
  
        props.alertPanel(null);
        props.nextStep();
    };

    const onSave = () => {
        if (handleExistsRequiredFieldsNotAnswered()) {
            props.alertPanel(
              "warning",
              "Existem campos obrigatórios não respondidos."
            );
            return;
        }

        if (handleExistsDuplicateFields(order, fields)) {
            props.alertPanel(
                "warning",
                "Esse produto já está inserido na ordem de compra."
            );
            return;
        }

        setOrder([...order, fields]);           
        props.entityCallback(order);
        props.alertPanel(null);
    }

    return (
        <Step {...props} onNextStep={handleNextStep}>
            <MDBCol>
                <SelectWithFilter
                    required
                    name="product"
                    label="Produto"
                    options={products}
                    value={fields.product}
                    onChange={(value) => handleFieldChange("product", value.target.value)}
                />         
            </MDBCol>
            <MDBCol>
                <TextField
                    required
                    name="quantity"
                    label="Quantidade"
                    type="number"
                    value={fields.quantity}
                    onChange={(value) => handleFieldChange("quantity", value.target.value)}
                />
            </MDBCol>
            <MDBCol>
                <CurrencyField
                    required
                    name="totalPurchaseValue"
                    label="Valor total"
                    value={fields.totalPurchaseValue}
                    onChange={(value) => handleFieldChange("totalPurchaseValue", value)}
                />
            </MDBCol> 
            <MDBCol>
                <CurrencyField
                    required
                    name="shipping"
                    label="Frete"
                    value={fields.shipping}
                    onChange={(value) => handleFieldChange("shipping", value)}
                />
            </MDBCol>  
            <MDBCol>
                <TextField
                    required
                    name="DeliveryTimeFrame"
                    label="Tempo de entrega"
                    type="number"
                    placeholder="Dias úteis"
                    value={fields.DeliveryTimeFrame}
                    onChange={(value) => handleFieldChange("DeliveryTimeFrame", value.target.value)}
                />
            </MDBCol>  
           
            <TextArea
                name="description"
                label="Descrição"
                value={fields.description}
                onChange={(value) => handleFieldChange("description", value.target.value)}
            />
            
            <RegisterPanel title="Produtos cadastrados" onSave={onSave}>
                <MDBCol>
                    <Datagrid 
                        columns={columns} 
                        data={order}
                        rowsPerPage={[2, 4, 8]}
                        noDataMessage="Nenhum produto cadastrado"
                        showCheckbox
                        fromApi={false}
                        setSelectedItens={setSelectedOrder}
                        selectedItens={selectedOrder}
                        onDeleteButton={deleteRows}
                    >
                    </Datagrid>     
                </MDBCol>
            </RegisterPanel>          
        </Step>
    );
}

export default StepTwo;