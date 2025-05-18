import React from 'react';
import useDateCountdown from '@/hooks/useDateCountdown';
import CountItem from './CountItem';
//import ButtonLive from '../WeddingSection/ButtonLive';
import { styMargin } from './styles';

function CountContainer() {
  const { days, hours, minutes, seconds, timeHasRunOut, isEventOver } = useDateCountdown();
  const finalText = isEventOver ? 'SUDAH' : 'SEDANG';

  // if (timeHasRunOut)
  //   return (
  //     <>
  //       <div className="row">
  //         <div className="col-md-12" style={{ fontSize: '20px', marginTop: '15px' }}>
  //           {`HAPPILY MARRIED!`}
  //         </div>
  //       </div>
  //     </>
  //   );

  return (
    <div className="col-md-12" css={styMargin('0 0 16px 0')}>
      <CountItem text="Dana" number={days} />
      <CountItem text="Sati" number={hours} />
      <CountItem text="Minuta" number={minutes} />
      <CountItem text="Sekundi" number={seconds} />
    </div>
  );
}

export default CountContainer;
