const DEFAULT_EXPORT = ExportSettings = {
  format: 'PNG',
  constraint: {
    type: 'HEIGHT',
    value: 150
  }
}

async function saveAsWebp(node, settings) {
  if (node.type == 'FRAME') {
    let png = await node.exportAsync(settings)
    figma.ui.postMessage(png)
  }
}

Promise.all(figma.currentPage.selection.map(selected => saveAsWebp(selected, DEFAULT_EXPORT)))
figma.showUI(__html__)