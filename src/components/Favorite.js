import React from "react";
import Img from "../images/p2.jpg";
const Favorite = () => {
  return (
    <section className="section">
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Snapshot</th>
              <th>description</th>
              <th>operation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pizza</td>
              <td>
                <img src={Img} className="favorite-meal-img" alt="" />
              </td>
              <td>Lorem ipsum dolor, sit amet consectetur adipisicing.</td>
              <td>
                <button>Remove</button>
              </td>
            </tr>
          </tbody>{" "}
          <tbody>
            <tr>
              <td>Pizza</td>
              <td>
                <img src={Img} className="favorite-meal-img" alt="" />
              </td>
              <td>Lorem ipsum dolor, sit amet consectetur adipisicing.</td>
              <td>
                <button>Remove</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Favorite;
