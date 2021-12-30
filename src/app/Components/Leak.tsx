import React, { FC } from 'react';
import { useSetRecoilState, atom, useRecoilValue } from 'recoil';

export const state = atom({
  key: 'test',
  default: [],
});

export const Subscriber: FC = (): JSX.Element => {
  const setTest = useSetRecoilState<any>(state);

  React.useEffect(() => {
    const u = (old: any) => {
      const item = Math.random();

      if (old.length >= 5000) {
        return [item, ...old.slice(0, -1)];
      } else {
        return [item, ...old];
      }
    };

    const t = () => setTest(u);
    setInterval(t, 10);
  }, []);

  return null as any;
};

export const Test = () => {
  const test = useRecoilValue(state);
  return <div>{test.length}</div>;
};
