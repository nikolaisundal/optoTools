import React from 'react'

export default function Summary(props) {
    const {
        specPrice: {
        frameName, 
        framePrice, 
        lensType, 
        lensPrice, 
        id},
        offerSelect,   
        cheapestId
      } = props;
    return (
        
        <table className="table-auto">
          <thead>
            <tr className="text-left">
              <th className="px-4 py-2">Produkt:</th>
              <th className="px-4 py-2">Pris:</th>
              <th className="px-4 py-2">Rabatt:</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-left">
              <td className="border-2 border-green-800 px-4 py-2">
                {frameName}
              </td>
              <td className="border-2 border-green-800 px-4 py-2">
                {framePrice}
              </td>
              <td className="border-2 border-green-800 px-4 py-2">
                {(offerSelect === "ToForEn" && id === cheapestId) ? `-${framePrice}` : null} 
                {(offerSelect === "60+") ? `-${framePrice*0.25}` : null} 
                {(offerSelect === "GoldenTicket") ? `-${framePrice*0.50}` : null} 
              </td>
            </tr>
            <tr className="text-left">
              <td className="border-2 border-green-800 px-4 py-2">
                {lensType}
              </td>
              <td className="border-2 border-green-800 px-4 py-2">
                {lensPrice}
              </td>
              <td className="border-2 border-green-800 px-4 py-2">
                {(offerSelect === "ToForEn" && id === cheapestId) ? `-${lensPrice}` : null} 
                {(offerSelect === "Komplett") ? "-800" : null}
                {(offerSelect === "60+") ? `-${lensPrice*0.25}` : null}
                {(offerSelect === "GoldenTicket") ? `-${lensPrice*0.50}` : null}   
              </td>
            </tr>
            {console.log(offerSelect)}
          </tbody>
        </table>
      );
    };
