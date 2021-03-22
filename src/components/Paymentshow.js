import React, { useState, useEffect } from 'react'
import db from '../firebase';
import { loadStripe } from "@stripe/stripe-js"
import { useSelector } from "react-redux"
import styled from "styled-components"
import {motion} from "framer-motion"


function Paymentshow() {

  const {user} = useSelector((state) => state.user)

const [products, setProducts] = useState([]);
const [subscription, setSubscription] = useState(null);

useEffect(()=> {

db.collection("customers")
.doc(user.uid)
.collection("subscriptions")
.get()
.then((querySnapshot) => {
  querySnapshot.forEach(async(subscription) => {

    setSubscription({
      role: subscription.data().role,
      current_period_end: subscription.data().current_period_end.seconds,
      current_period_start: subscription.data().current_period_start.seconds,
    })

  })

})

},[user.uid])





useEffect(() => {

  db.collection("products")
  .where("active","==", true)
  .get()
  .then((querySnapshot) => {
    const products = {};
    querySnapshot.forEach(async(productDoc) => {
      products[productDoc.id] = productDoc.data();

      const priceSnap = await productDoc.ref.collection("prices").get();

      priceSnap.docs.forEach((price) => {
          products[productDoc.id].prices = {
            priceId: price.id,
            priceData: price.data()
          }

      })

    })


  })
setProducts(products);
},[])

const loadCheckout = async(priceId) => {

const docRef = await db
.collection("customers")
.doc(user.uid)
.collection("checkout_sessions")
.add({
  price: priceId,
  success_url: window.location.origin,
  cancel_url: window.location.origin
});
docRef.onSnapshot(async(snap) => {
  const {error, sessionId} = snap.data();
  if(error){
    // Show an error to your customer and inspect your cloud function logs in the firebase console
    alert(`An error occurred: ${error.message}`);
  }

  if(sessionId){
    // we have a session, lets redirect to checkout by init stripe
    const stripe = await loadStripe(
      // PK KEY
    );

    stripe.redirectToCheckout({sessionId})
  }
})



}
// {" "} 
  return (
    <div>
      {subscription && 
      <p>Renewal date: 
      {new Date(subscription?.current_period_end * 1000).toLocalDateString()}
      </p>}
      {
     Object.entries(products).map(([productId, productData]) => {

     const isCurrentPackage = productData.name?.toLowerCase()
     .includes(subscription?.role);

     return(
     <Styledsubscribe>
       <div key={productId} className="IsDescribe">
         <h4>kosh</h4>
         <h6>kosh</h6>
       </div>
       <button onClick={() => (!isCurrentPackage && loadCheckout(productData.prices.priceId)) }>Subscribe</button>
     </Styledsubscribe>

     )

     })

      }
    </div>
  )
}
const Styledsubscribe = styled(motion.div)`
`


export default Paymentshow
