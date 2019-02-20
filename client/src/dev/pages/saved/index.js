import React from "react"

import { Row, Col } from "../../components/bootstrap.js"
import { DataWrapper } from "../../components/widget_saved"

function Saved(props) {
   return (
      <div className="container">
         <Row>
            <Col sm="12">
               <div className="jumbotron">
                  <h3 className="text-center"> View Saved Articles </h3>
               </div>
            </Col>
         </Row>
         <DataWrapper />
      </div>
   )
}

export default Saved