/*! For license information please see theme-DefaultThemeConfig-stories.a25368fc.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkstorybook_react=self.webpackChunkstorybook_react||[]).push([[283],{"../../node_modules/@lit/react/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>o});const e=new Set(["children","localName","ref","style","className"]),n=new WeakMap,t=(e,t,o,l,a)=>{const s=a?.[t];void 0===s?(e[t]=o,null==o&&t in HTMLElement.prototype&&e.removeAttribute(t)):o!==l&&((e,t,o)=>{let l=n.get(e);void 0===l&&n.set(e,l=new Map);let a=l.get(t);void 0!==o?void 0===a?(l.set(t,a={handleEvent:o}),e.addEventListener(t,a)):a.handleEvent=o:void 0!==a&&(l.delete(t),e.removeEventListener(t,a))})(e,s,o)},o=({react:n,tagName:o,elementClass:l,events:a,displayName:s})=>{const c=new Set(Object.keys(a??{})),r=n.forwardRef(((s,r)=>{const i=n.useRef(new Map),d=n.useRef(null),f={},u={};for(const[n,t]of Object.entries(s))e.has(n)?f["className"===n?"class":n]=t:c.has(n)||n in l.prototype?u[n]=t:f[n]=t;return n.useLayoutEffect((()=>{if(null===d.current)return;const e=new Map;for(const n in u)t(d.current,n,s[n],i.current.get(n),a),i.current.delete(n),e.set(n,s[n]);for(const[e,n]of i.current)t(d.current,e,void 0,n,a);i.current=e})),n.useLayoutEffect((()=>{d.current?.removeAttribute("defer-hydration")}),[]),f.suppressHydrationWarning=!0,n.createElement(o,{...f,ref:n.useCallback((e=>{d.current=e,"function"==typeof r?r(e):null!==r&&(r.current=e)}),[r])})}));return r.displayName=s??l.name,r}},"./src/theme/DefaultThemeConfig.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CodeAndAccessibility:()=>CodeAndAccessibility,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_tiger_analytics_react_grid__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/react/dist/grid/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Theme/Default theme config",tags:["autodocs","!dev"]},CodeAndAccessibility=(()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tiger_analytics_react_grid__WEBPACK_IMPORTED_MODULE_1__.E,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tiger_analytics_react_grid__WEBPACK_IMPORTED_MODULE_1__.H,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre",{style:{fontSize:"16px"}},"{\n            global: {\n                genericFontFamily: 'sans-serif, Arial',\n                specificFontFamily: \"'Trebuchet MS', serif\",\n                componentRadius: '5px',\n                fontSize: {\n                smallScreen: '16px',\n                mediumScreen: '20px',\n                largeScreen: '20px',\n                },\n            },\n            colors: {\n                primary: {\n                base: '#312E2D',\n                hover: '#565352',\n                active: '#212121',\n                },\n                secondary: {\n                base: '#F7901D',\n                hover: '#FFBC4D',\n                active: '#FD8600',\n                },\n                tertiary: {\n                base: '#CEE6E1',\n                hover: '#A4D1C0',\n                active: '#8AB8A0',\n                },\n                background: {\n                base: '#fff',\n                hover: '#f1f1f1',\n                active: '#e0e0e0',\n                },\n                secondaryBackground: {\n                base: '#F4F4F4',\n                hover: '#E5E5E5',\n                active: '#D6D6D6',\n                },\n                textPrimary: {\n                base: '#312E2D',\n                hover: '#4A4746',\n                active: '#1D1B1A',\n                },\n                textSecondary: {\n                base: '#F4F4F4',\n                hover: '#FFFFFF',\n                active: '#E0E0E0',\n                },\n                error: {\n                base: '#d32f2f',\n                hover: '#c62828',\n                active: '#b71c1c',\n                },\n                warning: {\n                base: '#ffa000',\n                hover: '#FFB84D',\n                active: '#FF8C00',\n                },\n                success: {\n                base: '#388e3c',\n                hover: '#4CAF50',\n                active: '#2C6B2A',\n                },\n                info: {\n                base: '#1976d2',\n                hover: '#1E88E5',\n                active: '#1565C0',\n                },\n            },\n            grid: {\n                small: {\n                margin: '16px',\n                gutter: '16px',\n                columns: 6,\n                },\n                medium: {\n                margin: '24px',\n                gutter: '20px',\n                columns: 12,\n                },\n                large: {\n                margin: '32px',\n                gutter: '24px',\n                columns: 12,\n                },\n            },\n        }")))).bind({});CodeAndAccessibility.args={};const __namedExportsOrder=["CodeAndAccessibility"];CodeAndAccessibility.parameters={...CodeAndAccessibility.parameters,docs:{...CodeAndAccessibility.parameters?.docs,source:{originalSource:"() => <GridContainer>\n    <GridColumn>\n      <pre style={{\n      fontSize: '16px'\n    }}>\n        {`{\n            global: {\n                genericFontFamily: 'sans-serif, Arial',\n                specificFontFamily: \"'Trebuchet MS', serif\",\n                componentRadius: '5px',\n                fontSize: {\n                smallScreen: '16px',\n                mediumScreen: '20px',\n                largeScreen: '20px',\n                },\n            },\n            colors: {\n                primary: {\n                base: '#312E2D',\n                hover: '#565352',\n                active: '#212121',\n                },\n                secondary: {\n                base: '#F7901D',\n                hover: '#FFBC4D',\n                active: '#FD8600',\n                },\n                tertiary: {\n                base: '#CEE6E1',\n                hover: '#A4D1C0',\n                active: '#8AB8A0',\n                },\n                background: {\n                base: '#fff',\n                hover: '#f1f1f1',\n                active: '#e0e0e0',\n                },\n                secondaryBackground: {\n                base: '#F4F4F4',\n                hover: '#E5E5E5',\n                active: '#D6D6D6',\n                },\n                textPrimary: {\n                base: '#312E2D',\n                hover: '#4A4746',\n                active: '#1D1B1A',\n                },\n                textSecondary: {\n                base: '#F4F4F4',\n                hover: '#FFFFFF',\n                active: '#E0E0E0',\n                },\n                error: {\n                base: '#d32f2f',\n                hover: '#c62828',\n                active: '#b71c1c',\n                },\n                warning: {\n                base: '#ffa000',\n                hover: '#FFB84D',\n                active: '#FF8C00',\n                },\n                success: {\n                base: '#388e3c',\n                hover: '#4CAF50',\n                active: '#2C6B2A',\n                },\n                info: {\n                base: '#1976d2',\n                hover: '#1E88E5',\n                active: '#1565C0',\n                },\n            },\n            grid: {\n                small: {\n                margin: '16px',\n                gutter: '16px',\n                columns: 6,\n                },\n                medium: {\n                margin: '24px',\n                gutter: '20px',\n                columns: 12,\n                },\n                large: {\n                margin: '32px',\n                gutter: '24px',\n                columns: 12,\n                },\n            },\n        }`}\n      </pre>\n    </GridColumn>\n  </GridContainer>",...CodeAndAccessibility.parameters?.docs?.source}}}},"../../packages/react/dist/grid/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>GridColumn,E:()=>GridContainer});var react=__webpack_require__("../../node_modules/react/index.js"),_lit_react=__webpack_require__("../../node_modules/@lit/react/index.js"),grid=__webpack_require__("../../packages/ui/dist/grid/index.js");const GridColumn=(0,_lit_react.a)({tagName:"ta-grid-column",elementClass:grid.d,react}),GridContainer=(0,_lit_react.a)({tagName:"ta-grid-container",elementClass:grid.O,react})}}]);