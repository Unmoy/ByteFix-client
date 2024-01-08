import React from "react";

const ServiceListDetails = ({ services }) => {
  return (
    <div>
      <table className="table">
        <thead className="thead-primary">
          <tr>
            <th>Sr No</th>
            <th>Name</th>
            <th>Price</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {services.map((item, index) => (
            <tr key={index}>
              <th scope="row" className="text-center scope">
                {index + 1}
              </th>
              <td>{item.servicetype.name}</td>
              <td>{item.servicetype.price}</td>
              <td>{item.process}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceListDetails;
