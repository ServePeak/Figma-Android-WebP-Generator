const DEFAULT_EXPORT: ExportSettings = {
  format: 'PNG',
  constraint: {
    type: 'HEIGHT',
    value: 150
  }
}

function exportSize(size) {
  return {
    format: 'PNG',
    constraint: {
      type: 'SCALE',
      value: size
    }
  }
}

async function saveAsWebp(node) {
  if (node.type == 'FRAME') {
    const pngArray = []
    pngArray.push(await node.exportAsync(DEFAULT_EXPORT))
    pngArray.push(await node.exportAsync(exportSize(1)))
    pngArray.push(await node.exportAsync(exportSize(1.5)))
    pngArray.push(await node.exportAsync(exportSize(2)))
    pngArray.push(await node.exportAsync(exportSize(3)))
    pngArray.push(await node.exportAsync(exportSize(4)))

    figma.ui.postMessage(pngArray)
  }
}

Promise.all(figma.currentPage.selection.map(selected => saveAsWebp(selected)))
figma.showUI(__html__)