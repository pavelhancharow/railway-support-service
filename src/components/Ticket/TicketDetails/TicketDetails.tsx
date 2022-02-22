import { FC, useCallback } from 'react';
import { TicketDetailsBox } from './TicketDetailsStyles';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
// eslint-disable-next-line max-len
import { setDetailsToTicket } from 'src/store/reducers/RailwaySlice/actionCreator';
import { TicketDetailsInfo } from './TicketDetailsInfo';

const containerStyle = { width: '400px', height: '400px' };
const center = { lat: 53.893009, lng: 27.567444 };

export const TicketDetails: FC = (): JSX.Element => {
  const { ticket } = useAppSelector((state) => state.railwayReducer);
  const dispatch = useAppDispatch();
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyBuJMyAuPqZATtIAnoPxOpQvgVcp6bzERc',
    language: 'EN',
  });

  const onLoad = useCallback(async function callback(map) {
    const directionsService = new window.google.maps.DirectionsService();
    const directionsDisplay = new window.google.maps.DirectionsRenderer();

    directionsDisplay.setMap(map);

    const request = {
      origin: ticket.from,
      destination: ticket.to,
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC,
    };

    await directionsService.route(request, async (result, status) => {
      if (status === google.maps.DirectionsStatus.OK && result) {
        const { duration, distance } = result.routes[0].legs[0];

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const num = parseInt(distance!.text.replace(/[^\d]/g, ''));
        const price = +(ticket.tariff * num).toFixed(2);

        await dispatch(
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          setDetailsToTicket([duration!.text, distance!.text, price])
        );
        directionsDisplay.setDirections(result);
      } else {
        await dispatch(setDetailsToTicket(['-', '-', NaN]));
        directionsDisplay.setDirections({ routes: [] });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoaded ? (
    <TicketDetailsBox>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        onLoad={onLoad}
      />
      <TicketDetailsInfo />
    </TicketDetailsBox>
  ) : (
    <TicketDetailsBox>Google Map is not available</TicketDetailsBox>
  );
};