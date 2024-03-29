import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import Card from "react-bootstrap/esm/Card";
import Row from "react-bootstrap/esm/Row";
import { Context } from "..";

const BrandBar = observer(() => {
    const {device} = useContext(Context);

    return (
        <Row>
            {device._brands.map(brand => 
                <Card
                    style={{cursor: "pointer",}}
                    key={brand.id}
                    className="p-3"
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'success' : 'light' }
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    )
});

export default BrandBar;