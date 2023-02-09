import {
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
  Ref,
  useId,
} from 'react';
import type { ViewProps } from 'react-native';

export interface Column<T = Record<string, unknown>> {
  title?: ReactNode;
  dataIndex?: keyof T | string;
  key?: keyof T | string;
  width?: number;
  fixed?: 'left' | 'right';
  render?: (value: string, record: T) => ReactNode;
}

/**
 * Base table props
 */
export interface BaseTableProps<T>
  extends Omit<DetailedHTMLProps<HTMLAttributes<T>, T> & ViewProps, ''> {
  /**
   * Custom ref
   */
  ref?: Ref<T>;

  /**
   * Table column
   */
  columns?: Column[];

  /**
   * Whether to set the table border
   */
  border?: boolean;

  /**
   * Sets the load state of the table border
   */
  loading?: boolean;

  /**
   * Table data source
   */
  dataSource?: Record<string, unknown>[];
}

/**
 * Table props
 */
export interface TableProps<T> extends BaseTableProps<T> {
  /**
   * Render the table main
   */
  renderMain: (props: TableMainProps<T>) => ReactNode;

  /**
   * Render the table container
   */
  renderContainer: (props: TableContainerProps<T>) => ReactNode;
}

/**
 * Table children props
 */
export interface TableChildrenProps<T> extends Omit<BaseTableProps<T>, 'ref'> {
  /**
   * Component unique ID
   */
  id: string;
}

export type TableMainProps<T> = TableChildrenProps<T> &
  Pick<BaseTableProps<T>, 'ref'>;

export type TableContainerProps<T> = TableChildrenProps<T>;

const Table = <T extends HTMLElement = HTMLElement>({
  ref,
  renderMain,
  renderContainer,
  ...args
}: TableProps<T>) => {
  const id = useId();
  const childrenProps = { ...args, id };
  const main = renderMain({ ...childrenProps, ref });
  const container = renderContainer({ ...childrenProps, children: main });

  return <>{container}</>;
};

export default Table;
