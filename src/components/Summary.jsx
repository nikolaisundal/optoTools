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
        cheapestId,
        synstest
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
          {synstest
              ?
            <tr className="text-left">
              <td className="border-2 border-green-800 px-4 py-2">
                Synstest
              </td>
              <td className="border-2 border-green-800 px-4 py-2">
                685 kr
              </td>
              <td className="border-2 border-green-800 px-4 py-2">
              </td>
            </tr>
              : null}  
            <tr className="text-left">
              <td className="border-2 border-green-800 px-4 py-2">
                {(frameName === "" && framePrice <=1395)
                  ? "Innfatning: specsavers"
                  :(frameName === "" && framePrice >1395)
                  ? "Innfatning: designer"
                  : `Innfatning: ${frameName}`}
              </td>
              <td className="border-2 border-green-800 px-4 py-2">
                {(offerSelect === "NAV" && framePrice > 295) 
                  ? `${framePrice-295} kr` 
                  : (offerSelect !== "NAV")
                  ? `${framePrice} kr` 
                  : "0 kr"}
              </td>
              <td className="border-2 border-green-800 px-4 py-2">
                {(offerSelect === "ToForEnUV" && id === cheapestId)
                  ? `-${framePrice} kr` 
                  : null} 
                {(offerSelect === "ToForEn" && id === cheapestId) 
                  ? `-${framePrice} kr` 
                  : null} 
                {(offerSelect === "60+") 
                  ? `-${framePrice*0.25} kr` 
                  : null} 
                {(offerSelect === "GoldenTicket") 
                  ? `-${framePrice*0.50} kr` 
                  : null} 

              </td>
            </tr>
            {(offerSelect === "NAV")
              ?
            <tr className="text-left">
              <td className="border-2 border-green-800 px-4 py-2">
                Brilletilpasning
              </td>
              <td className="border-2 border-green-800 px-4 py-2">
                {framePrice >= 295 ? `${295} kr` : `${0} kr` }  
              </td>
              <td className="border-2 border-green-800 px-4 py-2">
              </td>
            </tr>
              : null}
            <tr className="text-left">
              <td className="border-2 border-green-800 px-4 py-2">
                {`Glass: ${lensType}`}
              </td>
              <td className="border-2 border-green-800 px-4 py-2">
                {`${lensPrice} kr`}
              </td>
              <td className="border-2 border-green-800 px-4 py-2">
                {(offerSelect === "ToForEnUV" && id === cheapestId) 
                  ? `-${lensPrice} kr` 
                  : null} 
                {(offerSelect === "ToForEnUV" && id !== cheapestId 
                  && lensType.includes("m/farge")) 
                  ? `-400 kr` 
                  : null} 
                {(offerSelect === "ToForEn" && id === cheapestId) 
                  ? `-${lensPrice} kr` 
                  : null} 
                {(offerSelect === "Komplett") 
                  ? "-800 kr" 
                  : null}
                {(offerSelect === "60+") 
                  ? `-${lensPrice*0.25} kr` 
                  : null}
                {(offerSelect === "GoldenTicket") 
                  ? `-${lensPrice*0.50} kr` 
                  : null}   
              </td>
            </tr>
          </tbody>
        </table>
      );
    };
