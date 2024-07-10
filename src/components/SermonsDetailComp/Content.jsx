import React from "react";
import "./Content.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";

const Content = () => {
  return (
    <div>
      <div className="info8">
        <ul>
          <li>
            <span>Sermon By:</span>
            <a> Jackson West, Jeffery Edwards</a>
          </li>
          <li>
            <span>Categories:</span>
            God, Holiday
          </li>
          <li>
            <label><FaRegClock /></label>
             Nov 19 2019
          </li>
        </ul>
      </div>
      <div className="info7">
        <p>
          Jesus is holy, loving, and worthy of all our worship and devotion. You
          will feel heaven in our Zegen Church. Join us and Praise the Lord
          Jesus. Mauris id enim id purus ornare tincidunt. Aenean vel consequat
          risus. Proin viverra nisi at nisl imperdiet auctor. Donec ornare, est
          sed tincidunt placerat, sem mi suscipit mi, at varius enim sem at sem.
          Fusce tempus ex nibh, eget vulputate ligula ornare eget. Nunc
          facilisis erat at ligula blandit tempor. Pellentesque elit arcu,
          finibus ut rutrum vel, dapibus eget nisi. Suspendisse at venenatis
          arcu, et accumsan ante.congue ut faucibus et, mattis in ante.
        </p>
        <p>
          God comes to us in free and undeserved favor in the person of Jesus
          Christ who lived, died, and rose for us that we might belong to God
          and serve Christ in the world. Following Jesus, Presbyterians are
          engaged in the world… Presbyterians affirm that God comes to us with…
        </p>
      </div>
    </div>
  );
};

export default Content;
