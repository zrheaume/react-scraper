import React from "react"
import { useState, useEffect } from "react"
import { Card, Row, Col } from "../bootstrap.js"
import { fetchCurrent } from "../../utils/fetcher.js"
import { postItem } from "../../utils/saver"


function Item(props) {

   let initialState = {
      name: props.name,
      type: props.type,
      desc: props.desc,
      committees: props.committees,
      saved : false
   }

   let [itemState, setItemState] = useState({item : initialState})

   function saveItem() {
      postItem(itemState.item).then((res) =>{
         if (res.data) {
            console.log(res.data._id)
            let newItem = itemState.item
            console.log(newItem)
            newItem.saved = true
            console.log(newItem.saved)
            setItemState({item : newItem})
            // setSavedState({ is : true})
         }
      })
   }

   return (
      <Col sm="12" lg="4">
         <Card >
            <div style={{ padding: "12px", borderRadius: "4px", backgroundColor: "lightgray", height: "100%" }}>

               {/* Type indicator */}
               <span>
                  <em style={{ fontSize: "10pt" }} >
                     {itemState.item.type}
                  </em>
               </span>

               {/* Item name */}
               <h3>
                  <b> {itemState.item.name} </b>
               </h3>
               <hr />

               {/* Committees involved */}
               <b style={{ color: "navy", fontSize: "12pt" }} > {itemState.item.committees} </b>
               {/* Description */}
               <p style={{fontWeight : "lighter"}}>{itemState.item.desc}</p>
               <hr />

               <button type="button" className={`btn btn-${itemState.item.saved ? "danger" : "warning"}`} onClick={saveItem}>
                  <i className={`fas fa-${itemState.item.saved ? "minus" : "plus"}-circle`}> </i>
               </button>
               <span style={{ marginLeft: "15px", fontWeight: "lighter" }}>
                  {`${itemState.item.saved ? "Remove from collection " : "Add to collection"}`}
               </span>
            </div>
         </Card>
      </Col>
   )
}

function Widget(props) {

   function checkForItems() {
      if (props.scrapes.length > 1) {
         return props.scrapes.map((item, i) => {
            return (
               <Item key={i} name={item.name} type={item.type} desc={item.desc} committees={item.committees} />
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
   const [scrapes, setScrapes] = useState([])
   useEffect(() => {
      console.log("Home: Using scrape effect")
      if (scrapes.length < 1) {
         fetchCurrent().then((content) => {
            setScrapes(content)
         })
      }
   })
   return (
      <Widget scrapes={scrapes} />
   )
}

export {
   DataWrapper
}