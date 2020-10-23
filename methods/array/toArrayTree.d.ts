import { XEUtilsMethods } from '../xe-utils'

import { OrderByFieldConfs } from './orderBy'

export interface ToArrayTreeOptions {
  strict?: boolean;
  key?: string;
  parentKey?: string;
  children?: string;
  sortKey?: OrderByFieldConfs;
  data?: string;
  /**
   * 已废弃，被 sortKey: { ...,order: 'desc' } 替换
   * @deprecated
   */
  reverse?: boolean;
}

/**
 * 将一个带层级的数据列表转成树结构
 * @param {Array} array 数组
 * @param {Object} options {strict: false, parentKey: 'parentId', key: 'id', children: 'children', data: 'data'}
 */
export declare function toArrayTree(array: any[], options?: ToArrayTreeOptions): any[];

declare module '../xe-utils' {
  interface XEUtilsMethods {
    /**
     * 将一个带层级的数据列表转成树结构
     * @param {Array} array 数组
     * @param {Object} options {strict: false, parentKey: 'parentId', key: 'id', children: 'children', data: 'data'}
     */
    toArrayTree: typeof toArrayTree;
  }
}

export default toArrayTree
