import './AppointmentsPage.css';
import NewAppointmentForm from '../../components/NewAppointmentForm/NewAppointmentForm';
import AppointmentsList from '../../components/AppointmentsList/AppointmentsList';

function AppointmentsPage() {
  return (
    <div className="appointments-wrapper">
      <NewAppointmentForm />
      <AppointmentsList />
    </div>
  );
}

export default AppointmentsPage;
