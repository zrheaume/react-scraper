import React from "react"

import { Row, Col, Card } from "../../components/bootstrap.js"

function Search(props) {
   return (
      <div className="container">
         <Row>
            <Col sm="12">
               <Card>
                  <h3 className="text-center"> Search for Articles </h3>
               </Card>
            </Col>
         </Row>

      </div>
   )
}

export default Search