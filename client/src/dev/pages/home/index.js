import React from "react"
import { Row, Col, Card } from "../../components/bootstrap.js"
import { DataWrapper } from "../../components/widget_current"

function Home(props) {
   return (
      <div className="container">
         <Row>
            <Col sm="12">
               <Card>
                  <div className="text-center">
                     <div className="jumbotron" style={{ backgroundColor: "#07c63a" }}>
                        <h1 className="text-center" style={{ color: "#d4d3ff" }}> In <i class="far fa-check-square"></i> Check </h1>
                     </div>
                     <b className="text-center"> Understand the Politics of Washington - Directly from the source. </b>
                  </div>
               </Card>
            </Col>
         </Row>
         <Row>
            <Col sm="12" lg="4">
               <Card>
                  <div className="text-center">
                     <h4> Scrape </h4>
                     <p><em> See activity from the US House of representatives in a simpler, cleaner form </em></p>
                  </div>
               </Card>
            </Col>
            <Col sm="12" lg="4">
               <Card>
                  <div className="text-center">
                     <h4> Save </h4>
                     <p><em> Something pique your interest? Save it, and come back to it whenever!</em></p>
                  </div>
               </Card>
            </Col>
            <Col sm="12" lg="4">
               <Card>
                  <div className="text-center">
                     <h4> Search </h4>
                     <p><em> Explore previously saved and annotated activities </em></p>
                  </div>
               </Card>
            </Col>
         </Row>
         <DataWrapper />
      </div>
   )
}

export default Home