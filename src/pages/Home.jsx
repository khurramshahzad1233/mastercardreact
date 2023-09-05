import React,{Fragment} from 'react'

const Home = () => {


    const checkouthandler=()=>{
      setTimeout(()=>{
        window.Checkout.configure({
          session: { 
            id: 'SESSION0002587246543I77355887K8'
               }
        });
        window.Checkout.showEmbeddedPage('#embed-target')
      },1000);

        
    }
  return (
    <Fragment>

        <div>
            <button onClick={checkouthandler}>Checkout Button</button>
        </div>
        <div id='embed-target'></div>
    </Fragment>
  )
}

export default Home