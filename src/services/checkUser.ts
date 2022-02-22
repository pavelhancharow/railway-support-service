import { IRegistrationForm, IUserForm } from 'src/models/IForms';
import { ITicket } from 'src/models/ITicket';

export function checkUser(data: IRegistrationForm, ticket: ITicket) {
  const { login, email } = data;
  const isUser = localStorage.getItem(email);

  if (!isUser) {
    const user: IUserForm = { login, email, trips: [ticket] };

    localStorage.setItem(email, JSON.stringify(user));

    return user;
  } else {
    const user: IUserForm = JSON.parse(isUser);
    user.trips.push(ticket);
    localStorage.setItem(email, JSON.stringify(user));

    return user;
  }
}
