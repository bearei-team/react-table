# react-table

Base table components that support React and React native

## Installation

> yarn add @bearei/react-table --save

## Parameters

| Name | Type | Required | Description |
| :-- | --: | --: | :-- |
| columns | `Column[]` | ✘ | Table column |
| border | `boolean` | ✘ | Whether to set the table border |
| loading | `boolean` | ✘ | Sets the load state of the table border |
| dataSource | `Record<string, unknown>[]` | ✘ | Table data source |
| renderMain | `(props: TableMainProps) => ReactNode` | ✔ | Render the table main |
| renderContainer | `(props: TableContainerProps) => ReactNode` | ✔ | Render the table container |

## Use

```typescript
import React from 'React';
import ReactDOM from 'react-dom';
import Table from '@bearei/react-table';

const table = (
  <Table
    renderMain={({ ...props }) => <div {...props}>"table"</div>}
    renderContainer={({ id, children }) => <div data-id={id}>{children}</div>}
  />
);

ReactDOM.render(table, container);
```
