import React from "react"
import { useState, useEffect } from "react"
import { Card, Row, Col } from "../bootstrap.js"
import { fetchSaved } from "../../utils/fetcher.js"
import { postItem, remItem } from "../../utils/saver"


function Item(props) {

   let item = {
      name: props.name,
      type: props.type,
      desc: props.desc,
      committees: props.committees,
      saved: true
   }

   let [savedState, setSavedState] = useState({ is: item.saved })

   function removeSavedItem() {
      console.log(props.itemID)
      if (savedState.is) {
         remItem(props.itemID).then((ok) => {
            console.log(ok)
            setSavedState({ is: false })
         }).catch((err) => {
            console.log(err)
         })
      } else if (!savedState.is) {
         postItem(item).then((ok) => {
            setSavedState({is: true})
         })
      }
   }

   return (
      <Col sm="12" lg="4">
         <Card >
            <div style={{ padding: "12px", borderRadius: "4px", backgroundColor: "lightgray", height: "100%" }}>

               {/* Type indicator */}
               <span>
                  <em style={{ fontSize: "10pt" }} >
                     {props.type}
                  </em>
               </span>

               {/* Item name */}
               <h3>
                  <b> {props.name} </b>
               </h3>
               <hr />

               {/* Committees involved */}
               <b style={{ color: "navy", fontSize: "12pt" }} > {props.committees} </b>
               {/* Description */}
               <p style={{ fontWeight: "lighter" }}>{props.desc}</p>
               <hr />

               <button type="button" className={`btn btn-${savedState.is ? "danger" : "warning"}`} onClick={removeSavedItem}>
                  <i className={`fas fa-${savedState.is ? "minus" : "plus"}-circle`}> </i>
               </button>
               <span style={{ marginLeft: "15px", fontWeight: "lighter" }}>
                  {`${savedState.is ? "Remove from collection " : "Add to collection"}`}
               </span>
            </div>
         </Card>
      </Col>
   )
}
function Widget(props) {

   function checkForItems() {
      if (props.items.length > 1) {
         return props.items.map((item, i) => {
            return (
               <Item key={i} name={item.name} itemID={item._id} type={item.type} desc={item.desc} committees={item.committees} />
            )
         })
      } else {
         return (<div />)
      }
   }

   return (
      <Row>
         {checkForItems()}
      </Row>
   )
}

function DataWrapper(props) {
   const [savedItems, setSavedItems] = useState([])
   useEffect(() => {
      if (savedItems.length < 1) {
         fetchSaved().then((allItems) => {
            setSavedItems(allItems)
         })
      }
   })
   return (
      <Widget items={savedItems} />
   )
}

export {
   DataWrapper
}