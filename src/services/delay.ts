import { IRailway, IStation } from 'src/models/IRailway';
import { ITicket } from 'src/models/ITicket';

interface IResult {
  (): Promise<IRailway | IStation[]>;
}

export async function delay(
  result?: IResult | ITicket
): Promise<IRailway | IStation[] | ITicket | void> {
  return await new Promise((resolve) => {
    setTimeout(() => {
      if (typeof result === 'function') {
        resolve(result());
      } else {
        result ? resolve(result) : resolve();
      }
    }, 1000);
  });
}
