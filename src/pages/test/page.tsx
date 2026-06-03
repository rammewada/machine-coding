 
import useTestContext from '../../context/testContext'

export default function Test() {

    const {name} = useTestContext();

  return (
    <div>{name} </div>
  )
}
