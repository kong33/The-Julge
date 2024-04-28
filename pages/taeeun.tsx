import EmployerNotice from '@/components/Employer/EmployerNotice/EmployerNotice';
import AsyncBoundary from '@/components/common/AsyncBoundary/AsyncBoundary';

function TaeEun() {
  return (
    <div>
      <AsyncBoundary>
        <EmployerNotice />
      </AsyncBoundary>
    </div>
  );
}

export default TaeEun;
