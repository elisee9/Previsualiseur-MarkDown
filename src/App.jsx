import Markdown from "marked-react";
import { useCallback, useEffect, useRef, useState } from "react";
import "./index.css";

export default function App() {
   // Variables
   const input = useRef(null);

   // State
   const [prev, setPrev] = useState("");

   // Cycle
   useEffect(() => {
      if (input.current) {
         input.current.focus();
         updatePrevisualisation();
      }
   }, []);

   // function
   const updatePrevisualisation = () => {
      setPrev(input.current.value);
   };

   return (
      <div className="App">
         <div className="elements">
            <div className="element">
               <textarea
                  rows="30"
                  ref={input}
                  onChange={updatePrevisualisation}
                  defaultValue="# `Prévisualisateur - Believemy`&#13;### Oh ! De la magie !&#13;En réalité, pas vraiment : ceci s'appelle du markdown, et ce projet réalisé entièrement avec React permet de le transformer en *HTML* !&#13;&#13;### Cas d'utilisation&#13;* *italique*&#13;* **gras**&#13;* `monospace`&#13;* ~~barré~~&#13;* # h1&#13;* ## h2&#13;* ### h3&#13;* #### etc&#13;[Believemy](https://believemy.com)"
               ></textarea>
            </div>

            <div className="element">
               <div>
                  <Markdown>{prev}</Markdown>
               </div>
            </div>
         </div>
      </div>
   );
}
