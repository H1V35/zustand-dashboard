import React from 'react';
import { tesloApi } from '@/api/tesloApi';

export function RequestInfo() {
  const [info, setInfo] = React.useState<unknown>();

  React.useEffect(() => {
    tesloApi
      .get('/auth/private')
      .then((res) => setInfo(res.data))
      .catch(() => setInfo('Error'));
  }, []);

  return (
    <>
      <h2>Información</h2>
      <pre className="text-wrap break-words">{JSON.stringify(info, null, 2)}</pre>
    </>
  );
}
