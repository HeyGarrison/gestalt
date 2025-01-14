// @flow strict
import { create } from 'react-test-renderer';
import Collection from './Collection';

test('Collection with default viewport', () => {
  const tree = create(
    <Collection
      layout={[
        { top: 0, left: 0, width: 100, height: 100 },
        { top: 100, left: 100, width: 100, height: 100 },
      ]}
      renderItem={({ idx }) => <div>{idx}</div>}
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Collection with limited viewport', () => {
  const tree = create(
    <Collection
      layout={[
        { top: 0, left: 0, width: 100, height: 100 },
        { top: 100, left: 100, width: 100, height: 100 },
      ]}
      renderItem={({ idx }) => <div>{idx}</div>}
      viewportTop={100}
      viewportLeft={100}
      viewportWidth={50}
      viewportHeight={50}
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Collection with limited viewport and a few items', () => {
  const tree = create(
    <Collection
      layout={[
        { top: 0, left: 0, width: 100, height: 100 },
        { top: 0, left: 100, width: 100, height: 100 },
        { top: 100, left: 0, width: 100, height: 100 },
        { top: 100, left: 100, width: 100, height: 100 },
      ]}
      renderItem={({ idx }) => <div>{idx}</div>}
      viewportTop={50}
      viewportLeft={50}
      viewportWidth={100}
      viewportHeight={100}
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
