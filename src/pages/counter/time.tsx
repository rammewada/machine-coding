 "use no memo";
import {memo} from "react";
export default memo(function CurrentTime( ) {
    const currentTime = Date.now();
  return (
    <div>
        
    <div>Time UTC : {new Date(currentTime).toJSON()}</div>
    </div>
  )

}
)