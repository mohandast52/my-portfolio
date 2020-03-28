import NProgress from 'nprogress';

export const start = () => {
  NProgress.configure({ showSpinner: false });
  NProgress.start();
  NProgress.set(0.5);
};

export const stop = () => {
  NProgress.done();
};
