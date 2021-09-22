// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/zhangjianchao/Desktop/react/myapp/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('/Users/zhangjianchao/Desktop/react/myapp/src/.umi/plugin-layout/Layout.tsx').default,
    "routes": [
      {
        "path": "/",
        "component": require('@/pages/index').default,
        "name": "home",
        "exact": true
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
