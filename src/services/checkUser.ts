import { IRegistration, IUser } from 'src/models/IForms';
import { ITicket } from 'src/models/ITicket';

export function checkUser(data: IRegistration, ticket: ITicket) {
  const { login, email } = data;
  const isUser = localStorage.getItem(email);

  if (!isUser) {
    const user: IUser = { login, email, trips: [ticket] };

    localStorage.setItem(email, JSON.stringify(user));

    return user;
  } else {
    const user: IUser = JSON.parse(isUser);
    user.trips.push(ticket);
    localStorage.setItem(email, JSON.stringify(user));

    return user;
  }
}
