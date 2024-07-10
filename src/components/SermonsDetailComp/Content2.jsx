import React from 'react'
import "./Content2.css"
import img1 from "../Assets/events_imgs6-1.jpg";
import img2 from "../Assets/events_imgs1-1.jpg";

const Content2 = () => {
  return (
    <div className="container5">
      <div className="sermons-cards">
        <div className="cards11">
          <img src={img1} alt="" />
          <div className="sermons-overlay"></div>
        </div>
        <div className="cards12">
          <img src={img2} alt="" />
          <div className="sermons-overlay"></div>
        </div>
      </div>
      <div className="info8">
        <p>
          Sermon <span>Description</span>
        </p>
      </div>
      <div className="para">
        <p>
          We have a strong sense of community with parishioners. People and
          children of all ages here are encouraged to learn about their own
          faith and the role of the church in our community and worldwide. We
          have a strong sense of community with parishioners. People and
          children of all ages here are encouraged to learn about their own
          faith and the role of the church in our community and worldwide.
          Couples who are already recorded on the register will continue to have
          their personal information securely stored and if their relationship
          ends, this will be managed at their This would also apply in a
          situation where a young person was in an accident and his parents were
          caring for him. If he had lost capacity in the accident, he couldn’t
          redo his Will to leave anything to his parents. His parents could
          apply for a court ordered request. Any Victorian couple wishing to
          register their relationship.
        </p>
      </div>
    </div>
  )
}

export default Content2