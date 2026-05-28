// Mock for Rete.js packages during SSR — these depend on DOM APIs
export const NodeEditor = class {}
export const ClassicPreset = {
  Node: class {},
  Input: class {},
  Output: class {},
  Connection: class {},
  Socket: class {},
  InputControl: class {},
}
export const GetSchemes = {}
export const AreaPlugin = class {}
export const AreaExtensions = {
  zoomAt: () => {},
  selectableNodes: () => {},
  selector: () => {},
  accumulateOnCtrl: () => {},
  simpleNodesOrder: () => {},
}
export const ConnectionPlugin = class {}
export const Presets = {
  classic: { setup: () => {} },
}
export const ReactPlugin = class {}
export const useRete = () => [() => {}, null]
export const ReactArea2D = {}
export default {}
