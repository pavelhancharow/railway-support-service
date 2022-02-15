import { FC, useCallback, useState } from 'react';
import { TicketDetailsBox } from 'src/shared/TicketDetails';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { setDuration } from 'src/store/actionCreators/RailwayCreator';

const containerStyle = { width: '400px', height: '400px', marginRight: '30px' };
const center = { lat: 53.893009, lng: 27.567444 };

export const TicketDetails: FC = (): JSX.Element => {
  const { ticket } = useAppSelector((state) => state.railwayReducer);
  const dispatch = useAppDispatch();
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyBuJMyAuPqZATtIAnoPxOpQvgVcp6bzERc',
    language: 'EN',
  });

  const onLoad = useCallback(
    async function callback(map) {
      const directionsService = new window.google.maps.DirectionsService();
      const directionsDisplay = new window.google.maps.DirectionsRenderer();

      directionsDisplay.setMap(map);

      const request = {
        origin: ticket.from,
        destination: ticket.to,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
      };

      await directionsService.route(request, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          const duration = result!.routes[0].legs[0].duration!.text;
          dispatch(setDuration(duration));
          directionsDisplay.setDirections(result);
        } else {
          directionsDisplay.setDirections({ routes: [] });
        }
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ticket]
  );

  return isLoaded ? (
    <TicketDetailsBox>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        onLoad={onLoad}
      />
      <ul>
        <li>Duration: {ticket.duration}</li>
      </ul>
    </TicketDetailsBox>
  ) : (
    <TicketDetailsBox>Google Map is not available</TicketDetailsBox>
  );
};
