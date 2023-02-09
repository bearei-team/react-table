import { pickHTMLAttributes } from '@bearei/react-util';
import '@testing-library/jest-dom';
import React from 'react';
import Table from '../../src/components/Table';
import { render } from '../utils/test-utils';

describe('test/components/Table.test.ts', () => {
  test('It should be a render table', async () => {
    const { getByDataCy } = render(
      <Table
        renderMain={({ ...props }) => (
          <div {...pickHTMLAttributes(props)} data-cy="table">
            "table"
          </div>
        )}
        renderContainer={({ id, children }) => (
          <div data-cy="container" data-id={id} tabIndex={1}>
            {children}
          </div>
        )}
      />,
    );

    expect(getByDataCy('container')).toHaveAttribute('tabIndex');
    expect(getByDataCy('table')).toHaveTextContent('table');
  });
});
