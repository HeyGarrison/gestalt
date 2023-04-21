// @flow strict
import { useState, type Node } from 'react';
import { Flex, SegmentedControl } from 'gestalt';
import { DatePicker } from 'gestalt-datepicker';

export default function Example(): Node {
  const mapOptions = { '0': ['month'], '1': ['year'], '2': ['year', 'month'] };
  const items = ['Month', 'Year', 'Month & Year'];
  const [itemIndex, setItemIndex] = useState(0);

  return (
    <Flex direction="column" gap={4} width="100%">
      <SegmentedControl
        items={items}
        selectedItemIndex={itemIndex}
        onChange={({ activeIndex }) => setItemIndex(activeIndex)}
      />
      <DatePicker
        id="selectLists"
        label="Alberto's birth date"
        onChange={() => {}}
        value={new Date(1985, 6, 4)}
        selectLists={mapOptions[itemIndex.toString()]}
      />
    </Flex>
  );
}