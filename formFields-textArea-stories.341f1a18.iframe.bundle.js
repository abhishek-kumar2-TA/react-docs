"use strict";(self.webpackChunkstorybook_react=self.webpackChunkstorybook_react||[]).push([[177],{"./src/formFields/textArea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CodeAndAccessibility:()=>CodeAndAccessibility,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_tiger_analytics_react_formFields__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/react/dist/formFields/index.js"),_tiger_analytics_react_grid__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/react/dist/grid/index.js"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Form/TextArea",component:_tiger_analytics_react_formFields__WEBPACK_IMPORTED_MODULE_1__.fs,parameters:{controls:{expanded:!0}},argTypes:{id:{description:"Mandatory - unique id for testing",table:{defaultValue:{summary:""}},control:"text"},label:{description:"Label for the input",table:{defaultValue:{summary:""}},control:"text"},description:{description:"Additional description for the field",table:{defaultValue:{summary:""}},control:"text"},value:{description:"value of the text area field",table:{defaultValue:{summary:""}},control:"text"},placeholder:{description:"Placeholder text",table:{defaultValue:{summary:""}},control:"text"},disabled:{description:"enable or disable the input",table:{defaultValue:{summary:"false"}},control:"boolean"},required:{description:"mark input as required",table:{defaultValue:{summary:"false"}},control:"boolean"},rows:{description:"number of rows to display",table:{defaultValue:{summary:"4"}},control:"number"},minlength:{description:"minimum length for the input",table:{defaultValue:{summary:"0"}},control:"number"},maxlength:{description:"maximum length for the input",table:{defaultValue:{summary:"524288"}},control:"number"},onInput:{description:"Triggered when the input value is modified",table:{category:"Events"},control:!1},focus:{description:"Focuses the text area",table:{category:"Methods"},control:!1}}},description=react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"TextArea is a customizable text area component designed for use in forms and user input fields. It supports dynamic customization of attributes such as label, placeholder, and validation properties (e.g., required, minlength, maxlength). The component allows users to control the number of visible lines with the rows property, making it adaptable for varying content lengths. Additionally, it includes support for descriptions, focus management, and input change handling, ensuring ease of use and flexibility for different types of text input requirements. Whether for comments, messages, or other multiline inputs, ta-text-area is a versatile solution for capturing user input in a structured way."),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"Note :"),"To group multiple input fields, fieldset should be used.",react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset",target:"_blank",rel:"noreferrer"},"Read more about fieldset"))),CodeAndAccessibility=(args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tiger_analytics_react_grid__WEBPACK_IMPORTED_MODULE_2__.E,{showSideMargin:!1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils__WEBPACK_IMPORTED_MODULE_3__.Tx,{importStatement:"import { TextArea } from '@tiger-analytics/react/formFields';"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tiger_analytics_react_grid__WEBPACK_IMPORTED_MODULE_2__.H,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tiger_analytics_react_formFields__WEBPACK_IMPORTED_MODULE_1__.fs,{...args,onInput:e=>(event=>{const inputTarget=event.target,outputElement=document.getElementById("entered-text");outputElement&&(outputElement.innerHTML=inputTarget.value)})(e)}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Entered text: ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{id:"entered-text"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utils__WEBPACK_IMPORTED_MODULE_3__.ur,{description}))).bind({});CodeAndAccessibility.args={id:"test-input",label:"Label",disabled:!1,description:"Some description",value:"",placeholder:"Enter text",required:!1,minlength:0,maxlength:524288,rows:4};const __namedExportsOrder=["CodeAndAccessibility"];CodeAndAccessibility.parameters={...CodeAndAccessibility.parameters,docs:{...CodeAndAccessibility.parameters?.docs,source:{originalSource:"args => {\n  const inputChangeHandler = (event: Event) => {\n    const inputTarget = event.target as HTMLInputElement;\n    const outputElement = document.getElementById('entered-text');\n    if (outputElement) outputElement.innerHTML = inputTarget.value;\n  };\n  return <GridContainer showSideMargin={false}>\n      <ImportBlock importStatement={`import { TextArea } from '@tiger-analytics/react/formFields';`} />\n      <GridColumn>\n        <TextArea {...args} onInput={(e: Event) => inputChangeHandler(e)} />\n        <p>\n          Entered text: <span id=\"entered-text\"></span>\n        </p>\n      </GridColumn>\n      <DescriptionBlock description={description} />\n    </GridContainer>;\n}",...CodeAndAccessibility.parameters?.docs?.source}}}},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bO:()=>CommentBlock,ur:()=>DescriptionBlock,Tx:()=>ImportBlock});var grid=__webpack_require__("../../packages/react/dist/grid/index.js"),react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const ImportBlockDiv=styled_components_browser_esm.Ay.div`
  padding-bottom: 10px;
  border-bottom: 1px solid var(--colors-primary-base);
  margin-bottom: 10px;
  width: 100%;
`,ImportBlock=({importStatement})=>react.createElement(grid.H,null,react.createElement(ImportBlockDiv,null,importStatement));ImportBlock.__docgenInfo={description:"",methods:[],displayName:"ImportBlock",props:{importStatement:{required:!0,tsType:{name:"ReactNode"},description:""}}};const DescriptionBeforeSpacer=(0,styled_components_browser_esm.Ay)(grid.H)`
  border-bottom: 1px solid var(--colors-primary-base);
  font-weight: bold;
`,DescriptionContent=(0,styled_components_browser_esm.Ay)(grid.H)`
  font-size: 14px;
`,DescriptionBlock=({description})=>react.createElement(grid.E,{showSideMargin:!1},react.createElement(grid.H,null,react.createElement(DescriptionBeforeSpacer,null,"       ")),react.createElement(DescriptionContent,null,description));DescriptionBlock.__docgenInfo={description:"",methods:[],displayName:"DescriptionBlock",props:{description:{required:!0,tsType:{name:"ReactNode"},description:""}}};const CommentContainer=styled_components_browser_esm.Ay.div`
  width: 100%;
  font-size: 12px;
  color: var(--colors-success-base);
`,CommentBlock=({children})=>react.createElement(CommentContainer,null,children);CommentBlock.__docgenInfo={description:"",methods:[],displayName:"CommentBlock",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}}},"../../packages/react/dist/formFields/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Sc:()=>Checkbox,pd:()=>Input,fs:()=>TextArea,lM:()=>Toggle});var react=__webpack_require__("../../node_modules/react/index.js"),_lit_react=__webpack_require__("../../node_modules/@lit/react/index.js"),dist=__webpack_require__("../../packages/ui/dist/index.js");(0,_lit_react.a)({tagName:"ta-field-wrapper",elementClass:dist.VX,react});var formFields=__webpack_require__("../../packages/ui/dist/formFields/index.js");const TextArea=(0,_lit_react.a)({tagName:"ta-text-area",elementClass:formFields.A5,react,events:{onInput:"input"}}),Input=(0,_lit_react.a)({tagName:"ta-input",elementClass:formFields.xZ,react,events:{onInput:"input"}}),Checkbox=(0,_lit_react.a)({tagName:"ta-checkbox",elementClass:formFields.$j,react,events:{onChange:"change"}}),Toggle=(0,_lit_react.a)({tagName:"ta-toggle",elementClass:formFields.iL,react,events:{onChange:"change"}})},"../../packages/react/dist/grid/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>GridColumn,E:()=>GridContainer});var react=__webpack_require__("../../node_modules/react/index.js"),_lit_react=__webpack_require__("../../node_modules/@lit/react/index.js"),grid=__webpack_require__("../../packages/ui/dist/grid/index.js");const GridColumn=(0,_lit_react.a)({tagName:"ta-grid-column",elementClass:grid.d,react}),GridContainer=(0,_lit_react.a)({tagName:"ta-grid-container",elementClass:grid.O,react})}}]);
//# sourceMappingURL=formFields-textArea-stories.341f1a18.iframe.bundle.js.map