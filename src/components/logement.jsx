import { data } from "../assets/json/data"
import "../styles/logement.css"

export const Logements = () => {
  return (
    <>
      
      {data.map((data, key)=>
      {
        return (
          <div key={data.title} className="box-logement">
              <div>
                 {data.title} 
              </div>
              <div>
                  {data.description}
              </div>
          </div>
          
        )
      }
      )}
     
    </>
  );
};
  

export default Logements