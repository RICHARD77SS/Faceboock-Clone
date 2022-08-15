import { HrSt } from './styles';

interface PropsHr {
  width?: string;
}
 const Hr = (Props: PropsHr) => {
  return (
    <HrSt {...Props} >
      
    </HrSt>
  )
}
export default Hr;