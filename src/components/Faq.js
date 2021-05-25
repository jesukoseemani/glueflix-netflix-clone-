import React from 'react';
import styled from "styled-components";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";


function Faq() {
  return (
    <Styledfaq>
      <Faqstyle>
     <h3>Frequently Asked Questions</h3>
      <AnimateSharedLayout>
        <Toggle title="What is Netflix?">
          <div className="answer">
          <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p><br/>

          <p>You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
          </div>
        </Toggle>
        <Toggle title="How much does Netflix cost?">
          <div className="answer">
          <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦2,900 to ₦4,400 a month. No extra costs, no contracts.</p>
          </div>
        </Toggle>
        <Toggle title="Where can i watch?">
          <div className="answer">
          <p>Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p><br/>

          <p>You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
          </div>
        </Toggle>
        <Toggle title="How do i cancel?">
          <div className="answer">
          <p>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
          </div>
        </Toggle>
        <Toggle title="What can i watch on Netflix?">
          <div className="answer">
          <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
      </Faqstyle>
      <Inputrepeat>
      <div class="input">
              <input type="email" name="email" className="email" placeholder="Email Address" />
              <input type="submit" name="submit" value="Get started >" className="submit" />
      </div>
        
      <div class="hero-content-small">
          <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
      </div>
      </Inputrepeat>
    </Styledfaq>
  );
}

const Styledfaq = styled.section``

const Faqstyle = styled.div`
  width: 100%;
  max-width: 90rem;
  margin: 0 auto;
  padding: 2rem;
 
  h3 {
    font-size: 4.8rem;
    font-weight: 800;
    text-align: center;
    padding-top: 10rem;
     padding-bottom: 5rem;
  }
 
  .question {
    display: flex;
    flex-direction: column;
  }

  .answer {
  border: 1px solid black;
  background-color: rgb(46, 45, 45);
  padding: 3rem 3.5rem 3rem 3.5rem;
  cursor: pointer;
  p {
  font-size: 2.8rem;
  font-weight: 300;
  }
  }
  
`
const Inputrepeat = styled.div`
 width: 100%;
 margin-left:auto;
 margin-right:auto;
 padding: 3rem;

 .hero-content-small{

    h5{
      font-size: 1.8rem;
      text-align: center;
      @media (max-width: 37.5em){
     font-size: 1.2rem;
      }
    }
  }

.input{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.5rem 0;

.email{
  padding: 1rem 1rem;
  flex: 0 0 50%;
  outline: none;
  }

  .submit{
  padding: 1rem 1rem;
  margin-right: 1rem;
  background-color: red;
  text-transform: uppercase;
  color: #fafafa;
  font-size: 1.5rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  opacity: 0.8;
  font-weight: bold;
  cursor: pointer;
  flex: 0 0 20%;

  &:hover {
  opacity: 1;
}
  }
  
}
`

export default Faq;
