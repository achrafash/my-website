import 'firebase/firestore';

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(`New update available ! Reload to get the new version 😉`);

  if (answer === true) {
    window.location.reload();
  }
};
