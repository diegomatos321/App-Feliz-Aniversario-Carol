import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

export default function usePageDirection() {
  const [locationKeys, setLocationKeys] = useState([])
  const [pageDirection, setPageDirection] = useState("forward");

  const history = useHistory();
  
  useEffect(() => {
     return history.listen((location) => {
      if (history.action === "PUSH") {
        setLocationKeys([ location.key ])
        location.state = { slideAnimation: "slider-router-from-right"}
        setPageDirection("forward");
      }

      if (history.action === "POP") {
        if (locationKeys[1] === location.key) {
          setLocationKeys(([ _, ...keys ]) => keys)
          location.state = { slideAnimation: "slider-router-from-right"}
          setPageDirection("forward")
        } else {
          setLocationKeys((keys) => [ location.key , ...keys ])
          location.state = { slideAnimation: "slider-router-from-left"}
          setPageDirection("backwards")
        }
      }
    });
  }, [locationKeys]);

  return pageDirection
}